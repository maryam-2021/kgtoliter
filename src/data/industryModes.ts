export interface IndustryMode {
  id: 'cooking' | 'fuel' | 'chemical' | 'construction' | 'automotive' | 'agriculture';
  name: string;
  icon: string;
  badge: string;
  tagline: string;
  description: string;
  primaryCategories: string[];
  defaultMassUnit: string;
  defaultVolumeUnit: string;
  defaultDensityUnit: string;
  referenceTemp: string;
  popularSubstanceKeys: string[];
  sampleUseCases: string[];
}

export const industryModes: IndustryMode[] = [
  {
    id: 'cooking',
    name: 'Cooking & Culinary',
    icon: '🍳',
    badge: 'Culinary Mode',
    tagline: 'Precision conversions for bakeries, food processors, and commercial kitchens',
    description:
      'Convert between mass and volume for flours, cooking oils, dairy, sugars, syrups, and culinary liquids with moisture and aerated bulk density adjustments.',
    primaryCategories: ['cooking', 'baking-ingredients', 'beverages', 'dairy'],
    defaultMassUnit: 'g',
    defaultVolumeUnit: 'mL',
    defaultDensityUnit: 'kg/L',
    referenceTemp: '20°C (68°F)',
    popularSubstanceKeys: [
      'water-pure',
      'milk-beverage',
      'vegetable-oil',
      'flour-all-purpose',
      'sugar-granulated',
      'honey',
      'butter',
      'olive-oil',
    ],
    sampleUseCases: [
      'Commercial bakery batch ingredient scaling',
      'Food packaging nutritional volume declaration',
      'Recipe unit standardization (grams to cups/mL)',
    ],
  },
  {
    id: 'fuel',
    name: 'Fuel & Energy',
    icon: '⛽',
    badge: 'Fuel Logistics Mode',
    tagline: 'Standard 15°C reference conversions for bunkering, fleet, and fuel dispensing',
    description:
      'Mass-to-volume conversions under EN 590 and ASTM D1298 standards for automotive diesel, gasoline, kerosene, marine fuels, and biofuels.',
    primaryCategories: ['petroleum', 'fuels', 'hydrocarbons'],
    defaultMassUnit: 'kg',
    defaultVolumeUnit: 'L',
    defaultDensityUnit: 'kg/L',
    referenceTemp: '15°C (59°F standard)',
    popularSubstanceKeys: [
      'diesel-2',
      'gasoline-87',
      'kerosene',
      'biodiesel',
      'jet-fuel-a1',
      'heavy-fuel-oil',
      'lpg-liquid',
    ],
    sampleUseCases: [
      'Bunkering mass-to-volume custody transfer',
      'Fleet fuel tank ullage & payload weight checks',
      'Biodiesel blend proportion calculation',
    ],
  },
  {
    id: 'chemical',
    name: 'Chemical & Laboratory',
    icon: '🧪',
    badge: 'Chemical Lab Mode',
    tagline: 'Laboratory-grade conversions for acids, bases, solvents, and industrial reagents',
    description:
      'Calculate precise mass, volume, and molar quantities for concentrated acids, organic solvents, aqueous solutions, and reagents with specific gravity scaling.',
    primaryCategories: ['acids', 'bases', 'solvents', 'alcohols', 'industrial-chemicals'],
    defaultMassUnit: 'kg',
    defaultVolumeUnit: 'L',
    defaultDensityUnit: 'g/cm³',
    referenceTemp: '20°C / 25°C',
    popularSubstanceKeys: [
      'sulfuric-acid-98',
      'hydrochloric-acid-37',
      'nitric-acid-68',
      'ethanol-pure',
      'acetone',
      'isopropyl-alcohol',
      'sodium-hydroxide-50',
      'methanol',
    ],
    sampleUseCases: [
      'Reagent volumetric batch dosing',
      'Solvent tank storage capacity planning',
      'Aqueous chemical solution preparation',
    ],
  },
  {
    id: 'construction',
    name: 'Construction & Civil',
    icon: '🏗️',
    badge: 'Civil Engineering Mode',
    tagline: 'Bulk material density solvers for concrete, cement, sand, gravel, and asphalt',
    description:
      'Calculate cubic meter volume, tonnages, and standard bag counts for aggregates, compacted soil, structural concrete, mortars, and paving mixes.',
    primaryCategories: ['construction', 'concrete-cement', 'aggregates-fill', 'adhesives-mortars'],
    defaultMassUnit: 'tonne',
    defaultVolumeUnit: 'm³',
    defaultDensityUnit: 'kg/m³',
    referenceTemp: 'Ambient',
    popularSubstanceKeys: [
      'concrete-ready-mix',
      'cement-portland-bulk',
      'sand-dry',
      'gravel-loose',
      'crushed-stone',
      'asphalt-compacted',
      'mortar-wet',
    ],
    sampleUseCases: [
      'Concrete pour volume and truckload mass sizing',
      'Aggregate tonnage ordering from m³ trench dimensions',
      'Crane rigging and haulage payload verification',
    ],
  },
  {
    id: 'automotive',
    name: 'Automotive & Fleet',
    icon: '🚗',
    badge: 'Automotive Service Mode',
    tagline: 'Viscosity and fluid conversions for motor oils, transmission fluids, and coolants',
    description:
      'Engine oil grades (0W-20 to 20W-50), automatic transmission fluids (ATF), hydraulic brake fluids (DOT 3/4/5.1), and ethylene glycol antifreeze coolant solutions.',
    primaryCategories: ['automotive', 'auto-additives', 'brake-fluids', 'lubricants'],
    defaultMassUnit: 'kg',
    defaultVolumeUnit: 'L',
    defaultDensityUnit: 'kg/L',
    referenceTemp: '20°C / 100°C Viscosity Index',
    popularSubstanceKeys: [
      'motor-oil-5w30',
      'motor-oil-10w40',
      'atf-transmission-fluid',
      'brake-fluid-dot4',
      'coolant-antifreeze-50-50',
      'gear-oil-75w90',
      'hydraulic-fluid-iso46',
    ],
    sampleUseCases: [
      'Drum bulk decanting into engine sump fill volumes',
      'Brake system fluid capacity flushes',
      'Cooling system glycol concentration balancing',
    ],
  },
  {
    id: 'agriculture',
    name: 'Agriculture & Farming',
    icon: '🌾',
    badge: 'Agronomy Mode',
    tagline: 'Liquid fertilizer, herbicide, pesticide, and spray tank mix volumetric solvers',
    description:
      'Mass-to-volume conversions for liquid nitrogen (UAN 28/32), liquid feeds, molasses, pesticide concentrates, and field sprayer tank calibration.',
    primaryCategories: ['agriculture', 'fertilizers', 'feeds'],
    defaultMassUnit: 'kg',
    defaultVolumeUnit: 'L',
    defaultDensityUnit: 'kg/L',
    referenceTemp: '20°C (68°F)',
    popularSubstanceKeys: [
      'liquid-nitrogen-uan32',
      'uan-28',
      'ammonium-polyphosphate-10-34-0',
      'liquid-feed-molasses',
      'water-pure',
      'milk-beverage',
    ],
    sampleUseCases: [
      'Liquid fertilizer application rate per hectare',
      'Sprayer tank fill recipe mass balancing',
      'Bulk fertilizer storage tote capacity management',
    ],
  },
];

export function getIndustryMode(id: string): IndustryMode | undefined {
  return industryModes.find((mode) => mode.id === id);
}
