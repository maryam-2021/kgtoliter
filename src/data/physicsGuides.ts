export interface PhysicsGuide {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  category: string;
  readTime: string;
  author: string;
  reviewedDate: string;
  intro: string;
  formulaBox?: {
    formula: string;
    description: string;
    variables: { symbol: string; meaning: string; unit: string }[];
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
  interactiveWidget?: 'temperature-slider' | 'formula-playground' | 'custom-solver' | 'density-units';
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const physicsGuides: PhysicsGuide[] = [
  // 1. Temperature and Density
  {
    slug: 'temperature-and-density',
    title: 'How Temperature Affects Liquid Density: Complete Physics & Engineering Guide',
    subtitle: 'Thermal expansion coefficients, density-temperature curves for water, fuels, and oils, and commercial custody transfer impacts.',
    metaDescription: 'Understand how temperature alters liquid density and volume. Explore volumetric expansion equations, anomalous water behavior (0–4°C), and fuel temperature corrections.',
    category: 'Thermal Physics',
    readTime: '7 min read',
    author: 'Kg to Litre Engineering Team',
    reviewedDate: 'August 2026',
    intro: 'Density is not a static constant—it is an intensive thermodynamic state function. When liquids undergo temperature shifts, their physical volume changes due to molecular thermal agitation while mass remains strictly conserved. In global trade, heating or cooling a 50,000-tonne tanker of fuel by just 5°C alters delivered volume by hundreds of thousands of litres.',
    formulaBox: {
      formula: 'ρ(T) = ρ₀ ÷ [1 + β(T - T₀)]',
      description: 'Volumetric Thermal Expansion Formula for Liquid Density',
      variables: [
        { symbol: 'ρ(T)', meaning: 'Density at target temperature T', unit: 'kg/L or kg/m³' },
        { symbol: 'ρ₀', meaning: 'Reference density at initial temperature T₀', unit: 'kg/L or kg/m³' },
        { symbol: 'β (beta)', meaning: 'Volumetric thermal expansion coefficient', unit: '1/°C or K⁻¹' },
        { symbol: 'ΔT (T - T₀)', meaning: 'Temperature differential', unit: '°C or K' }
      ]
    },
    interactiveWidget: 'temperature-slider',
    sections: [
      {
        heading: '1. The Molecular Mechanism of Liquid Expansion',
        content: [
          'At a microscopic level, supplying thermal energy to a liquid increases the average kinetic energy of its constituent molecules. Higher kinetic energy causes molecules to vibrate and collide more vigorously, pushing neighboring molecules further apart against intermolecular Van der Waals or dipole attractions.',
          'Because the physical space occupied by the molecules expands while the total number of atoms (and thus total mass m) remains identical, the mass-to-volume ratio (m/V) decreases proportionately.'
        ],
        callout: {
          title: 'The Golden Rule of Fluid Temperature',
          text: 'Heating a liquid expands its volume and decreases its density. Cooling a liquid contracts its volume and increases its density (with the exception of water below 4°C).',
          type: 'info'
        }
      },
      {
        heading: '2. The Anomalous Expansion of Water (0°C to 4°C)',
        content: [
          'Pure water exhibits a unique anomaly among common liquids: its maximum density occurs at 3.984°C (approx 1.000000 kg/L). Between 0°C and 4°C, water contracts as it warms and expands as it cools.',
          'This occurs because open hexagonal crystal networks of hydrogen bonds begin forming as water nears 0°C, creating micro-voids in liquid structure that increase volume. When water freezes into ice at 0°C, its density drops precipitously to ~0.917 kg/L, causing ice to float.'
        ],
        table: {
          headers: ['Temperature (°C)', 'Pure Water Density (kg/L)', 'Volume of 1 kg (L)', 'State / Behavior'],
          rows: [
            ['0°C (Ice)', '0.917', '1.091 L', 'Solid hexagonal lattice'],
            ['0°C (Liquid)', '0.99984', '1.00016 L', 'Supercooled liquid state'],
            ['3.98°C', '1.00000', '1.00000 L', 'Maximum liquid density peak'],
            ['20°C', '0.99820', '1.00180 L', 'Standard laboratory ambient'],
            ['40°C', '0.99222', '1.00784 L', 'Elevated process water'],
            ['60°C', '0.98320', '1.01709 L', 'Industrial wash water'],
            ['80°C', '0.97180', '1.02902 L', 'Boiler feed water'],
            ['100°C (Liquid)', '0.95840', '1.04341 L', 'Boiling water at 1 atm']
          ],
          caption: 'Pure Water Density and Volume per 1 kg across 0°C to 100°C'
        }
      },
      {
        heading: '3. Commercial Impact: Custody Transfer & Standard Reference Temperatures',
        content: [
          'Because liquid volume fluctuates constantly with ambient weather, commercial contracts in the oil, petrochemical, and bulk food sectors prohibit billing strictly by uncorrected volume.',
          'Standard custody transfer contracts specify reference temperatures: 15°C (59°F) per API MPMS 11.1 in Europe and global bunkering, or 60°F (15.56°C) in North America. Volume correction factors (VCF) calculated from ASTM tables standardize all volumetric meter readings back to baseline.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Why does fuel volume expand more than water when heated?',
        a: 'Hydrocarbon fuels have significantly higher volumetric expansion coefficients (β ≈ 0.00085 to 0.0012 /°C) than water (β ≈ 0.00021 /°C at 20°C). As a result, gasoline and diesel expand nearly 4 to 5 times more than water per degree Celsius of temperature change.'
      },
      {
        q: 'How does temperature affect 1 kg of diesel volume?',
        a: 'At 15°C, 1 kg of diesel (density 0.832 kg/L) equals 1.202 L. In summer heat at 35°C (density drops to ~0.818 kg/L), that same 1 kg expands to 1.222 L—a gain of 20 mL per kg.'
      },
      {
        q: 'Does mass change when temperature changes?',
        a: 'No. Mass is an invariant quantity representing the total amount of matter. Heating or cooling an enclosed liquid changes only its volume and density, while mass remains exactly constant.'
      }
    ],
    relatedSlugs: ['density-vs-specific-gravity', 'density-units-conversion', 'density-formula', 'how-to-measure-density']
  },

  // 2. Density vs Specific Gravity
  {
    slug: 'density-vs-specific-gravity',
    title: 'Density vs Specific Gravity: What Is the Difference?',
    subtitle: 'Understanding absolute density, dimensionless specific gravity (SG), API gravity, Baumé, and Brix scales.',
    metaDescription: 'Compare density vs specific gravity. Discover the mathematical definitions, units, conversion formulas, and industry applications from petroleum API to brewing Brix.',
    category: 'Physics & Metrology',
    readTime: '6 min read',
    author: 'Kg to Litre Engineering Team',
    reviewedDate: 'August 2026',
    intro: 'While the terms "density" and "specific gravity" are frequently interchanged in everyday industry discussions, they represent distinct physical concepts with different mathematical formulations, dimensions, and measurement protocols.',
    formulaBox: {
      formula: 'SG = ρ_substance ÷ ρ_water(ref)',
      description: 'Specific Gravity (Relative Density) Equation',
      variables: [
        { symbol: 'SG', meaning: 'Specific Gravity (Dimensionless ratio)', unit: 'No units' },
        { symbol: 'ρ_substance', meaning: 'Density of test substance at test temperature', unit: 'kg/L or g/cm³' },
        { symbol: 'ρ_water(ref)', meaning: 'Density of pure water at reference temperature (4°C or 20°C)', unit: '1.000 kg/L' }
      ]
    },
    sections: [
      {
        heading: '1. Absolute Density vs. Relative Density (Specific Gravity)',
        content: [
          'Absolute Density (ρ) is the mass of a substance divided by its volume: ρ = m/V. It always carries physical dimensions (mass/length³), such as kg/L, g/cm³, or kg/m³.',
          'Specific Gravity (SG), also termed relative density, is the ratio of substance density to the density of a standard reference fluid (pure water for liquids and solids; dry air for gases). Because the units in numerator and denominator cancel out, specific gravity is completely dimensionless.'
        ],
        table: {
          headers: ['Property', 'Density (ρ)', 'Specific Gravity (SG)'],
          rows: [
            ['Definition', 'Mass per unit volume (m/V)', 'Ratio of substance density to water density'],
            ['Units', 'kg/L, g/cm³, kg/m³, lb/gal', 'Dimensionless (No units)'],
            ['Temperature Dependence', 'Depends only on substance temperature', 'Depends on both substance & reference water temps'],
            ['Water Value (4°C)', '1.000 kg/L (1,000 kg/m³)', '1.000 (Exact ratio)'],
            ['Mercury Value (20°C)', '13.546 kg/L', '13.546 (13.546 times heavier than water)']
          ],
          caption: 'Direct Comparison: Density vs Specific Gravity'
        }
      },
      {
        heading: '2. Specialized Industry Scales Derived from Specific Gravity',
        content: [
          'Different industrial sectors developed specialized non-linear or linear hydrometer scales to simplify field operations without carrying decimal multipliers:'
        ],
        callout: {
          title: 'Key Industry Conversion Formulas',
          text: '• API Gravity (Petroleum): °API = (141.5 / SG) - 131.5\n• Baumé (Heavy Liquids > Water): °Bé = 145 - (145 / SG)\n• Brix (Sugar & Juices): 1° Bx ≈ 1g sucrose per 100g aqueous solution',
          type: 'tip'
        }
      }
    ],
    faqs: [
      {
        q: 'Why does SG equal density in kg/L numerically?',
        a: 'Because the reference density of pure water at 4°C is 1.000 kg/L (or 1.000 g/cm³), dividing any density in kg/L by 1.000 yields the identical numeric value, but strips away the units.'
      },
      {
        q: 'Can specific gravity be less than 1.0?',
        a: 'Yes. Any substance with SG < 1.0 (such as gasoline at 0.74 or olive oil at 0.91) is lighter than water and will float on water, provided it is immiscible.'
      }
    ],
    relatedSlugs: ['temperature-and-density', 'density-units-conversion', 'density-formula', 'how-to-measure-density']
  },

  // 3. Density Units Conversion
  {
    slug: 'density-units-conversion',
    title: 'kg/L vs g/mL vs kg/m³: Complete Density Unit Conversion Guide',
    subtitle: 'Step-by-step conversion factors, dimensional cancellation proofs, and SI vs imperial density matrices.',
    metaDescription: 'Master density unit conversions. Learn why 1 kg/L = 1 g/cm³ = 1 g/mL = 1000 kg/m³, and how to convert between metric and US imperial density units.',
    category: 'Metrology & Conversions',
    readTime: '5 min read',
    author: 'Kg to Litre Engineering Team',
    reviewedDate: 'August 2026',
    intro: 'Density appears in various units depending on scientific discipline: chemical laboratories prefer g/cm³ or g/mL, civil engineers use kg/m³, commercial fluid shippers use kg/L, and North American process engineers use lb/gal or lb/ft³. Understanding their mathematical relationships prevents catastrophic calculation errors.',
    formulaBox: {
      formula: '1 kg/L = 1 g/cm³ = 1 g/mL = 1,000 kg/m³',
      description: 'The Golden Metric Density Equivalence',
      variables: [
        { symbol: '1 kg/L', meaning: '1 kilogram mass per 1 litre volume', unit: 'Commercial fluid standard' },
        { symbol: '1 g/cm³', meaning: '1 gram mass per 1 cubic centimetre volume', unit: 'Laboratory solid/liquid standard' },
        { symbol: '1,000 kg/m³', meaning: '1,000 kilograms per cubic metre', unit: 'Official SI base unit' }
      ]
    },
    sections: [
      {
        heading: '1. Mathematical Proof of Metric Equivalence',
        content: [
          'Why does 1 kg/L equal exactly 1 g/cm³? We expand both mass and volume components into base metric factors:',
          '1 kg = 1,000 grams. 1 Litre = 1,000 cubic centimetres (cm³).',
          'Therefore: (1 kg / 1 L) = (1,000 g / 1,000 cm³) = 1 g/cm³. The factor of 1,000 in numerator and denominator cancels completely.'
        ],
        table: {
          headers: ['Convert From', 'To kg/L', 'To kg/m³', 'To g/cm³', 'To lb/gal (US)'],
          rows: [
            ['1 kg/L', '1.000', '1,000', '1.000', '8.3454'],
            ['1 kg/m³', '0.001', '1.000', '0.001', '0.008345'],
            ['1 g/cm³', '1.000', '1,000', '1.000', '8.3454'],
            ['1 g/mL', '1.000', '1,000', '1.000', '8.3454'],
            ['1 lb/gal (US)', '0.1198', '119.83', '0.1198', '1.000'],
            ['1 lb/ft³', '0.01602', '16.018', '0.01602', '0.1337']
          ],
          caption: 'Comprehensive Multi-Unit Density Conversion Matrix'
        }
      }
    ],
    faqs: [
      {
        q: 'Is 1 kg/L equal to 1 g/mL?',
        a: 'Yes, exactly. Since 1 litre contains 1,000 mL and 1 kg contains 1,000 grams, 1 kg/L = 1,000g / 1,000mL = 1 g/mL.'
      },
      {
        q: 'How many lb/gal in 1 kg/L?',
        a: '1 kg/L equals 8.3454 lb/US gallon. For example, water at 1.000 kg/L weighs 8.345 lbs per US gallon.'
      }
    ],
    relatedSlugs: ['temperature-and-density', 'density-vs-specific-gravity', 'density-formula', 'how-to-measure-density']
  },

  // 4. Density Formula Explained
  {
    slug: 'density-formula',
    title: 'The Density Formula Explained: V = m ÷ ρ and Algebraic Rearrangements',
    subtitle: 'Derivation, 3-way triangular relationships, dimensional analysis, and step-by-step worked examples.',
    metaDescription: 'Master the density formula V = m ÷ ρ. Learn how to solve for volume, mass (m = V × ρ), and density (ρ = m ÷ V) with worked engineering examples.',
    category: 'Physics Education',
    readTime: '6 min read',
    author: 'Kg to Litre Engineering Team',
    reviewedDate: 'August 2026',
    intro: 'The density equation is one of the most fundamental formulas in classical physics and applied engineering. It governs the physical interplay between how much space an object occupies (volume) and how much matter it contains (mass).',
    formulaBox: {
      formula: 'V = m ÷ ρ  |  m = V × ρ  |  ρ = m ÷ V',
      description: 'The Three Permutations of the Density Triangle',
      variables: [
        { symbol: 'V', meaning: 'Volume', unit: 'Litres (L), mL, m³, or gal' },
        { symbol: 'm', meaning: 'Mass', unit: 'Kilograms (kg), g, or lbs' },
        { symbol: 'ρ (rho)', meaning: 'Density', unit: 'kg/L, g/cm³, or kg/m³' }
      ]
    },
    interactiveWidget: 'formula-playground',
    sections: [
      {
        heading: '1. The Density Triangle & Algebraic Rearrangements',
        content: [
          'By placing Mass (m) at the apex of a triangle with Density (ρ) and Volume (V) at the base, you can visually solve for any missing variable:',
          '• To find Volume (V): Cover V → V = m ÷ ρ (Mass divided by Density)',
          '• To find Mass (m): Cover m → m = V × ρ (Volume multiplied by Density)',
          '• To find Density (ρ): Cover ρ → ρ = m ÷ V (Mass divided by Volume)'
        ]
      },
      {
        heading: '2. Worked Examples with Common Fluids',
        content: [
          'Example 1 (Solve Volume): How many litres are in 25 kg of sulfuric acid (ρ = 1.84 kg/L)?',
          'V = 25 kg ÷ 1.84 kg/L = 13.587 Litres.',
          'Example 2 (Solve Mass): How much does a 200-litre drum of motor oil weigh (ρ = 0.88 kg/L)?',
          'm = 200 L × 0.88 kg/L = 176.000 kg.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Why must units match before using the density formula?',
        a: 'If mass is in kilograms and density is in g/cm³, direct division will give an incorrect answer off by a factor of 1,000. Always ensure mass is in kg when density is in kg/L to obtain volume in litres.'
      },
      {
        q: 'What is the Greek letter for density?',
        a: 'The standard physics symbol for density is the lowercase Greek letter rho (ρ), though the Latin letter "d" or "D" is occasionally used in introductory textbooks.'
      }
    ],
    relatedSlugs: ['temperature-and-density', 'density-vs-specific-gravity', 'density-units-conversion', 'how-to-measure-density']
  },

  // 5. How to Measure Liquid Density
  {
    slug: 'how-to-measure-density',
    title: 'How to Measure Liquid Density: Lab & Field Methods Compared',
    subtitle: 'Pycnometers, hydrometers, digital oscillating U-tube meters (Anton Paar), and hydrostatic displacement methods.',
    metaDescription: 'Comprehensive guide to measuring liquid density. Compare laboratory pycnometry, field hydrometers, digital density meters, and Archimedes displacement.',
    category: 'Laboratory Metrology',
    readTime: '7 min read',
    author: 'Kg to Litre Engineering Team',
    reviewedDate: 'August 2026',
    intro: 'Accurate liquid density determination is essential for quality assurance, chemical purity assessment, and legal trade metering. Depending on required precision and available budget, methodologies range from simple field glass hydrometers to digital benchtop oscillating U-tube analyzers accurate to five decimal places.',
    sections: [
      {
        heading: '1. Overview of Primary Density Measurement Technologies',
        content: [
          'Each density measurement technique offers different tradeoffs between precision, sample volume, operational speed, and instrument cost:'
        ],
        table: {
          headers: ['Method', 'Operating Principle', 'Typical Accuracy', 'Best Use Case'],
          rows: [
            ['Glass Hydrometer', 'Archimedes buoyancy flotation', '± 0.001 to 0.005 g/cm³', 'Field checks, battery acid, homebrewing'],
            ['Pycnometer (Specific Gravity Bottle)', 'Precision volumetric gravimetry (m/V)', '± 0.0001 g/cm³', 'Standard reference laboratory verification'],
            ['Digital Oscillating U-Tube', 'Electronic resonant frequency analysis', '± 0.00001 to 0.0001 g/cm³', 'Petrochemical refineries, pharma QC (Anton Paar)'],
            ['Hydrostatic Balance / Plummet', 'Apparent submerged weight loss', '± 0.0002 g/cm³', 'Viscous liquids, high-temperature melts']
          ],
          caption: 'Comparison of Liquid Density Measurement Instruments'
        }
      },
      {
        heading: '2. The Digital Oscillating U-Tube (Modern Standard)',
        content: [
          'Standardized in ASTM D4052 and ISO 12185, modern digital density meters pump 1 to 2 mL of fluid into an electronically excited hollow glass U-tube. The resonant frequency of oscillation depends directly on the total mass of the tube and enclosed sample, delivering rapid, temperature-compensated digital readouts in seconds.'
        ]
      }
    ],
    faqs: [
      {
        q: 'How does a hydrometer measure density?',
        a: 'A hydrometer floats upright in a liquid due to buoyant force. In lighter liquids (like gasoline), it sinks deeper; in heavier liquids (like syrup or saltwater), it floats higher. The density or SG is read directly off the calibrated stem scale at liquid surface level.'
      },
      {
        q: 'Why must density meters be temperature-controlled?',
        a: 'Because liquid density changes by 0.05% to 0.12% per degree Celsius, uncalibrated temperature fluctuations ruin high-precision measurements. Professional meters use built-in Peltier thermostats to maintain sample temperature within ±0.01°C.'
      }
    ],
    relatedSlugs: ['temperature-and-density', 'density-vs-specific-gravity', 'density-units-conversion', 'density-formula']
  }
];
