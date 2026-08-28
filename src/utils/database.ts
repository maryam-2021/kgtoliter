import { SUBSTANCE_DATABASE, featuredSubstances } from '../data/substances';

export interface SubstanceRecord {
  id: string;
  name: string;
  density: number;
  category: string;
  icon?: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string;
  temperature?: number;
  notes?: string;
  source?: string;
}

export function getAllSubstances(): SubstanceRecord[] {
  const featuredMap = new Map(featuredSubstances.map((item) => [item.id, item]));

  return SUBSTANCE_DATABASE.map((item) => {
    const featured = featuredMap.get(item.id);
    return {
      id: item.id,
      name: item.name,
      density: item.density,
      category: item.category,
      icon: featured?.icon || '⚗️',
      description:
        featured?.description ||
        `${item.name} reference conversion. Density: ${item.density.toFixed(3)} kg/L at ${item.temperature}°C.`,
      seoTitle: featured?.seoTitle || `${item.name} Kilograms to Litres Conversion`,
      seoDescription:
        featured?.seoDescription ||
        `Convert ${item.name} from kg to litres instantly. 1 kg ${item.name} = ${(1 / item.density).toFixed(3)} litres at ${item.temperature}°C.`,
      keywords: featured?.keywords || `${item.name.toLowerCase()} kg to litres, convert ${item.name.toLowerCase()} kg to litres, ${item.name.toLowerCase()} density`,
      temperature: item.temperature,
      notes: item.notes,
      source: item.source,
    };
  });
}

export function getSubstanceById(id: string): SubstanceRecord | undefined {
  const all = getAllSubstances();
  return all.find((s) => s.id === id);
}
