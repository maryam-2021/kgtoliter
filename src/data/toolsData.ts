export interface ToolData {
  slug: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  mainQuestion: string;
  intro: string;
  calculatorType:
    | 'kg-to-litre'
    | 'water'
    | 'milk'
    | 'cooking-oil'
    | 'petrol'
    | 'diesel'
    | 'flour'
    | 'sugar'
    | 'rice'
    | 'density-formula'
    | 'specific-gravity'
    | 'millilitres'
    | 'gallons'
    | 'fluid-ounces'
    | 'litres-to-kg'
    | 'conversion-table'
    | 'formula-explained'
    | 'without-density'
    | 'liquids'
    | 'dry-ingredients'
    | 'tank-calculator'
    | 'three-way-solver'
    | 'measurement-guide';
  howToUseSteps: string[];
  formulaExplanation: {
    formula: string;
    details: string;
    rearranged?: string;
  };
  workedExample: {
    title: string;
    given: string;
    steps: string[];
    result: string;
  };
  tableData: { col1: string; col2: string; col3: string }[];
  faqs: { q: string; a: string }[];
  relatedToolSlugs: string[];
}

export const toolsData: ToolData[] = [
  // 1. KG to Litre Calculator
  {
    slug: 'kg-to-litre-calculator',
    h1: 'KG to Litre Calculator',
    seoTitle: 'KG to Litre Calculator | Free Mass to Volume Converter',
    metaDescription:
      'Convert kilograms to litres instantly. Enter mass and substance density to get precise litres, millilitres, and step-by-step formula breakdown.',
    mainQuestion: 'How many litres are in a kilogram?',
    intro:
      'Converting kilograms to litres requires applying the substance density factor. Because kilograms measure physical mass and litres measure spatial volume, 1 kg does not equal 1 litre unless the material density is exactly 1.00 kg/L.',
    calculatorType: 'kg-to-litre',
    howToUseSteps: [
      'Enter the total mass in kilograms (kg).',
      'Select a common substance or input a custom density in kg/L.',
      'Review the calculated volume in litres (L) and millilitres (mL) with step-by-step mathematical breakdown.',
    ],
    formulaExplanation: {
      formula: 'Volume (L) = Mass (kg) ÷ Density (kg/L)',
      details:
        'Mass represents the quantity of matter in an object, whereas volume measures the 3D space occupied. Dividing mass by density converts weight into exact volumetric litres.',
    },
    workedExample: {
      title: 'Converting 12.5 kg of motor oil (density 0.88 kg/L) to litres',
      given: 'Mass = 12.5 kg, Density = 0.88 kg/L',
      steps: [
        'Apply formula: Volume = Mass ÷ Density',
        'Calculation: 12.5 kg ÷ 0.88 kg/L = 14.2045 L',
        'Convert to millilitres: 14.2045 L × 1,000 = 14,204.5 mL',
      ],
      result: '12.5 kg of motor oil equals 14.205 litres (14,204.5 mL).',
    },
    tableData: [
      { col1: '1 kg', col2: '1.000 L (Water)', col3: '1.087 L (Cooking Oil)' },
      { col1: '5 kg', col2: '5.000 L (Water)', col3: '5.435 L (Cooking Oil)' },
      { col1: '10 kg', col2: '10.000 L (Water)', col3: '10.870 L (Cooking Oil)' },
      { col1: '25 kg', col2: '25.000 L (Water)', col3: '27.174 L (Cooking Oil)' },
      { col1: '50 kg', col2: '50.000 L (Water)', col3: '54.348 L (Cooking Oil)' },
    ],
    faqs: [
      {
        q: 'How many litres are equal to 1 kg?',
        a: 'It depends on the substance density. For water (1.00 kg/L), 1 kg equals 1 litre. For cooking oil (0.92 kg/L), 1 kg equals 1.087 litres.',
      },
      {
        q: 'Is 1 kg always equal to 1 litre?',
        a: 'No. Kilograms measure mass while litres measure volume. They are only equal for materials with a density of exactly 1 kg/L.',
      },
      {
        q: 'Why is density needed to convert kg to litres?',
        a: 'Density determines how tightly matter is packed within a given volume. Without density, weight cannot be converted to fluid volume.',
      },
      {
        q: 'How many litres are in 5 kg of water?',
        a: '5 kg of water equals exactly 5.00 litres at 4°C reference temperature.',
      },
      {
        q: 'Can kilograms of flour be converted into litres?',
        a: 'Yes. By using flour bulk density (~0.59 kg/L), 1 kg of sifted flour equals approximately 1.695 litres.',
      },
      {
        q: 'Does temperature affect kg-to-litre conversions?',
        a: 'Yes. Heating liquids causes thermal expansion, reducing density and increasing the litres occupied by 1 kg.',
      },
      {
        q: 'What is the formula for converting kg into litres?',
        a: 'The standard formula is: Volume (L) = Mass (kg) ÷ Density (kg/L).',
      },
    ],
    relatedToolSlugs: [
      'kg-to-litres-water',
      'kg-to-litres-milk',
      'kg-to-litres-cooking-oil',
      'kg-to-litres-diesel',
    ],
  },

  // 2. Kilograms to Litres for Water
  {
    slug: 'kg-to-litres-water',
    h1: 'Convert Kilograms to Litres of Water',
    seoTitle: 'Convert Kg to Litres of Water | 1 kg = 1 L Baseline',
    metaDescription:
      'Convert kg of water to litres instantly. Uses water maximum density at 4°C (1.00 kg/L) with quick conversion presets for 1kg, 5kg, 10kg, 25kg, and 100kg.',
    mainQuestion: 'How many litres of water are in a kilogram?',
    intro:
      'Pure water at 4°C serves as the international baseline standard for metric volume. At peak density (1.000 kg/L), 1 kilogram of water equals exactly 1 litre of fluid volume.',
    calculatorType: 'water',
    howToUseSteps: [
      'Enter the weight of water in kilograms.',
      'Use quick preset buttons (1 kg, 5 kg, 10 kg, 25 kg, 100 kg) for instant calculations.',
      'View exact litre and millilitre volume output.',
    ],
    formulaExplanation: {
      formula: 'Litres of Water = Mass (kg) ÷ 1.000 kg/L',
      details:
        'Because water has a baseline density of 1.00 kg/L, mass in kilograms translates directly to litres at 4°C.',
    },
    workedExample: {
      title: 'Calculating volume of a 25 kg container of pure water',
      given: 'Mass = 25 kg, Water Density = 1.00 kg/L',
      steps: ['Apply formula: Volume = 25 kg ÷ 1.00 kg/L', 'Result: 25.00 Litres'],
      result: '25 kg of water equals 25.00 litres.',
    },
    tableData: [
      { col1: '1 kg Water', col2: '1.00 Litre', col3: '1,000 mL' },
      { col1: '5 kg Water', col2: '5.00 Litres', col3: '5,000 mL' },
      { col1: '10 kg Water', col2: '10.00 Litres', col3: '10,000 mL' },
      { col1: '25 kg Water', col2: '25.00 Litres', col3: '25,000 mL' },
      { col1: '100 kg Water', col2: '100.00 Litres', col3: '100,000 mL' },
    ],
    faqs: [
      {
        q: 'How many litres of water are in 1 kg?',
        a: 'At 4°C, 1 kg of water equals exactly 1.00 litre.',
      },
      {
        q: 'Does 1 kg of room temperature water equal 1 litre?',
        a: 'At 20°C (68°F), water density drops slightly to 0.998 kg/L, making 1 kg equal 1.002 litres.',
      },
      { q: 'How many litres are in 5 kg of water?', a: '5 kg of water equals 5.00 litres.' },
      { q: 'How many litres are in 10 kg of water?', a: '10 kg of water equals 10.00 litres.' },
      { q: 'How many litres are in 25 kg of water?', a: '25 kg of water equals 25.00 litres.' },
      {
        q: 'Why does ice float on water?',
        a: 'When water freezes into ice, its crystalline lattice expands, reducing density to ~0.917 kg/L.',
      },
    ],
    relatedToolSlugs: [
      'kg-to-litre-calculator',
      'kg-to-litres-milk',
      'kg-to-litres-cooking-oil',
      'kg-to-litres-diesel',
    ],
  },

  // 3. Kilograms to Litres for Milk
  {
    slug: 'kg-to-litres-milk',
    h1: 'Convert Kilograms of Milk to Litres',
    seoTitle: 'Convert Kg of Milk to Litres | Whole, Semi & Skimmed',
    metaDescription:
      'Calculate litres from kg of milk. Features selectable milk types (Whole 1.03 kg/L, Semi-skimmed 1.033 kg/L, Skimmed 1.035 kg/L) and editable custom density.',
    mainQuestion: 'How many litres of milk are in a kilogram?',
    intro:
      'Milk is denser than water due to suspended butterfats, proteins (casein), and dissolved milk sugars (lactose). Whole milk has a standard density of 1.03 kg/L at 20°C, meaning 1 kg equals 0.971 litres.',
    calculatorType: 'milk',
    howToUseSteps: [
      'Select milk variety: Whole, Semi-skimmed, Skimmed, or Custom Density.',
      'Enter mass in kilograms.',
      'Review output litres and temperature variation notes.',
    ],
    formulaExplanation: {
      formula: 'Litres of Milk = Mass (kg) ÷ Milk Density (kg/L)',
      details:
        'Butterfat is lighter than water, whereas milk proteins and sugars are heavier. Skimming fat increases overall milk density.',
    },
    workedExample: {
      title: 'Converting 50 kg of Whole Milk (1.03 kg/L)',
      given: 'Mass = 50 kg, Whole Milk Density = 1.03 kg/L',
      steps: ['Apply formula: Volume = 50 kg ÷ 1.03 kg/L', 'Calculation: 50 ÷ 1.03 = 48.5437 L'],
      result: '50 kg of whole milk equals 48.544 litres.',
    },
    tableData: [
      { col1: 'Whole Milk (1.030 kg/L)', col2: '1 kg = 0.971 L', col3: '10 kg = 9.709 L' },
      { col1: 'Semi-Skimmed (1.033 kg/L)', col2: '1 kg = 0.968 L', col3: '10 kg = 9.681 L' },
      { col1: 'Skimmed Milk (1.035 kg/L)', col2: '1 kg = 0.966 L', col3: '10 kg = 9.662 L' },
    ],
    faqs: [
      {
        q: 'How many litres are in 1 kg of milk?',
        a: '1 kg of whole milk equals approximately 0.971 litres.',
      },
      {
        q: 'Is a kilogram of milk equal to one litre?',
        a: 'No. Because milk is denser than water (1.03 kg/L), 1 kg of milk is slightly less than 1 litre (0.971 L).',
      },
      {
        q: 'Does whole milk have a different density from skimmed milk?',
        a: 'Yes. Skimmed milk has higher density (1.035 kg/L) because butterfat (0.91 kg/L) has been removed.',
      },
      {
        q: 'How many kilograms are in two litres of milk?',
        a: '2 litres of whole milk weigh approximately 2.06 kilograms (2 L × 1.03 kg/L).',
      },
      {
        q: 'Does milk temperature change the conversion?',
        a: 'Yes. Cold milk (4°C) is slightly denser than room temperature milk (20°C).',
      },
      {
        q: 'Can this calculator be used for powdered milk?',
        a: 'No. Reconstituted fluid milk should be selected, whereas dry milk powder requires bulk density settings.',
      },
    ],
    relatedToolSlugs: [
      'kg-to-litre-calculator',
      'kg-to-litres-water',
      'kg-to-litres-cooking-oil',
      'kg-to-litres-diesel',
    ],
  },

  // 4. Kilograms to Litres for Cooking Oil
  {
    slug: 'kg-to-litres-cooking-oil',
    h1: 'Convert Kilograms of Cooking Oil to Litres',
    seoTitle: 'Convert Kg of Cooking Oil to Litres | Vegetable, Olive, Sunflower',
    metaDescription:
      'Convert kg of cooking oil to litres. Select Vegetable (0.92 kg/L), Olive (0.918 kg/L), Sunflower (0.92 kg/L), Canola (0.915 kg/L), or Coconut oil (0.925 kg/L).',
    mainQuestion: 'How many litres of cooking oil are in a kilogram?',
    intro:
      'Culinary plant oils are less dense than water, averaging 0.92 kg/L at room temperature. Consequently, 1 kg of cooking oil occupies 1.087 litres, causing oil to float on water.',
    calculatorType: 'cooking-oil',
    howToUseSteps: [
      'Select oil type (Vegetable, Olive, Sunflower, Canola, Coconut, or Custom).',
      'Enter weight in kilograms.',
      'View volume in litres with thermal expansion warnings.',
    ],
    formulaExplanation: {
      formula: 'Litres of Oil = Mass (kg) ÷ Oil Density (kg/L)',
      details:
        'Plant lipids consist of hydrophobic triglycerides with lower specific gravity than aqueous solutions.',
    },
    workedExample: {
      title: 'Converting 20 kg of Vegetable Oil (0.92 kg/L)',
      given: 'Mass = 20 kg, Density = 0.92 kg/L',
      steps: ['Apply formula: Volume = 20 ÷ 0.92', 'Calculation: 20 ÷ 0.92 = 21.7391 L'],
      result: '20 kg of vegetable oil equals 21.739 litres.',
    },
    tableData: [
      { col1: 'Vegetable Oil (0.920 kg/L)', col2: '1 kg = 1.087 L', col3: '5 kg = 5.435 L' },
      { col1: 'Olive Oil (0.918 kg/L)', col2: '1 kg = 1.089 L', col3: '5 kg = 5.447 L' },
      { col1: 'Canola Oil (0.915 kg/L)', col2: '1 kg = 1.093 L', col3: '5 kg = 5.464 L' },
      { col1: 'Coconut Oil (0.925 kg/L)', col2: '1 kg = 1.081 L', col3: '5 kg = 5.405 L' },
    ],
    faqs: [
      {
        q: 'How many litres of cooking oil are in 1 kg?',
        a: '1 kg of standard vegetable oil equals approximately 1.087 litres.',
      },
      {
        q: 'Why does 1 kg of oil occupy more than 1 litre?',
        a: 'Because oil density (0.92 kg/L) is lower than water (1.00 kg/L), 1 kg of oil requires more physical space.',
      },
      {
        q: 'Does heating oil change its litre volume?',
        a: 'Yes. Hot frying oil at 180°C expands, dropping density to ~0.88 kg/L and increasing volume to ~1.136 L per kg.',
      },
      {
        q: 'Is olive oil denser than sunflower oil?',
        a: 'They are nearly identical. Olive oil is ~0.918 kg/L and sunflower oil is ~0.920 kg/L.',
      },
      {
        q: 'How many litres are in 10 kg of cooking oil?',
        a: '10 kg of cooking oil equals approximately 10.87 litres.',
      },
    ],
    relatedToolSlugs: [
      'kg-to-litre-calculator',
      'kg-to-litres-water',
      'kg-to-litres-milk',
      'kg-to-litres-diesel',
    ],
  },

  // 5. Kilograms to Litres for Diesel
  {
    slug: 'kg-to-litres-diesel',
    h1: 'Convert Kilograms of Diesel to Litres',
    seoTitle: 'Convert Kg of Diesel to Litres | EN 590 Fuel Calculator',
    metaDescription:
      'Convert kg of diesel fuel to litres. Features standard EN 590 density (0.832 kg/L), custom density input, and commercial fuel conversion tables.',
    mainQuestion: 'How many litres of diesel are in a kilogram?',
    intro:
      'Standard automotive diesel (EN 590) has a reference density of 0.832 kg/L at 15°C. Converting 1 kg of diesel yields 1.202 litres of liquid volume.',
    calculatorType: 'diesel',
    howToUseSteps: [
      'Enter diesel weight in kilograms.',
      'Adjust fuel density if using marine diesel or bio-diesel blend.',
      'Review output volume in litres and fuel weight notes.',
    ],
    formulaExplanation: {
      formula: 'Litres of Diesel = Mass (kg) ÷ 0.832 kg/L',
      details:
        'Freight bunkering uses mass (metric tonnes) for inventory balance, whereas dispensing meters measure fluid litres.',
    },
    workedExample: {
      title: 'Converting 100 kg of Diesel Fuel (0.832 kg/L)',
      given: 'Mass = 100 kg, Density = 0.832 kg/L',
      steps: ['Apply formula: Volume = 100 ÷ 0.832', 'Calculation: 100 ÷ 0.832 = 120.1923 L'],
      result: '100 kg of diesel equals 120.192 litres.',
    },
    tableData: [
      { col1: '1 kg Diesel', col2: '1.202 Litres', col3: '1,202 mL' },
      { col1: '10 kg Diesel', col2: '12.019 Litres', col3: '12,019 mL' },
      { col1: '50 kg Diesel', col2: '60.096 Litres', col3: '60,096 mL' },
      { col1: '100 kg Diesel', col2: '120.192 Litres', col3: '120,192 mL' },
    ],
    faqs: [
      {
        q: 'How many litres of diesel are in 1 kg?',
        a: '1 kg of standard automotive diesel equals approximately 1.202 litres.',
      },
      {
        q: 'What is the standard density of diesel fuel?',
        a: 'Under EN 590 specifications, automotive diesel density ranges from 0.820 to 0.845 kg/L (standard 0.832 kg/L at 15°C).',
      },
      {
        q: 'How many kg is 100 litres of diesel?',
        a: '100 litres of diesel weighs approximately 83.2 kilograms.',
      },
      {
        q: 'Does biodiesel have a higher density than petroleum diesel?',
        a: 'Yes. Biodiesel (B100) has a density of ~0.880 kg/L, yielding ~1.136 L per kg.',
      },
    ],
    relatedToolSlugs: [
      'kg-to-litre-calculator',
      'kg-to-litres-water',
      'kg-to-litres-milk',
      'kg-to-litres-cooking-oil',
    ],
  },
];

// Target First 5 Batch Tools
export const primaryBatchTools = toolsData;

const toolCategoryByType: Partial<Record<ToolData['calculatorType'], string>> = {
  water: 'basic',
  milk: 'basic',
  'cooking-oil': 'cooking',
  diesel: 'fuels',
};

export function getToolPath(tool: Pick<ToolData, 'slug' | 'calculatorType'>): string {
  const category = toolCategoryByType[tool.calculatorType];
  return category ? `/${category}/${tool.slug}/` : `/${tool.slug}/`;
}
