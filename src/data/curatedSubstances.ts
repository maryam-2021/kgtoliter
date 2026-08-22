import type { Substance } from './substances';

export const top50Substances: Substance[] = [
  // 1. Water
  {
    id: 'water',
    name: 'Water',
    category: 'basic',
    density_kg_per_l: 1.00,
    densityRange: { min: 0.958, max: 1.000 },
    density_note: '0.958 to 1.000 kg/L (1.000 kg/L at 4°C, 0.998 kg/L at 20°C, 0.958 kg/L at 100°C)',
    temperature: 4,
    source: 'NIST Standard Reference Database / IUPAC',
    seo: {
      title: 'Kg to Litres of Water Converter | 1 kg = 1 L (Exact)',
      description: 'Convert kilograms to litres of water instantly. 1 kg of water equals exactly 1 litre at 4°C. Free, accurate mass to volume calculator with temperature ranges.',
      primary_kw: 'kg to litre water',
      secondary_kws: ['1 kg water to litre', 'convert kg to liters water', 'water density kg/L', 'water density range'],
    },
    content: {
      intro: 'Converting kilograms of water to litres is a fundamental unit transformation based on pure water reference density. Water reaches its maximum density of 1.000 kg/L at 4°C, where 1 kg equals exactly 1.000 litre.',
      real_world_context: 'Water density varies with temperature from 1.000 kg/L at 4°C down to 0.958 kg/L at boiling point (100°C). In engineering and hydrological metering, temperature compensation is applied for precision.',
      faq: [
        { q: 'Why is 1 kg of water exactly 1 litre at 4°C?', a: 'The metric system was originally standardized on water: 1 litre was defined as the volume of 1 kilogram of pure water at its maximum density point (4°C).' },
        { q: 'What is the density range of water across temperatures?', a: 'Water density ranges from 1.000 kg/L at 4°C to 0.998 kg/L at 20°C, down to 0.958 kg/L at 100°C.' },
      ],
    },
  },

  // 2. Milk
  {
    id: 'milk',
    name: 'Whole Milk',
    category: 'basic',
    density_kg_per_l: 1.030,
    densityRange: { min: 1.026, max: 1.035 },
    density_note: '1.026 to 1.035 kg/L depending on butterfat (3.25%–4%) and protein/solids content',
    temperature: 20,
    source: 'USDA FoodData Central / International Dairy Federation',
    seo: {
      title: 'Kg to Litres of Milk Converter | Density Range 1.026–1.035 kg/L',
      description: 'Calculate how many litres are in 1 kg of milk. Whole milk density ranges from 1.026 to 1.035 kg/L depending on butterfat and solids.',
      primary_kw: 'kg to litre milk',
      secondary_kws: ['how many liters in 1 kg of milk', 'milk density range kg/L', 'kg to L milk', 'whole milk vs skim milk density'],
    },
    content: {
      intro: 'Commercial cows milk density typically ranges from 1.026 kg/L to 1.035 kg/L (standard nominal: 1.030 kg/L at 20°C). 1 kg of whole milk occupies between 0.966 and 0.975 litres.',
      real_world_context: 'Milk density varies by fat content: skim milk is denser (~1.035 kg/L) because light butterfat (0.91 kg/L) has been removed, whereas rich Jersey milk with high butterfat is around 1.026–1.028 kg/L.',
      faq: [
        { q: 'How many litres is 1 kg of milk?', a: 'Using standard whole milk density (1.030 kg/L), 1 kg of milk equals approximately 0.971 litres (ranging from 0.966 to 0.975 L across grades).' },
        { q: 'Why does milk density vary by fat content?', a: 'Butterfat is lighter than water (0.91 kg/L), so higher fat milk is slightly less dense, while skim milk with high non-fat milk solids is denser.' },
      ],
    },
  },

  // 3. Cooking Oil
  {
    id: 'cooking-oil',
    name: 'Cooking Oil (Vegetable)',
    category: 'cooking',
    density_kg_per_l: 0.920,
    densityRange: { min: 0.910, max: 0.930 },
    density_note: '0.910 to 0.930 kg/L across vegetable, soybean, sunflower, and canola oils',
    temperature: 20,
    source: 'Codex Alimentarius / USDA FoodData Central',
    seo: {
      title: 'Kg to Litres of Cooking Oil Converter | Density Range 0.91–0.93 kg/L',
      description: 'Convert kg to litres of cooking oil accurately. Vegetable oil density ranges from 0.910 to 0.930 kg/L (1 kg = 1.075 to 1.099 L).',
      primary_kw: 'kg to litre cooking oil',
      secondary_kws: ['vegetable oil density range', '1 kg oil to litre', 'kg to L sunflower oil', 'cooking oil volume calculator'],
    },
    content: {
      intro: 'Plant-derived cooking oils range in density from 0.910 kg/L to 0.930 kg/L at 20°C. 1 kg of cooking oil occupies between 1.075 and 1.099 litres (nominal: 1.087 L).',
      real_world_context: 'Oil density decreases as it heats up: hot frying oil at 180°C expands, dropping density to ~0.880 kg/L, which increases the volume per kg by over 4.5%.',
      faq: [
        { q: 'Why does cooking oil density vary?', a: 'Density varies with fatty acid chain length, saturation, oil seed type, and temperature.' },
        { q: 'How many litres is 1 kg of cooking oil?', a: '1 kg of cooking oil occupies approximately 1.087 litres at room temperature (ranging from 1.075 to 1.099 L).' },
      ],
    },
  },

  // 4. Olive Oil
  {
    id: 'olive-oil',
    name: 'Extra Virgin Olive Oil',
    category: 'cooking',
    density_kg_per_l: 0.918,
    densityRange: { min: 0.913, max: 0.920 },
    density_note: '0.913 to 0.920 kg/L depending on cultivar, harvest maturity, and temperature (15°C–25°C)',
    temperature: 20,
    source: 'International Olive Council (IOC) Standard',
    seo: {
      title: 'Kg to Litres of Olive Oil Converter | IOC Density Range',
      description: 'Convert kg to litres of olive oil. EVOO density ranges from 0.913 to 0.920 kg/L (1 kg = 1.087 to 1.095 L).',
      primary_kw: 'kg to litre olive oil',
      secondary_kws: ['olive oil density range kg/L', '1 kg olive oil in litres', 'convert olive oil kg to L'],
    },
    content: {
      intro: 'Extra virgin olive oil density ranges between 0.913 kg/L and 0.920 kg/L under International Olive Council guidelines. 1 kg equals approximately 1.089 litres at 20°C.',
      real_world_context: 'Cold olive oil at 10°C is ~0.924 kg/L and may become cloudy/viscous, while warm oil at 30°C expands to ~0.910 kg/L.',
      faq: [
        { q: 'How many litres is 1 kg of olive oil?', a: '1 kg of extra virgin olive oil equals approximately 1.089 litres at standard 20°C.' },
        { q: 'Why does olive oil density change with temperature?', a: 'Like all lipids, olive oil undergoes volumetric thermal expansion of approximately 0.0007 per °C.' },
      ],
    },
  },

  // 5. Diesel
  {
    id: 'diesel',
    name: 'Diesel Fuel',
    category: 'fuels',
    density_kg_per_l: 0.832,
    densityRange: { min: 0.820, max: 0.845 },
    density_note: '0.820 to 0.845 kg/L per EN 590 specification at 15°C (summer vs winter grade)',
    temperature: 15,
    source: 'European Standard EN 590 / ASTM D975 / ASTM D1298',
    seo: {
      title: 'Kg to Litres of Diesel Converter | EN 590 Density Range 0.820–0.845 kg/L',
      description: 'Accurately convert kilograms of diesel to litres. Commercial diesel density ranges from 0.820 to 0.845 kg/L under EN 590 standards.',
      primary_kw: 'kg to litre diesel',
      secondary_kws: ['diesel density range kg/L', 'en 590 diesel density', 'convert kg diesel to liters', 'diesel fuel custody transfer'],
    },
    content: {
      intro: 'Commercial EN 590 diesel fuel density is legally bounded between 0.820 kg/L and 0.845 kg/L at 15°C. 1 kg of diesel yields between 1.183 and 1.220 litres (standard midpoint: 1.202 L).',
      real_world_context: 'Winter grade diesel has lower paraffin content and lower density (~0.825 kg/L) to prevent wax crystallization, whereas summer blends average ~0.835 kg/L. Bunkering custody meters adjust for temperature.',
      faq: [
        { q: 'What is the legal density range for automotive diesel?', a: 'Under EN 590 and ASTM D975, standard diesel fuel density must fall between 0.820 and 0.845 kg/L at 15°C.' },
        { q: 'How many litres is 1 metric tonne of diesel?', a: '1 metric tonne (1,000 kg) yields between 1,183 and 1,220 litres (standard nominal: 1,201.92 L).' },
      ],
    },
  },

  // 6. Petrol
  {
    id: 'petrol',
    name: 'Petrol / Gasoline',
    category: 'fuels',
    density_kg_per_l: 0.745,
    densityRange: { min: 0.720, max: 0.775 },
    density_note: '0.720 to 0.775 kg/L depending on octane rating (87 to 98 RON) and seasonal butane blending',
    temperature: 15,
    source: 'European Standard EN 228 / ASTM D4814',
    seo: {
      title: 'Kg to Litres of Petrol Converter | Gasoline Density Range 0.720–0.775 kg/L',
      description: 'Convert kilograms of petrol (gasoline) to litres. Density ranges from 0.720 to 0.775 kg/L (1 kg = 1.290 to 1.389 L).',
      primary_kw: 'kg to litre petrol',
      secondary_kws: ['gasoline density range kg/L', '1 kg petrol to litres', 'octane rating density', 'petrol mass to volume'],
    },
    content: {
      intro: 'Refined motor gasoline density ranges from 0.720 kg/L to 0.775 kg/L at 15°C. 1 kg of petrol occupies between 1.290 and 1.389 litres (nominal: 1.342 L).',
      real_world_context: 'Winter gasoline contains more light volatile butane (lower density ~0.725 kg/L) for easy cold engine starting, while premium high-octane fuels with aromatic compounds reach ~0.755–0.770 kg/L.',
      faq: [
        { q: 'Why does petrol density range from 0.720 to 0.775 kg/L?', a: 'Density varies by octane rating, refinery feedstock, ethanol blending (E5/E10), and seasonal vapor pressure requirements.' },
        { q: 'How many litres is 1 kg of petrol?', a: '1 kg of petrol equals approximately 1.342 litres at standard 15°C.' },
      ],
    },
  },

  // 7. Honey
  {
    id: 'honey',
    name: 'Natural Honey',
    category: 'cooking',
    density_kg_per_l: 1.420,
    densityRange: { min: 1.360, max: 1.450 },
    density_note: '1.360 to 1.450 kg/L depending on moisture content (14%–20%) and floral source',
    temperature: 20,
    source: 'Codex Alimentarius Standard for Honey (CODEX STAN 12-1981)',
    seo: {
      title: 'Kg to Litres of Honey Converter | Moisture Density Range 1.36–1.45 kg/L',
      description: 'Convert kg to litres of honey. Pure natural honey density ranges from 1.360 to 1.450 kg/L based on moisture content (1 kg = 0.690 to 0.735 L).',
      primary_kw: 'kg to litre honey',
      secondary_kws: ['honey density range kg/L', 'honey moisture density', 'how many litres in 1 kg of honey', 'honey weight to volume'],
    },
    content: {
      intro: 'Natural honey density ranges between 1.360 kg/L and 1.450 kg/L depending on moisture percentage (14% to 20%). 1 kg of honey occupies between 0.690 and 0.735 litres (nominal: 0.704 L / 704 mL).',
      real_world_context: 'High-grade dry honey with low water content (<16% moisture) is dense (~1.44 kg/L) and resists fermentation. Wet raw honey (~20% moisture) drops toward ~1.38 kg/L. Beekeepers use refractometers to check density.',
      faq: [
        { q: 'Why does honey density vary from 1.36 to 1.45 kg/L?', a: 'Moisture content is the primary factor: lower moisture means higher sugar concentration and higher density.' },
        { q: 'How many litres is 1 kg of honey?', a: '1 kg of standard natural honey equals approximately 0.704 litres (704 mL).' },
      ],
    },
  },

  // 8. Engine Oil
  {
    id: 'engine-oil',
    name: 'Motor Engine Oil',
    category: 'automotive',
    density_kg_per_l: 0.875,
    densityRange: { min: 0.850, max: 0.895 },
    density_note: '0.850 to 0.895 kg/L depending on SAE viscosity grade (0W-20 to 20W-50) and base oil type',
    temperature: 20,
    source: 'SAE J300 Engine Oil Viscosity Classification / ASTM D4052',
    seo: {
      title: 'Kg to Litres of Engine Oil Converter | SAE Density Range 0.850–0.895 kg/L',
      description: 'Convert kg to litres of motor engine oil. Density ranges from 0.850 to 0.895 kg/L across SAE 0W-20 to 20W-50 grades (1 kg = 1.117 to 1.176 L).',
      primary_kw: 'kg to litre engine oil',
      secondary_kws: ['motor oil density range kg/L', '1 kg motor oil to litres', '5w30 oil density', 'engine oil mass to volume'],
    },
    content: {
      intro: 'Motor lubricant density ranges from 0.850 kg/L (light synthetic 0W-16/0W-20) up to 0.895 kg/L (heavy mineral 20W-50). 1 kg of motor oil occupies between 1.117 and 1.176 litres (nominal: 1.143 L).',
      real_world_context: 'Fully synthetic PAO (polyalphaolefin) oils have lower densities (~0.850 kg/L) than heavy solvent-refined mineral base stocks (~0.885–0.895 kg/L).',
      faq: [
        { q: 'How does SAE viscosity grade affect oil density?', a: 'Thinner multi-grade synthetics (0W-20) are less dense (~0.850 kg/L) than thick mineral oils (15W-40, 20W-50 at ~0.885 kg/L).' },
        { q: 'How many litres is 1 kg of motor oil?', a: '1 kg of standard engine oil equals approximately 1.143 litres at 20°C.' },
      ],
    },
  },

  // 9. Paint
  {
    id: 'paint',
    name: 'Latex Wall Paint',
    category: 'construction',
    density_kg_per_l: 1.350,
    densityRange: { min: 1.200, max: 1.500 },
    density_note: '1.200 to 1.500 kg/L depending on pigment loading (TiO2 / chalk) and gloss level',
    temperature: 20,
    source: 'ASTM D1475 Standard Test Method for Density of Liquid Coatings',
    seo: {
      title: 'Kg to Litres of Paint Converter | Emulsion Density Range 1.20–1.50 kg/L',
      description: 'Convert kilograms of paint to litres. Architectural emulsion density ranges from 1.200 to 1.500 kg/L based on pigment solids (1 kg = 0.667 to 0.833 L).',
      primary_kw: 'kg to litre paint',
      secondary_kws: ['paint density range kg/L', 'how many litres is 1 kg of paint', 'latex paint weight to volume', 'paint tub weight'],
    },
    content: {
      intro: 'Architectural wall paint density ranges from 1.200 kg/L (gloss/clear bases) to 1.500 kg/L (heavy matte paints with dense titanium dioxide and chalk fillers). 1 kg occupies between 0.667 and 0.833 litres (nominal: 0.741 L).',
      real_world_context: 'Matte ceiling paints have heavy mineral loading and high density (~1.45–1.50 kg/L), whereas satin and gloss finishes have higher resin content and lower density (~1.20–1.30 kg/L).',
      faq: [
        { q: 'Why is paint so much heavier than water?', a: 'Mineral pigments such as titanium dioxide (density 4.2 kg/L) and calcium carbonate fillers significantly raise the liquid emulsion density.' },
        { q: 'How many litres is 1 kg of paint?', a: '1 kg of wall paint equals approximately 0.741 litres (741 mL).' },
      ],
    },
  },

  // 10. Cement
  {
    id: 'cement',
    name: 'Portland Cement (Loose)',
    category: 'construction',
    density_kg_per_l: 1.250,
    densityRange: { min: 1.150, max: 1.550 },
    density_note: '1.150 kg/L (aerated loose powder in silo) to 1.550 kg/L (settled/compacted dry cement)',
    temperature: 20,
    source: 'ASTM C150 / ASTM C188 Standard Specification for Portland Cement',
    seo: {
      title: 'Kg to Litres of Cement Converter | Bulk Density Range 1.15–1.55 kg/L',
      description: 'Convert kg to litres of cement. Portland cement bulk density ranges from 1.150 kg/L (loose) to 1.550 kg/L (compacted).',
      primary_kw: 'kg to litre cement',
      secondary_kws: ['cement density range kg/L', '25kg cement to litres', 'cement compaction bulk density'],
    },
    content: {
      intro: 'Dry Portland cement bulk density varies between 1.150 kg/L (loose aerated powder) and 1.550 kg/L (compacted/settled). 1 kg occupies 0.645 to 0.870 litres (nominal loose: 0.800 L).',
      real_world_context: 'When pneumatic blowers fill cement silos, aeration drops bulk density to ~1.20 kg/L. During road transport vibration, it settles tightly to ~1.50 kg/L.',
      faq: [
        { q: 'Why does cement bulk density vary so widely?', a: 'Particle packing and aeration: fluidizing air creates void space, while mechanical vibration packs particles tightly together.' },
        { q: 'How many litres is a 25 kg bag of cement?', a: 'A standard 25 kg bag occupies approximately 16.7 to 20.0 litres of dry powder volume.' },
      ],
    },
  },

  // 11. Sand
  {
    id: 'sand',
    name: 'Dry Silica Sand',
    category: 'construction',
    density_kg_per_l: 1.600,
    densityRange: { min: 1.450, max: 1.850 },
    density_note: '1.450 kg/L (loose dry sand) to 1.850 kg/L (compacted damp aggregate)',
    temperature: 20,
    source: 'ASTM C29 Standard Test Method for Bulk Density of Aggregate',
    seo: {
      title: 'Kg to Litres of Sand Converter | Bulk Density Range 1.45–1.85 kg/L',
      description: 'Convert kilograms of sand to litres and m³. Sand bulk density ranges from 1.450 kg/L (loose dry) to 1.850 kg/L (wet compacted).',
      primary_kw: 'kg to litre sand',
      secondary_kws: ['sand density range kg/L', '1 tonne sand in litres', 'convert sand kg to m3', 'wet vs dry sand density'],
    },
    content: {
      intro: 'Building sand bulk density ranges from 1.450 kg/L (loose dry granular silica) to 1.850 kg/L (dense compacted damp sand). 1 metric tonne equals 540 to 690 litres (nominal: 625 L / 0.625 m³).',
      real_world_context: 'Moisture causes sand bulking: at 5% moisture, surface tension holds grains apart, lowering apparent bulk density, while full water saturation and compaction drive density to 1.90+ kg/L.',
      faq: [
        { q: 'How many litres is 1 tonne of sand?', a: '1 metric tonne (1,000 kg) of dry sand equals approximately 625 litres (0.625 m³).' },
        { q: 'What is the density difference between dry and wet sand?', a: 'Dry loose sand is ~1.60 kg/L, while compacted saturated sand reaches ~1.90–2.00 kg/L.' },
      ],
    },
  },

  // 12. Concrete
  {
    id: 'concrete',
    name: 'Ready-Mix Concrete (Wet)',
    category: 'construction',
    density_kg_per_l: 2.400,
    densityRange: { min: 2.200, max: 2.500 },
    density_note: '2.200 to 2.500 kg/L depending on aggregate mix design (lightweight vs normal vs heavy dense mixes)',
    temperature: 20,
    source: 'ASTM C138 Standard Test Method for Density (Unit Weight) of Concrete',
    seo: {
      title: 'Kg to Litres of Concrete Converter | Density Range 2.20–2.50 kg/L',
      description: 'Convert kg of concrete to litres and m³. Structural concrete density ranges from 2.200 to 2.500 kg/L (1 m³ = 2,200 to 2,500 kg).',
      primary_kw: 'kg to litre concrete',
      secondary_kws: ['concrete density range kg/L', 'concrete unit weight', 'convert concrete kg to m3', 'ready mix concrete volume'],
    },
    content: {
      intro: 'Fresh structural concrete ranges from 2.200 kg/L (higher water/sand ratio) to 2.500 kg/L (heavy dense gravel mixes). Nominal standard wet concrete is 2.400 kg/L (2,400 kg/m³).',
      real_world_context: 'Special lightweight structural concretes with expanded shale drop to 1.60–1.80 kg/L, while radiation shielding concrete with barite aggregates exceeds 3.20 kg/L.',
      faq: [
        { q: 'How much does 1 cubic metre (1,000 L) of concrete weigh?', a: '1 cubic metre of normal structural concrete weighs approximately 2,400 kg (2.4 metric tonnes).' },
        { q: 'What is the density range of wet concrete?', a: 'Standard normal-weight structural concrete ranges between 2,200 and 2,500 kg/m³ (2.20 to 2.50 kg/L).' },
      ],
    },
  },

  // 13. Acetone
  {
    id: 'acetone',
    name: 'Acetone',
    category: 'industrial',
    density_kg_per_l: 0.784,
    densityRange: { min: 0.780, max: 0.790 },
    density_note: '0.780 to 0.790 kg/L across 15°C to 25°C temperature range',
    temperature: 20,
    source: 'CRC Handbook of Chemistry and Physics / NIST',
    seo: {
      title: 'Kg to Litres of Acetone Converter | Solvent Density 0.780–0.790 kg/L',
      description: 'Convert kg to litres of pure acetone solvent. Density is 0.784 kg/L at 20°C (1 kg = 1.276 L).',
      primary_kw: 'kg to litre acetone',
      secondary_kws: ['acetone density range', '1 kg acetone in litres', 'acetone weight to volume'],
    },
    content: {
      intro: 'Pure technical grade acetone has a density of 0.784 kg/L at 20°C (ranging from 0.780 kg/L at 25°C to 0.790 kg/L at 15°C). 1 kg equals 1.276 litres.',
      real_world_context: 'Because acetone is highly volatile with a high thermal expansion rate, chemical storage drums require thermal ullage allowance.',
      faq: [{ q: 'How many litres is 1 kg of acetone?', a: '1 kg of pure acetone equals approximately 1.276 litres at 20°C.' }],
    },
  },

  // 14. Ethanol
  {
    id: 'ethanol',
    name: 'Ethanol (100%)',
    category: 'industrial',
    density_kg_per_l: 0.789,
    densityRange: { min: 0.785, max: 0.795 },
    density_note: '0.785 to 0.795 kg/L for pure to high-grade technical alcohol (15°C–25°C)',
    temperature: 20,
    source: 'IUPAC / CRC Handbook of Chemistry and Physics',
    seo: {
      title: 'Kg to Litres of Ethanol Converter | Ethyl Alcohol Density Range',
      description: 'Convert kg to litres of pure ethanol. Anhydrous ethanol density is 0.789 kg/L at 20°C (1 kg = 1.267 L).',
      primary_kw: 'kg to litre ethanol',
      secondary_kws: ['ethanol density range kg/L', 'convert ethanol kg to liters', 'ethyl alcohol weight to volume'],
    },
    content: {
      intro: 'Anhydrous ethanol (100% ethyl alcohol) has a density of 0.789 kg/L at 20°C. 1 kg of pure ethanol occupies 1.267 litres.',
      real_world_context: 'Hydrometer tables measure alcohol by volume (ABV) by tracking density: 40% ABV spirits have a density of ~0.948 kg/L.',
      faq: [{ q: 'How many litres is 1 kg of pure ethanol?', a: '1 kg of 100% ethanol equals approximately 1.267 litres.' }],
    },
  },

  // 15. Methanol
  {
    id: 'methanol',
    name: 'Methanol (Wood Alcohol)',
    category: 'industrial',
    density_kg_per_l: 0.792,
    densityRange: { min: 0.788, max: 0.796 },
    density_note: '0.788 to 0.796 kg/L across standard temperature ranges (15°C–25°C)',
    temperature: 20,
    source: 'CRC Handbook of Chemistry and Physics / NIST',
    seo: {
      title: 'Kg to Litres of Methanol Converter | Methyl Alcohol Density',
      description: 'Convert kg to litres of methanol. Industrial methyl alcohol density is 0.792 kg/L (1 kg = 1.263 L).',
      primary_kw: 'kg to litre methanol',
      secondary_kws: ['methanol density range', '1 kg methanol to litres', 'methyl alcohol weight to volume'],
    },
    content: {
      intro: 'Industrial methanol (methyl alcohol) has a density of 0.792 kg/L at 20°C. 1 kg occupies 1.263 litres.',
      real_world_context: 'Widely used in biodiesel production, chemical synthesis, and high-performance racing fuel blends.',
      faq: [{ q: 'How many litres is 1 kg of methanol?', a: '1 kg of methanol equals approximately 1.263 litres.' }],
    },
  },

  // 16. Glycerin
  {
    id: 'glycerin',
    name: 'Glycerin / Glycerol',
    category: 'industrial',
    density_kg_per_l: 1.261,
    densityRange: { min: 1.250, max: 1.265 },
    density_note: '1.250 to 1.265 kg/L depending on purity assay (95% to 99.5% USP grade)',
    temperature: 20,
    source: 'United States Pharmacopeia (USP) / CRC Handbook',
    seo: {
      title: 'Kg to Litres of Glycerin Converter | Glycerol Density Range',
      description: 'Convert kg to litres of glycerin (glycerol). Density ranges from 1.250 to 1.265 kg/L based on purity assay (1 kg = 0.791 to 0.800 L).',
      primary_kw: 'kg to litre glycerin',
      secondary_kws: ['glycerin density range kg/L', 'glycerol weight to volume', '1 kg glycerin to liters'],
    },
    content: {
      intro: 'Pure 99.5% USP glycerin has a high density of 1.261 kg/L. 1 kg of glycerin occupies only 0.793 litres (793 mL).',
      real_world_context: 'Glycerin is hygroscopic (absorbs atmospheric moisture): absorbing 5% water drops density to ~1.250 kg/L.',
      faq: [{ q: 'How many litres is 1 kg of glycerin?', a: '1 kg of pure USP glycerin equals approximately 0.793 litres (793 mL).' }],
    },
  },

  // 17. Flour
  {
    id: 'flour',
    name: 'All-Purpose Flour',
    category: 'cooking',
    density_kg_per_l: 0.590,
    densityRange: { min: 0.520, max: 0.650 },
    density_note: '0.520 kg/L (sifted/aerated) to 0.650 kg/L (scooped/compacted dry powder)',
    temperature: 20,
    source: 'USDA FoodData Central / AACC International',
    seo: {
      title: 'Kg to Litres of Flour Converter | Bulk Density Range 0.52–0.65 kg/L',
      description: 'Convert kg to litres of flour for baking. Bulk density ranges from 0.520 kg/L (sifted) to 0.650 kg/L (compacted).',
      primary_kw: 'kg to litre flour',
      secondary_kws: ['flour density range kg/L', 'how many liters in 1 kg of flour', 'flour packing density', 'kg to L baking flour'],
    },
    content: {
      intro: 'All-purpose flour bulk density ranges from 0.520 kg/L (aerated/sifted) to 0.650 kg/L (settled/compacted). 1 kg occupies between 1.538 and 1.923 litres (nominal: 1.695 L / ~7.16 cups).',
      real_world_context: 'Because scooping flour from a sack compresses void space by up to 25%, professional bakers always measure flour mass in kilograms for consistent hydration and crumb structure.',
      faq: [
        { q: 'Why does flour density vary from 0.52 to 0.65 kg/L?', a: 'Flour particles trap varying amounts of air. Sifting aerates the powder (lower density), while scooping or tapping compacts it (higher density).' },
        { q: 'How many litres is 1 kg of flour?', a: '1 kg of standard sifted all-purpose flour equals approximately 1.695 litres.' },
      ],
    },
  },

  // 18. Sugar
  {
    id: 'sugar',
    name: 'Granulated Sugar',
    category: 'cooking',
    density_kg_per_l: 0.850,
    densityRange: { min: 0.800, max: 0.900 },
    density_note: '0.800 kg/L (loose) to 0.900 kg/L (settled/packed white sucrose crystals)',
    temperature: 20,
    source: 'USDA FoodData Central / Sugar Industry Standards',
    seo: {
      title: 'Kg to Litres of Sugar Converter | Bulk Density Range 0.80–0.90 kg/L',
      description: 'Convert kg to litres of granulated sugar. Bulk density ranges from 0.800 to 0.900 kg/L (1 kg = 1.111 to 1.250 L).',
      primary_kw: 'kg to litre sugar',
      secondary_kws: ['sugar density range kg/L', '1 kg sugar in litres', 'convert sugar kg to L', 'granulated sugar volume'],
    },
    content: {
      intro: 'White granulated sugar has a bulk density ranging between 0.800 kg/L and 0.900 kg/L (standard nominal: 0.850 kg/L). 1 kg occupies approximately 1.176 litres.',
      real_world_context: 'In confectionery manufacturing, dry sugar mass is dissolved into water to produce simple syrups with specific Brix densities.',
      faq: [{ q: 'How many litres is 1 kg of granulated sugar?', a: '1 kg of granulated white sugar occupies approximately 1.176 litres (approx. 4.97 US cups).' }],
    },
  },

  // 19. Rice
  {
    id: 'rice',
    name: 'White Rice (Dry)',
    category: 'cooking',
    density_kg_per_l: 0.800,
    densityRange: { min: 0.750, max: 0.850 },
    density_note: '0.750 to 0.850 kg/L depending on grain variety (long-grain vs short-grain vs basmati) and moisture',
    temperature: 20,
    source: 'USDA FoodData Central / IRRI Rice Standards',
    seo: {
      title: 'Kg to Litres of Rice Converter | Grain Density Range 0.75–0.85 kg/L',
      description: 'Convert kg to litres of dry white rice. Density ranges from 0.750 to 0.850 kg/L depending on grain variety (1 kg = 1.176 to 1.333 L).',
      primary_kw: 'kg to litre rice',
      secondary_kws: ['rice density range kg/L', '1 kg rice in litres', 'rice weight to volume'],
    },
    content: {
      intro: 'Dry raw white rice bulk density ranges from 0.750 kg/L (loose long-grain) to 0.850 kg/L (compacted short-grain). 1 kg occupies between 1.176 and 1.333 litres (nominal: 1.250 L).',
      real_world_context: 'Grain storage elevator engineers calculate silo volumetric capacity and structural floor loads based on bulk grain densities.',
      faq: [{ q: 'How many litres is 1 kg of rice?', a: '1 kg of dry white rice equals approximately 1.250 litres (5.28 US cups).' }],
    },
  },

  // 20. Butter
  {
    id: 'butter',
    name: 'Butter / Ghee (Melted)',
    category: 'cooking',
    density_kg_per_l: 0.911,
    densityRange: { min: 0.890, max: 0.920 },
    density_note: '0.890 to 0.920 kg/L for liquid butterfat and clarified ghee (35°C–50°C)',
    temperature: 35,
    source: 'USDA FoodData Central / Dairy Processing Handbook',
    seo: {
      title: 'Kg to Litres of Butter & Ghee Converter | Melted Fat Density Range',
      description: 'Convert kg to litres of melted butter and ghee. Liquid butterfat density ranges from 0.890 to 0.920 kg/L (1 kg = 1.087 to 1.124 L).',
      primary_kw: 'kg to litre butter',
      secondary_kws: ['butter density range kg/L', 'ghee weight to volume', '1 kg butter in litres', 'melted butterfat volume'],
    },
    content: {
      intro: 'Melted butter and clarified ghee range in density from 0.890 kg/L to 0.920 kg/L (nominal: 0.911 kg/L at 35°C). 1 kg occupies approximately 1.098 litres.',
      real_world_context: 'Solid butter contains ~16% water emulsified in fat, whereas clarified ghee is 99.8% pure butterfat with no water.',
      faq: [{ q: 'How many litres is 1 kg of melted butter?', a: '1 kg of melted butter equals approximately 1.098 litres.' }],
    },
  },

  // 21. Sunflower Oil
  {
    id: 'sunflower-oil',
    name: 'Sunflower Oil',
    category: 'cooking',
    density_kg_per_l: 0.919,
    densityRange: { min: 0.915, max: 0.923 },
    density_note: '0.915 to 0.923 kg/L at 20°C across standard and high-oleic varieties',
    temperature: 20,
    source: 'Codex Standard for Named Vegetable Oils (CODEX STAN 210-1999)',
    seo: {
      title: 'Kg to Litres of Sunflower Oil Converter | Density Range 0.915–0.923 kg/L',
      description: 'Convert kg to litres of sunflower oil. 1 kg occupies 1.083 to 1.093 litres at 20°C.',
      primary_kw: 'kg to litre sunflower oil',
      secondary_kws: ['sunflower oil density range', 'sunflower oil weight to volume', '1 kg sunflower oil in L'],
    },
    content: {
      intro: 'Refined sunflower oil density is tightly regulated between 0.915 kg/L and 0.923 kg/L at 20°C. 1 kg equals 1.088 litres.',
      real_world_context: 'Widely used in commercial frying and snack food manufacturing.',
      faq: [{ q: 'How many litres is 1 kg of sunflower oil?', a: '1 kg of sunflower oil equals 1.088 litres.' }],
    },
  },

  // 22. Canola Oil
  {
    id: 'canola-oil',
    name: 'Canola Oil (Rapeseed)',
    category: 'cooking',
    density_kg_per_l: 0.915,
    densityRange: { min: 0.912, max: 0.920 },
    density_note: '0.912 to 0.920 kg/L at 20°C for refined low-erucic rapeseed oil',
    temperature: 20,
    source: 'Codex Standard 210-1999 / USDA',
    seo: {
      title: 'Kg to Litres of Canola Oil Converter | Rapeseed Oil Density',
      description: 'Convert kg to litres of canola oil. Refined canola density ranges from 0.912 to 0.920 kg/L (1 kg = 1.087 to 1.096 L).',
      primary_kw: 'kg to litre canola oil',
      secondary_kws: ['canola oil density range', 'rapeseed oil weight to volume', '1 kg canola oil in litres'],
    },
    content: {
      intro: 'Canola oil has a density of 0.915 kg/L at 20°C (range: 0.912–0.920 kg/L). 1 kg equals 1.093 litres.',
      real_world_context: 'Major culinary oil and renewable biofuel feed oil.',
      faq: [{ q: 'How many litres is 1 kg of canola oil?', a: '1 kg of canola oil equals 1.093 litres.' }],
    },
  },

  // 23. Palm Oil
  {
    id: 'palm-oil',
    name: 'Refined Palm Oil',
    category: 'cooking',
    density_kg_per_l: 0.890,
    densityRange: { min: 0.885, max: 0.900 },
    density_note: '0.885 to 0.900 kg/L for liquid fraction (olein) at 50°C processing temperature',
    temperature: 50,
    source: 'Malaysian Palm Oil Board (MPOB) / Codex Alimentarius',
    seo: {
      title: 'Kg to Litres of Palm Oil Converter | Palm Olein Density Range',
      description: 'Convert kg to litres of refined palm oil. Liquid palm olein density is ~0.890 kg/L at 50°C (1 kg = 1.111 to 1.130 L).',
      primary_kw: 'kg to litre palm oil',
      secondary_kws: ['palm oil density range', 'palm olein weight to volume', '1 kg palm oil in litres'],
    },
    content: {
      intro: 'Refined liquid palm olein has a processing density of 0.890 kg/L at 50°C. 1 kg occupies 1.124 litres.',
      real_world_context: 'Shipped in heated tanker vessels to maintain liquid viscosity before refining.',
      faq: [{ q: 'How many litres is 1 kg of palm oil?', a: '1 kg of liquid palm oil equals 1.124 litres at 50°C.' }],
    },
  },

  // 24. Heavy Cream
  {
    id: 'cream',
    name: 'Heavy Double Cream',
    category: 'cooking',
    density_kg_per_l: 0.994,
    densityRange: { min: 0.985, max: 1.005 },
    density_note: '0.985 to 1.005 kg/L depending on butterfat percentage (36% to 48% fat)',
    temperature: 20,
    source: 'USDA FoodData Central / Dairy Processing Handbook',
    seo: {
      title: 'Kg to Litres of Heavy Cream Converter | Double Cream Density Range',
      description: 'Convert kg to litres of heavy cream. High-fat cream density ranges from 0.985 to 1.005 kg/L (1 kg = 0.995 to 1.015 L).',
      primary_kw: 'kg to litre heavy cream',
      secondary_kws: ['double cream density range', 'cream weight to volume', '1 kg cream in litres'],
    },
    content: {
      intro: 'Heavy double whipping cream contains 36–48% butterfat, giving it a density range of 0.985 to 1.005 kg/L (nominal: 0.994 kg/L). 1 kg equals 1.006 litres.',
      real_world_context: 'Pastry chefs scale cream recipes by weight to eliminate measuring jug meniscus reading errors.',
      faq: [{ q: 'Is 1 kg of heavy cream equal to 1 litre?', a: 'Almost exactly. 1 kg of heavy cream equals 1.006 litres.' }],
    },
  },

  // 25. Kerosene
  {
    id: 'kerosene',
    name: 'Kerosene / Paraffin Oil',
    category: 'fuels',
    density_kg_per_l: 0.810,
    densityRange: { min: 0.790, max: 0.825 },
    density_note: '0.790 to 0.825 kg/L at 15°C across standard domestic heating and lighting grades',
    temperature: 15,
    source: 'ASTM D3699 Standard Specification for Kerosine',
    seo: {
      title: 'Kg to Litres of Kerosene Converter | Heating Oil Density Range',
      description: 'Convert kg to litres of kerosene. Standard heating kerosene density ranges from 0.790 to 0.825 kg/L (1 kg = 1.212 to 1.266 L).',
      primary_kw: 'kg to litre kerosene',
      secondary_kws: ['kerosene density range kg/L', 'heating oil weight to volume', '1 kg kerosene in litres'],
    },
    content: {
      intro: 'Domestic kerosene heating oil has a standard density range of 0.790 to 0.825 kg/L at 15°C (nominal: 0.810 kg/L). 1 kg occupies 1.235 litres.',
      real_world_context: 'Residential heating oil delivery tankers calculate custody transfer volumes using temperature compensated meters.',
      faq: [{ q: 'How many litres is 1 kg of kerosene?', a: '1 kg of kerosene equals approximately 1.235 litres.' }],
    },
  },

  // 26. Jet Fuel
  {
    id: 'jet-fuel',
    name: 'Aviation Jet Fuel A-1',
    category: 'fuels',
    density_kg_per_l: 0.804,
    densityRange: { min: 0.775, max: 0.840 },
    density_note: '0.775 to 0.840 kg/L at 15°C per ASTM D1655 / DEF STAN 91-091',
    temperature: 15,
    source: 'ASTM D1655 / IATA Guidance Material on Fuel Quality',
    seo: {
      title: 'Kg to Litres of Jet Fuel A-1 Converter | Aviation Density Range',
      description: 'Convert kg to litres of Jet A-1 aviation fuel. Density ranges from 0.775 to 0.840 kg/L (1 kg = 1.190 to 1.290 L).',
      primary_kw: 'kg to litre jet fuel',
      secondary_kws: ['jet a1 density range', 'aviation fuel weight to volume', 'convert jet fuel kg to litres'],
    },
    content: {
      intro: 'Jet A-1 aviation fuel has an allowable density range of 0.775 to 0.840 kg/L at 15°C (standard nominal: 0.804 kg/L). 1 kg equals 1.244 litres.',
      real_world_context: 'Aircraft flight planners measure fuel uplift in kilograms or pounds to calculate maximum takeoff weight and center of gravity.',
      faq: [{ q: 'How many litres is 1 kg of Jet A-1 fuel?', a: '1 kg of Jet A-1 equals approximately 1.244 litres.' }],
    },
  },

  // 27. Biodiesel
  {
    id: 'biodiesel',
    name: 'Biodiesel B100 (FAME)',
    category: 'fuels',
    density_kg_per_l: 0.880,
    densityRange: { min: 0.860, max: 0.900 },
    density_note: '0.860 to 0.900 kg/L at 15°C under EN 14214 specification',
    temperature: 15,
    source: 'European Standard EN 14214 / ASTM D6751',
    seo: {
      title: 'Kg to Litres of Biodiesel B100 Converter | FAME Density Range',
      description: 'Convert kg to litres of 100% pure biodiesel (B100). Density ranges from 0.860 to 0.900 kg/L under EN 14214 (1 kg = 1.111 to 1.163 L).',
      primary_kw: 'kg to litre biodiesel',
      secondary_kws: ['biodiesel density range', 'b100 weight to volume', 'convert biodiesel kg to L'],
    },
    content: {
      intro: 'Pure biodiesel (B100 Fatty Acid Methyl Esters) density is specified between 0.860 and 0.900 kg/L at 15°C (nominal: 0.880 kg/L). 1 kg equals 1.136 litres.',
      real_world_context: 'Biodiesel is denser than mineral diesel (0.832 kg/L), so blending B7 or B20 slightly increases total fuel density.',
      faq: [{ q: 'How many litres is 1 kg of biodiesel?', a: '1 kg of B100 biodiesel equals approximately 1.136 litres.' }],
    },
  },

  // 28. Isopropyl Alcohol
  {
    id: 'isopropyl-alcohol',
    name: 'Isopropyl Alcohol (99%)',
    category: 'industrial',
    density_kg_per_l: 0.786,
    densityRange: { min: 0.783, max: 0.790 },
    density_note: '0.783 to 0.790 kg/L at 20°C for 99% electronic/technical grade',
    temperature: 20,
    source: 'CRC Handbook of Chemistry and Physics / USP',
    seo: {
      title: 'Kg to Litres of Isopropyl Alcohol Converter | IPA Density Range',
      description: 'Convert kg to litres of 99% isopropyl alcohol (IPA). Density is 0.786 kg/L at 20°C (1 kg = 1.272 L).',
      primary_kw: 'kg to litre isopropyl alcohol',
      secondary_kws: ['ipa density range', 'rubbing alcohol weight to volume', '1 kg isopropanol to litres'],
    },
    content: {
      intro: 'Pure 99% isopropyl alcohol (isopropanol) has a density of 0.786 kg/L at 20°C. 1 kg occupies 1.272 litres.',
      real_world_context: 'Diluting IPA to 70% rubbing alcohol with water increases density to ~0.878 kg/L.',
      faq: [{ q: 'How many litres is 1 kg of isopropyl alcohol?', a: '1 kg of 99% IPA equals 1.272 litres.' }],
    },
  },

  // 29. Sulfuric Acid
  {
    id: 'sulfuric-acid',
    name: 'Sulfuric Acid (98%)',
    category: 'industrial',
    density_kg_per_l: 1.840,
    densityRange: { min: 1.830, max: 1.845 },
    density_note: '1.830 to 1.845 kg/L for 96% to 98% concentrated technical acid at 20°C',
    temperature: 20,
    source: 'CRC Handbook of Chemistry and Physics / NIST',
    seo: {
      title: 'Kg to Litres of Sulfuric Acid Converter | 98% H2SO4 Density Range',
      description: 'Convert kg to litres of 98% concentrated sulfuric acid. Density is 1.840 kg/L at 20°C (1 kg = 0.543 L / 543 mL).',
      primary_kw: 'kg to litre sulfuric acid',
      secondary_kws: ['sulfuric acid density range', 'h2so4 weight to volume', '1 kg sulfuric acid in litres'],
    },
    content: {
      intro: 'Concentrated 98% sulfuric acid is extremely dense (1.840 kg/L at 20°C). 1 kg occupies only 0.543 litres (543 mL).',
      real_world_context: 'Battery electrolyte acid (33% H2SO4) has a lower density of ~1.250 kg/L measured by automotive hydrometers.',
      faq: [{ q: 'How many litres is 1 kg of concentrated sulfuric acid?', a: '1 kg of 98% sulfuric acid equals approximately 0.543 litres.' }],
    },
  },

  // 30. Hydrochloric Acid
  {
    id: 'hydrochloric-acid',
    name: 'Hydrochloric Acid (37%)',
    category: 'industrial',
    density_kg_per_l: 1.190,
    densityRange: { min: 1.180, max: 1.195 },
    density_note: '1.180 to 1.195 kg/L for 35% to 38% concentrated fuming muriatic acid',
    temperature: 20,
    source: 'CRC Handbook of Chemistry and Physics',
    seo: {
      title: 'Kg to Litres of Hydrochloric Acid Converter | 37% HCl Density',
      description: 'Convert kg to litres of 37% hydrochloric acid. Density is 1.190 kg/L at 20°C (1 kg = 0.840 L).',
      primary_kw: 'kg to litre hydrochloric acid',
      secondary_kws: ['hcl density range', 'muriatic acid weight to volume', '1 kg hcl in litres'],
    },
    content: {
      intro: 'Concentrated 37% hydrochloric acid (muriatic acid) has a density of 1.190 kg/L at 20°C. 1 kg occupies 0.840 litres (840 mL).',
      real_world_context: 'Commercial pool acid (~31% HCl) has a density of ~1.155 kg/L.',
      faq: [{ q: 'How many litres is 1 kg of 37% HCl?', a: '1 kg of 37% hydrochloric acid equals 0.840 litres.' }],
    },
  },

  // 31. Nitric Acid
  {
    id: 'nitric-acid',
    name: 'Nitric Acid (68%)',
    category: 'industrial',
    density_kg_per_l: 1.410,
    densityRange: { min: 1.400, max: 1.420 },
    density_note: '1.400 to 1.420 kg/L for 65% to 70% commercial azeotropic acid',
    temperature: 20,
    source: 'CRC Handbook of Chemistry and Physics',
    seo: {
      title: 'Kg to Litres of Nitric Acid Converter | 68% HNO3 Density',
      description: 'Convert kg to litres of 68% nitric acid. Density is 1.410 kg/L (1 kg = 0.709 L).',
      primary_kw: 'kg to litre nitric acid',
      secondary_kws: ['nitric acid density range', 'hno3 weight to volume', '1 kg nitric acid in litres'],
    },
    content: {
      intro: 'Concentrated 68% azeotropic nitric acid has a density of 1.410 kg/L at 20°C. 1 kg occupies 0.709 litres.',
      real_world_context: 'Used extensively in nitrate fertilizer production and metal etching.',
      faq: [{ q: 'How many litres is 1 kg of 68% nitric acid?', a: '1 kg of 68% nitric acid equals 0.709 litres.' }],
    },
  },

  // 32. Sodium Hydroxide
  {
    id: 'sodium-hydroxide',
    name: 'Sodium Hydroxide (50% Solution)',
    category: 'industrial',
    density_kg_per_l: 1.525,
    densityRange: { min: 1.510, max: 1.540 },
    density_note: '1.510 to 1.540 kg/L for 48% to 52% liquid caustic soda solution at 20°C',
    temperature: 20,
    source: 'OxyChem Caustic Soda Handbook / CRC Handbook',
    seo: {
      title: 'Kg to Litres of Sodium Hydroxide Converter | 50% Caustic Soda',
      description: 'Convert kg to litres of 50% liquid caustic soda (NaOH). Density is 1.525 kg/L (1 kg = 0.656 L).',
      primary_kw: 'kg to litre sodium hydroxide',
      secondary_kws: ['caustic soda density range', 'naoh 50% weight to volume', '1 kg caustic soda to litres'],
    },
    content: {
      intro: 'Liquid 50% caustic soda (sodium hydroxide) has a high density of 1.525 kg/L at 20°C. 1 kg occupies 0.656 litres.',
      real_world_context: '50% caustic solution begins freezing at 12°C, so bulk storage tanks are heated in winter.',
      faq: [{ q: 'How many litres is 1 kg of 50% caustic soda?', a: '1 kg of 50% NaOH equals 0.656 litres.' }],
    },
  },

  // 33. Maple Syrup
  {
    id: 'maple-syrup',
    name: 'Pure Maple Syrup',
    category: 'cooking',
    density_kg_per_l: 1.320,
    densityRange: { min: 1.315, max: 1.335 },
    density_note: '1.315 to 1.335 kg/L for legal Grade A standard (66.0° to 67.0° Brix)',
    temperature: 20,
    source: 'USDA Standards for Grades of Maple Syrup / IMSI',
    seo: {
      title: 'Kg to Litres of Maple Syrup Converter | Grade A Density Range',
      description: 'Convert kg to litres of pure maple syrup. Grade A density ranges from 1.315 to 1.335 kg/L (1 kg = 0.749 to 0.760 L).',
      primary_kw: 'kg to litre maple syrup',
      secondary_kws: ['maple syrup density range', 'maple syrup weight to volume', '1 kg maple syrup in litres'],
    },
    content: {
      intro: 'Pure Grade A maple syrup must legally be between 66.0° and 67.0° Brix, corresponding to a density range of 1.315 to 1.335 kg/L (nominal: 1.320 kg/L). 1 kg occupies 0.758 litres.',
      real_world_context: 'Producers calibrate syrup hydrometers during boiling: under 66° Brix will spoil, while over 67° Brix forms sugar crystals.',
      faq: [{ q: 'How many litres is 1 kg of maple syrup?', a: '1 kg of pure maple syrup equals 0.758 litres (758 mL).' }],
    },
  },

  // 34. Molasses
  {
    id: 'molasses',
    name: 'Blackstrap Molasses',
    category: 'cooking',
    density_kg_per_l: 1.400,
    densityRange: { min: 1.380, max: 1.430 },
    density_note: '1.380 to 1.430 kg/L for cane blackstrap molasses (79.5° to 85° Brix)',
    temperature: 20,
    source: 'USDA FoodData Central / Sugar Industry Standards',
    seo: {
      title: 'Kg to Litres of Molasses Converter | Cane Molasses Density Range',
      description: 'Convert kg to litres of blackstrap molasses. Density ranges from 1.380 to 1.430 kg/L (1 kg = 0.699 to 0.725 L).',
      primary_kw: 'kg to litre molasses',
      secondary_kws: ['molasses density range', 'molasses weight to volume', '1 kg molasses in litres'],
    },
    content: {
      intro: 'Blackstrap cane molasses has a density between 1.380 kg/L and 1.430 kg/L (nominal: 1.400 kg/L). 1 kg occupies 0.714 litres.',
      real_world_context: 'Widely used in cattle feeds, commercial rum distilleries, and specialty baking.',
      faq: [{ q: 'How many litres is 1 kg of molasses?', a: '1 kg of molasses equals 0.714 litres (714 mL).' }],
    },
  },

  // 35. Corn Syrup
  {
    id: 'corn-syrup',
    name: 'Corn Syrup (HFCS 55)',
    category: 'cooking',
    density_kg_per_l: 1.370,
    densityRange: { min: 1.350, max: 1.390 },
    density_note: '1.350 to 1.390 kg/L for 77% to 80% dry solids high fructose corn syrup',
    temperature: 20,
    source: 'Corn Refiners Association (CRA) Standards',
    seo: {
      title: 'Kg to Litres of Corn Syrup Converter | HFCS Density Range',
      description: 'Convert kg to litres of high fructose corn syrup. Density ranges from 1.350 to 1.390 kg/L (1 kg = 0.719 to 0.741 L).',
      primary_kw: 'kg to litre corn syrup',
      secondary_kws: ['corn syrup density range', 'hfcs weight to volume', '1 kg corn syrup in litres'],
    },
    content: {
      intro: 'High fructose corn syrup (HFCS 55) has a density of 1.370 kg/L at 20°C. 1 kg occupies 0.730 litres.',
      real_world_context: 'Major bulk liquid ingredient in commercial beverage and confectionery production.',
      faq: [{ q: 'How many litres is 1 kg of corn syrup?', a: '1 kg of corn syrup equals 0.730 litres.' }],
    },
  },

  // 36. Vinegar
  {
    id: 'vinegar',
    name: 'Distilled White Vinegar (5%)',
    category: 'cooking',
    density_kg_per_l: 1.010,
    densityRange: { min: 1.005, max: 1.015 },
    density_note: '1.005 to 1.015 kg/L for 4% to 6% household distilled acetic acid',
    temperature: 20,
    source: 'USDA FoodData Central / Vinegar Institute',
    seo: {
      title: 'Kg to Litres of Vinegar Converter | White Vinegar Density Range',
      description: 'Convert kg to litres of distilled white vinegar. Density is 1.010 kg/L (1 kg = 0.990 L).',
      primary_kw: 'kg to litre vinegar',
      secondary_kws: ['vinegar density range', 'vinegar weight to volume', '1 kg vinegar in litres'],
    },
    content: {
      intro: 'Distilled white vinegar (5% acidity) has a density of 1.010 kg/L at 20°C. 1 kg equals 0.990 litres (990 mL).',
      real_world_context: 'Industrial cleaning vinegars (20% to 30% acidity) reach densities of ~1.035 kg/L.',
      faq: [{ q: 'How many litres is 1 kg of vinegar?', a: '1 kg of white vinegar equals 0.990 litres.' }],
    },
  },

  // 37. Bleach
  {
    id: 'bleach',
    name: 'Household Bleach (5%)',
    category: 'cleaning',
    density_kg_per_l: 1.080,
    densityRange: { min: 1.070, max: 1.095 },
    density_note: '1.070 to 1.095 kg/L for 5% to 6% sodium hypochlorite liquid',
    temperature: 20,
    source: 'Chlorine Institute / Manufacturer Safety Data Sheets',
    seo: {
      title: 'Kg to Litres of Bleach Converter | Sodium Hypochlorite Density',
      description: 'Convert kg to litres of 5% household bleach. Density is 1.080 kg/L (1 kg = 0.926 L).',
      primary_kw: 'kg to litre bleach',
      secondary_kws: ['bleach density range', 'sodium hypochlorite weight to volume', '1 kg bleach in litres'],
    },
    content: {
      intro: '5% sodium hypochlorite household bleach solution has a density of 1.080 kg/L at 20°C. 1 kg equals 0.926 litres.',
      real_world_context: 'Commercial 12.5% pool chlorine bleach is denser at ~1.200 kg/L.',
      faq: [{ q: 'How many litres is 1 kg of bleach?', a: '1 kg of 5% bleach equals 0.926 litres (926 mL).' }],
    },
  },

  // 38. Brake Fluid
  {
    id: 'brake-fluid',
    name: 'Brake Fluid (DOT 4)',
    category: 'automotive',
    density_kg_per_l: 1.040,
    densityRange: { min: 1.030, max: 1.060 },
    density_note: '1.030 to 1.060 kg/L for glycol-ether based DOT 3, DOT 4, and DOT 5.1 fluids',
    temperature: 20,
    source: 'FMVSS 116 / SAE J1704 Brake Fluid Standard',
    seo: {
      title: 'Kg to Litres of Brake Fluid Converter | DOT 4 Density Range',
      description: 'Convert kg to litres of DOT 4 automotive brake fluid. Density ranges from 1.030 to 1.060 kg/L (1 kg = 0.943 to 0.971 L).',
      primary_kw: 'kg to litre brake fluid',
      secondary_kws: ['brake fluid density range', 'dot 4 weight to volume', '1 kg brake fluid in litres'],
    },
    content: {
      intro: 'DOT 4 glycol-ether hydraulic brake fluid has a density of 1.040 kg/L at 20°C (range: 1.030–1.060 kg/L). 1 kg occupies 0.962 litres.',
      real_world_context: 'Brake fluid is hygroscopic; water contamination lowers boiling point but slightly alters density.',
      faq: [{ q: 'How many litres is 1 kg of brake fluid?', a: '1 kg of DOT 4 brake fluid equals 0.962 litres.' }],
    },
  },

  // 39. Transmission Fluid
  {
    id: 'transmission-fluid',
    name: 'Automatic Transmission Fluid (ATF)',
    category: 'automotive',
    density_kg_per_l: 0.860,
    densityRange: { min: 0.845, max: 0.875 },
    density_note: '0.845 to 0.875 kg/L for Dexron VI / Mercon LV synthetic automatic transmission fluids',
    temperature: 20,
    source: 'GM Dexron / Ford Mercon Standards / ASTM D4052',
    seo: {
      title: 'Kg to Litres of Transmission Fluid Converter | ATF Density Range',
      description: 'Convert kg to litres of automatic transmission fluid (ATF). Density is 0.860 kg/L (1 kg = 1.163 L).',
      primary_kw: 'kg to litre transmission fluid',
      secondary_kws: ['atf density range', 'transmission oil weight to volume', '1 kg atf in litres'],
    },
    content: {
      intro: 'Synthetic automatic transmission fluid (ATF) averages 0.860 kg/L at 20°C (range: 0.845–0.875 kg/L). 1 kg occupies 1.163 litres.',
      real_world_context: 'Transmission rebuild shops order bulk drums by weight while filling transmissions to exact dipstick volumes.',
      faq: [{ q: 'How many litres is 1 kg of ATF?', a: '1 kg of ATF equals 1.163 litres.' }],
    },
  },

  // 40. Coolant
  {
    id: 'coolant',
    name: 'Engine Coolant / Antifreeze (50/50)',
    category: 'automotive',
    density_kg_per_l: 1.070,
    densityRange: { min: 1.060, max: 1.085 },
    density_note: '1.060 to 1.085 kg/L for 50/50 premixed ethylene glycol and water antifreeze',
    temperature: 20,
    source: 'ASTM D3306 Standard Specification for Glycol Base Engine Coolant',
    seo: {
      title: 'Kg to Litres of Coolant Converter | 50/50 Antifreeze Density',
      description: 'Convert kg to litres of 50/50 engine coolant. Density is 1.070 kg/L at 20°C (1 kg = 0.935 L).',
      primary_kw: 'kg to litre coolant',
      secondary_kws: ['antifreeze density range', 'coolant weight to volume', '1 kg antifreeze in litres'],
    },
    content: {
      intro: 'Pre-diluted 50/50 ethylene glycol engine coolant has a density of 1.070 kg/L at 20°C. 1 kg equals 0.935 litres (935 mL).',
      real_world_context: 'Concentrated 100% pure antifreeze has a higher density of ~1.115 kg/L.',
      faq: [{ q: 'How many litres is 1 kg of 50/50 coolant?', a: '1 kg of 50/50 coolant equals 0.935 litres (935 mL).' }],
    },
  },

  // 41. Gravel
  {
    id: 'gravel',
    name: 'Crushed Stone Gravel (10-20mm)',
    category: 'construction',
    density_kg_per_l: 1.550,
    densityRange: { min: 1.450, max: 1.700 },
    density_note: '1.450 kg/L (loose clean single-size) to 1.700 kg/L (graded compacted base course)',
    temperature: 20,
    source: 'ASTM C29 / BS EN 1097-3',
    seo: {
      title: 'Kg to Litres of Gravel Converter | Crushed Stone Density Range',
      description: 'Convert kg to litres and m³ of crushed stone gravel. Bulk density ranges from 1.450 to 1.700 kg/L (1 tonne = 588 to 690 L).',
      primary_kw: 'kg to litre gravel',
      secondary_kws: ['gravel density range', '1 tonne gravel in litres', 'convert gravel kg to m3'],
    },
    content: {
      intro: 'Crushed stone gravel (10–20mm) has a loose bulk density of 1.550 kg/L (1,550 kg/m³). 1 tonne (1,000 kg) equals 645 litres (0.645 m³).',
      real_world_context: 'Graded aggregate sub-bases (MOT Type 1) with fine dust compact to ~1.70–1.80 kg/L.',
      faq: [{ q: 'How many litres is 1 tonne of gravel?', a: '1 tonne (1,000 kg) of gravel equals approximately 645 litres.' }],
    },
  },

  // 42. Mortar
  {
    id: 'mortar',
    name: 'Wet Masonry Mortar',
    category: 'construction',
    density_kg_per_l: 2.150,
    densityRange: { min: 2.000, max: 2.250 },
    density_note: '2.000 to 2.250 kg/L for fresh mixed masonry mortar (cement:sand:water)',
    temperature: 20,
    source: 'ASTM C270 Standard Specification for Mortar for Unit Masonry',
    seo: {
      title: 'Kg to Litres of Mortar Converter | Masonry Mortar Density Range',
      description: 'Convert kg to litres of fresh masonry mortar. Wet mortar density ranges from 2.000 to 2.250 kg/L (1 kg = 0.444 to 0.500 L).',
      primary_kw: 'kg to litre mortar',
      secondary_kws: ['mortar density range', 'wet mortar weight to volume', 'convert mortar kg to L'],
    },
    content: {
      intro: 'Fresh mixed wet masonry mortar has a density of 2.150 kg/L (range: 2.000–2.250 kg/L). 1 kg occupies 0.465 litres.',
      real_world_context: 'Dry unmixed mortar powder has a much lower bulk density (~1.45 kg/L) before water hydration.',
      faq: [{ q: 'How many litres is 100 kg of wet mortar?', a: '100 kg of wet mortar equals approximately 46.5 litres.' }],
    },
  },

  // 43. Topsoil
  {
    id: 'topsoil',
    name: 'Screened Dry Topsoil',
    category: 'agriculture',
    density_kg_per_l: 1.250,
    densityRange: { min: 1.100, max: 1.450 },
    density_note: '1.100 kg/L (high-organic loose soil) to 1.450 kg/L (mineral clay/sandy compacted topsoil)',
    temperature: 20,
    source: 'BS 3882 Specification for Topsoil / USDA Soil Survey',
    seo: {
      title: 'Kg to Litres of Topsoil Converter | Garden Soil Density Range',
      description: 'Convert kg to litres and m³ of topsoil. Bulk dry topsoil density ranges from 1.100 to 1.450 kg/L (1 tonne = 690 to 909 L).',
      primary_kw: 'kg to litre topsoil',
      secondary_kws: ['topsoil density range', '1 tonne topsoil in litres', 'convert topsoil kg to m3'],
    },
    content: {
      intro: 'Screened dry garden topsoil has a bulk density ranging from 1.100 kg/L to 1.450 kg/L (nominal: 1.250 kg/L). 1 tonne equals 800 litres (0.800 m³).',
      real_world_context: 'Moisture significantly increases soil weight: saturated wet topsoil can reach 1.60 kg/L (1,600 kg/m³).',
      faq: [{ q: 'How many litres is 1 tonne of topsoil?', a: '1 tonne (1,000 kg) of dry topsoil equals approximately 800 litres (0.800 m³).' }],
    },
  },

  // 44. Asphalt
  {
    id: 'asphalt',
    name: 'Compacted Asphalt / Bitumen',
    category: 'construction',
    density_kg_per_l: 2.350,
    densityRange: { min: 2.250, max: 2.450 },
    density_note: '2.250 to 2.450 kg/L for hot-mix asphalt surface and binder courses after roller compaction',
    temperature: 20,
    source: 'AASHTO T 166 / ASTM D2726 Bulk Specific Gravity of Compacted Asphalt',
    seo: {
      title: 'Kg to Litres of Asphalt Converter | Bituminous Paving Density Range',
      description: 'Convert kg of asphalt to litres and m³. Compacted asphalt density ranges from 2.250 to 2.450 kg/L (1 m³ = 2,250 to 2,450 kg).',
      primary_kw: 'kg to litre asphalt',
      secondary_kws: ['asphalt density range', 'bitumen weight to volume', 'convert asphalt kg to m3'],
    },
    content: {
      intro: 'Compacted hot-mix asphalt paving has a dense structural density of 2.350 kg/L (range: 2.250–2.450 kg/L). 1 m³ weighs 2.35 tonnes.',
      real_world_context: 'Loose uncompacted hot asphalt fresh from the plant has a lower bulk density of ~1.75–1.85 kg/L before roller passes.',
      faq: [{ q: 'How much does 1 m³ of asphalt weigh?', a: '1 cubic metre (1,000 L) of compacted asphalt weighs approximately 2,350 kg (2.35 tonnes).' }],
    },
  },

  // 45. Plaster
  {
    id: 'plaster',
    name: 'Gypsum Plaster (Dry)',
    category: 'construction',
    density_kg_per_l: 0.900,
    densityRange: { min: 0.800, max: 1.050 },
    density_note: '0.800 to 1.050 kg/L for loose dry hemihydrate gypsum powder',
    temperature: 20,
    source: 'ASTM C28 Standard Specification for Gypsum Plasters',
    seo: {
      title: 'Kg to Litres of Plaster Converter | Gypsum Powder Density Range',
      description: 'Convert kg to litres of dry gypsum plaster. Bulk density ranges from 0.800 to 1.050 kg/L (25 kg bag = 23.8 to 31.3 L).',
      primary_kw: 'kg to litre plaster',
      secondary_kws: ['plaster density range', 'gypsum powder weight to volume', '25kg plaster in litres'],
    },
    content: {
      intro: 'Dry gypsum plaster powder has a bulk density of 0.900 kg/L (range: 0.800–1.050 kg/L). A 25 kg bag occupies ~27.8 litres of dry volume.',
      real_world_context: 'When mixed with water to form wet plaster paste, density increases to ~1.40–1.60 kg/L.',
      faq: [{ q: 'How many litres is a 25 kg bag of plaster?', a: 'A 25 kg bag of dry gypsum plaster occupies approximately 27.78 litres.' }],
    },
  },

  // 46. Liquid Fertilizer
  {
    id: 'liquid-fertilizer',
    name: 'UAN-32 Liquid Fertilizer',
    category: 'agriculture',
    density_kg_per_l: 1.320,
    densityRange: { min: 1.300, max: 1.335 },
    density_note: '1.300 to 1.335 kg/L for 30% to 32% liquid nitrogen solutions at 15°C',
    temperature: 15,
    source: 'TFI (The Fertilizer Institute) Commercial Specifications',
    seo: {
      title: 'Kg to Litres of Liquid Fertilizer Converter | UAN-32 Density Range',
      description: 'Convert kg to litres of UAN-32 liquid fertilizer. Density is 1.320 kg/L at 15°C (1 kg = 0.758 L).',
      primary_kw: 'kg to litre liquid fertilizer',
      secondary_kws: ['uan 32 density range', 'liquid fertilizer weight to volume', '1 kg uan32 in litres'],
    },
    content: {
      intro: 'UAN-32 (Urea Ammonium Nitrate 32% N) liquid fertilizer has a density of 1.320 kg/L at 15°C. 1 kg occupies 0.758 litres.',
      real_world_context: 'Agronomists and sprayer operators calibrate boom flow rates by mass to prevent crop scorching.',
      faq: [{ q: 'How many litres is 1 tonne of UAN-32?', a: '1 metric tonne (1,000 kg) of UAN-32 equals approximately 757.58 litres.' }],
    },
  },

  // 47. Mineral Oil
  {
    id: 'mineral-oil',
    name: 'White Mineral Oil',
    category: 'industrial',
    density_kg_per_l: 0.850,
    densityRange: { min: 0.830, max: 0.880 },
    density_note: '0.830 to 0.880 kg/L at 20°C across light to heavy technical and food-grade grades',
    temperature: 20,
    source: 'USP / FDA 21 CFR 172.878',
    seo: {
      title: 'Kg to Litres of Mineral Oil Converter | Liquid Paraffin Density Range',
      description: 'Convert kg to litres of white mineral oil. Density ranges from 0.830 to 0.880 kg/L (1 kg = 1.136 to 1.205 L).',
      primary_kw: 'kg to litre mineral oil',
      secondary_kws: ['mineral oil density range', 'liquid paraffin weight to volume', '1 kg mineral oil in litres'],
    },
    content: {
      intro: 'White mineral oil (liquid paraffin) ranges in density from 0.830 kg/L (light cosmetic grade) to 0.880 kg/L (heavy food-grade lubrication). Nominal: 0.850 kg/L.',
      real_world_context: 'Used in food processing equipment, pharmaceutical ointments, and butcher block conditioning.',
      faq: [{ q: 'How many litres is 1 kg of mineral oil?', a: '1 kg of white mineral oil equals approximately 1.176 litres.' }],
    },
  },

  // 48. Turpentine
  {
    id: 'turpentine',
    name: 'Pure Gum Turpentine',
    category: 'industrial',
    density_kg_per_l: 0.865,
    densityRange: { min: 0.855, max: 0.875 },
    density_note: '0.855 to 0.875 kg/L at 20°C for pure distilled pine oleoresin',
    temperature: 20,
    source: 'ASTM D13 Standard Specification for Spirits of Turpentine',
    seo: {
      title: 'Kg to Litres of Turpentine Converter | Gum Spirits Density Range',
      description: 'Convert kg to litres of pure gum turpentine. Density is 0.865 kg/L at 20°C (1 kg = 1.156 L).',
      primary_kw: 'kg to litre turpentine',
      secondary_kws: ['turpentine density range', 'turpentine weight to volume', '1 kg turpentine in litres'],
    },
    content: {
      intro: 'Pure gum spirits of turpentine has a density of 0.865 kg/L at 20°C (range: 0.855–0.875 kg/L). 1 kg equals 1.156 litres.',
      real_world_context: 'Traditional solvent thinner for artist oil paints and natural dammar varnishes.',
      faq: [{ q: 'How many litres is 1 kg of turpentine?', a: '1 kg of pure gum turpentine equals 1.156 litres.' }],
    },
  },

  // 49. Linseed Oil
  {
    id: 'linseed-oil',
    name: 'Boiled Linseed Oil',
    category: 'industrial',
    density_kg_per_l: 0.930,
    densityRange: { min: 0.925, max: 0.938 },
    density_note: '0.925 to 0.938 kg/L at 20°C for treated flaxseed drying oil',
    temperature: 20,
    source: 'ASTM D260 Standard Specification for Boiled Linseed Oil',
    seo: {
      title: 'Kg to Litres of Linseed Oil Converter | Flaxseed Oil Density Range',
      description: 'Convert kg to litres of boiled linseed oil. Density ranges from 0.925 to 0.938 kg/L (1 kg = 1.066 to 1.081 L).',
      primary_kw: 'kg to litre linseed oil',
      secondary_kws: ['linseed oil density range', 'flaxseed oil weight to volume', '1 kg linseed oil in litres'],
    },
    content: {
      intro: 'Boiled linseed oil (flaxseed drying oil) has a density of 0.930 kg/L at 20°C. 1 kg occupies 1.075 litres.',
      real_world_context: 'Polymerizing drying oil used for timber conditioning, oil putty, and traditional glazing.',
      faq: [{ q: 'How many litres is 1 kg of linseed oil?', a: '1 kg of boiled linseed oil equals 1.075 litres.' }],
    },
  },

  // 50. Mercury
  {
    id: 'mercury',
    name: 'Liquid Mercury',
    category: 'metals-molten',
    density_kg_per_l: 13.534,
    densityRange: { min: 13.520, max: 13.550 },
    density_note: '13.520 to 13.550 kg/L across standard room temperature ranges (15°C–25°C)',
    temperature: 20,
    source: 'NIST Standard Reference Database / CRC Handbook',
    seo: {
      title: 'Kg to Litres of Mercury Converter | Liquid Mercury Density Range',
      description: 'Convert kg to litres of liquid mercury. Elemental mercury has an immense density of 13.534 kg/L (1 kg = 0.0739 L / 73.9 mL).',
      primary_kw: 'kg to litre mercury',
      secondary_kws: ['mercury density range', 'liquid mercury weight to volume', 'how many litres is 1 kg of mercury'],
    },
    content: {
      intro: 'Liquid elemental mercury is one of the densest liquids on Earth at 13.534 kg/L at 20°C. 1 kg occupies only 0.0739 litres (73.9 mL).',
      real_world_context: 'A standard 1-litre bottle of mercury weighs an astonishing 13.53 kg (nearly 30 lbs).',
      faq: [
        { q: 'How many litres is 1 kg of liquid mercury?', a: '1 kg of liquid mercury occupies only 0.0739 litres (73.9 mL).' },
        { q: 'How much does 1 litre of mercury weigh?', a: '1 litre of liquid mercury weighs 13.534 kilograms.' },
      ],
    },
  },
];
