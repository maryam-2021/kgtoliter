export interface ComparisonGuide {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  itemA: {
    name: string;
    density: number;
    temp: number;
    volumePerKg: string;
    massPerLiter: string;
    category: string;
    notes: string;
  };
  itemB: {
    name: string;
    density: number;
    temp: number;
    volumePerKg: string;
    massPerLiter: string;
    category: string;
    notes: string;
  };
  comparisonPoints: {
    title: string;
    description: string;
  }[];
  comparisonTable: {
    headers: string[];
    rows: string[][];
  };
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const comparisonGuides: ComparisonGuide[] = [
  // 1. Water vs Milk
  {
    slug: 'water-vs-milk-density',
    title: 'Water vs Milk Density: Side-by-Side Mass & Volume Comparison',
    subtitle: 'Why whole milk is 3% heavier than water, the effect of butterfat vs non-fat milk solids, and dairy recipe conversions.',
    metaDescription: 'Compare water vs milk density. Learn why 1 litre of milk weighs 1.030 kg while 1 litre of water weighs 1.000 kg, and how fat content changes density.',
    itemA: {
      name: 'Pure Water',
      density: 1.000,
      temp: 20,
      volumePerKg: '1.000 L',
      massPerLiter: '1.000 kg',
      category: 'Basic Liquid',
      notes: 'Global baseline standard: 1 kg = 1 L exactly at 20°C.'
    },
    itemB: {
      name: 'Whole Milk (3.5% fat)',
      density: 1.030,
      temp: 20,
      volumePerKg: '0.971 L',
      massPerLiter: '1.030 kg',
      category: 'Dairy Fluid',
      notes: 'Contains dissolved lactose, casein proteins, and minerals that elevate density above water.'
    },
    comparisonPoints: [
      {
        title: 'Why Milk is Denser than Water',
        description: 'Milk is an aqueous emulsion. Even though milkfat itself is lighter than water (density ~0.93 kg/L), the non-fat milk solids (casein proteins, lactose sugars, and calcium minerals) have densities around 1.4 to 1.6 kg/L, making the net liquid ~3% heavier than water.'
      },
      {
        title: 'Skim Milk vs Whole Milk Density Paradox',
        description: 'Skim milk (1.036 kg/L) is actually DENSER than whole milk (1.030 kg/L) because removing low-density butterfat leaves a higher proportion of heavy milk solids.'
      }
    ],
    comparisonTable: {
      headers: ['Quantity', 'Pure Water (1.000 kg/L)', 'Whole Milk (1.030 kg/L)', 'Difference'],
      rows: [
        ['1 Litre Mass', '1.000 kg', '1.030 kg', 'Milk is +30g (+3.0%) heavier'],
        ['5 Litres Mass', '5.000 kg', '5.150 kg', 'Milk is +150g heavier'],
        ['10 Litres Mass', '10.000 kg', '10.300 kg', 'Milk is +300g heavier'],
        ['1 Kilogram Volume', '1.000 L (1,000 mL)', '0.971 L (971 mL)', 'Milk occupies 29 mL less volume'],
        ['5 Kilograms Volume', '5.000 L', '4.854 L', 'Milk occupies 146 mL less volume'],
        ['10 Kilograms Volume', '10.000 L', '9.709 L', 'Milk occupies 291 mL less volume']
      ]
    },
    faqs: [
      {
        q: 'Is 1 kg of milk the same as 1 litre of milk?',
        a: 'No. 1 kg of whole milk equals 0.971 litres (971 mL). 1 litre of whole milk weighs 1.030 kg.'
      },
      {
        q: 'Why does cream float on milk?',
        a: 'Heavy cream has high fat content (36–40% fat) giving it a density of ~0.994 kg/L, which is lighter than whole milk (1.030 kg/L) and pure water, causing unhomogenized cream to rise to the surface.'
      }
    ],
    relatedSlugs: ['cooking-oils-density', 'diesel-vs-petrol-density', 'acids-density-comparison']
  },

  // 2. Cooking Oils Density Comparison
  {
    slug: 'cooking-oils-density',
    title: 'All Cooking Oils Density Compared: Olive, Canola, Sunflower & Coconut',
    subtitle: 'Side-by-side density matrix of 12 culinary oils, smoke point relationships, and recipe mass-to-volume scaling.',
    metaDescription: 'Compare cooking oil densities. See why olive oil (0.910 kg/L), sunflower oil (0.920 kg/L), and coconut oil (0.924 kg/L) differ, and how to convert kg to litres for cooking.',
    itemA: {
      name: 'Extra Virgin Olive Oil',
      density: 0.910,
      temp: 20,
      volumePerKg: '1.099 L',
      massPerLiter: '0.910 kg',
      category: 'Cold-Pressed Fruit Oil',
      notes: 'Rich in monounsaturated oleic acid (18:1).'
    },
    itemB: {
      name: 'Refined Vegetable / Canola Oil',
      density: 0.920,
      temp: 20,
      volumePerKg: '1.087 L',
      massPerLiter: '0.920 kg',
      category: 'Refined Seed Oil',
      notes: 'Higher polyunsaturated fatty acid content creates slightly tighter molecular packing.'
    },
    comparisonPoints: [
      {
        title: 'Why All Cooking Oils Float on Water',
        description: 'All culinary triglyceride oils have densities between 0.910 and 0.930 kg/L, making them 7% to 9% lighter than water (1.000 kg/L). This hydrophobic density difference causes oil to float on water without mixing.'
      },
      {
        title: 'Effect of Temperature on Cooking Oil',
        description: 'As cooking oil is heated to frying temperatures (180°C / 350°F), thermal expansion reduces its density from ~0.915 kg/L to ~0.810 kg/L, expanding frying volume by over 11%.'
      }
    ],
    comparisonTable: {
      headers: ['Cooking Oil Type', 'Density @ 20°C', '1 kg in Litres', '1 Litre in kg'],
      rows: [
        ['Olive Oil', '0.910 kg/L', '1.099 L', '0.910 kg'],
        ['Avocado Oil', '0.912 kg/L', '1.096 L', '0.912 kg'],
        ['Peanut Oil', '0.914 kg/L', '1.094 L', '0.914 kg'],
        ['Canola Oil', '0.918 kg/L', '1.089 L', '0.918 kg'],
        ['Sunflower Oil', '0.920 kg/L', '1.087 L', '0.920 kg'],
        ['Corn Oil', '0.922 kg/L', '1.085 L', '0.922 kg'],
        ['Soybean Oil', '0.924 kg/L', '1.082 L', '0.924 kg'],
        ['Coconut Oil (Liquid @ 30°C)', '0.924 kg/L', '1.082 L', '0.924 kg']
      ]
    },
    faqs: [
      {
        q: 'How many litres is a 5 kg tin of olive oil?',
        a: '5 kg ÷ 0.910 kg/L = 5.495 Litres (5,495 mL).'
      },
      {
        q: 'How much does a 1-litre bottle of vegetable oil weigh?',
        a: '1 litre of vegetable oil weighs 0.920 kg (920 grams), not 1 kg.'
      }
    ],
    relatedSlugs: ['water-vs-milk-density', 'diesel-vs-petrol-density', 'acids-density-comparison']
  },

  // 3. Diesel vs Petrol
  {
    slug: 'diesel-vs-petrol-density',
    title: 'Diesel vs Petrol (Gasoline) Density: Fuel Comparison Guide',
    subtitle: 'Chemical chain length differences, energy density per litre, EN 590 vs EN 228 standards, and fuel economy impacts.',
    metaDescription: 'Compare diesel vs petrol (gasoline) density. Understand why diesel (0.832 kg/L) is 11% heavier than petrol (0.748 kg/L) and how density dictates fuel economy.',
    itemA: {
      name: 'Automotive Diesel (EN 590)',
      density: 0.832,
      temp: 15,
      volumePerKg: '1.202 L',
      massPerLiter: '0.832 kg',
      category: 'Middle Distillate Fuel',
      notes: 'Composed of longer hydrocarbon chains (C₁₀–C₂₂), providing higher volumetric energy density.'
    },
    itemB: {
      name: 'Unleaded Petrol / Gasoline (EN 228)',
      density: 0.748,
      temp: 15,
      volumePerKg: '1.337 L',
      massPerLiter: '0.748 kg',
      category: 'Light Distillate Fuel',
      notes: 'Composed of shorter hydrocarbon chains (C₄–C₁₂), more volatile with lower density.'
    },
    comparisonPoints: [
      {
        title: 'Why Diesel is 11% Denser than Petrol',
        description: 'Diesel fuel contains heavier, longer paraffinic and aromatic hydrocarbon molecules that pack closer together. This higher molecular density means 1 litre of diesel contains 0.832 kg of combustible hydrocarbons compared to only 0.748 kg in 1 litre of petrol.'
      },
      {
        title: 'Energy Content per Litre vs per Kilogram',
        description: 'While petrol has slightly higher energy per kilogram (approx 44.4 MJ/kg vs 43.1 MJ/kg for diesel), diesel\'s higher density gives it ~12% MORE energy per litre (approx 35.8 MJ/L for diesel vs 32.2 MJ/L for petrol), which directly explains why diesel vehicles achieve greater mileage per litre.'
      }
    ],
    comparisonTable: {
      headers: ['Parameter', 'Diesel Fuel (EN 590)', 'Petrol / Gasoline (EN 228)', 'Difference'],
      rows: [
        ['Standard Density @ 15°C', '0.832 kg/L (0.820–0.845)', '0.748 kg/L (0.720–0.775)', 'Diesel is +11.2% denser'],
        ['1 Tonne (1,000 kg) Volume', '1,202 Litres', '1,337 Litres', 'Petrol yields 135 L more volume'],
        ['50-Litre Tank Weight', '41.60 kg', '37.40 kg', 'Diesel tank is 4.2 kg heavier'],
        ['Energy Density per Litre', '~35.8 MJ/L', '~32.2 MJ/L', 'Diesel has +11.2% more energy/L'],
        ['Expansion Coefficient (β)', '0.00085 /°C', '0.00110 /°C', 'Petrol expands faster in heat']
      ]
    },
    faqs: [
      {
        q: 'How many litres is 1 kg of diesel vs 1 kg of petrol?',
        a: '1 kg of diesel equals 1.202 litres. 1 kg of petrol equals 1.337 litres.'
      },
      {
        q: 'How much does 60 litres of petrol weigh vs 60 litres of diesel?',
        a: '60 litres of petrol weighs 44.88 kg. 60 litres of diesel weighs 49.92 kg.'
      }
    ],
    relatedSlugs: ['water-vs-milk-density', 'cooking-oils-density', 'acids-density-comparison']
  },

  // 4. Acids Comparison
  {
    slug: 'acids-density-comparison',
    title: 'Industrial Acids Density Comparison: H₂SO₄, HNO₃, HCl & H₃PO₄',
    subtitle: 'Molar mass, aqueous concentration curves, specific gravity, and laboratory safety batch calculations.',
    metaDescription: 'Compare industrial acid densities: Sulfuric acid (1.84 kg/L), Nitric acid (1.41 kg/L), Hydrochloric acid (1.19 kg/L), and Phosphoric acid (1.68 kg/L).',
    itemA: {
      name: 'Concentrated Sulfuric Acid (98% H₂SO₄)',
      density: 1.836,
      temp: 20,
      volumePerKg: '0.545 L',
      massPerLiter: '1.836 kg',
      category: 'Heavy Mineral Acid',
      notes: 'One of the densest common laboratory liquids; nearly 1.84 times heavier than water.'
    },
    itemB: {
      name: 'Concentrated Hydrochloric Acid (37% HCl)',
      density: 1.190,
      temp: 20,
      volumePerKg: '0.840 L',
      massPerLiter: '1.190 kg',
      category: 'Volatile Mineral Acid',
      notes: 'Aqueous solution of dissolved HCl gas; capped at ~37% concentration by atmospheric vapor pressure.'
    },
    comparisonPoints: [
      {
        title: 'Why Mineral Acid Densities Vary Drastically',
        description: 'Sulfuric acid (H₂SO₄) is a liquid at room temperature in pure form with heavy molar mass (98 g/mol) and tight hydrogen bonding, yielding extreme density (1.84 kg/L). In contrast, pure HCl is a gas, so concentrated aqueous HCl is ~63% water, limiting its density to 1.19 kg/L.'
      }
    ],
    comparisonTable: {
      headers: ['Acid Solution', 'Standard Concentration', 'Density @ 20°C', '1 Litre Weight (kg)', '100 kg Volume (L)'],
      rows: [
        ['Sulfuric Acid (H₂SO₄)', '98.0% w/w', '1.836 kg/L', '1.836 kg', '54.47 L'],
        ['Phosphoric Acid (H₃PO₄)', '85.0% w/w', '1.685 kg/L', '1.685 kg', '59.35 L'],
        ['Nitric Acid (HNO₃)', '68.0% w/w', '1.410 kg/L', '1.410 kg', '70.92 L'],
        ['Hydrochloric Acid (HCl)', '37.0% w/w', '1.190 kg/L', '1.190 kg', '84.03 L'],
        ['Acetic Acid (Glacial)', '99.5% w/w', '1.049 kg/L', '1.049 kg', '95.33 L']
      ]
    },
    faqs: [
      {
        q: 'Why is sulfuric acid so much heavier than other acids?',
        a: 'Sulfuric acid has high molecular mass and strong intermolecular attraction, packing 1.836 kg of matter into every single litre.'
      },
      {
        q: 'How many litres is 25 kg of concentrated nitric acid?',
        a: '25 kg ÷ 1.410 kg/L = 17.73 Litres.'
      }
    ],
    relatedSlugs: ['water-vs-milk-density', 'cooking-oils-density', 'diesel-vs-petrol-density']
  }
];
