export interface IndustryGuide {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  industry: string;
  readTime: string;
  author: string;
  reviewedDate: string;
  intro: string;
  keyMetricBox?: {
    label: string;
    formula: string;
    details: string;
  };
  sections: {
    heading: string;
    content: string[];
    callout?: { title: string; text: string; type?: 'info' | 'warning' | 'tip' };
    table?: {
      headers: string[];
      rows: string[][];
      caption?: string;
    };
  }[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const industryGuides: IndustryGuide[] = [
  // 1. Logistics & Freight
  {
    slug: 'kg-to-litres-logistics',
    title: 'Kg to Litres for Logistics & Freight: A Practical Operational Guide',
    subtitle: 'Mass vs volumetric chargeable weight, ADR/IMDG dangerous goods compliance, ISO tank ullage, and customs declaration rules.',
    metaDescription: 'Complete logistics guide for mass-to-volume unit conversions. Calculate ISO tank container filling, volumetric freight weight, and net vs gross customs declarations.',
    industry: 'Freight & Supply Chain',
    readTime: '7 min read',
    author: 'Kg to Litre Engineering Team',
    reviewedDate: 'August 2026',
    intro: 'In global multimodal freight transport, freight forwarders and carrier dispatchers constantly navigate the tension between cargo mass (limited by axle and crane weight thresholds) and liquid volume (limited by container capacity and thermal ullage allowances). Miscalculating liquid density can trigger catastrophic axle overloads, dangerous sloshing during transit, or massive customs penalties.',
    keyMetricBox: {
      label: 'ISO Tank Safe Filling (Ullage) Formula',
      formula: 'Max Volume (L) = Max Payload Mass (kg) ÷ Density (kg/L) × (1 - Ullage_Safety_Margin)',
      details: 'ADR/IMDG regulations mandate minimum 2.5% to 5.0% ullage (expansion void) for liquids subject to thermal expansion.'
    },
    sections: [
      {
        heading: '1. Chargeable Weight: Actual Weight vs. Volumetric Weight',
        content: [
          'Air freight and parcel logistics calculate freight charges based on whichever is greater: actual physical mass (kg) or volumetric dimensional weight (calculated as Length × Width × Height in cm ÷ 5000 or 6000).',
          'For dense liquid cargo (e.g. syrups, chemicals with density > 1.2 kg/L), actual gross mass almost always dictates freight costs. For low-density expanded liquids or lightweight empty container packagings, volumetric weight applies.'
        ]
      },
      {
        heading: '2. Dangerous Goods (ADR / IMDG / RID) Filling Limits & Ullage',
        content: [
          'According to Chapter 4.2 of the IMDG Code and ADR regulations, portable tanks transporting liquid dangerous goods must not be filled to more than 95% or 97% of their total water capacity at reference temperature (usually 50°C maximum design limit).',
          'Filling a tank beyond safe density limits creates hydraulic lock during solar heating, which can rupture pressure relief valves or warp tank shells.'
        ],
        callout: {
          title: 'ADR Tank Filling Degree Formula',
          text: 'Degree of filling = 100 / (1 + 35α) % of tank capacity, where α is the cubic expansion coefficient of the liquid between 15°C and 50°C.',
          type: 'warning'
        }
      }
    ],
    faqs: [
      {
        q: 'How do customs declarations handle liquid mass vs volume?',
        a: 'Most national customs authorities require both net mass (kg) and supplementary volume units (litres) for liquids classified under Chapters 27 (fuels/oils), 22 (beverages), and 28-29 (chemicals). Declarations must match the density stated in the Safety Data Sheet (SDS).'
      },
      {
        q: 'What is the maximum payload of an ISO 20ft tank container?',
        a: 'Standard 20ft ISO tank containers have gross maximum mass limits of ~36,000 kg with tare weights around 3,500 to 4,000 kg, providing a net liquid payload capacity of approx 31,000 to 32,000 kg.'
      }
    ],
    relatedSlugs: ['kg-to-litres-fuel-management', 'kg-to-litres-chemical-manufacturing', 'kg-to-litres-agriculture']
  },

  // 2. Cooking & Baking
  {
    slug: 'kg-to-litres-cooking',
    title: 'Kg to Litres in Cooking & Baking: A Professional Chef\'s Conversion Guide',
    subtitle: 'Recipe scaling, fluid density vs cup measurements, kitchen scales vs measuring jugs, and culinary ingredient substitution.',
    metaDescription: 'Chef guide for converting kg to litres for cooking oils, honey, syrups, flours, dairy, and baking ingredients. Accurate kitchen conversions for commercial catering.',
    industry: 'Culinary & Baking Science',
    readTime: '6 min read',
    author: 'Kg to Litre Engineering Team',
    reviewedDate: 'August 2026',
    intro: 'In commercial kitchens and pastry laboratories, consistency is paramount. While household recipes often mix volume (cups, tablespoons, litres) and mass (grams, kilograms), professional culinary scaling requires precise understanding of ingredient densities. Converting 1 kg of olive oil to 1 litre will result in an 10% recipe error, ruining pastry emulsifications or dressing balances.',
    keyMetricBox: {
      label: 'Kitchen Mass to Volume Scaling',
      formula: 'Volume (mL) = [Mass (g) ÷ Ingredient Density (g/mL)]',
      details: 'Using digital kitchen scales calibrated in grams and converting to mL via verified ingredient density guarantees reproducible results.'
    },
    sections: [
      {
        heading: '1. The Density Variation of Key Culinary Liquids',
        content: [
          'Culinary fluids span a massive density spectrum from lightweight alcohol extracts (0.79 kg/L) to ultra-dense honey and molasses (1.42 kg/L):'
        ],
        table: {
          headers: ['Ingredient', 'Density (kg/L)', '1 kg in Litres', '1 Litre in kg'],
          rows: [
            ['Pure Water / Broth', '1.000', '1.000 L', '1.000 kg'],
            ['Whole Milk', '1.030', '0.971 L', '1.030 kg'],
            ['Heavy Cream (38% fat)', '0.994', '1.006 L', '0.994 kg'],
            ['Olive Oil', '0.910', '1.099 L', '0.910 kg'],
            ['Vegetable / Canola Oil', '0.920', '1.087 L', '0.920 kg'],
            ['Pure Honey', '1.420', '0.704 L', '1.420 kg'],
            ['Maple Syrup', '1.325', '0.755 L', '1.325 kg'],
            ['Soy Sauce', '1.150', '0.870 L', '1.150 kg']
          ],
          caption: 'Essential Commercial Kitchen Mass & Volume Conversion Ratios'
        }
      }
    ],
    faqs: [
      {
        q: 'Why should bakers weigh liquids on a scale instead of using measuring jugs?',
        a: 'Meniscus reading errors and surface tension adhesion in plastic or glass measuring jugs can cause up to 8% volumetric error. Weighing on digital scales eliminates parallax error and speeds up mise en place.'
      },
      {
        q: 'How many litres is 1 kg of olive oil in recipes?',
        a: '1 kg of olive oil equals 1.099 litres (or 1,099 mL), because olive oil has a density of 0.910 kg/L.'
      }
    ],
    relatedSlugs: ['kg-to-litres-logistics', 'kg-to-litres-chemical-manufacturing', 'kg-to-litres-agriculture']
  },

  // 3. Fuel Management
  {
    slug: 'kg-to-litres-fuel-management',
    title: 'Kg to Litres in Fuel Management: Fleet, Bunkering & Tanker Guide',
    subtitle: 'Tank ullage calculations, temperature correction (15°C baseline), API MPMS Chapter 11.1 reconciliation, and aviation fuel density.',
    metaDescription: 'Technical fuel manager guide for mass-to-volume calculations. Temperature compensation for diesel, petrol, Jet A-1, and marine fuel bunkering.',
    industry: 'Energy & Fleet Operations',
    readTime: '8 min read',
    author: 'Kg to Litre Engineering Team',
    reviewedDate: 'August 2026',
    intro: 'Fuel is bought and metered in litres at the dispensing nozzle, transported in bulk tanker trucks and pipelines, but purchased on international wholesale markets in metric tonnes (kg × 1000). Because hydrocarbon fuels expand significantly with temperature, accurate density management is the cornerstone of fuel loss prevention and custody reconciliation.',
    keyMetricBox: {
      label: 'Standard Standardized Volume Equation',
      formula: 'V₁₅ = V_observed × VCF(T, ρ₁₅)',
      details: 'VCF (Volume Correction Factor) from ASTM Table 54B normalizes observed ambient volume back to standardized 15°C baseline.'
    },
    sections: [
      {
        heading: '1. Fuel Density Standards Across Commercial Hydrocarbons',
        content: [
          'Every commercial fuel grade conforms to strict density ranges standardized by international specifications:'
        ],
        table: {
          headers: ['Fuel Grade', 'Specification', 'Density Range @ 15°C', '1 Tonne (1,000 kg) Volume'],
          rows: [
            ['Standard Automotive Diesel', 'EN 590 / ASTM D975', '0.820 – 0.845 kg/L', '1,183 – 1,220 Litres'],
            ['Gasoline / Petrol (95/98 RON)', 'EN 228 / ASTM D4814', '0.720 – 0.775 kg/L', '1,290 – 1,389 Litres'],
            ['Jet A-1 Aviation Turbine Fuel', 'DEF STAN 91-091 / ASTM D1655', '0.775 – 0.840 kg/L', '1,190 – 1,290 Litres'],
            ['Marine Gas Oil (MGO)', 'ISO 8217 Grade DMA', '0.860 – 0.890 kg/L', '1,124 – 1,163 Litres'],
            ['Heavy Fuel Oil (HFO / VLSFO)', 'ISO 8217 Grade RMG 380', '0.920 – 0.991 kg/L', '1,009 – 1,087 Litres']
          ],
          caption: 'Commercial Fuel Density Specifications and Volume per Metric Tonne'
        }
      }
    ],
    faqs: [
      {
        q: 'Why is aviation fuel (Jet A-1) calculated in mass (kg or lbs) for flight plans?',
        a: 'Aircraft weight-and-balance calculations and engine thrust equations depend on energy content and mass, not volume. However, fuel trucks deliver volume in litres, requiring real-time hydrometer density checks before every aircraft refuel.'
      },
      {
        q: 'How much volume does diesel gain between cold winter and hot summer?',
        a: 'Diesel density changes by ~0.0007 kg/L per °C. Heating diesel from 0°C in winter to 30°C in summer expands volume by approximately 2.1% (over 600 litres on a standard 30,000L road tanker).'
      }
    ],
    relatedSlugs: ['kg-to-litres-logistics', 'kg-to-litres-chemical-manufacturing', 'kg-to-litres-agriculture']
  },

  // 4. Chemical Manufacturing
  {
    slug: 'kg-to-litres-chemical-manufacturing',
    title: 'Kg to Litres in Chemical Manufacturing: Lab, Pilot Plant & Scale-Up Guide',
    subtitle: 'Batch formulation gravimetry, reactor yield calculations, SDS GHS-compliant density reporting, and concentrated acid/base curves.',
    metaDescription: 'Chemical engineering guide for mass to volume batching. Convert kilograms to litres for organic solvents, concentrated mineral acids, and polymer reagents.',
    industry: 'Chemical Engineering & Manufacturing',
    readTime: '7 min read',
    author: 'Kg to Litre Engineering Team',
    reviewedDate: 'August 2026',
    intro: 'In chemical synthesis and bulk manufacturing, stoichiometric reactions occur in molar proportions, raw materials are purchased in kilograms or metric tonnes, but automated dosing systems and chemical reactors are metered in litres or cubic metres. Mastering density-dependent batch calculations prevents stoichiometric imbalances and off-spec product runs.',
    sections: [
      {
        heading: '1. Concentration vs. Density in Aqueous Mineral Acids',
        content: [
          'For industrial acids and alkalis, solution density is a direct non-linear function of weight-percent concentration (% w/w). As concentration increases, density climbs rapidly:'
        ],
        table: {
          headers: ['Reagent Solution', 'Concentration (% w/w)', 'Density @ 20°C (kg/L)', '100 kg Volume (L)'],
          rows: [
            ['Sulfuric Acid (Concentrated)', '98.0%', '1.836 kg/L', '54.47 Litres'],
            ['Sulfuric Acid (Battery Grade)', '33.5%', '1.250 kg/L', '80.00 Litres'],
            ['Nitric Acid (Concentrated)', '68.0%', '1.410 kg/L', '70.92 Litres'],
            ['Hydrochloric Acid (Muriatic)', '37.0%', '1.190 kg/L', '84.03 Litres'],
            ['Sodium Hydroxide (Caustic Soda)', '50.0%', '1.525 kg/L', '65.57 Litres'],
            ['Ammonia Aqueous Solution', '28.0%', '0.898 kg/L', '111.36 Litres']
          ],
          caption: 'Concentration and Density Ratios for Industrial Acids and Bases'
        }
      }
    ],
    faqs: [
      {
        q: 'Where do I find verified density data for chemical batching?',
        a: 'Section 9 (Physical and Chemical Properties) of the manufacturer Safety Data Sheet (SDS) lists exact relative density, reference temperature, and pH-specific density ranges.'
      },
      {
        q: 'Why is sulfuric acid almost twice as heavy as water per litre?',
        a: '98% H₂SO₄ molecules have high molecular weight (98.08 g/mol) and pack densely via strong hydrogen bonds, resulting in a density of 1.84 kg/L (1 litre weighs 1.84 kg).'
      }
    ],
    relatedSlugs: ['kg-to-litres-logistics', 'kg-to-litres-fuel-management', 'kg-to-litres-agriculture']
  },

  // 5. Agriculture & Fertilizer
  {
    slug: 'kg-to-litres-agriculture',
    title: 'Kg to Litres for Agriculture: Sprayer Calibration & Liquid Fertilizer Guide',
    subtitle: 'Application rates (L/ha vs kg/ha), spray boom calibration, UAN liquid nitrogen specific gravity, and pesticide tank mixing.',
    metaDescription: 'Agricultural guide for converting kg to litres for liquid fertilizers (UAN, NPK solutions) and pesticide sprayer calibration.',
    industry: 'Agronomy & Crop Protection',
    readTime: '6 min read',
    author: 'Kg to Litre Engineering Team',
    reviewedDate: 'August 2026',
    intro: 'Modern precision agriculture applies liquid fertilizers (such as Urea Ammonium Nitrate / UAN) and crop protection products based on exact nutrient targets (kg of active Nitrogen per hectare). However, field tractor sprayers and flow meters are calibrated exclusively in litres per minute (L/min) and litres per hectare (L/ha). Converting between mass and volume with density corrections is essential to avoid crop damage or under-fertilization.',
    sections: [
      {
        heading: '1. Liquid Fertilizer Specific Gravity & Nozzle Calibration',
        content: [
          'Standard sprayer calibration charts are based on pure water (density = 1.00 kg/L). Dense liquid fertilizers flow more slowly through spray nozzles at the same pressure, requiring a specific gravity conversion factor.'
        ],
        callout: {
          title: 'Sprayer Density Correction Factor Formula',
          text: 'Conversion Factor = √(Specific Gravity of Fertilizer)\nTo find water-equivalent nozzle flow rate: Water Equivalent Flow (L/min) = Measured Fertilizer Flow × √(SG).',
          type: 'tip'
        },
        table: {
          headers: ['Fertilizer Solution', 'Density @ 20°C (kg/L)', 'Specific Gravity (SG)', 'Nozzle Correction Factor'],
          rows: [
            ['UAN 28 (28% Nitrogen)', '1.280 kg/L', '1.28', '1.13'],
            ['UAN 32 (32% Nitrogen)', '1.320 kg/L', '1.32', '1.15'],
            ['Liquid Ammonium Polyphosphate (10-34-0)', '1.400 kg/L', '1.40', '1.18'],
            ['Liquid Potassium Thiosulfate (KTS)', '1.460 kg/L', '1.46', '1.21'],
            ['Water (Baseline)', '1.000 kg/L', '1.00', '1.00']
          ],
          caption: 'Common Liquid Fertilizer Densities and Nozzle Flow Correction Multipliers'
        }
      }
    ],
    faqs: [
      {
        q: 'How many litres are in 1 tonne (1000 kg) of UAN 32 fertilizer?',
        a: '1,000 kg ÷ 1.320 kg/L = 757.58 Litres. In reverse, 1,000 litres of UAN 32 weighs 1,320 kg.'
      },
      {
        q: 'Why did my sprayer under-apply liquid nitrogen fertilizer?',
        a: 'If you set your sprayer computer to water settings without applying the 1.15 density correction factor for UAN 32, the dense liquid will flow ~13% slower through nozzles, resulting in under-application.'
      }
    ],
    relatedSlugs: ['kg-to-litres-logistics', 'kg-to-litres-chemical-manufacturing', 'kg-to-litres-cooking']
  }
];
