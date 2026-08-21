export interface DensityRange {
  min: number;
  max: number;
}

export interface SubstanceDatabaseItem {
  id: string;
  name: string;
  category: string;
  density: number; // kg/L at reference temperature
  densityRange: DensityRange | null; // null or range object
  temperature: number; // reference temperature in °C
  source: string;
  notes: string;
}

export interface Substance {
  id: string;
  name: string;
  category: 'basic' | 'cooking' | 'fuels' | 'industrial' | string;
  density_kg_per_l: number;
  density_note: string;
  temperature?: number;
  densityRange?: DensityRange | null;
  source?: string;
  notes?: string;
  seo: {
    title: string;
    description: string;
    primary_kw: string;
    secondary_kws: string[];
  };
  content: {
    intro: string;
    real_world_context: string;
    faq: { q: string; a: string }[];
  };
}

// ============================================
// COMPREHENSIVE SUBSTANCE DATABASE v2.0
// ============================================

export const SUBSTANCE_DATABASE: SubstanceDatabaseItem[] = [
  // =========================================
  // INDUSTRIAL CHEMICALS
  // =========================================
  {
    id: "acetone",
    name: "Acetone",
    category: "industrial",
    density: 0.784,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Volatile, flammable solvent"
  },
  {
    id: "ethanol",
    name: "Ethanol (100%)",
    category: "industrial",
    density: 0.789,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Anhydrous, denatured alcohol"
  },
  {
    id: "isopropyl-alcohol",
    name: "Isopropyl Alcohol (99%)",
    category: "industrial",
    density: 0.786,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Rubbing alcohol, disinfectant"
  },
  {
    id: "methanol",
    name: "Methanol",
    category: "industrial",
    density: 0.792,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Wood alcohol, toxic"
  },
  {
    id: "glycerin",
    name: "Glycerin",
    category: "industrial",
    density: 1.261,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Very viscous, hygroscopic"
  },
  {
    id: "ethylene-glycol",
    name: "Ethylene Glycol",
    category: "industrial",
    density: 1.113,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Antifreeze concentrate, toxic"
  },
  {
    id: "propylene-glycol",
    name: "Propylene Glycol",
    category: "industrial",
    density: 1.036,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Food-grade antifreeze"
  },
  {
    id: "toluene",
    name: "Toluene",
    category: "industrial",
    density: 0.867,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Paint thinner, solvent"
  },
  {
    id: "xylene",
    name: "Xylene",
    category: "industrial",
    density: 0.864,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Cleaning solvent"
  },
  {
    id: "mineral-spirits",
    name: "Mineral Spirits",
    category: "industrial",
    density: 0.780,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "Petroleum distillate, paint thinner"
  },
  {
    id: "turpentine",
    name: "Turpentine",
    category: "industrial",
    density: 0.865,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Natural solvent from pine resin"
  },
  {
    id: "ammonia-28",
    name: "Ammonia (28%)",
    category: "industrial",
    density: 0.900,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "Aqueous ammonium hydroxide"
  },
  {
    id: "hydrogen-peroxide-30",
    name: "Hydrogen Peroxide (30%)",
    category: "industrial",
    density: 1.110,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Oxidizing, bleaching agent"
  },
  {
    id: "sulfuric-acid-98",
    name: "Sulfuric Acid (98%)",
    category: "industrial",
    density: 1.840,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Highly corrosive, battery acid"
  },
  {
    id: "hydrochloric-acid-37",
    name: "Hydrochloric Acid (37%)",
    category: "industrial",
    density: 1.190,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Muriatic acid, highly corrosive"
  },
  {
    id: "nitric-acid-68",
    name: "Nitric Acid (68%)",
    category: "industrial",
    density: 1.410,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Corrosive, oxidizing"
  },
  {
    id: "sodium-hydroxide-50",
    name: "Sodium Hydroxide (50%)",
    category: "industrial",
    density: 1.515,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "Caustic soda solution"
  },

  // =========================================
  // PETROLEUM PRODUCTS
  // =========================================
  {
    id: "crude-oil-light",
    name: "Crude Oil (Light)",
    category: "petroleum",
    density: 0.850,
    densityRange: null,
    temperature: 15,
    source: "API standards",
    notes: "Refining feedstock, low sulfur, sweet"
  },
  {
    id: "crude-oil-heavy",
    name: "Crude Oil (Heavy)",
    category: "petroleum",
    density: 0.940,
    densityRange: null,
    temperature: 15,
    source: "API standards",
    notes: "Refining feedstock, high sulfur, sour"
  },
  {
    id: "gasoline-87",
    name: "Gasoline (87 Octane)",
    category: "petroleum",
    density: 0.748,
    densityRange: { min: 0.720, max: 0.775 },
    temperature: 15,
    source: "API standards",
    notes: "Fuel, summer blend typical"
  },
  {
    id: "gasoline-91",
    name: "Gasoline (91+ Octane)",
    category: "petroleum",
    density: 0.755,
    densityRange: { min: 0.730, max: 0.780 },
    temperature: 15,
    source: "API standards",
    notes: "Performance fuel, premium grade"
  },
  {
    id: "diesel-2",
    name: "Diesel (#2)",
    category: "petroleum",
    density: 0.832,
    densityRange: null,
    temperature: 15,
    source: "ASTM D975",
    notes: "Fuel, standard diesel"
  },
  {
    id: "biodiesel-b100-petro",
    name: "Biodiesel (B100)",
    category: "petroleum",
    density: 0.880,
    densityRange: null,
    temperature: 15,
    source: "ASTM D6751",
    notes: "Renewable fuel, vegetable-based"
  },
  {
    id: "kerosene",
    name: "Kerosene",
    category: "petroleum",
    density: 0.810,
    densityRange: null,
    temperature: 15,
    source: "ASTM D3699",
    notes: "Heating, jet fuel, clear, low sulfur"
  },
  {
    id: "jet-fuel-a1",
    name: "Jet Fuel (Jet A-1)",
    category: "petroleum",
    density: 0.804,
    densityRange: null,
    temperature: 15,
    source: "DEF STAN 91-091",
    notes: "Aviation fuel, freezing point -47°C"
  },
  {
    id: "heating-oil-2",
    name: "Heating Oil (#2)",
    category: "petroleum",
    density: 0.850,
    densityRange: null,
    temperature: 15,
    source: "ASTM D396",
    notes: "Residential heating, similar to diesel"
  },
  {
    id: "heavy-fuel-oil-6",
    name: "Heavy Fuel Oil (#6)",
    category: "petroleum",
    density: 0.980,
    densityRange: null,
    temperature: 15,
    source: "ASTM D396",
    notes: "Marine/industrial fuel, bunker fuel"
  },
  {
    id: "naphtha",
    name: "Naphtha",
    category: "petroleum",
    density: 0.700,
    densityRange: null,
    temperature: 15,
    source: "CRC Handbook",
    notes: "Petrochemical feedstock, light hydrocarbon"
  },
  {
    id: "petrolatum-vaseline",
    name: "Petrolatum (Vaseline)",
    category: "petroleum",
    density: 0.850,
    densityRange: null,
    temperature: 20,
    source: "USP spec",
    notes: "Skin protectant, lubricant, semi-solid"
  },
  {
    id: "mineral-oil-light",
    name: "Mineral Oil (Light)",
    category: "petroleum",
    density: 0.840,
    densityRange: null,
    temperature: 20,
    source: "USP spec",
    notes: "Lubricant, laxative, white oil"
  },
  {
    id: "mineral-oil-heavy",
    name: "Mineral Oil (Heavy)",
    category: "petroleum",
    density: 0.880,
    densityRange: null,
    temperature: 20,
    source: "USP spec",
    notes: "Industrial lubricant, high viscosity"
  },
  {
    id: "paraffin-wax",
    name: "Paraffin Wax",
    category: "petroleum",
    density: 0.900,
    densityRange: null,
    temperature: 20,
    source: "ASTM D87",
    notes: "Candles, coatings, solid at room temp"
  },
  {
    id: "asphalt-bitumen",
    name: "Asphalt/Bitumen",
    category: "petroleum",
    density: 1.030,
    densityRange: null,
    temperature: 20,
    source: "ASTM D70",
    notes: "Paving, roofing, semi-solid"
  },
  {
    id: "petroleum-coke",
    name: "Petroleum Coke",
    category: "petroleum",
    density: 1.200,
    densityRange: null,
    temperature: 20,
    source: "ASTM D5004",
    notes: "Fuel, electrodes, solid carbon residue"
  },
  {
    id: "petroleum-ether",
    name: "Petroleum Ether",
    category: "petroleum",
    density: 0.640,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Extraction solvent, highly volatile"
  },
  {
    id: "white-spirit",
    name: "White Spirit",
    category: "petroleum",
    density: 0.780,
    densityRange: null,
    temperature: 20,
    source: "ISO 1250",
    notes: "Paint thinner, mineral turpentine"
  },
  {
    id: "varsol",
    name: "Varsol",
    category: "petroleum",
    density: 0.770,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer spec",
    notes: "Cleaning solvent, petroleum distillate"
  },

  // =========================================
  // SOLVENTS
  // =========================================
  {
    id: "acetone-solvent",
    name: "Acetone",
    category: "solvents",
    density: 0.784,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "General purpose, volatile, flammable"
  },
  {
    id: "mek-solvent",
    name: "Methyl Ethyl Ketone (MEK)",
    category: "solvents",
    density: 0.805,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Coatings, adhesives, powerful solvent"
  },
  {
    id: "mibk-solvent",
    name: "Methyl Isobutyl Ketone (MIBK)",
    category: "solvents",
    density: 0.801,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Coatings extraction, slow evaporating"
  },
  {
    id: "cyclohexanone-solvent",
    name: "Cyclohexanone",
    category: "solvents",
    density: 0.948,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Nylon production, strong, slow-evap"
  },
  {
    id: "toluene-solvent",
    name: "Toluene",
    category: "solvents",
    density: 0.867,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Paint thinner, aromatic"
  },
  {
    id: "xylene-solvent",
    name: "Xylene",
    category: "solvents",
    density: 0.864,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Cleaning solvent, aromatic"
  },
  {
    id: "benzene-solvent",
    name: "Benzene",
    category: "solvents",
    density: 0.879,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Chemical feedstock, carcinogenic"
  },
  {
    id: "ethyl-acetate-solvent",
    name: "Ethyl Acetate",
    category: "solvents",
    density: 0.902,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Nail polish remover, pleasant odor"
  },
  {
    id: "butyl-acetate-solvent",
    name: "Butyl Acetate",
    category: "solvents",
    density: 0.882,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Lacquer thinner, fruity odor"
  },
  {
    id: "isopropyl-acetate-solvent",
    name: "Isopropyl Acetate",
    category: "solvents",
    density: 0.872,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Printing ink, faster evaporating"
  },
  {
    id: "dcm-solvent",
    name: "Dichloromethane (DCM)",
    category: "solvents",
    density: 1.325,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Paint stripper, chlorinated"
  },
  {
    id: "chloroform-solvent",
    name: "Chloroform",
    category: "solvents",
    density: 1.489,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Extraction, lab, chlorinated"
  },
  {
    id: "carbon-tetrachloride-solvent",
    name: "Carbon Tetrachloride",
    category: "solvents",
    density: 1.594,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Dry cleaning (phased out), toxic, ozone depleter"
  },
  {
    id: "thf-solvent",
    name: "Tetrahydrofuran (THF)",
    category: "solvents",
    density: 0.889,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Polymer synthesis, cyclic ether"
  },
  {
    id: "dioxane-solvent",
    name: "Dioxane",
    category: "solvents",
    density: 1.034,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Stabilizer, lab, cyclic ether"
  },
  {
    id: "diethyl-ether-solvent",
    name: "Diethyl Ether",
    category: "solvents",
    density: 0.714,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Extraction, highly volatile"
  },
  {
    id: "petroleum-ether-solvent",
    name: "Petroleum Ether",
    category: "solvents",
    density: 0.640,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Extraction, light hydrocarbons"
  },
  {
    id: "hexane-solvent",
    name: "Hexane",
    category: "solvents",
    density: 0.659,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Oil extraction, hydrocarbon"
  },
  {
    id: "heptane-solvent",
    name: "Heptane",
    category: "solvents",
    density: 0.684,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Lab, rubber cement, hydrocarbon"
  },
  {
    id: "cyclohexane-solvent",
    name: "Cyclohexane",
    category: "solvents",
    density: 0.779,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Nylon production, cyclic hydrocarbon"
  },

  // =========================================
  // ACIDS
  // =========================================
  {
    id: "sulfuric-acid-98-acid",
    name: "Sulfuric Acid (98%)",
    category: "acids",
    density: 1.840,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Battery, production, highly corrosive"
  },
  {
    id: "sulfuric-acid-10-acid",
    name: "Sulfuric Acid (10%)",
    category: "acids",
    density: 1.066,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Lab, pH adjustment, dilute, less corrosive"
  },
  {
    id: "hydrochloric-acid-37-acid",
    name: "Hydrochloric Acid (37%)",
    category: "acids",
    density: 1.190,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Pickling, cleaning, corrosive"
  },
  {
    id: "hydrochloric-acid-10-acid",
    name: "Hydrochloric Acid (10%)",
    category: "acids",
    density: 1.048,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Lab, pH adjustment, dilute"
  },
  {
    id: "nitric-acid-68-acid",
    name: "Nitric Acid (68%)",
    category: "acids",
    density: 1.410,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Etching, fertilizers, oxidizing, corrosive"
  },
  {
    id: "nitric-acid-10-acid",
    name: "Nitric Acid (10%)",
    category: "acids",
    density: 1.055,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Lab, cleaning, dilute"
  },
  {
    id: "phosphoric-acid-85-acid",
    name: "Phosphoric Acid (85%)",
    category: "acids",
    density: 1.690,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Fertilizer, food additive, syrupy liquid"
  },
  {
    id: "acetic-acid-glacial-acid",
    name: "Acetic Acid (Glacial)",
    category: "acids",
    density: 1.049,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Vinegar, production, pure, corrosive"
  },
  {
    id: "acetic-acid-10-acid",
    name: "Acetic Acid (10%)",
    category: "acids",
    density: 1.013,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Cleaning, cooking, white vinegar"
  },
  {
    id: "citric-acid-50-acid",
    name: "Citric Acid (50%)",
    category: "acids",
    density: 1.200,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Food, cleaning, organic acid"
  },
  {
    id: "citric-acid-10-acid",
    name: "Citric Acid (10%)",
    category: "acids",
    density: 1.040,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Food additive, dilute"
  },
  {
    id: "lactic-acid-88-acid",
    name: "Lactic Acid (88%)",
    category: "acids",
    density: 1.206,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Food, cosmetics, mild, organic"
  },
  {
    id: "tartaric-acid-acid",
    name: "Tartaric Acid",
    category: "acids",
    density: 1.760,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Wine, baking, crystalline"
  },
  {
    id: "boric-acid-acid",
    name: "Boric Acid",
    category: "acids",
    density: 1.435,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Antiseptic, insecticide, weak, powder"
  },
  {
    id: "chromic-acid-acid",
    name: "Chromic Acid",
    category: "acids",
    density: 1.850,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Plating, cleaning, strong oxidizer"
  },
  {
    id: "perchloric-acid-70-acid",
    name: "Perchloric Acid (70%)",
    category: "acids",
    density: 1.670,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Analytical chemistry, powerful oxidizer"
  },
  {
    id: "hydrofluoric-acid-48-acid",
    name: "Hydrofluoric Acid (48%)",
    category: "acids",
    density: 1.150,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Glass etching, highly toxic"
  },
  {
    id: "oxalic-acid-acid",
    name: "Oxalic Acid",
    category: "acids",
    density: 1.900,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Cleaning, bleaching, toxic, organic"
  },
  {
    id: "formic-acid-85-acid",
    name: "Formic Acid (85%)",
    category: "acids",
    density: 1.220,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Leather, textile, organic, pungent"
  },
  {
    id: "propionic-acid-acid",
    name: "Propionic Acid",
    category: "acids",
    density: 0.993,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Preservative, herbicides, organic"
  },

  // =========================================
  // BASES
  // =========================================
  {
    id: "sodium-hydroxide-50-base",
    name: "Sodium Hydroxide (50%)",
    category: "bases",
    density: 1.515,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer spec",
    notes: "Caustic soda, highly corrosive"
  },
  {
    id: "sodium-hydroxide-10-base",
    name: "Sodium Hydroxide (10%)",
    category: "bases",
    density: 1.109,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Lab, pH adjustment, caustic, dilute"
  },
  {
    id: "potassium-hydroxide-50-base",
    name: "Potassium Hydroxide (50%)",
    category: "bases",
    density: 1.510,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Soap, biodiesel, caustic"
  },
  {
    id: "ammonium-hydroxide-28-base",
    name: "Ammonium Hydroxide (28%)",
    category: "bases",
    density: 0.900,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Cleaning, fertilizer, aqueous ammonia"
  },
  {
    id: "ammonium-hydroxide-10-base",
    name: "Ammonium Hydroxide (10%)",
    category: "bases",
    density: 0.957,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Lab, pH adjustment, dilute ammonia"
  },
  {
    id: "calcium-hydroxide-base",
    name: "Calcium Hydroxide (Slaked Lime)",
    category: "bases",
    density: 2.211,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Water treatment, solid, suspension"
  },
  {
    id: "sodium-carbonate-10-base",
    name: "Sodium Carbonate (10%)",
    category: "bases",
    density: 1.104,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "pH adjustment, washing soda"
  },
  {
    id: "sodium-bicarbonate-10-base",
    name: "Sodium Bicarbonate (10%)",
    category: "bases",
    density: 1.060,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Baking, cleaning, baking soda solution"
  },
  {
    id: "potassium-carbonate-10-base",
    name: "Potassium Carbonate (10%)",
    category: "bases",
    density: 1.088,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Lab, pH adjustment, potash solution"
  },
  {
    id: "triethylamine-base",
    name: "Triethylamine",
    category: "bases",
    density: 0.728,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Organic synthesis, organic base"
  },
  {
    id: "pyridine-base",
    name: "Pyridine",
    category: "bases",
    density: 0.982,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Solvent, reagent, organic base"
  },
  {
    id: "aniline-base",
    name: "Aniline",
    category: "bases",
    density: 1.022,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Dye, rubber, organic base"
  },
  {
    id: "ethanolamine-mea-base",
    name: "Ethanolamine (MEA)",
    category: "bases",
    density: 1.012,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Gas scrubbing, alkanolamine"
  },
  {
    id: "diethanolamine-dea-base",
    name: "Diethanolamine (DEA)",
    category: "bases",
    density: 1.097,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Gas scrubbing, alkanolamine"
  },
  {
    id: "triethanolamine-tea-base",
    name: "Triethanolamine (TEA)",
    category: "bases",
    density: 1.126,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Cosmetics, pH buffer, alkanolamine"
  },

  // =========================================
  // SPECIALTY CHEMICALS
  // =========================================
  {
    id: "glycerin-spec",
    name: "Glycerin",
    category: "specialty",
    density: 1.261,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Humectant, antifreeze, very viscous"
  },
  {
    id: "propylene-glycol-spec",
    name: "Propylene Glycol",
    category: "specialty",
    density: 1.036,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Food-grade antifreeze, safer alternative"
  },
  {
    id: "ethylene-glycol-spec",
    name: "Ethylene Glycol",
    category: "specialty",
    density: 1.113,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Antifreeze, coolant, toxic"
  },
  {
    id: "diethylene-glycol-spec",
    name: "Diethylene Glycol",
    category: "specialty",
    density: 1.118,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Humectant, brake fluid, higher boiling"
  },
  {
    id: "triethylene-glycol-spec",
    name: "Triethylene Glycol",
    category: "specialty",
    density: 1.124,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Gas dehydration, high boiling"
  },
  {
    id: "polyethylene-glycol-peg400-spec",
    name: "Polyethylene Glycol (PEG-400)",
    category: "specialty",
    density: 1.128,
    densityRange: null,
    temperature: 20,
    source: "USP spec",
    notes: "Cosmetics, laxative, polymer"
  },
  {
    id: "sorbitol-70-spec",
    name: "Sorbitol (70%)",
    category: "specialty",
    density: 1.370,
    densityRange: null,
    temperature: 20,
    source: "USP spec",
    notes: "Sweetener, humectant, sugar alcohol"
  },
  {
    id: "fructose-syrup-spec",
    name: "Fructose Syrup",
    category: "specialty",
    density: 1.380,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Sweetener, high-fructose"
  },
  {
    id: "glucose-syrup-spec",
    name: "Glucose Syrup",
    category: "specialty",
    density: 1.400,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Food, pharmaceutical, dextrose solution"
  },
  {
    id: "corn-syrup-spec",
    name: "Corn Syrup",
    category: "specialty",
    density: 1.380,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Baking, sweetener, light corn syrup"
  },
  {
    id: "honey-spec",
    name: "Honey",
    category: "specialty",
    density: 1.420,
    densityRange: { min: 1.400, max: 1.440 },
    temperature: 20,
    source: "USDA Food Data",
    notes: "Food, sweetener, natural"
  },
  {
    id: "molasses-spec",
    name: "Molasses",
    category: "specialty",
    density: 1.425,
    densityRange: { min: 1.400, max: 1.450 },
    temperature: 20,
    source: "USDA Food Data",
    notes: "Food, fermentation, blackstrap"
  },
  {
    id: "maple-syrup-spec",
    name: "Maple Syrup",
    category: "specialty",
    density: 1.330,
    densityRange: { min: 1.320, max: 1.340 },
    temperature: 20,
    source: "USDA Food Data",
    notes: "Food, Grade A"
  },
  {
    id: "glycerol-monostearate-spec",
    name: "Glycerol Monostearate",
    category: "specialty",
    density: 0.970,
    densityRange: null,
    temperature: 20,
    source: "FCC spec",
    notes: "Emulsifier, food additive"
  },
  {
    id: "sodium-lauryl-sulfate-30-spec",
    name: "Sodium Lauryl Sulfate (30%)",
    category: "specialty",
    density: 1.030,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer spec",
    notes: "Surfactant, cleaning"
  },
  {
    id: "tween-80-spec",
    name: "Tween 80",
    category: "specialty",
    density: 1.068,
    densityRange: null,
    temperature: 20,
    source: "USP spec",
    notes: "Emulsifier, polysorbate"
  },

  // =========================================
  // AUTOMOTIVE & ENGINE OILS
  // =========================================
  {
    id: "sae-0w20",
    name: "SAE 0W-20 Engine Oil",
    category: "automotive",
    density: 0.842,
    densityRange: null,
    temperature: 15,
    source: "SAE J300",
    notes: "Modern gasoline engines, fuel economy, cold flow"
  },
  {
    id: "sae-0w30",
    name: "SAE 0W-30 Engine Oil",
    category: "automotive",
    density: 0.845,
    densityRange: null,
    temperature: 15,
    source: "SAE J300",
    notes: "European cars, high performance"
  },
  {
    id: "sae-0w40",
    name: "SAE 0W-40 Engine Oil",
    category: "automotive",
    density: 0.848,
    densityRange: null,
    temperature: 15,
    source: "SAE J300",
    notes: "High-performance engines, European spec"
  },
  {
    id: "sae-5w20",
    name: "SAE 5W-20 Engine Oil",
    category: "automotive",
    density: 0.850,
    densityRange: null,
    temperature: 15,
    source: "SAE J300",
    notes: "Ford/Mazda engines, fuel economy"
  },
  {
    id: "sae-5w30",
    name: "SAE 5W-30 Engine Oil",
    category: "automotive",
    density: 0.855,
    densityRange: null,
    temperature: 15,
    source: "SAE J300",
    notes: "Most modern gasoline, most common grade"
  },
  {
    id: "sae-5w40",
    name: "SAE 5W-40 Engine Oil",
    category: "automotive",
    density: 0.858,
    densityRange: null,
    temperature: 15,
    source: "SAE J300",
    notes: "European & diesel, wide temperature"
  },
  {
    id: "sae-10w30",
    name: "SAE 10W-30 Engine Oil",
    category: "automotive",
    density: 0.875,
    densityRange: null,
    temperature: 15,
    source: "SAE J300",
    notes: "Older gasoline engines, conventional"
  },
  {
    id: "sae-10w40",
    name: "SAE 10W-40 Engine Oil",
    category: "automotive",
    density: 0.880,
    densityRange: null,
    temperature: 15,
    source: "SAE J300",
    notes: "High-mileage, thicker at cold"
  },
  {
    id: "sae-15w40",
    name: "SAE 15W-40 Engine Oil",
    category: "automotive",
    density: 0.890,
    densityRange: null,
    temperature: 15,
    source: "SAE J300",
    notes: "Diesel engines, heavy-duty"
  },
  {
    id: "sae-20w50",
    name: "SAE 20W-50 Engine Oil",
    category: "automotive",
    density: 0.900,
    densityRange: null,
    temperature: 15,
    source: "SAE J300",
    notes: "Racing, vintage, high viscosity"
  },
  {
    id: "sae-30-straight",
    name: "SAE 30 Straight Engine Oil",
    category: "automotive",
    density: 0.885,
    densityRange: null,
    temperature: 15,
    source: "SAE J300",
    notes: "Small engines, non-detergent"
  },
  {
    id: "sae-40-straight",
    name: "SAE 40 Straight Engine Oil",
    category: "automotive",
    density: 0.895,
    densityRange: null,
    temperature: 15,
    source: "SAE J300",
    notes: "Industrial, heavy-duty"
  },
  {
    id: "sae-50-straight",
    name: "SAE 50 Straight Engine Oil",
    category: "automotive",
    density: 0.905,
    densityRange: null,
    temperature: 15,
    source: "SAE J300",
    notes: "Racing, very high viscosity"
  },
  {
    id: "sae-60-straight",
    name: "SAE 60 Straight Engine Oil",
    category: "automotive",
    density: 0.915,
    densityRange: null,
    temperature: 15,
    source: "SAE J300",
    notes: "Racing, extreme, maximum viscosity"
  },

  // =========================================
  // TRANSMISSION & GEAR OILS
  // =========================================
  { id: "atf-dexron-iii", name: "ATF Dexron III", category: "transmission-oils", density: 0.855, densityRange: null, temperature: 15, source: "GM spec", notes: "GM automatic transmissions, older spec" },
  { id: "atf-dexron-vi", name: "ATF Dexron VI", category: "transmission-oils", density: 0.852, densityRange: null, temperature: 15, source: "GM spec", notes: "GM automatic transmissions, latest spec" },
  { id: "atf-mercon-v", name: "ATF Mercon V", category: "transmission-oils", density: 0.856, densityRange: null, temperature: 15, source: "Ford spec", notes: "Ford automatic transmissions, Ford spec" },
  { id: "atf-mercon-lv", name: "ATF Mercon LV", category: "transmission-oils", density: 0.854, densityRange: null, temperature: 15, source: "Ford spec", notes: "Ford automatic transmissions, low viscosity" },
  { id: "atf-type-f", name: "ATF Type F", category: "transmission-oils", density: 0.858, densityRange: null, temperature: 15, source: "Ford spec", notes: "Older Ford transmissions, friction modified" },
  { id: "cvt-fluid", name: "CVT Fluid", category: "transmission-oils", density: 0.860, densityRange: null, temperature: 15, source: "Manufacturer spec", notes: "Continuously variable transmissions, special additive" },
  { id: "dct-fluid", name: "DCT Fluid", category: "transmission-oils", density: 0.858, densityRange: null, temperature: 15, source: "Manufacturer spec", notes: "Dual-clutch transmissions, high performance" },
  { id: "sae-75w90-gl4", name: "SAE 75W-90 GL-4", category: "transmission-oils", density: 0.892, densityRange: null, temperature: 15, source: "SAE J306", notes: "Manual transmissions, synchromesh" },
  { id: "sae-75w90-gl5", name: "SAE 75W-90 GL-5", category: "transmission-oils", density: 0.895, densityRange: null, temperature: 15, source: "SAE J306", notes: "Differentials, limited slip" },
  { id: "sae-80w90-gl5", name: "SAE 80W-90 GL-5", category: "transmission-oils", density: 0.900, densityRange: null, temperature: 15, source: "SAE J306", notes: "Heavy-duty axles, conventional" },
  { id: "sae-75w140", name: "SAE 75W-140", category: "transmission-oils", density: 0.910, densityRange: null, temperature: 15, source: "SAE J306", notes: "High-performance diffs, severe duty" },
  { id: "transfer-case-fluid", name: "Transfer Case Fluid", category: "transmission-oils", density: 0.860, densityRange: null, temperature: 15, source: "Manufacturer spec", notes: "4WD transfer cases, ATF-style" },
  { id: "power-steering-fluid", name: "Power Steering Fluid", category: "transmission-oils", density: 0.875, densityRange: null, temperature: 15, source: "OEM spec", notes: "Hydraulic steering, standard" },
  { id: "hydraulic-fluid-aw32", name: "Hydraulic Fluid AW-32", category: "transmission-oils", density: 0.870, densityRange: null, temperature: 15, source: "ISO 32", notes: "Light hydraulic" },
  { id: "hydraulic-fluid-aw46", name: "Hydraulic Fluid AW-46", category: "transmission-oils", density: 0.875, densityRange: null, temperature: 15, source: "ISO 46", notes: "Medium hydraulic" },
  { id: "hydraulic-fluid-aw68", name: "Hydraulic Fluid AW-68", category: "transmission-oils", density: 0.880, densityRange: null, temperature: 15, source: "ISO 68", notes: "Heavy hydraulic" },

  // =========================================
  // BRAKE & HYDRAULIC FLUIDS
  // =========================================
  { id: "dot-3-brake", name: "DOT 3 Brake Fluid", category: "brake-fluids", density: 1.060, densityRange: null, temperature: 20, source: "FMVSS 116", notes: "Standard vehicles, glycol-based, dry BP 205°C" },
  { id: "dot-4-brake", name: "DOT 4 Brake Fluid", category: "brake-fluids", density: 1.080, densityRange: null, temperature: 20, source: "FMVSS 116", notes: "Modern vehicles, higher boiling, dry BP 230°C" },
  { id: "dot-4-plus-lv", name: "DOT 4+ (LV) Brake Fluid", category: "brake-fluids", density: 1.075, densityRange: null, temperature: 20, source: "FMVSS 116", notes: "ABS systems, low viscosity, dry BP 240°C" },
  { id: "dot-5-brake", name: "DOT 5 Brake Fluid", category: "brake-fluids", density: 1.050, densityRange: null, temperature: 20, source: "FMVSS 116", notes: "Military/racing, silicone-based, dry BP 260°C" },
  { id: "dot-51-brake", name: "DOT 5.1 Brake Fluid", category: "brake-fluids", density: 1.085, densityRange: null, temperature: 20, source: "FMVSS 116", notes: "Racing, high-performance, glycol-based, dry BP 270°C" },
  { id: "mineral-oil-brake", name: "Mineral Oil Brake Fluid", category: "brake-fluids", density: 0.860, densityRange: null, temperature: 20, source: "OEM spec", notes: "European vehicles (Citroën/BMW), dry BP 200°C" },
  { id: "lhm-citroen", name: "LHM Fluid (Citroën)", category: "brake-fluids", density: 0.865, densityRange: null, temperature: 20, source: "ISO 7308", notes: "Citroën suspension & brakes, mineral-based" },

  // =========================================
  // COOLANTS & ANTIFREEZE
  // =========================================
  { id: "ethylene-glycol-conc", name: "Ethylene Glycol (Conc.)", category: "coolants", density: 1.113, densityRange: null, temperature: 20, source: "ASTM D3306", notes: "Antifreeze concentrate, toxic, freeze FP -13°C, BP 197°C" },
  { id: "ethylene-glycol-5050", name: "Ethylene Glycol (50/50)", category: "coolants", density: 1.060, densityRange: null, temperature: 20, source: "ASTM D3306", notes: "Standard coolant, 50% water, FP -37°C, BP 108°C" },
  { id: "ethylene-glycol-7030", name: "Ethylene Glycol (70/30)", category: "coolants", density: 1.075, densityRange: null, temperature: 20, source: "ASTM D3306", notes: "Extreme cold, 70% concentrate, FP -55°C, BP 113°C" },
  { id: "propylene-glycol-conc", name: "Propylene Glycol (Conc.)", category: "coolants", density: 1.036, densityRange: null, temperature: 20, source: "ASTM D5216", notes: "Food-grade, less toxic, FP -6°C, BP 187°C" },
  { id: "propylene-glycol-5050", name: "Propylene Glycol (50/50)", category: "coolants", density: 1.020, densityRange: null, temperature: 20, source: "ASTM D5216", notes: "Food-grade coolant, safer option, FP -32°C, BP 105°C" },
  { id: "oat-coolant-conc", name: "OAT Coolant (Conc.)", category: "coolants", density: 1.120, densityRange: null, temperature: 20, source: "OEM spec", notes: "Long-life, organic acid, FP -15°C, BP 195°C" },
  { id: "oat-coolant-5050", name: "OAT Coolant (50/50)", category: "coolants", density: 1.065, densityRange: null, temperature: 20, source: "OEM spec", notes: "Long-life, pre-mix, FP -37°C, BP 108°C" },
  { id: "hoat-coolant-conc", name: "HOAT Coolant (Conc.)", category: "coolants", density: 1.115, densityRange: null, temperature: 20, source: "OEM spec", notes: "Hybrid, silicate+OAT, FP -14°C, BP 197°C" },
  { id: "hoat-coolant-5050", name: "HOAT Coolant (50/50)", category: "coolants", density: 1.060, densityRange: null, temperature: 20, source: "OEM spec", notes: "Hybrid, pre-mix, FP -36°C, BP 108°C" },
  { id: "iat-coolant-conc", name: "IAT Coolant (Conc.)", category: "coolants", density: 1.110, densityRange: null, temperature: 20, source: "Conventional", notes: "Older vehicles, inorganic, FP -12°C, BP 195°C" },
  { id: "iat-coolant-5050", name: "IAT Coolant (50/50)", category: "coolants", density: 1.055, densityRange: null, temperature: 20, source: "Conventional", notes: "Older vehicles, pre-mix, FP -34°C, BP 107°C" },
  { id: "dexcool-conc", name: "Dex-Cool (Conc.)", category: "coolants", density: 1.118, densityRange: null, temperature: 20, source: "GM spec", notes: "GM vehicles, OAT-based, FP -14°C, BP 197°C" },
  { id: "dexcool-5050", name: "Dex-Cool (50/50)", category: "coolants", density: 1.062, densityRange: null, temperature: 20, source: "GM spec", notes: "GM vehicles, orange color, FP -37°C, BP 108°C" },
  { id: "water-wetter-35", name: "Water + Wetter (35%)", category: "coolants", density: 1.030, densityRange: null, temperature: 20, source: "Racing spec", notes: "Racing, water wetter additive, FP -18°C, BP 110°C" },
  { id: "evaporative-coolant", name: "Evaporative Coolant", category: "coolants", density: 0.980, densityRange: null, temperature: 20, source: "Specialty", notes: "Evap cooling, specialized, FP -10°C, BP 195°C" },

  // =========================================
  // AUTOMOTIVE ADDITIVES & SPECIALTY
  // =========================================
  { id: "washer-fluid-summer", name: "Windshield Washer (Summer)", category: "auto-additives", density: 0.980, densityRange: null, temperature: 20, source: "Commercial", notes: "Cleaning, water + detergent" },
  { id: "washer-fluid-winter", name: "Windshield Washer (Winter)", category: "auto-additives", density: 0.950, densityRange: null, temperature: 20, source: "Commercial", notes: "De-icing, contains methanol" },
  { id: "washer-fluid-30", name: "Windshield Washer (-30°C)", category: "auto-additives", density: 0.940, densityRange: null, temperature: 20, source: "Commercial", notes: "Extreme cold, high methanol" },
  { id: "def-standard", name: "Diesel Exhaust Fluid (DEF)", category: "auto-additives", density: 1.090, densityRange: null, temperature: 20, source: "ISO 22241", notes: "SCR emissions, urea solution" },
  { id: "def-325-urea", name: "DEF (32.5% Urea)", category: "auto-additives", density: 1.087, densityRange: null, temperature: 20, source: "ISO 22241", notes: "Heavy-duty diesel, ISO 22241" },
  { id: "grease-lithium", name: "Grease (Lithium)", category: "auto-additives", density: 0.900, densityRange: null, temperature: 20, source: "NLGI #2", notes: "Chassis lubrication, NLGI #2" },
  { id: "grease-moly", name: "Grease (Molybdenum)", category: "auto-additives", density: 0.950, densityRange: null, temperature: 20, source: "NLGI #2", notes: "CV joints, extreme pressure" },
  { id: "grease-synthetic", name: "Grease (Synthetic)", category: "auto-additives", density: 0.880, densityRange: null, temperature: 20, source: "NLGI #2", notes: "Wheel bearings, high-temp" },
  { id: "penetrating-fluid-wd40", name: "Penetrating Fluid (WD-40)", category: "auto-additives", density: 0.800, densityRange: null, temperature: 20, source: "Manufacturer spec", notes: "Rust penetration, light lubricant" },
  { id: "silicone-spray", name: "Silicone Spray", category: "auto-additives", density: 0.760, densityRange: null, temperature: 20, source: "Manufacturer spec", notes: "Lubricant, protectant, silicone-based" },
  { id: "tire-shine", name: "Tire Shine", category: "auto-additives", density: 0.980, densityRange: null, temperature: 20, source: "Commercial", notes: "Tire dressing, water-based" },
  { id: "undercarriage-coating", name: "Undercarriage Coating", category: "auto-additives", density: 1.050, densityRange: null, temperature: 20, source: "Commercial", notes: "Rust protection, wax/oil-based" },
  { id: "rust-inhibitor", name: "Rust Inhibitor", category: "auto-additives", density: 0.980, densityRange: null, temperature: 20, source: "Commercial", notes: "Corrosion prevention, spray-on" },
  { id: "fuel-additive-injector", name: "Fuel Additive (Injector)", category: "auto-additives", density: 0.780, densityRange: null, temperature: 20, source: "Commercial", notes: "Fuel system cleaner, solvent-based" },
  { id: "fuel-additive-cetane", name: "Fuel Additive (Cetane)", category: "auto-additives", density: 0.850, densityRange: null, temperature: 20, source: "Commercial", notes: "Diesel improvement, cetane booster" },
  { id: "oil-additive-viscosity", name: "Oil Additive (Viscosity)", category: "auto-additives", density: 0.900, densityRange: null, temperature: 20, source: "Commercial", notes: "Engine treatment, viscosity modifier" },
  { id: "transmission-additive", name: "Transmission Additive", category: "auto-additives", density: 0.860, densityRange: null, temperature: 20, source: "Commercial", notes: "Transmission treatment, stop leak" },
  { id: "radiator-stop-leak", name: "Radiator Stop Leak", category: "auto-additives", density: 1.100, densityRange: null, temperature: 20, source: "Commercial", notes: "Cooling system, sealer" },

  // =========================================
  // DAIRY PRODUCTS
  // =========================================
  { id: "whole-milk-325", name: "Whole Milk (3.25%)", category: "dairy", density: 1.030, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Drinking, cooking, standard dairy" },
  { id: "reduced-fat-milk-2", name: "Reduced Fat Milk (2%)", category: "dairy", density: 1.032, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Drinking, lower fat" },
  { id: "low-fat-milk-1", name: "Low Fat Milk (1%)", category: "dairy", density: 1.033, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Drinking, reduced calorie" },
  { id: "skim-milk-0", name: "Skim Milk (0%)", category: "dairy", density: 1.035, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Drinking, baking, fat-free" },
  { id: "buttermilk-cultured", name: "Buttermilk (Cultured)", category: "dairy", density: 1.040, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Baking, pancakes, tangy flavor" },
  { id: "half-and-half", name: "Half & Half (10-12%)", category: "dairy", density: 1.020, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Coffee, sauces, light cream" },
  { id: "light-cream", name: "Light Cream (18-20%)", category: "dairy", density: 1.010, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Coffee, desserts, whipping" },
  { id: "heavy-cream", name: "Heavy Cream (36-40%)", category: "dairy", density: 1.000, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Whipping, sauces, high fat" },
  { id: "whipping-cream", name: "Whipping Cream (30-35%)", category: "dairy", density: 1.005, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Desserts, piping, medium fat" },
  { id: "condensed-milk-sweetened", name: "Condensed Milk (Sweetened)", category: "dairy", density: 1.300, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Desserts, baking, 40-45% sugar" },
  { id: "evaporated-milk-whole", name: "Evaporated Milk (Whole)", category: "dairy", density: 1.060, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Baking, sauces, unsweetened" },
  { id: "evaporated-skim-milk", name: "Evaporated Skim Milk", category: "dairy", density: 1.065, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Baking, low-fat, fat-free" },
  { id: "dry-milk-powder-whole", name: "Dry Milk Powder (Whole)", category: "dairy", density: 0.350, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Baking, emergency, reconstitute" },
  { id: "dry-skim-milk-powder", name: "Dry Skim Milk Powder", category: "dairy", density: 0.320, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Baking, low-fat, reconstitute" },
  { id: "yogurt-plain-full-fat", name: "Yogurt (Plain, Full-fat)", category: "dairy", density: 1.040, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Eating, cooking, cultured" },
  { id: "yogurt-plain-low-fat", name: "Yogurt (Plain, Low-fat)", category: "dairy", density: 1.045, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Eating, cooking, reduced fat" },
  { id: "yogurt-greek-full-fat", name: "Yogurt (Greek, Full-fat)", category: "dairy", density: 1.050, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Eating, dips, strained, thick" },
  { id: "yogurt-greek-non-fat", name: "Yogurt (Greek, Non-fat)", category: "dairy", density: 1.055, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Eating, dips, strained" },
  { id: "sour-cream-full-fat", name: "Sour Cream (Full-fat)", category: "dairy", density: 0.990, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Toppings, baking, cultured" },
  { id: "sour-cream-light", name: "Sour Cream (Light)", category: "dairy", density: 1.010, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Toppings, baking, reduced fat" },
  { id: "cream-cheese-full-fat", name: "Cream Cheese (Full-fat)", category: "dairy", density: 0.990, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Spreads, cheesecake, soft cheese" },
  { id: "cream-cheese-light", name: "Cream Cheese (Light)", category: "dairy", density: 1.020, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Spreads, baking, reduced fat" },
  { id: "mascarpone", name: "Mascarpone", category: "dairy", density: 0.985, densityRange: null, temperature: 15, source: "Italian Spec", notes: "Tiramisu, desserts, Italian cream" },
  { id: "ricotta-whole-milk", name: "Ricotta (Whole Milk)", category: "dairy", density: 1.040, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Lasagna, pastries, soft cheese" },
  { id: "ricotta-part-skim", name: "Ricotta (Part-Skim)", category: "dairy", density: 1.045, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Lasagna, pastries, lower fat" },
  { id: "cottage-cheese-full-fat", name: "Cottage Cheese (Full-fat)", category: "dairy", density: 1.040, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Eating, dips, curds & whey" },
  { id: "cottage-cheese-low-fat", name: "Cottage Cheese (Low-fat)", category: "dairy", density: 1.045, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Eating, dips, reduced fat" },
  { id: "butter-melted-82", name: "Butter (Melted, 82%)", category: "dairy", density: 0.910, densityRange: null, temperature: 40, source: "USDA Spec", notes: "Cooking, baking, salted/unsalted" },
  { id: "clarified-butter-ghee", name: "Clarified Butter (Ghee)", category: "dairy", density: 0.905, densityRange: null, temperature: 40, source: "USDA Spec", notes: "Cooking, frying, pure fat" },
  { id: "buttermilk-powder", name: "Buttermilk Powder", category: "dairy", density: 0.380, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Baking, dried" },
  { id: "whey-protein-liquid", name: "Whey Protein (Liquid)", category: "dairy", density: 1.050, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Sports nutrition, concentrate" },

  // =========================================
  // COOKING OILS & FATS
  // =========================================
  { id: "olive-oil-extra-virgin", name: "Olive Oil (Extra Virgin)", category: "cooking-oils", density: 0.910, densityRange: null, temperature: 20, source: "IOC Spec", notes: "Dressings, sauté, smoke point 190°C" },
  { id: "olive-oil-pure", name: "Olive Oil (Pure)", category: "cooking-oils", density: 0.913, densityRange: null, temperature: 20, source: "IOC Spec", notes: "Sauté, roasting, smoke point 210°C" },
  { id: "olive-oil-light", name: "Olive Oil (Light)", category: "cooking-oils", density: 0.915, densityRange: null, temperature: 20, source: "IOC Spec", notes: "Frying, baking, smoke point 240°C" },
  { id: "avocado-oil", name: "Avocado Oil", category: "cooking-oils", density: 0.912, densityRange: null, temperature: 20, source: "Manufacturer Spec", notes: "High-heat cooking, smoke point 270°C" },
  { id: "coconut-oil-melted", name: "Coconut Oil (Melted)", category: "cooking-oils", density: 0.924, densityRange: null, temperature: 30, source: "USDA Spec", notes: "Baking, frying, smoke point 177°C" },
  { id: "coconut-oil-refined", name: "Coconut Oil (Refined)", category: "cooking-oils", density: 0.927, densityRange: null, temperature: 30, source: "USDA Spec", notes: "High-heat, baking, smoke point 204°C" },
  { id: "canola-oil", name: "Canola Oil", category: "cooking-oils", density: 0.918, densityRange: null, temperature: 20, source: "USDA Spec", notes: "All-purpose, smoke point 204°C" },
  { id: "vegetable-oil-soybean", name: "Vegetable Oil (Soybean)", category: "cooking-oils", density: 0.920, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Frying, baking, smoke point 230°C" },
  { id: "sunflower-oil", name: "Sunflower Oil", category: "cooking-oils", density: 0.919, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Frying, dressings, smoke point 227°C" },
  { id: "safflower-oil", name: "Safflower Oil", category: "cooking-oils", density: 0.920, densityRange: null, temperature: 20, source: "USDA Spec", notes: "High-heat, frying, smoke point 266°C" },
  { id: "peanut-oil", name: "Peanut Oil", category: "cooking-oils", density: 0.912, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Stir-fry, frying, smoke point 232°C" },
  { id: "sesame-oil-light", name: "Sesame Oil (Light)", category: "cooking-oils", density: 0.916, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Sauté, cooking, smoke point 210°C" },
  { id: "sesame-oil-dark", name: "Sesame Oil (Dark)", category: "cooking-oils", density: 0.920, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Asian cooking, smoke point 177°C" },
  { id: "corn-oil", name: "Corn Oil", category: "cooking-oils", density: 0.922, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Frying, baking, smoke point 232°C" },
  { id: "grapeseed-oil", name: "Grapeseed Oil", category: "cooking-oils", density: 0.923, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Sauté, dressings, smoke point 216°C" },
  { id: "rice-bran-oil", name: "Rice Bran Oil", category: "cooking-oils", density: 0.918, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Deep frying, smoke point 254°C" },
  { id: "palm-oil-liquid", name: "Palm Oil (Liquid)", category: "cooking-oils", density: 0.888, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Frying, cooking, smoke point 230°C" },
  { id: "palm-kernel-oil", name: "Palm Kernel Oil", category: "cooking-oils", density: 0.905, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Baking, frying, smoke point 230°C" },
  { id: "flaxseed-oil", name: "Flaxseed Oil", category: "cooking-oils", density: 0.927, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Dressings, supplements, smoke point 107°C" },
  { id: "walnut-oil", name: "Walnut Oil", category: "cooking-oils", density: 0.925, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Dressings, baking, smoke point 160°C" },
  { id: "almond-oil", name: "Almond Oil", category: "cooking-oils", density: 0.915, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Baking, salad, smoke point 216°C" },
  { id: "hazelnut-oil", name: "Hazelnut Oil", category: "cooking-oils", density: 0.916, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Dressings, baking, smoke point 221°C" },
  { id: "macadamia-oil", name: "Macadamia Oil", category: "cooking-oils", density: 0.913, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Sauté, dressings, smoke point 210°C" },
  { id: "lard-melted", name: "Lard (Melted)", category: "cooking-oils", density: 0.900, densityRange: null, temperature: 40, source: "USDA Spec", notes: "Pastry, frying, smoke point 190°C" },
  { id: "tallow-beef", name: "Tallow (Beef)", category: "cooking-oils", density: 0.895, densityRange: null, temperature: 40, source: "USDA Spec", notes: "Frying, roasting, smoke point 250°C" },
  { id: "shortening-vegetable", name: "Shortening (Vegetable)", category: "cooking-oils", density: 0.900, densityRange: null, temperature: 40, source: "USDA Spec", notes: "Baking, frying, smoke point 220°C" },
  { id: "margarine-melted", name: "Margarine (Melted)", category: "cooking-oils", density: 0.915, densityRange: null, temperature: 40, source: "USDA Spec", notes: "Baking, spreading, smoke point 180°C" },
  { id: "butter-melted-oil", name: "Butter (Melted)", category: "cooking-oils", density: 0.910, densityRange: null, temperature: 40, source: "USDA Spec", notes: "Baking, cooking, smoke point 177°C" },
  { id: "ghee-clarified-oil", name: "Ghee (Clarified)", category: "cooking-oils", density: 0.905, densityRange: null, temperature: 40, source: "USDA Spec", notes: "Indian cooking, smoke point 252°C" },
  { id: "goose-fat", name: "Goose Fat", category: "cooking-oils", density: 0.900, densityRange: null, temperature: 40, source: "Culinary Spec", notes: "Roasting, classic, smoke point 190°C" },

  // =========================================
  // SWEETENERS & SYRUPS
  // =========================================
  { id: "sugar-granulated", name: "Sugar (Granulated)", category: "sweeteners", density: 0.850, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Baking, sweetening, 100 Brix" },
  { id: "sugar-powdered", name: "Sugar (Powdered)", category: "sweeteners", density: 0.560, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Frosting, icing, contains starch" },
  { id: "brown-sugar-light", name: "Brown Sugar (Light)", category: "sweeteners", density: 0.850, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Baking, flavor, 95 Brix" },
  { id: "brown-sugar-dark", name: "Brown Sugar (Dark)", category: "sweeteners", density: 0.880, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Baking, flavor, 90 Brix" },
  { id: "sugar-raw-turbinado", name: "Sugar (Raw/Turbinado)", category: "sweeteners", density: 0.830, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Coffee, baking, 99 Brix" },
  { id: "honey-clover", name: "Honey (Clover)", category: "sweeteners", density: 1.420, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Sweetening, baking, 82 Brix" },
  { id: "honey-wildflower", name: "Honey (Wildflower)", category: "sweeteners", density: 1.430, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Sweetening, baking, 83 Brix" },
  { id: "honey-manuka", name: "Honey (Manuka)", category: "sweeteners", density: 1.440, densityRange: null, temperature: 20, source: "NZ Spec", notes: "Medicinal, eating, 84 Brix" },
  { id: "maple-syrup-grade-a", name: "Maple Syrup (Grade A)", category: "sweeteners", density: 1.330, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Pancakes, baking, 66 Brix" },
  { id: "maple-syrup-grade-b", name: "Maple Syrup (Grade B)", category: "sweeteners", density: 1.340, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Pancakes, baking, 68 Brix" },
  { id: "corn-syrup-light", name: "Corn Syrup (Light)", category: "sweeteners", density: 1.380, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Candy, baking, 70 Brix" },
  { id: "corn-syrup-dark", name: "Corn Syrup (Dark)", category: "sweeteners", density: 1.420, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Candy, baking, 72 Brix" },
  { id: "golden-syrup", name: "Golden Syrup", category: "sweeteners", density: 1.420, densityRange: null, temperature: 20, source: "UK Spec", notes: "Baking, desserts, 78 Brix" },
  { id: "molasses-light", name: "Molasses (Light)", category: "sweeteners", density: 1.400, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Baking, flavor, 75 Brix" },
  { id: "molasses-dark", name: "Molasses (Dark)", category: "sweeteners", density: 1.425, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Baking, flavor, 70 Brix" },
  { id: "blackstrap-molasses", name: "Blackstrap Molasses", category: "sweeteners", density: 1.450, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Health, baking, 55 Brix" },
  { id: "sugar-cane-syrup", name: "Sugar Cane Syrup", category: "sweeteners", density: 1.350, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Sweetening, baking, 70 Brix" },
  { id: "agave-syrup-light", name: "Agave Syrup (Light)", category: "sweeteners", density: 1.380, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "Sweetening, cocktails, 76 Brix" },
  { id: "agave-syrup-dark", name: "Agave Syrup (Dark)", category: "sweeteners", density: 1.400, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "Sweetening, baking, 78 Brix" },
  { id: "brown-rice-syrup", name: "Brown Rice Syrup", category: "sweeteners", density: 1.400, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "Baking, sweetening, 42 Brix" },
  { id: "date-syrup", name: "Date Syrup", category: "sweeteners", density: 1.400, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "Sweetening, baking, 70 Brix" },
  { id: "glucose-syrup-de42", name: "Glucose Syrup (DE42)", category: "sweeteners", density: 1.400, densityRange: null, temperature: 20, source: "Industrial Spec", notes: "Candy, brewing, 42 Brix" },
  { id: "glucose-syrup-de60", name: "Glucose Syrup (DE60)", category: "sweeteners", density: 1.430, densityRange: null, temperature: 20, source: "Industrial Spec", notes: "Candy, brewing, 60 Brix" },
  { id: "fructose-syrup-hfcs55", name: "Fructose Syrup (HFCS55)", category: "sweeteners", density: 1.380, densityRange: null, temperature: 20, source: "Industrial Spec", notes: "Soda, food, 77 Brix" },
  { id: "invert-sugar-syrup", name: "Invert Sugar Syrup", category: "sweeteners", density: 1.410, densityRange: null, temperature: 20, source: "Industrial Spec", notes: "Brewing, baking, 75 Brix" },
  { id: "maltose-syrup", name: "Maltose Syrup", category: "sweeteners", density: 1.420, densityRange: null, temperature: 20, source: "Industrial Spec", notes: "Brewing, baking, 70 Brix" },
  { id: "treacle", name: "Treacle", category: "sweeteners", density: 1.430, densityRange: null, temperature: 20, source: "UK Spec", notes: "Baking, flavor, 75 Brix" },

  // =========================================
  // CONDIMENTS & SAUCES
  // =========================================
  { id: "ketchup", name: "Ketchup", category: "condiments", density: 1.130, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Tomatoes, condiment, cooking" },
  { id: "mustard-yellow", name: "Mustard (Yellow)", category: "condiments", density: 1.050, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Mustard seed, American style" },
  { id: "dijon-mustard", name: "Dijon Mustard", category: "condiments", density: 1.060, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Brown mustard, French style" },
  { id: "whole-grain-mustard", name: "Whole Grain Mustard", category: "condiments", density: 1.065, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Mustard seeds, coarse" },
  { id: "mayonnaise-full-fat", name: "Mayonnaise (Full-fat)", category: "condiments", density: 0.910, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Oil, egg, 70-80% oil" },
  { id: "light-mayonnaise", name: "Light Mayonnaise", category: "condiments", density: 0.950, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Oil, egg, 30-50% oil" },
  { id: "miracle-whip", name: "Miracle Whip", category: "condiments", density: 0.960, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "Oil, egg, sweet & tangy" },
  { id: "soy-sauce-regular", name: "Soy Sauce (Regular)", category: "condiments", density: 1.100, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Soy, wheat, Asian cooking" },
  { id: "soy-sauce-low-sodium", name: "Soy Sauce (Low Sodium)", category: "condiments", density: 1.105, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Soy, wheat, reduced salt" },
  { id: "tamari", name: "Tamari", category: "condiments", density: 1.100, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Soy, wheat-free" },
  { id: "worcestershire-sauce", name: "Worcestershire Sauce", category: "condiments", density: 1.100, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Fermented, complex flavor" },
  { id: "fish-sauce", name: "Fish Sauce", category: "condiments", density: 1.120, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Fish, Southeast Asian, umami" },
  { id: "oyster-sauce", name: "Oyster Sauce", category: "condiments", density: 1.150, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Oyster, Chinese cooking, savory" },
  { id: "hoisin-sauce", name: "Hoisin Sauce", category: "condiments", density: 1.130, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Soy, garlic, sweet & savory" },
  { id: "sriracha", name: "Sriracha", category: "condiments", density: 1.040, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "Chili, hot & garlic" },
  { id: "hot-sauce-tabasco", name: "Hot Sauce (Tabasco)", category: "condiments", density: 0.980, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "Chili, vinegar, very hot" },
  { id: "buffalo-sauce", name: "Buffalo Sauce", category: "condiments", density: 1.010, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "Hot sauce, butter, spicy" },
  { id: "barbecue-sauce", name: "Barbecue Sauce", category: "condiments", density: 1.120, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Tomato, vinegar, sweet & tangy" },
  { id: "sweet-chili-sauce", name: "Sweet Chili Sauce", category: "condiments", density: 1.150, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Chili, sugar, sweet & spicy" },
  { id: "teriyaki-sauce", name: "Teriyaki Sauce", category: "condiments", density: 1.120, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Soy, sugar, sake, sweet glaze" },
  { id: "ponzu", name: "Ponzu", category: "condiments", density: 1.100, densityRange: null, temperature: 20, source: "Japanese Spec", notes: "Soy, citrus, citrusy" },
  { id: "vinegar-white-5", name: "Vinegar (White, 5%)", category: "condiments", density: 1.010, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Acetic acid, distilled" },
  { id: "vinegar-apple-cider-5", name: "Vinegar (Apple Cider, 5%)", category: "condiments", density: 1.012, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Apple, fruit-based" },
  { id: "vinegar-balsamic", name: "Vinegar (Balsamic)", category: "condiments", density: 1.200, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Grape, Italian aged" },
  { id: "vinegar-red-wine-6", name: "Vinegar (Red Wine, 6%)", category: "condiments", density: 1.015, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Grape, red" },
  { id: "vinegar-white-wine-6", name: "Vinegar (White Wine, 6%)", category: "condiments", density: 1.014, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Grape, white" },
  { id: "rice-vinegar-34", name: "Rice Vinegar (3-4%)", category: "condiments", density: 1.007, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Rice, mild" },
  { id: "mirin", name: "Mirin", category: "condiments", density: 1.020, densityRange: null, temperature: 20, source: "Japanese Spec", notes: "Rice, koji, sweet rice wine" },
  { id: "salad-dressing-italian", name: "Salad Dressing (Italian)", category: "condiments", density: 0.940, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Oil, vinegar, vinaigrette" },
  { id: "ranch-dressing", name: "Ranch Dressing", category: "condiments", density: 0.950, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Oil, buttermilk, creamy" },
  { id: "caesar-dressing", name: "Caesar Dressing", category: "condiments", density: 0.960, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Oil, egg, cheese, creamy" },
  { id: "thousand-island", name: "Thousand Island", category: "condiments", density: 0.970, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Oil, ketchup, creamy" },
  { id: "oil-and-vinegar", name: "Oil & Vinegar", category: "condiments", density: 0.950, densityRange: null, temperature: 20, source: "Culinary Spec", notes: "Oil, vinegar, classic" },
  { id: "pesto", name: "Pesto", category: "condiments", density: 1.050, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Basil, oil, cheese, fresh" },
  { id: "alfredo-sauce", name: "Alfredo Sauce", category: "condiments", density: 1.020, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Cream, butter, cheese, creamy" },
  { id: "tomato-sauce-plain", name: "Tomato Sauce (Plain)", category: "condiments", density: 1.050, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Tomatoes, strained" },
  { id: "tomato-paste-condiment", name: "Tomato Paste", category: "condiments", density: 1.250, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Tomatoes, concentrated" },
  { id: "pizza-sauce", name: "Pizza Sauce", category: "condiments", density: 1.080, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Tomatoes, herbs, spiced" },
  { id: "spaghetti-sauce", name: "Spaghetti Sauce", category: "condiments", density: 1.070, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Tomatoes, meat-based" },
  { id: "marinara", name: "Marinara", category: "condiments", density: 1.060, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Tomatoes, garlic, tomato sauce" },
  { id: "gravy-beef", name: "Gravy (Beef)", category: "condiments", density: 1.050, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Beef stock, classic" },
  { id: "gravy-chicken", name: "Gravy (Chicken)", category: "condiments", density: 1.040, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Chicken stock, light" },
  { id: "hollandaise", name: "Hollandaise", category: "condiments", density: 0.980, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Egg yolk, butter, rich sauce" },
  { id: "bechamel", name: "Béchamel", category: "condiments", density: 1.020, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Milk, butter, flour, white sauce" },
  { id: "aioli", name: "Mayonnaise-Based (Aioli)", category: "condiments", density: 0.920, densityRange: null, temperature: 20, source: "Culinary Spec", notes: "Oil, garlic, Mediterranean" },

  // =========================================
  // BAKING INGREDIENTS
  // =========================================
  { id: "flour-all-purpose", name: "Flour (All-Purpose)", category: "baking-ingredients", density: 0.590, densityRange: null, temperature: 20, source: "USDA Spec", notes: "10.5% protein, sifted" },
  { id: "flour-bread", name: "Flour (Bread)", category: "baking-ingredients", density: 0.600, densityRange: null, temperature: 20, source: "USDA Spec", notes: "12.5% protein, high protein" },
  { id: "flour-cake-pastry", name: "Flour (Cake/Pastry)", category: "baking-ingredients", density: 0.550, densityRange: null, temperature: 20, source: "USDA Spec", notes: "8.0% protein, low protein" },
  { id: "flour-whole-wheat", name: "Flour (Whole Wheat)", category: "baking-ingredients", density: 0.610, densityRange: null, temperature: 20, source: "USDA Spec", notes: "13.5% protein, high fiber" },
  { id: "flour-gluten-free", name: "Flour (Gluten-Free)", category: "baking-ingredients", density: 0.580, densityRange: null, temperature: 20, source: "USDA Spec", notes: "8.0% protein, rice-based" },
  { id: "cornmeal", name: "Cornmeal", category: "baking-ingredients", density: 0.680, densityRange: null, temperature: 20, source: "USDA Spec", notes: "7.0% protein, coarse" },
  { id: "cornstarch", name: "Cornstarch", category: "baking-ingredients", density: 0.540, densityRange: null, temperature: 20, source: "USDA Spec", notes: "0.5% protein, fine powder" },
  { id: "potato-starch", name: "Potato Starch", category: "baking-ingredients", density: 0.700, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Gluten-free" },
  { id: "arrowroot-powder", name: "Arrowroot Powder", category: "baking-ingredients", density: 0.700, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Thickening, gluten-free" },
  { id: "cocoa-powder-natural", name: "Cocoa Powder (Natural)", category: "baking-ingredients", density: 0.500, densityRange: null, temperature: 20, source: "USDA Spec", notes: "20.0% protein, unsweetened" },
  { id: "cocoa-powder-dutch", name: "Cocoa Powder (Dutch)", category: "baking-ingredients", density: 0.510, densityRange: null, temperature: 20, source: "USDA Spec", notes: "20.0% protein, alkalized" },
  { id: "cinnamon", name: "Cinnamon", category: "baking-ingredients", density: 0.560, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Ground spice" },
  { id: "nutmeg", name: "Nutmeg", category: "baking-ingredients", density: 0.580, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Ground spice" },
  { id: "ginger-ground", name: "Ginger (Ground)", category: "baking-ingredients", density: 0.600, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Ground spice" },
  { id: "baking-soda", name: "Baking Soda", category: "baking-ingredients", density: 1.100, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Leavening, powdered" },
  { id: "baking-powder", name: "Baking Powder", category: "baking-ingredients", density: 0.750, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Leavening, contains starch" },
  { id: "cream-of-tartar", name: "Cream of Tartar", category: "baking-ingredients", density: 0.950, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Stabilizing, acid powder" },
  { id: "yeast-active-dry", name: "Yeast (Active Dry)", category: "baking-ingredients", density: 0.550, densityRange: null, temperature: 20, source: "USDA Spec", notes: "45.0% protein, granulated" },
  { id: "yeast-instant", name: "Yeast (Instant)", category: "baking-ingredients", density: 0.560, densityRange: null, temperature: 20, source: "USDA Spec", notes: "45.0% protein, fine powder" },
  { id: "salt-fine", name: "Salt (Fine)", category: "baking-ingredients", density: 1.200, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Seasoning, fine granulated" },
  { id: "salt-kosher", name: "Salt (Kosher)", category: "baking-ingredients", density: 0.850, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Seasoning, large crystals" },
  { id: "salt-sea", name: "Salt (Sea)", category: "baking-ingredients", density: 1.250, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Seasoning, coarse" },
  { id: "sugar-granulated-baking", name: "Sugar (Granulated)", category: "baking-ingredients", density: 0.850, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Sweetening, fine" },
  { id: "brown-sugar-baking", name: "Brown Sugar", category: "baking-ingredients", density: 0.850, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Sweetening, contains molasses" },
  { id: "powdered-sugar-baking", name: "Powdered Sugar", category: "baking-ingredients", density: 0.560, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Frosting, contains starch" },
  { id: "chocolate-chips", name: "Chocolate Chips", category: "baking-ingredients", density: 0.700, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Semi-sweet" },
  { id: "cocoa-butter", name: "Cocoa Butter", category: "baking-ingredients", density: 0.860, densityRange: null, temperature: 30, source: "USDA Spec", notes: "Baking, chocolate fat" },
  { id: "vanilla-extract", name: "Vanilla Extract", category: "baking-ingredients", density: 0.950, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Flavor, alcohol-based" },
  { id: "vanilla-bean-paste", name: "Vanilla Bean Paste", category: "baking-ingredients", density: 1.000, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Flavor, thick paste" },
  { id: "almond-paste", name: "Almond Paste", category: "baking-ingredients", density: 1.100, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Sugar + almond" },
  { id: "marzipan", name: "Marzipan", category: "baking-ingredients", density: 1.200, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Sugar + almond, candy" },

  // =========================================
  // BEVERAGES
  // =========================================
  { id: "water-pure", name: "Water", category: "beverages-full", density: 1.000, densityRange: null, temperature: 20, source: "Standard", notes: "Pure drinking water" },
  { id: "sparkling-water", name: "Sparkling Water", category: "beverages-full", density: 0.999, densityRange: null, temperature: 20, source: "Standard", notes: "Carbonated water" },
  { id: "soda-water", name: "Soda Water", category: "beverages-full", density: 1.000, densityRange: null, temperature: 20, source: "Standard", notes: "Carbonated mixing water" },
  { id: "tonic-water", name: "Tonic Water", category: "beverages-full", density: 1.040, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "10% sugar, quinine" },
  { id: "ginger-ale", name: "Ginger Ale", category: "beverages-full", density: 1.040, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "10% sugar, ginger" },
  { id: "cola-regular", name: "Cola (Regular)", category: "beverages-full", density: 1.040, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "11% sugar, caffeinated" },
  { id: "cola-diet", name: "Cola (Diet)", category: "beverages-full", density: 0.995, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "Artificial sweetener" },
  { id: "lemon-lime-soda", name: "Lemon-Lime Soda", category: "beverages-full", density: 1.040, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "10% sugar, clear" },
  { id: "orange-soda", name: "Orange Soda", category: "beverages-full", density: 1.045, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "12% sugar, orange flavor" },
  { id: "root-beer", name: "Root Beer", category: "beverages-full", density: 1.045, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "12% sugar, root flavor" },
  { id: "fruit-juice-orange", name: "Fruit Juice (Orange)", category: "beverages-full", density: 1.050, densityRange: null, temperature: 20, source: "USDA Spec", notes: "9% sugar, fresh squeezed" },
  { id: "fruit-juice-apple", name: "Fruit Juice (Apple)", category: "beverages-full", density: 1.050, densityRange: null, temperature: 20, source: "USDA Spec", notes: "10% sugar, clear" },
  { id: "fruit-juice-grape", name: "Fruit Juice (Grape)", category: "beverages-full", density: 1.060, densityRange: null, temperature: 20, source: "USDA Spec", notes: "15% sugar, concord" },
  { id: "fruit-juice-cranberry", name: "Fruit Juice (Cranberry)", category: "beverages-full", density: 1.055, densityRange: null, temperature: 20, source: "USDA Spec", notes: "12% sugar, tart" },
  { id: "fruit-juice-pineapple", name: "Fruit Juice (Pineapple)", category: "beverages-full", density: 1.060, densityRange: null, temperature: 20, source: "USDA Spec", notes: "12% sugar, tropical" },
  { id: "lemonade", name: "Lemonade", category: "beverages-full", density: 1.050, densityRange: null, temperature: 20, source: "USDA Spec", notes: "12% sugar, fresh" },
  { id: "limeade", name: "Limeade", category: "beverages-full", density: 1.050, densityRange: null, temperature: 20, source: "USDA Spec", notes: "12% sugar, fresh" },
  { id: "coffee-black", name: "Coffee (Black)", category: "beverages-full", density: 0.996, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Brewed black coffee" },
  { id: "coffee-with-cream", name: "Coffee (With Cream)", category: "beverages-full", density: 1.010, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Coffee with cream" },
  { id: "espresso", name: "Espresso", category: "beverages-full", density: 0.995, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Concentrated coffee" },
  { id: "tea-black", name: "Tea (Black)", category: "beverages-full", density: 0.998, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Brewed black tea" },
  { id: "tea-green", name: "Tea (Green)", category: "beverages-full", density: 0.998, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Brewed green tea" },
  { id: "iced-tea", name: "Iced Tea", category: "beverages-full", density: 1.010, densityRange: null, temperature: 20, source: "USDA Spec", notes: "8% sugar, sweetened" },
  { id: "hot-chocolate", name: "Hot Chocolate", category: "beverages-full", density: 1.050, densityRange: null, temperature: 20, source: "USDA Spec", notes: "15% sugar, rich" },
  { id: "milk-beverage", name: "Milk (Various)", category: "beverages-full", density: 1.030, densityRange: null, temperature: 15, source: "USDA Spec", notes: "Dairy milk" },
  { id: "almond-milk", name: "Almond Milk", category: "beverages-full", density: 1.040, densityRange: null, temperature: 15, source: "Commercial Spec", notes: "3% sugar, plant-based" },
  { id: "soy-milk", name: "Soy Milk", category: "beverages-full", density: 1.030, densityRange: null, temperature: 15, source: "Commercial Spec", notes: "3% sugar, plant-based" },
  { id: "oat-milk", name: "Oat Milk", category: "beverages-full", density: 1.050, densityRange: null, temperature: 15, source: "Commercial Spec", notes: "7% sugar, plant-based" },
  { id: "coconut-milk-bev", name: "Coconut Milk", category: "beverages-full", density: 1.020, densityRange: null, temperature: 15, source: "Commercial Spec", notes: "5% sugar, plant-based" },
  { id: "rice-milk", name: "Rice Milk", category: "beverages-full", density: 1.030, densityRange: null, temperature: 15, source: "Commercial Spec", notes: "8% sugar, plant-based" },
  { id: "energy-drink", name: "Energy Drink", category: "beverages-full", density: 1.040, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "12% sugar, caffeinated" },
  { id: "sports-drink", name: "Sports Drink", category: "beverages-full", density: 1.050, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "6% sugar, electrolytes" },
  { id: "sports-drink", name: "Sports Drink", category: "beverages-full", density: 1.050, densityRange: null, temperature: 20, source: "Commercial Spec", notes: "6% sugar, electrolytes" },

  // =========================================
  // FRUITS & VEGETABLES (PROCESSING)
  // =========================================
  { id: "tomato-juice", name: "Tomato Juice", category: "produce-processing", density: 1.030, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Strained tomato" },
  { id: "tomato-paste-processing", name: "Tomato Paste", category: "produce-processing", density: 1.250, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Concentrated tomato" },
  { id: "vegetable-juice", name: "Vegetable Juice", category: "produce-processing", density: 1.040, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Mixed vegetable juice" },
  { id: "carrot-juice", name: "Carrot Juice", category: "produce-processing", density: 1.030, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Fresh carrot" },
  { id: "beet-juice", name: "Beet Juice", category: "produce-processing", density: 1.040, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Earthy beet" },
  { id: "green-smoothie", name: "Green Smoothie", category: "produce-processing", density: 1.050, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Mixed greens" },
  { id: "fruit-puree-apple", name: "Fruit Puree (Apple)", category: "produce-processing", density: 1.060, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Smooth apple puree" },
  { id: "fruit-puree-pear", name: "Fruit Puree (Pear)", category: "produce-processing", density: 1.060, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Smooth pear puree" },
  { id: "fruit-puree-peach", name: "Fruit Puree (Peach)", category: "produce-processing", density: 1.070, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Smooth peach puree" },
  { id: "pumpkin-puree", name: "Pumpkin Puree", category: "produce-processing", density: 1.100, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Canned pumpkin" },
  { id: "squash-puree", name: "Squash Puree", category: "produce-processing", density: 1.100, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Butternut squash" },
  { id: "sweet-potato-puree", name: "Sweet Potato Puree", category: "produce-processing", density: 1.120, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Smooth sweet potato" },
  { id: "pickle-brine", name: "Pickle Brine", category: "produce-processing", density: 1.020, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Salt + vinegar" },
  { id: "fermented-vegetables", name: "Fermented Vegetables", category: "produce-processing", density: 1.050, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Kimchi, sauerkraut" },
  { id: "vegetable-stock", name: "Vegetable Stock", category: "produce-processing", density: 1.005, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Vegetable broth" },
  { id: "chicken-stock", name: "Chicken Stock", category: "produce-processing", density: 1.010, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Rich chicken broth" },
  { id: "beef-stock", name: "Beef Stock", category: "produce-processing", density: 1.020, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Dark beef broth" },
  { id: "fish-stock", name: "Fish Stock", category: "produce-processing", density: 1.010, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Light fish broth" },
  { id: "bone-broth", name: "Bone Broth", category: "produce-processing", density: 1.020, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Collagen-rich broth" },
  { id: "mushroom-stock", name: "Mushroom Stock", category: "produce-processing", density: 1.005, densityRange: null, temperature: 20, source: "USDA Spec", notes: "Umami mushroom broth" },

  // =========================================
  // CONCRETE & CEMENT PRODUCTS
  // =========================================
  { id: "portland-dry", name: "Portland Cement (Dry)", category: "concrete-cement", density: 1.440, densityRange: null, temperature: 20, source: "ASTM C150", notes: "Binding agent, powder bulk density" },
  { id: "portland-slurry", name: "Portland Cement (Slurry)", category: "concrete-cement", density: 1.500, densityRange: null, temperature: 20, source: "ASTM C150", notes: "Grouting, mixed with water" },
  { id: "concrete-standard-wet", name: "Concrete (Standard, Wet)", category: "concrete-cement", density: 2.400, densityRange: null, temperature: 20, source: "ACI 318", notes: "Structural, 3000-4000 psi, strength 25 MPa" },
  { id: "concrete-standard-cured", name: "Concrete (Standard, Cured)", category: "concrete-cement", density: 2.300, densityRange: null, temperature: 20, source: "ACI 318", notes: "Structural dry weight, strength 30 MPa" },
  { id: "concrete-high-strength", name: "Concrete (High Strength)", category: "concrete-cement", density: 2.450, densityRange: null, temperature: 20, source: "ACI 318", notes: "High-rise, 6000+ psi, strength 65 MPa" },
  { id: "concrete-lightweight", name: "Concrete (Lightweight)", category: "concrete-cement", density: 1.800, densityRange: null, temperature: 20, source: "ACI 213R", notes: "Non-structural, expanded shale/clay" },
  { id: "concrete-heavyweight", name: "Concrete (Heavyweight)", category: "concrete-cement", density: 3.600, densityRange: null, temperature: 20, source: "ASTM C637", notes: "Radiation shielding, baryte aggregate" },
  { id: "concrete-fiber", name: "Concrete (Fiber-Reinforced)", category: "concrete-cement", density: 2.400, densityRange: null, temperature: 20, source: "ACI 544", notes: "Slabs, pavements, steel/glass fibers" },
  { id: "concrete-pervious", name: "Concrete (Pervious)", category: "concrete-cement", density: 1.900, densityRange: null, temperature: 20, source: "ACI 522R", notes: "Drainage, no fines, strength 15 MPa" },
  { id: "concrete-self-compacting", name: "Concrete (Self-Compacting)", category: "concrete-cement", density: 2.400, densityRange: null, temperature: 20, source: "EFNARC", notes: "Complex forms, high flowability" },
  { id: "concrete-shotcrete", name: "Concrete (Shotcrete)", category: "concrete-cement", density: 2.350, densityRange: null, temperature: 20, source: "ACI 506R", notes: "Tunnels, slopes, sprayed concrete" },
  { id: "mortar-n-dry", name: "Mortar (Type N, Dry)", category: "concrete-cement", density: 1.300, densityRange: null, temperature: 20, source: "ASTM C270", notes: "General masonry, 1:1:6 mix" },
  { id: "mortar-n-wet", name: "Mortar (Type N, Wet)", category: "concrete-cement", density: 1.800, densityRange: null, temperature: 20, source: "ASTM C270", notes: "General masonry mixed, w/c 0.60" },
  { id: "mortar-s-dry", name: "Mortar (Type S, Dry)", category: "concrete-cement", density: 1.350, densityRange: null, temperature: 20, source: "ASTM C270", notes: "Structural masonry, 1:0.5:4.5 mix" },
  { id: "mortar-s-wet", name: "Mortar (Type S, Wet)", category: "concrete-cement", density: 1.850, densityRange: null, temperature: 20, source: "ASTM C270", notes: "Structural masonry mixed, w/c 0.55" },
  { id: "mortar-m-dry", name: "Mortar (Type M, Dry)", category: "concrete-cement", density: 1.400, densityRange: null, temperature: 20, source: "ASTM C270", notes: "Load-bearing, 1:0.25:3 mix" },
  { id: "mortar-m-wet", name: "Mortar (Type M, Wet)", category: "concrete-cement", density: 1.900, densityRange: null, temperature: 20, source: "ASTM C270", notes: "Load-bearing mixed, w/c 0.50" },
  { id: "mortar-o-dry", name: "Mortar (Type O, Dry)", category: "concrete-cement", density: 1.250, densityRange: null, temperature: 20, source: "ASTM C270", notes: "Non-structural, 1:2:9 mix" },
  { id: "grout-cement-dry", name: "Grout (Cementitious, Dry)", category: "concrete-cement", density: 1.500, densityRange: null, temperature: 20, source: "ASTM C1107", notes: "Anchoring, high strength" },
  { id: "grout-cement-wet", name: "Grout (Cementitious, Wet)", category: "concrete-cement", density: 2.100, densityRange: null, temperature: 20, source: "ASTM C1107", notes: "Anchoring mixed, w/c 0.40" },
  { id: "grout-epoxy", name: "Grout (Epoxy, Liquid)", category: "concrete-cement", density: 1.200, densityRange: null, temperature: 20, source: "ASTM C579", notes: "Structural repair, two-part" },
  { id: "grout-nonshrink", name: "Grout (Non-Shrink, Dry)", category: "concrete-cement", density: 1.450, densityRange: null, temperature: 20, source: "ASTM C1107", notes: "Equipment bases, expansive" },
  { id: "stucco-dry", name: "Stucco (Dry)", category: "concrete-cement", density: 1.200, densityRange: null, temperature: 20, source: "ASTM C926", notes: "Exterior finish, lime/cement-based" },
  { id: "stucco-wet", name: "Stucco (Wet)", category: "concrete-cement", density: 1.600, densityRange: null, temperature: 20, source: "ASTM C926", notes: "Exterior finish applied, w/c 0.50" },
  { id: "plaster-gypsum-dry", name: "Plaster (Gypsum, Dry)", category: "concrete-cement", density: 1.200, densityRange: null, temperature: 20, source: "ASTM C28", notes: "Interior finish, powder" },
  { id: "plaster-gypsum-wet", name: "Plaster (Gypsum, Wet)", category: "concrete-cement", density: 1.600, densityRange: null, temperature: 20, source: "ASTM C28", notes: "Interior finish mixed, w/c 0.60" },
  { id: "plaster-lime-dry", name: "Plaster (Lime, Dry)", category: "concrete-cement", density: 1.150, densityRange: null, temperature: 20, source: "ASTM C206", notes: "Historic plaster, traditional" },
  { id: "plaster-lime-wet", name: "Plaster (Lime, Wet)", category: "concrete-cement", density: 1.500, densityRange: null, temperature: 20, source: "ASTM C206", notes: "Historic plaster mixed, w/c 0.65" },
  { id: "cement-board-dry", name: "Cement Board (Dry)", category: "concrete-cement", density: 1.000, densityRange: null, temperature: 20, source: "ASTM C1325", notes: "Tile backing, 1/2 in thick" },
  { id: "cement-board-wet", name: "Cement Board (Wet)", category: "concrete-cement", density: 1.200, densityRange: null, temperature: 20, source: "ASTM C1325", notes: "Tile backing, moisture absorbed" },

  // =========================================
  // AGGREGATES & FILL MATERIALS
  // =========================================
  { id: "sand-dry-fine", name: "Sand (Dry, Fine)", category: "aggregates-fill", density: 1.600, densityRange: null, temperature: 20, source: "ASTM C33", notes: "Concrete, mortar, 0.06-2 mm size" },
  { id: "sand-damp", name: "Sand (Damp)", category: "aggregates-fill", density: 1.800, densityRange: null, temperature: 20, source: "ASTM C33", notes: "Concrete, mortar, 5-15% moisture" },
  { id: "sand-wet", name: "Sand (Wet)", category: "aggregates-fill", density: 1.900, densityRange: null, temperature: 20, source: "ASTM C33", notes: "Concrete, mortar, 15-25% moisture" },
  { id: "sand-compacted", name: "Sand (Compacted)", category: "aggregates-fill", density: 2.000, densityRange: null, temperature: 20, source: "ASTM D1557", notes: "Base material, compacted density" },
  { id: "gravel-6mm", name: "Gravel (1/4\", 6mm)", category: "aggregates-fill", density: 1.650, densityRange: null, temperature: 20, source: "ASTM C33", notes: "Drainage, concrete, washed" },
  { id: "gravel-10mm", name: "Gravel (3/8\", 10mm)", category: "aggregates-fill", density: 1.700, densityRange: null, temperature: 20, source: "ASTM C33", notes: "Concrete, drainage, standard" },
  { id: "gravel-20mm", name: "Gravel (3/4\", 20mm)", category: "aggregates-fill", density: 1.750, densityRange: null, temperature: 20, source: "ASTM C33", notes: "Concrete, base material" },
  { id: "gravel-40mm", name: "Gravel (1.5\", 40mm)", category: "aggregates-fill", density: 1.800, densityRange: null, temperature: 20, source: "ASTM C33", notes: "Base, large drains, coarse" },
  { id: "crushed-stone-20mm", name: "Crushed Stone (3/4\")", category: "aggregates-fill", density: 1.700, densityRange: null, temperature: 20, source: "ASTM D692", notes: "Base material, angular" },
  { id: "crushed-stone-40mm", name: "Crushed Stone (1\")", category: "aggregates-fill", density: 1.750, densityRange: null, temperature: 20, source: "ASTM D692", notes: "Base, drainage, angular" },
  { id: "crushed-stone-80mm", name: "Crushed Stone (3\")", category: "aggregates-fill", density: 1.800, densityRange: null, temperature: 20, source: "ASTM D692", notes: "Riprap, erosion control" },
  { id: "pea-gravel", name: "Pea Gravel", category: "aggregates-fill", density: 1.600, densityRange: null, temperature: 20, source: "ASTM C33", notes: "Decorative, drainage, rounded" },
  { id: "limestone-crushed", name: "Limestone (Crushed)", category: "aggregates-fill", density: 1.600, densityRange: null, temperature: 20, source: "ASTM C33", notes: "Base, fill, calcium carbonate" },
  { id: "granite-crushed", name: "Granite (Crushed)", category: "aggregates-fill", density: 1.700, densityRange: null, temperature: 20, source: "ASTM C33", notes: "Base, concrete, hard & durable" },
  { id: "recycled-concrete", name: "Recycled Concrete Aggregate", category: "aggregates-fill", density: 1.500, densityRange: null, temperature: 20, source: "FHWA Spec", notes: "Base, fill, sustainable" },
  { id: "slag-blast-furnace", name: "Slag (Blast Furnace)", category: "aggregates-fill", density: 1.200, densityRange: null, temperature: 20, source: "ASTM C989", notes: "Base, concrete, lightweight" },
  { id: "fly-ash-dry", name: "Fly Ash (Dry)", category: "aggregates-fill", density: 0.800, densityRange: null, temperature: 20, source: "ASTM C618", notes: "Concrete additive, fine powder" },
  { id: "fly-ash-wet", name: "Fly Ash (Wet)", category: "aggregates-fill", density: 1.200, densityRange: null, temperature: 20, source: "ASTM C618", notes: "Concrete additive, slurry" },
  { id: "silica-fume-dry", name: "Silica Fume (Dry)", category: "aggregates-fill", density: 0.500, densityRange: null, temperature: 20, source: "ASTM C1240", notes: "High-strength additive" },
  { id: "blast-furnace-slag-dry", name: "Blast Furnace Slag (Dry)", category: "aggregates-fill", density: 1.100, densityRange: null, temperature: 20, source: "ASTM C989", notes: "Cement additive, ground" },
  { id: "limestone-powder", name: "Limestone Powder", category: "aggregates-fill", density: 1.200, densityRange: null, temperature: 20, source: "ASTM C51", notes: "Filler, agriculture, fine" },
  { id: "clay-dry", name: "Clay (Dry)", category: "aggregates-fill", density: 1.100, densityRange: null, temperature: 20, source: "Soil Spec", notes: "Fill, pottery, fine soil" },
  { id: "clay-wet", name: "Clay (Wet)", category: "aggregates-fill", density: 1.500, densityRange: null, temperature: 20, source: "Soil Spec", notes: "Fill, pottery, plastic state" },
  { id: "topsoil-dry", name: "Topsoil (Dry)", category: "aggregates-fill", density: 1.100, densityRange: null, temperature: 20, source: "Soil Spec", notes: "Landscaping, organic matter" },
  { id: "topsoil-wet", name: "Topsoil (Wet)", category: "aggregates-fill", density: 1.400, densityRange: null, temperature: 20, source: "Soil Spec", notes: "Landscaping, saturated" },
  { id: "fill-dirt-compacted", name: "Fill Dirt (Compacted)", category: "aggregates-fill", density: 1.800, densityRange: null, temperature: 20, source: "ASTM D698", notes: "Base, fill, engineered" },
  { id: "imported-fill", name: "Imported Fill", category: "aggregates-fill", density: 1.600, densityRange: null, temperature: 20, source: "Soil Spec", notes: "Base, fill, general purpose" },
  { id: "select-fill", name: "Select Fill", category: "aggregates-fill", density: 1.900, densityRange: null, temperature: 20, source: "ASTM D2487", notes: "Structural fill, well-graded" },

  // =========================================
  // WOOD & LUMBER
  // =========================================
  { id: "pine-southern-yellow", name: "Pine (Southern Yellow)", category: "wood-lumber", density: 0.560, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Framing, flooring, Janka 690 lbf" },
  { id: "pine-white", name: "Pine (White)", category: "wood-lumber", density: 0.400, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Furniture, trim, Janka 380 lbf" },
  { id: "douglas-fir", name: "Douglas Fir", category: "wood-lumber", density: 0.540, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Framing, structural, Janka 660 lbf" },
  { id: "spruce-eastern", name: "Spruce (Eastern)", category: "wood-lumber", density: 0.420, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Framing, trusses, Janka 490 lbf" },
  { id: "hemlock", name: "Hemlock", category: "wood-lumber", density: 0.480, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Framing, siding, Janka 500 lbf" },
  { id: "cedar-western-red", name: "Cedar (Western Red)", category: "wood-lumber", density: 0.320, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Siding, decks, rot resistant" },
  { id: "cedar-eastern-red", name: "Cedar (Eastern Red)", category: "wood-lumber", density: 0.470, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Furniture, fence, aromatic" },
  { id: "redwood", name: "Redwood", category: "wood-lumber", density: 0.380, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Decks, siding, rot resistant" },
  { id: "oak-red", name: "Oak (Red)", category: "wood-lumber", density: 0.750, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Flooring, furniture, Janka 1290 lbf" },
  { id: "oak-white", name: "Oak (White)", category: "wood-lumber", density: 0.770, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Flooring, barrels, Janka 1360 lbf" },
  { id: "maple-hard", name: "Maple (Hard)", category: "wood-lumber", density: 0.720, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Flooring, cabinets, Janka 1450 lbf" },
  { id: "maple-soft", name: "Maple (Soft)", category: "wood-lumber", density: 0.550, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Furniture, turnings, Janka 950 lbf" },
  { id: "birch-yellow", name: "Birch (Yellow)", category: "wood-lumber", density: 0.650, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Cabinetry, plywood, Janka 1260 lbf" },
  { id: "walnut-black", name: "Walnut (Black)", category: "wood-lumber", density: 0.610, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Furniture, gunstocks, Janka 1010 lbf" },
  { id: "cherry-black", name: "Cherry (Black)", category: "wood-lumber", density: 0.580, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Furniture, cabinetry, Janka 950 lbf" },
  { id: "mahogany-honduras", name: "Mahogany (Honduras)", category: "wood-lumber", density: 0.550, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Furniture, doors, Janka 900 lbf" },
  { id: "teak", name: "Teak", category: "wood-lumber", density: 0.630, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Decking, furniture, Janka 1150 lbf" },
  { id: "ash-white", name: "Ash (White)", category: "wood-lumber", density: 0.660, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Tool handles, bats, Janka 1320 lbf" },
  { id: "beech-european", name: "Beech (European)", category: "wood-lumber", density: 0.720, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Furniture, flooring, Janka 1300 lbf" },
  { id: "elm-american", name: "Elm (American)", category: "wood-lumber", density: 0.520, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Bent work, bows, Janka 830 lbf" },
  { id: "poplar-yellow", name: "Poplar (Yellow)", category: "wood-lumber", density: 0.420, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Cabinetry, trim, paint grade" },
  { id: "basswood", name: "Basswood", category: "wood-lumber", density: 0.380, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Carving, patterns, Janka 410 lbf" },
  { id: "plywood-softwood", name: "Plywood (Softwood)", category: "wood-lumber", density: 0.540, densityRange: null, temperature: 20, source: "APA Spec", notes: "Sheathing, subfloor, 1/2 in typical" },
  { id: "plywood-hardwood", name: "Plywood (Hardwood)", category: "wood-lumber", density: 0.680, densityRange: null, temperature: 20, source: "APA Spec", notes: "Cabinetry, furniture, fine finish" },
  { id: "plywood-marine", name: "Plywood (Marine)", category: "wood-lumber", density: 0.650, densityRange: null, temperature: 20, source: "APA Spec", notes: "Boats, outdoor, water-resistant" },
  { id: "osb-oriented-strand", name: "OSB (Oriented Strand Board)", category: "wood-lumber", density: 0.600, densityRange: null, temperature: 20, source: "APA Spec", notes: "Sheathing, subfloor, 7/16 in typical" },
  { id: "osb-structural", name: "OSB (Structural)", category: "wood-lumber", density: 0.650, densityRange: null, temperature: 20, source: "APA Spec", notes: "Structural panels, thick" },
  { id: "mdf-medium-density", name: "MDF (Medium Density Fiberboard)", category: "wood-lumber", density: 0.750, densityRange: null, temperature: 20, source: "ANSI A208.2", notes: "Cabinetry, molding, smooth surface" },
  { id: "hdf-high-density", name: "HDF (High Density Fiberboard)", category: "wood-lumber", density: 0.850, densityRange: null, temperature: 20, source: "ANSI A208.2", notes: "Flooring, underlayment, dense" },
  { id: "particle-board", name: "Particle Board", category: "wood-lumber", density: 0.650, densityRange: null, temperature: 20, source: "ANSI A208.1", notes: "Furniture, shelving, low cost" },
  { id: "hardboard-tempered", name: "Hardboard (Tempered)", category: "wood-lumber", density: 0.950, densityRange: null, temperature: 20, source: "AHA Spec", notes: "Underlayment, panels, water-resistant" },
  { id: "lvl-laminated-veneer", name: "LVL (Laminated Veneer Lumber)", category: "wood-lumber", density: 0.550, densityRange: null, temperature: 20, source: "AITC Spec", notes: "Beams, headers, strong & straight" },
  { id: "glulam-glued-laminated", name: "Glulam (Glued Laminated Timber)", category: "wood-lumber", density: 0.550, densityRange: null, temperature: 20, source: "AITC Spec", notes: "Beams, arches, engineered" },
  { id: "cross-laminated-timber", name: "Cross-Laminated Timber (CLT)", category: "wood-lumber", density: 0.500, densityRange: null, temperature: 20, source: "ANSI/APA PRG 320", notes: "Walls, floors, mass timber" },
  { id: "engineered-i-joist", name: "Engineered Wood I-Joist", category: "wood-lumber", density: 0.500, densityRange: null, temperature: 20, source: "APA Spec", notes: "Floor joists, strong & light" },
  { id: "timber-green-wet", name: "Timber (Green/Wet)", category: "wood-lumber", density: 0.700, densityRange: null, temperature: 20, source: "USDA Wood Handbook", notes: "Structural, +20-50% moisture" },
  { id: "fire-retardant-wood", name: "Fire-Retardant Wood", category: "wood-lumber", density: 0.600, densityRange: null, temperature: 20, source: "AWPA C20", notes: "Commercial, chemically treated" },
  { id: "pressure-treated-pine", name: "Pressure-Treated Pine", category: "wood-lumber", density: 0.650, densityRange: null, temperature: 20, source: "AWPA U1", notes: "Decks, fencing, weather-resistant" },

  // =========================================
  // INSULATION MATERIALS
  // =========================================
  { id: "fiberglass-batt-unfaced", name: "Fiberglass Batt (Unfaced)", category: "insulation-materials", density: 0.012, densityRange: null, temperature: 20, source: "ASTM C665", notes: "Walls, attics, R-3.0/in" },
  { id: "fiberglass-batt-faced", name: "Fiberglass Batt (Faced)", category: "insulation-materials", density: 0.014, densityRange: null, temperature: 20, source: "ASTM C665", notes: "Walls, attics, Kraft/foil faced" },
  { id: "fiberglass-blown", name: "Fiberglass Blown", category: "insulation-materials", density: 0.010, densityRange: null, temperature: 20, source: "ASTM C764", notes: "Attics, retrofit loose fill" },
  { id: "fiberglass-high-density", name: "Fiberglass (High-Density)", category: "insulation-materials", density: 0.025, densityRange: null, temperature: 20, source: "ASTM C665", notes: "Walls, soundproof, 2.5+ lb/ft³" },
  { id: "mineral-wool-batt", name: "Mineral Wool Batt", category: "insulation-materials", density: 0.040, densityRange: null, temperature: 20, source: "ASTM C665", notes: "Walls, fireproof, R-3.5/in" },
  { id: "mineral-wool-blown", name: "Mineral Wool Blown", category: "insulation-materials", density: 0.035, densityRange: null, temperature: 20, source: "ASTM C764", notes: "Attics, retrofit dense fill" },
  { id: "rockwool", name: "Rockwool", category: "insulation-materials", density: 0.050, densityRange: null, temperature: 20, source: "ASTM C612", notes: "Exterior, firestop, hydrophobic" },
  { id: "cellulose-dry", name: "Cellulose (Dry)", category: "insulation-materials", density: 0.040, densityRange: null, temperature: 20, source: "ASTM C739", notes: "Attics, walls, recycled paper" },
  { id: "cellulose-wet-spray", name: "Cellulose (Wet Spray)", category: "insulation-materials", density: 0.050, densityRange: null, temperature: 20, source: "ASTM C1149", notes: "Walls, retrofits, sprayed" },
  { id: "spray-foam-closed-cell", name: "Spray Foam (Closed Cell)", category: "insulation-materials", density: 0.045, densityRange: null, temperature: 20, source: "ASTM C1029", notes: "Walls, crawlspaces, R-6.5/in" },
  { id: "spray-foam-open-cell", name: "Spray Foam (Open Cell)", category: "insulation-materials", density: 0.010, densityRange: null, temperature: 20, source: "ASTM C1029", notes: "Attics, walls, sound absorbing" },
  { id: "eps-expanded-polystyrene", name: "EPS (Expanded Polystyrene)", category: "insulation-materials", density: 0.025, densityRange: null, temperature: 20, source: "ASTM C578", notes: "Walls, under slabs, R-4.0/in" },
  { id: "eps-high-density", name: "EPS (High Density)", category: "insulation-materials", density: 0.035, densityRange: null, temperature: 20, source: "ASTM C578", notes: "Structural, roofing, R-4.2/in" },
  { id: "xps-extruded-polystyrene", name: "XPS (Extruded Polystyrene)", category: "insulation-materials", density: 0.035, densityRange: null, temperature: 20, source: "ASTM C578", notes: "Foundation, roofing, R-5.0/in" },
  { id: "xps-high-density", name: "XPS (High-Density)", category: "insulation-materials", density: 0.045, densityRange: null, temperature: 20, source: "ASTM C578", notes: "Heavy-duty foundation, R-5.2/in" },
  { id: "polyiso-polyisocyanurate", name: "Polyiso (Polyisocyanurate)", category: "insulation-materials", density: 0.040, densityRange: null, temperature: 20, source: "ASTM C1289", notes: "Roofing, walls, R-6.0/in" },
  { id: "polyiso-foil-faced", name: "Polyiso (Foil-Faced)", category: "insulation-materials", density: 0.045, densityRange: null, temperature: 20, source: "ASTM C1289", notes: "Roofing, commercial, reflective" },
  { id: "phenolic-foam", name: "Phenolic Foam", category: "insulation-materials", density: 0.030, densityRange: null, temperature: 20, source: "ASTM C1126", notes: "Walls, ceilings, fire-resistant" },
  { id: "rigid-fiberboard", name: "Rigid Fiberboard", category: "insulation-materials", density: 0.250, densityRange: null, temperature: 20, source: "ASTM C208", notes: "Insulating sheathing, nailable" },
  { id: "perlite-loose-fill", name: "Perlite (Loose Fill)", category: "insulation-materials", density: 0.060, densityRange: null, temperature: 20, source: "ASTM C549", notes: "Cavity fill, lightweight" },
  { id: "vermiculite-loose", name: "Vermiculite (Loose)", category: "insulation-materials", density: 0.075, densityRange: null, temperature: 20, source: "ASTM C516", notes: "Cavity fill, fire-resistant" },
  { id: "cork-board", name: "Cork Board", category: "insulation-materials", density: 0.160, densityRange: null, temperature: 20, source: "ASTM C640", notes: "Acoustics, insulation, sustainable" },
  { id: "cotton-batt-recycled", name: "Cotton Batt (Recycled)", category: "insulation-materials", density: 0.020, densityRange: null, temperature: 20, source: "Manufacturer Spec", notes: "Walls, soundproof, eco-friendly" },
  { id: "hemp-insulation", name: "Hemp Insulation", category: "insulation-materials", density: 0.030, densityRange: null, temperature: 20, source: "Manufacturer Spec", notes: "Walls, roofs, sustainable" },
  { id: "sheeps-wool-batt", name: "Sheep's Wool Batt", category: "insulation-materials", density: 0.025, densityRange: null, temperature: 20, source: "Manufacturer Spec", notes: "Walls, moisture regulation" },
  { id: "aerogel-blanket", name: "Aerogel Blanket", category: "insulation-materials", density: 0.150, densityRange: null, temperature: 20, source: "Industrial Spec", notes: "Highest R-value, R-10.0/in" },
  { id: "vacuum-insulation-panel", name: "Vacuum Insulation Panel", category: "insulation-materials", density: 0.200, densityRange: null, temperature: 20, source: "Industrial Spec", notes: "Ultra-thin insulation, R-20.0/in" },
  { id: "radiant-barrier-foil", name: "Radiant Barrier (Foil)", category: "insulation-materials", density: 0.500, densityRange: null, temperature: 20, source: "ASTM C1313", notes: "Attics, roofs, reflects radiant heat" },
  { id: "fireproofing-spray", name: "Fireproofing Spray", category: "insulation-materials", density: 0.500, densityRange: null, temperature: 20, source: "ASTM E119", notes: "Structural steel fire protection" },
  { id: "soundproofing-panels", name: "Soundproofing Panels", category: "insulation-materials", density: 0.100, densityRange: null, temperature: 20, source: "ASTM C423", notes: "Walls, ceilings, acoustical panel" },

  // =========================================
  // MASONRY & BLOCK
  // =========================================
  { id: "clay-brick-solid", name: "Clay Brick (Solid)", category: "masonry-block", density: 2.000, densityRange: null, temperature: 20, source: "ASTM C62", notes: "Structural, modular size, strength 35-50 MPa" },
  { id: "clay-brick-hollow", name: "Clay Brick (Hollow)", category: "masonry-block", density: 1.600, densityRange: null, temperature: 20, source: "ASTM C652", notes: "Non-structural cored brick" },
  { id: "clay-brick-paving", name: "Clay Brick (Paving)", category: "masonry-block", density: 2.200, densityRange: null, temperature: 20, source: "ASTM C902", notes: "Pavement, hard-burned brick" },
  { id: "concrete-block-cmu", name: "Concrete Block (8\" CMU)", category: "masonry-block", density: 1.800, densityRange: null, temperature: 20, source: "ASTM C90", notes: "Structural walls, 8x8x16\"" },
  { id: "concrete-block-lightweight", name: "Concrete Block (Lightweight)", category: "masonry-block", density: 1.200, densityRange: null, temperature: 20, source: "ASTM C90", notes: "Non-structural, expanded shale" },
  { id: "concrete-block-solid", name: "Concrete Block (Solid)", category: "masonry-block", density: 2.200, densityRange: null, temperature: 20, source: "ASTM C90", notes: "Foundation, load-bearing solid block" },
  { id: "concrete-brick-solid", name: "Concrete Brick (Solid)", category: "masonry-block", density: 2.100, densityRange: null, temperature: 20, source: "ASTM C55", notes: "Structural, paving standard brick" },
  { id: "concrete-pavers", name: "Concrete Pavers", category: "masonry-block", density: 2.300, densityRange: null, temperature: 20, source: "ASTM C936", notes: "Driveways, patios, interlocking" },
  { id: "stone-limestone", name: "Stone (Limestone)", category: "masonry-block", density: 2.300, densityRange: null, temperature: 20, source: "ASTM C568", notes: "Building stone, soft natural stone" },
  { id: "stone-granite", name: "Stone (Granite)", category: "masonry-block", density: 2.700, densityRange: null, temperature: 20, source: "ASTM C615", notes: "Counters, monuments, hard stone" },
  { id: "stone-marble", name: "Stone (Marble)", category: "masonry-block", density: 2.600, densityRange: null, temperature: 20, source: "ASTM C503", notes: "Counters, tiles, crystalline stone" },
  { id: "stone-slate", name: "Stone (Slate)", category: "masonry-block", density: 2.800, densityRange: null, temperature: 20, source: "ASTM C629", notes: "Roofing, tiles, metamorphic stone" },
  { id: "stone-sandstone", name: "Stone (Sandstone)", category: "masonry-block", density: 2.200, densityRange: null, temperature: 20, source: "ASTM C616", notes: "Building stone, sedimentary" },
  { id: "stone-travertine", name: "Stone (Travertine)", category: "masonry-block", density: 2.400, densityRange: null, temperature: 20, source: "ASTM C1527", notes: "Tiles, paving, porous stone" },
  { id: "stone-flagstone", name: "Stone (Flagstone)", category: "masonry-block", density: 2.500, densityRange: null, temperature: 20, source: "Building Spec", notes: "Walkways, natural flat stone" },
  { id: "stone-fieldstone", name: "Stone (Fieldstone)", category: "masonry-block", density: 2.600, densityRange: null, temperature: 20, source: "Building Spec", notes: "Retaining walls, natural stone" },
  { id: "cinder-block", name: "Cinder Block", category: "masonry-block", density: 1.100, densityRange: null, temperature: 20, source: "ASTM C90", notes: "Non-structural ash aggregate block" },
  { id: "glass-block", name: "Glass Block", category: "masonry-block", density: 1.800, densityRange: null, temperature: 20, source: "Building Spec", notes: "Decorative light-transmitting block" },
  { id: "adobe-brick", name: "Adobe Brick", category: "masonry-block", density: 1.500, densityRange: null, temperature: 20, source: "Traditional Spec", notes: "Sun-dried earth brick" },
  { id: "rammed-earth", name: "Rammed Earth", category: "masonry-block", density: 1.800, densityRange: null, temperature: 20, source: "Earthen Spec", notes: "Compacted soil wall construction" },
  { id: "cob-earth", name: "Cob (Earth)", category: "masonry-block", density: 1.600, densityRange: null, temperature: 20, source: "Earthen Spec", notes: "Natural building, straw + clay" },

  // =========================================
  // ROOFING MATERIALS
  // =========================================
  { id: "asphalt-shingle", name: "Asphalt Shingle", category: "roofing-materials", density: 1.000, densityRange: null, temperature: 20, source: "ASTM D3462", notes: "3-tab residential roofing" },
  { id: "architectural-shingle", name: "Architectural Shingle", category: "roofing-materials", density: 1.050, densityRange: null, temperature: 20, source: "ASTM D3462", notes: "Laminated residential roofing" },
  { id: "wood-shake", name: "Wood Shake", category: "roofing-materials", density: 0.400, densityRange: null, temperature: 20, source: "CSSB Spec", notes: "Split cedar shake roofing" },
  { id: "wood-shingle", name: "Wood Shingle", category: "roofing-materials", density: 0.450, densityRange: null, temperature: 20, source: "CSSB Spec", notes: "Sawn cedar shingle roofing" },
  { id: "clay-tile", name: "Clay Tile", category: "roofing-materials", density: 2.000, densityRange: null, temperature: 20, source: "ASTM C1167", notes: "Spanish barrel clay roofing tile" },
  { id: "concrete-tile", name: "Concrete Tile", category: "roofing-materials", density: 2.200, densityRange: null, temperature: 20, source: "ASTM C1492", notes: "Flat or profile concrete roof tile" },
  { id: "slate-tile", name: "Slate Tile", category: "roofing-materials", density: 2.800, densityRange: null, temperature: 20, source: "ASTM C406", notes: "Natural slate roof tile" },
  { id: "metal-roofing-steel", name: "Metal Roofing (Steel)", category: "roofing-materials", density: 7.850, densityRange: null, temperature: 20, source: "AISI Spec", notes: "Painted structural steel roofing" },
  { id: "metal-roofing-aluminum", name: "Metal Roofing (Aluminum)", category: "roofing-materials", density: 2.700, densityRange: null, temperature: 20, source: "AA Spec", notes: "Coastal aluminum roofing" },
  { id: "metal-roofing-copper", name: "Metal Roofing (Copper)", category: "roofing-materials", density: 8.900, densityRange: null, temperature: 20, source: "CDA Spec", notes: "High-end historic copper roofing" },
  { id: "metal-roofing-zinc", name: "Metal Roofing (Zinc)", category: "roofing-materials", density: 7.100, densityRange: null, temperature: 20, source: "VMZinc Spec", notes: "Durable architectural zinc roofing" },
  { id: "epdm-rubber", name: "EPDM (Rubber Roofing)", category: "roofing-materials", density: 0.950, densityRange: null, temperature: 20, source: "ASTM D4637", notes: "Single-ply commercial membrane" },
  { id: "tpo-thermoplastic", name: "TPO Roofing", category: "roofing-materials", density: 0.900, densityRange: null, temperature: 20, source: "ASTM D6878", notes: "Single-ply white commercial membrane" },
  { id: "pvc-roofing", name: "PVC Roofing", category: "roofing-materials", density: 0.950, densityRange: null, temperature: 20, source: "ASTM D4434", notes: "Single-ply weldable commercial membrane" },
  { id: "modified-bitumen", name: "Modified Bitumen", category: "roofing-materials", density: 1.050, densityRange: null, temperature: 20, source: "ASTM D6163", notes: "Torch-down commercial roofing" },
  { id: "built-up-roof", name: "Built-Up Roof (BUR)", category: "roofing-materials", density: 1.100, densityRange: null, temperature: 20, source: "NRCA Spec", notes: "Multi-ply commercial gravel roof" },
  { id: "green-roof-soil", name: "Green Roof (Soil Layer)", category: "roofing-materials", density: 1.500, densityRange: null, temperature: 20, source: "FLL Spec", notes: "Extensive green roof soil layer" },
  { id: "green-roof-growing", name: "Green Roof (Growing Media)", category: "roofing-materials", density: 0.800, densityRange: null, temperature: 20, source: "FLL Spec", notes: "Lightweight engineered media" },
  { id: "synthetic-shingle", name: "Synthetic Shingle", category: "roofing-materials", density: 0.900, densityRange: null, temperature: 20, source: "Manufacturer Spec", notes: "Rubber/plastic composite shingle" },
  { id: "solar-panel-tiled", name: "Solar Panel (Tiled)", category: "roofing-materials", density: 2.500, densityRange: null, temperature: 20, source: "IEC Spec", notes: "Photovoltaic integrated solar tile" },

  // =========================================
  // PAINTS, COATINGS & SEALANTS
  // =========================================
  { id: "latex-paint-interior", name: "Latex Paint (Interior)", category: "paints-coatings", density: 1.200, densityRange: null, temperature: 20, source: "MPI Spec", notes: "Water-based wall & ceiling paint" },
  { id: "latex-paint-exterior", name: "Latex Paint (Exterior)", category: "paints-coatings", density: 1.250, densityRange: null, temperature: 20, source: "MPI Spec", notes: "Weather-resistant exterior paint" },
  { id: "acrylic-paint", name: "Acrylic Paint", category: "paints-coatings", density: 1.150, densityRange: null, temperature: 20, source: "MPI Spec", notes: "Water-based durable coating" },
  { id: "oil-based-paint", name: "Oil-Based Paint", category: "paints-coatings", density: 1.300, densityRange: null, temperature: 20, source: "MPI Spec", notes: "Solvent-based trim & door paint" },
  { id: "enamel-paint", name: "Enamel Paint", category: "paints-coatings", density: 1.400, densityRange: null, temperature: 20, source: "MPI Spec", notes: "High-wear metal & wood finish" },
  { id: "primer-interior", name: "Primer (Interior)", category: "paints-coatings", density: 1.200, densityRange: null, temperature: 20, source: "MPI Spec", notes: "Water-based wall prep primer" },
  { id: "primer-exterior", name: "Primer (Exterior)", category: "paints-coatings", density: 1.250, densityRange: null, temperature: 20, source: "MPI Spec", notes: "Exterior wood/masonry primer" },
  { id: "primer-metal", name: "Primer (Metal)", category: "paints-coatings", density: 1.300, densityRange: null, temperature: 20, source: "MPI Spec", notes: "Rust-inhibitive metal primer" },
  { id: "epoxy-paint", name: "Epoxy Paint", category: "paints-coatings", density: 1.500, densityRange: null, temperature: 20, source: "SSP Spec", notes: "Two-part industrial floor coating" },
  { id: "polyurethane-clear", name: "Polyurethane (Clear)", category: "paints-coatings", density: 1.050, densityRange: null, temperature: 20, source: "ASTM D3026", notes: "Solvent-based clear wood finish" },
  { id: "varnish", name: "Varnish", category: "paints-coatings", density: 0.950, densityRange: null, temperature: 20, source: "ASTM D3026", notes: "Marine & fine wood finish" },
  { id: "shellac", name: "Shellac", category: "paints-coatings", density: 0.900, densityRange: null, temperature: 20, source: "ASTM D207", notes: "Alcohol-based natural wood sealer" },
  { id: "lacquer-coating", name: "Lacquer", category: "paints-coatings", density: 0.950, densityRange: null, temperature: 20, source: "ASTM D3026", notes: "Fast-drying furniture finish" },
  { id: "stain-wood", name: "Stain (Wood)", category: "paints-coatings", density: 0.980, densityRange: null, temperature: 20, source: "MPI Spec", notes: "Penetrating wood stain" },
  { id: "concrete-sealer", name: "Concrete Sealer", category: "paints-coatings", density: 0.950, densityRange: null, temperature: 20, source: "ASTM C309", notes: "Penetrating driveway sealer" },
  { id: "waterproofer-masonry", name: "Waterproofer (Masonry)", category: "paints-coatings", density: 1.000, densityRange: null, temperature: 20, source: "ASTM C672", notes: "Siloxane-based exterior waterproofer" },
  { id: "roof-coating-acrylic", name: "Roof Coating (Acrylic)", category: "paints-coatings", density: 1.200, densityRange: null, temperature: 20, source: "ASTM D6083", notes: "White reflective roof coating" },
  { id: "roof-coating-silicone", name: "Roof Coating (Silicone)", category: "paints-coatings", density: 1.100, densityRange: null, temperature: 20, source: "ASTM D6694", notes: "Commercial elastomeric silicone coating" },
  { id: "deck-coating", name: "Deck Coating", category: "paints-coatings", density: 1.100, densityRange: null, temperature: 20, source: "MPI Spec", notes: "Slip-resistant porch & deck finish" },
  { id: "garage-floor-paint", name: "Garage Floor Paint", category: "paints-coatings", density: 1.400, densityRange: null, temperature: 20, source: "MPI Spec", notes: "Epoxy-urethane garage coating" },
  { id: "paint-thinner-spirits", name: "Paint Thinner", category: "paints-coatings", density: 0.780, densityRange: null, temperature: 20, source: "ASTM D235", notes: "Mineral spirits solvent" },
  { id: "turpentine-natural", name: "Turpentine", category: "paints-coatings", density: 0.865, densityRange: null, temperature: 20, source: "ASTM D13", notes: "Natural pine solvent" },
  { id: "linseed-oil-raw", name: "Linseed Oil (Raw)", category: "paints-coatings", density: 0.930, densityRange: null, temperature: 20, source: "ASTM D234", notes: "Natural wood finish oil" },
  { id: "tung-oil", name: "Tung Oil", category: "paints-coatings", density: 0.940, densityRange: null, temperature: 20, source: "ASTM D12", notes: "Pure natural tung oil finish" },
  { id: "danish-oil", name: "Danish Oil", category: "paints-coatings", density: 0.900, densityRange: null, temperature: 20, source: "Manufacturer Spec", notes: "Polymerized oil & varnish mix" },
  { id: "teak-oil", name: "Teak Oil", category: "paints-coatings", density: 0.880, densityRange: null, temperature: 20, source: "Manufacturer Spec", notes: "UV protected outdoor wood oil" },

  // =========================================
  // ADHESIVES, MORTARS & JOINT COMPOUNDS
  // =========================================
  { id: "joint-compound-dry", name: "Joint Compound (Dry)", category: "adhesives-mortars", density: 1.200, densityRange: null, temperature: 20, source: "ASTM C475", notes: "Drywall finishing powder" },
  { id: "joint-compound-wet", name: "Joint Compound (Wet)", category: "adhesives-mortars", density: 1.400, densityRange: null, temperature: 20, source: "ASTM C475", notes: "Drywall finishing ready-mixed" },
  { id: "spackling", name: "Spackling Compound", category: "adhesives-mortars", density: 1.100, densityRange: null, temperature: 20, source: "Manufacturer Spec", notes: "Patch repairs, light" },
  { id: "construction-adhesive", name: "Construction Adhesive", category: "adhesives-mortars", density: 1.150, densityRange: null, temperature: 20, source: "ASTM D3498", notes: "Subfloor & panel polyurethane adhesive" },
  { id: "wood-glue-pva", name: "Wood Glue (PVA)", category: "adhesives-mortars", density: 1.150, densityRange: null, temperature: 20, source: "ASTM D905", notes: "PVA yellow wood glue" },
  { id: "liquid-nails-adhesive", name: "Liquid Nails", category: "adhesives-mortars", density: 1.200, densityRange: null, temperature: 20, source: "Manufacturer Spec", notes: "Heavy-duty general bonding" },
  { id: "contact-cement", name: "Contact Cement", category: "adhesives-mortars", density: 0.900, densityRange: null, temperature: 20, source: "ASTM D3077", notes: "Laminates & veneers, solvent-based" },
  { id: "epoxy-adhesive", name: "Epoxy Adhesive", category: "adhesives-mortars", density: 1.200, densityRange: null, temperature: 20, source: "ASTM D1781", notes: "Two-part structural bonding" },
  { id: "epoxy-high-strength", name: "Epoxy (High Strength)", category: "adhesives-mortars", density: 1.300, densityRange: null, temperature: 20, source: "ASTM D1781", notes: "Structural concrete repair epoxy" },
  { id: "silicone-sealant", name: "Silicone Sealant", category: "adhesives-mortars", density: 0.970, densityRange: null, temperature: 20, source: "ASTM C920", notes: "Bathrooms, windows, RTV silicone" },
  { id: "polyurethane-sealant", name: "Polyurethane Sealant", category: "adhesives-mortars", density: 1.100, densityRange: null, temperature: 20, source: "ASTM C920", notes: "Paintable elastomeric sealant" },
  { id: "acrylic-caulk", name: "Acrylic Caulk", category: "adhesives-mortars", density: 1.050, densityRange: null, temperature: 20, source: "ASTM C834", notes: "Water-based trim & baseboard caulk" },
  { id: "acoustic-caulk", name: "Acoustic Caulk", category: "adhesives-mortars", density: 1.100, densityRange: null, temperature: 20, source: "ASTM C919", notes: "Soundproofing flexible sealant" },
  { id: "firestop-sealant", name: "Firestop Sealant", category: "adhesives-mortars", density: 1.200, densityRange: null, temperature: 20, source: "ASTM E814", notes: "Intumescent fire barrier sealant" },
  { id: "tile-thinset-dry", name: "Tile Thinset (Dry)", category: "adhesives-mortars", density: 1.600, densityRange: null, temperature: 20, source: "ANSI A118.4", notes: "Tile installation mortar powder" },
  { id: "tile-thinset-wet", name: "Tile Thinset (Wet)", category: "adhesives-mortars", density: 2.000, densityRange: null, temperature: 20, source: "ANSI A118.4", notes: "Tile installation mixed mortar" },
  { id: "tile-mastic-premixed", name: "Tile Mastic (Pre-mixed)", category: "adhesives-mortars", density: 1.400, densityRange: null, temperature: 20, source: "ANSI A136.1", notes: "Organic adhesive ready-mixed mastic" },
  { id: "grout-sanded-dry", name: "Grout (Sanded, Dry)", category: "adhesives-mortars", density: 1.500, densityRange: null, temperature: 20, source: "ANSI A118.6", notes: "Sanded tile joint grout powder" },
  { id: "grout-unsanded-dry", name: "Grout (Unsanded, Dry)", category: "adhesives-mortars", density: 1.400, densityRange: null, temperature: 20, source: "ANSI A118.6", notes: "Fine non-sanded grout powder" },
  { id: "grout-epoxy-liquid", name: "Grout (Epoxy, Liquid)", category: "adhesives-mortars", density: 1.500, densityRange: null, temperature: 20, source: "ANSI A118.3", notes: "Stainproof resin tile grout" },
  { id: "grout-urethane-liquid", name: "Grout (Urethane, Liquid)", category: "adhesives-mortars", density: 1.300, densityRange: null, temperature: 20, source: "Manufacturer Spec", notes: "Flexible pre-mixed grout" },
  { id: "countertop-adhesive", name: "Countertop Adhesive", category: "adhesives-mortars", density: 1.200, densityRange: null, temperature: 20, source: "Manufacturer Spec", notes: "Laminate & solid surface adhesive" },
  { id: "wood-filler-water", name: "Wood Filler (Water-based)", category: "adhesives-mortars", density: 1.000, densityRange: null, temperature: 20, source: "Manufacturer Spec", notes: "Stainable wood hole filler" },
  { id: "wood-filler-solvent", name: "Wood Filler (Solvent)", category: "adhesives-mortars", density: 0.950, densityRange: null, temperature: 20, source: "Manufacturer Spec", notes: "Quick-dry wood repair compound" },
  { id: "auto-body-filler", name: "Auto Body Filler", category: "adhesives-mortars", density: 1.500, densityRange: null, temperature: 20, source: "Manufacturer Spec", notes: "Polyester body filler (Bondo)" },
  {
    id: "gasoline-regular",
    name: "Gasoline (Regular 87)",
    category: "automotive",
    density: 0.748,
    densityRange: { min: 0.720, max: 0.775 },
    temperature: 15,
    source: "API standards",
    notes: "87 octane, summer blend typical"
  },
  {
    id: "gasoline-premium",
    name: "Gasoline (Premium 91+)",
    category: "automotive",
    density: 0.755,
    densityRange: { min: 0.730, max: 0.780 },
    temperature: 15,
    source: "API standards",
    notes: "Higher octane, varies by refinery"
  },
  {
    id: "diesel-fuel",
    name: "Diesel Fuel (#2)",
    category: "automotive",
    density: 0.832,
    densityRange: null,
    temperature: 15,
    source: "ASTM D975",
    notes: "Standard diesel, varies seasonally"
  },
  {
    id: "biodiesel-b100",
    name: "Biodiesel (B100)",
    category: "automotive",
    density: 0.880,
    densityRange: null,
    temperature: 15,
    source: "ASTM D6751",
    notes: "Renewable, vegetable oil-based"
  },
  {
    id: "engine-oil-sae30",
    name: "Engine Oil (SAE 30)",
    category: "automotive",
    density: 0.885,
    densityRange: { min: 0.880, max: 0.890 },
    temperature: 15,
    source: "SAE standards",
    notes: "Single-grade motor oil"
  },
  {
    id: "engine-oil-10w30",
    name: "Engine Oil (10W-30)",
    category: "automotive",
    density: 0.878,
    densityRange: { min: 0.870, max: 0.885 },
    temperature: 15,
    source: "SAE standards",
    notes: "Most common multi-grade"
  },
  {
    id: "synthetic-oil-5w30",
    name: "Synthetic Oil (5W-30)",
    category: "automotive",
    density: 0.845,
    densityRange: { min: 0.840, max: 0.850 },
    temperature: 15,
    source: "Manufacturer data",
    notes: "Premium synthetic, better cold flow"
  },
  {
    id: "transmission-fluid",
    name: "Automatic Transmission Fluid",
    category: "automotive",
    density: 0.855,
    densityRange: { min: 0.850, max: 0.860 },
    temperature: 15,
    source: "Dexron/Mercon spec",
    notes: "Red-colored hydraulic fluid"
  },
  {
    id: "brake-fluid-dot3",
    name: "Brake Fluid (DOT 3)",
    category: "automotive",
    density: 1.060,
    densityRange: null,
    temperature: 20,
    source: "FMVSS 116",
    notes: "Hygroscopic, glycol-based"
  },
  {
    id: "brake-fluid-dot4",
    name: "Brake Fluid (DOT 4)",
    category: "automotive",
    density: 1.080,
    densityRange: null,
    temperature: 20,
    source: "FMVSS 116",
    notes: "Higher boiling point than DOT 3"
  },
  {
    id: "coolant-concentrate",
    name: "Coolant (Concentrate)",
    category: "automotive",
    density: 1.120,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "Ethylene glycol concentrate"
  },
  {
    id: "coolant-50-50",
    name: "Coolant (50/50 Mix)",
    category: "automotive",
    density: 1.060,
    densityRange: null,
    temperature: 20,
    source: "Calculated",
    notes: "50% water, 50% concentrate"
  },
  {
    id: "washer-fluid",
    name: "Windshield Washer Fluid",
    category: "automotive",
    density: 0.980,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "Summer formula, includes detergent"
  },
  {
    id: "power-steering-fluid",
    name: "Power Steering Fluid",
    category: "automotive",
    density: 0.875,
    densityRange: { min: 0.870, max: 0.880 },
    temperature: 15,
    source: "Manufacturer data",
    notes: "Hydraulic fluid for power steering"
  },
  {
    id: "gear-oil-80w90",
    name: "Gear Oil (SAE 80W-90)",
    category: "automotive",
    density: 0.895,
    densityRange: { min: 0.890, max: 0.900 },
    temperature: 15,
    source: "SAE standards",
    notes: "Differential fluid, high viscosity"
  },
  {
    id: "hydraulic-fluid-aw32",
    name: "Hydraulic Fluid (AW-32)",
    category: "automotive",
    density: 0.870,
    densityRange: null,
    temperature: 15,
    source: "ISO 11158",
    notes: "Anti-wear hydraulic fluid"
  },

  // =========================================
  // FOOD PRODUCTS
  // =========================================
  {
    id: "honey",
    name: "Honey",
    category: "food",
    density: 1.420,
    densityRange: { min: 1.400, max: 1.440 },
    temperature: 20,
    source: "USDA Food Data",
    notes: "Varies by floral source"
  },
  {
    id: "maple-syrup",
    name: "Maple Syrup",
    category: "food",
    density: 1.330,
    densityRange: { min: 1.320, max: 1.340 },
    temperature: 20,
    source: "USDA Food Data",
    notes: "Grade A typical"
  },
  {
    id: "corn-syrup-light",
    name: "Corn Syrup (Light)",
    category: "food",
    density: 1.380,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Karo style, clear"
  },
  {
    id: "corn-syrup-dark",
    name: "Corn Syrup (Dark)",
    category: "food",
    density: 1.420,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Contains molasses, caramel flavor"
  },
  {
    id: "molasses",
    name: "Molasses",
    category: "food",
    density: 1.425,
    densityRange: { min: 1.400, max: 1.450 },
    temperature: 20,
    source: "USDA Food Data",
    notes: "Blackstrap is denser"
  },
  {
    id: "heavy-cream",
    name: "Heavy Cream (40% fat)",
    category: "food",
    density: 1.000,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "For whipping"
  },
  {
    id: "whole-milk",
    name: "Whole Milk (3.25% fat)",
    category: "food",
    density: 1.030,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Standard dairy milk"
  },
  {
    id: "skim-milk",
    name: "Skim Milk (0% fat)",
    category: "food",
    density: 1.035,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Non-fat milk"
  },
  {
    id: "condensed-milk",
    name: "Condensed Milk",
    category: "food",
    density: 1.300,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Sweetened, canned"
  },
  {
    id: "evaporated-milk",
    name: "Evaporated Milk",
    category: "food",
    density: 1.060,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Unsweetened, canned"
  },
  {
    id: "buttermilk",
    name: "Buttermilk",
    category: "food",
    density: 1.040,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Cultured"
  },
  {
    id: "yogurt-plain",
    name: "Yogurt (Plain)",
    category: "food",
    density: 1.040,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Full-fat"
  },
  {
    id: "sour-cream",
    name: "Sour Cream",
    category: "food",
    density: 1.000,
    densityRange: { min: 0.990, max: 1.010 },
    temperature: 20,
    source: "USDA Food Data",
    notes: "20% fat"
  },
  {
    id: "cream-cheese",
    name: "Cream Cheese",
    category: "food",
    density: 1.000,
    densityRange: { min: 0.990, max: 1.010 },
    temperature: 20,
    source: "USDA Food Data",
    notes: "Soft cheese"
  },
  {
    id: "melted-butter",
    name: "Butter (Melted)",
    category: "food",
    density: 0.910,
    densityRange: null,
    temperature: 60,
    source: "USDA Food Data",
    notes: "At 60°C"
  },
  {
    id: "olive-oil",
    name: "Olive Oil",
    category: "food",
    density: 0.910,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Extra virgin"
  },
  {
    id: "vegetable-oil",
    name: "Vegetable Oil",
    category: "food",
    density: 0.920,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Soybean/canola blend"
  },
  {
    id: "canola-oil",
    name: "Canola Oil",
    category: "food",
    density: 0.918,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Low saturated fat"
  },
  {
    id: "coconut-oil-melted",
    name: "Coconut Oil (Melted)",
    category: "food",
    density: 0.924,
    densityRange: null,
    temperature: 25,
    source: "USDA Food Data",
    notes: "At 25°C"
  },
  {
    id: "palm-oil",
    name: "Palm Oil",
    category: "food",
    density: 0.900,
    densityRange: { min: 0.880, max: 0.920 },
    temperature: 20,
    source: "USDA Food Data",
    notes: "Solid at room temperature"
  },
  {
    id: "lard-melted",
    name: "Lard (Melted)",
    category: "food",
    density: 0.900,
    densityRange: null,
    temperature: 40,
    source: "USDA Food Data",
    notes: "Rendered pork fat"
  },
  {
    id: "shortening",
    name: "Shortening",
    category: "food",
    density: 0.900,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Vegetable-based"
  },
  {
    id: "egg-whole",
    name: "Egg (Whole)",
    category: "food",
    density: 1.030,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Fresh, shell removed"
  },
  {
    id: "egg-white",
    name: "Egg White",
    category: "food",
    density: 1.040,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Liquid egg white"
  },
  {
    id: "egg-yolk",
    name: "Egg Yolk",
    category: "food",
    density: 1.030,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Liquid yolk"
  },
  {
    id: "sugar-granulated",
    name: "Sugar (Granulated)",
    category: "food",
    density: 0.850,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Bulk density"
  },
  {
    id: "flour-all-purpose",
    name: "Flour (All-Purpose)",
    category: "food",
    density: 0.590,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Sifted, aerated"
  },
  {
    id: "flour-bread",
    name: "Flour (Bread)",
    category: "food",
    density: 0.600,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Higher protein content"
  },
  {
    id: "cocoa-powder",
    name: "Cocoa Powder",
    category: "food",
    density: 0.500,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Unsweetened"
  },
  {
    id: "baking-soda",
    name: "Baking Soda",
    category: "food",
    density: 1.100,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Powdered"
  },
  {
    id: "baking-powder",
    name: "Baking Powder",
    category: "food",
    density: 0.750,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Includes starch"
  },
  {
    id: "salt-table",
    name: "Salt (Table)",
    category: "food",
    density: 1.200,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Granulated"
  },
  {
    id: "rice-long-grain",
    name: "Rice (Long Grain)",
    category: "food",
    density: 0.830,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Uncooked"
  },
  {
    id: "pasta-dry",
    name: "Pasta (Dry)",
    category: "food",
    density: 0.750,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Uncooked spaghetti"
  },
  {
    id: "oats-rolled",
    name: "Oats (Rolled)",
    category: "food",
    density: 0.410,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Dry, whole grain"
  },
  {
    id: "vinegar-5",
    name: "Vinegar (5%)",
    category: "food",
    density: 1.010,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "White vinegar"
  },
  {
    id: "soy-sauce",
    name: "Soy Sauce",
    category: "food",
    density: 1.100,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Regular, brewed"
  },
  {
    id: "worcestershire",
    name: "Worcestershire Sauce",
    category: "food",
    density: 1.100,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Fermented"
  },
  {
    id: "ketchup",
    name: "Ketchup",
    category: "food",
    density: 1.130,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Standard tomato ketchup"
  },
  {
    id: "mustard",
    name: "Mustard (Prepared)",
    category: "food",
    density: 1.050,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Yellow mustard"
  },
  {
    id: "mayonnaise",
    name: "Mayonnaise",
    category: "food",
    density: 0.910,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Full-fat"
  },
  {
    id: "salad-dressing",
    name: "Salad Dressing",
    category: "food",
    density: 0.940,
    densityRange: { min: 0.930, max: 0.950 },
    temperature: 20,
    source: "USDA Food Data",
    notes: "Italian, vinaigrette"
  },
  {
    id: "peanut-butter",
    name: "Peanut Butter",
    category: "food",
    density: 1.030,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Regular, smooth"
  },
  {
    id: "nutella",
    name: "Nutella",
    category: "food",
    density: 1.200,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "Hazelnut cocoa spread"
  },
  {
    id: "jam-preserves",
    name: "Jam/Preserves",
    category: "food",
    density: 1.300,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Fruit preserves"
  },
  {
    id: "gelatin-dry",
    name: "Gelatin (Dry)",
    category: "food",
    density: 0.500,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Unflavored"
  },
  {
    id: "pectin",
    name: "Pectin",
    category: "food",
    density: 0.700,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "For jam making"
  },

  // =========================================
  // BEVERAGES
  // =========================================
  {
    id: "beer",
    name: "Beer",
    category: "beverages",
    density: 1.012,
    densityRange: { min: 1.010, max: 1.015 },
    temperature: 20,
    source: "Brewers Association",
    notes: "Varies by sugar content"
  },
  {
    id: "wine-red",
    name: "Wine (Red)",
    category: "beverages",
    density: 0.995,
    densityRange: { min: 0.990, max: 1.000 },
    temperature: 20,
    source: "Wine Institute",
    notes: "Ethanol content reduces density"
  },
  {
    id: "wine-white",
    name: "Wine (White)",
    category: "beverages",
    density: 1.000,
    densityRange: { min: 0.995, max: 1.005 },
    temperature: 20,
    source: "Wine Institute",
    notes: "Slightly denser than red"
  },
  {
    id: "fruit-juice-conc",
    name: "Fruit Juice (Concentrate)",
    category: "beverages",
    density: 1.080,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Orange, apple concentrate"
  },
  {
    id: "soft-drink-regular",
    name: "Soft Drink (Regular)",
    category: "beverages",
    density: 1.040,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "With sugar"
  },
  {
    id: "soft-drink-diet",
    name: "Soft Drink (Diet)",
    category: "beverages",
    density: 0.995,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Sugar-free, artificial sweeteners"
  },
  {
    id: "coffee-brewed",
    name: "Coffee (Brewed)",
    category: "beverages",
    density: 0.996,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Black, no additives"
  },
  {
    id: "tea-brewed",
    name: "Tea (Brewed)",
    category: "beverages",
    density: 0.998,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Black tea, standard"
  },
  {
    id: "almond-milk",
    name: "Milk (Almond)",
    category: "beverages",
    density: 1.040,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Plant-based"
  },
  {
    id: "soy-milk",
    name: "Milk (Soy)",
    category: "beverages",
    density: 1.030,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Plant-based"
  },
  {
    id: "oat-milk",
    name: "Milk (Oat)",
    category: "beverages",
    density: 1.050,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Plant-based"
  },
  {
    id: "lemonade",
    name: "Lemonade",
    category: "beverages",
    density: 1.050,
    densityRange: null,
    temperature: 20,
    source: "USDA Food Data",
    notes: "Fresh squeezed"
  },

  // =========================================
  // CLEANING PRODUCTS
  // =========================================
  {
    id: "bleach-5",
    name: "Bleach (5.25%)",
    category: "cleaning",
    density: 1.070,
    densityRange: null,
    temperature: 20,
    source: "EPA data",
    notes: "Sodium hypochlorite"
  },
  {
    id: "dish-soap",
    name: "Dish Soap",
    category: "cleaning",
    density: 1.050,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "Liquid concentrate"
  },
  {
    id: "laundry-detergent",
    name: "Liquid Detergent",
    category: "cleaning",
    density: 1.030,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "Laundry detergent"
  },
  {
    id: "fabric-softener",
    name: "Fabric Softener",
    category: "cleaning",
    density: 1.000,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "Standard formula"
  },
  {
    id: "all-purpose-cleaner",
    name: "All-Purpose Cleaner",
    category: "cleaning",
    density: 1.010,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "Diluted concentrate"
  },
  {
    id: "glass-cleaner",
    name: "Glass Cleaner",
    category: "cleaning",
    density: 0.980,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "Ammonia-based"
  },
  {
    id: "floor-cleaner",
    name: "Floor Cleaner",
    category: "cleaning",
    density: 1.020,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "Concentrated formula"
  },
  {
    id: "cleaning-vinegar",
    name: "Vinegar (Cleaning)",
    category: "cleaning",
    density: 1.010,
    densityRange: null,
    temperature: 20,
    source: "EPA data",
    notes: "5-10% acetic acid"
  },

  // =========================================
  // PERSONAL CARE
  // =========================================
  {
    id: "shampoo",
    name: "Shampoo",
    category: "personal-care",
    density: 1.035,
    densityRange: { min: 1.020, max: 1.050 },
    temperature: 20,
    source: "Manufacturer data",
    notes: "Varies by formulation"
  },
  {
    id: "conditioner",
    name: "Conditioner",
    category: "personal-care",
    density: 0.995,
    densityRange: { min: 0.980, max: 1.010 },
    temperature: 20,
    source: "Manufacturer data",
    notes: "Lighter than shampoo"
  },
  {
    id: "liquid-soap",
    name: "Liquid Soap",
    category: "personal-care",
    density: 1.020,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "Hand soap"
  },
  {
    id: "body-lotion",
    name: "Body Lotion",
    category: "personal-care",
    density: 1.000,
    densityRange: { min: 0.990, max: 1.010 },
    temperature: 20,
    source: "Manufacturer data",
    notes: "Emulsion"
  },
  {
    id: "sunscreen-lotion",
    name: "Sunscreen Lotion",
    category: "personal-care",
    density: 1.000,
    densityRange: { min: 0.980, max: 1.020 },
    temperature: 20,
    source: "Manufacturer data",
    notes: "Mineral vs chemical"
  },
  {
    id: "toothpaste",
    name: "Toothpaste",
    category: "personal-care",
    density: 1.250,
    densityRange: { min: 1.200, max: 1.300 },
    temperature: 20,
    source: "Manufacturer data",
    notes: "Gel or paste"
  },
  {
    id: "mouthwash",
    name: "Mouthwash",
    category: "personal-care",
    density: 1.010,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "Alcohol-based"
  },
  {
    id: "perfume",
    name: "Perfume",
    category: "personal-care",
    density: 0.875,
    densityRange: { min: 0.850, max: 0.900 },
    temperature: 20,
    source: "IFRA data",
    notes: "Alcohol-based"
  },
  {
    id: "nail-polish",
    name: "Nail Polish",
    category: "personal-care",
    density: 0.975,
    densityRange: { min: 0.950, max: 1.000 },
    temperature: 20,
    source: "Manufacturer data",
    notes: "Solvent-based"
  },

  // =========================================
  // CONSTRUCTION MATERIALS
  // =========================================
  {
    id: "cement-portland",
    name: "Cement (Portland)",
    category: "construction",
    density: 1.440,
    densityRange: null,
    temperature: 20,
    source: "ASTM C150",
    notes: "Powder, bulk density"
  },
  {
    id: "sand-dry",
    name: "Sand (Dry)",
    category: "construction",
    density: 1.600,
    densityRange: null,
    temperature: 20,
    source: "ASTM C33",
    notes: "Fine, dry"
  },
  {
    id: "sand-wet",
    name: "Sand (Wet)",
    category: "construction",
    density: 1.900,
    densityRange: null,
    temperature: 20,
    source: "ASTM C33",
    notes: "Contains water"
  },
  {
    id: "gravel-14",
    name: "Gravel (1/4\")",
    category: "construction",
    density: 1.650,
    densityRange: null,
    temperature: 20,
    source: "ASTM D448",
    notes: "Washed"
  },
  {
    id: "gravel-34",
    name: "Gravel (3/4\")",
    category: "construction",
    density: 1.750,
    densityRange: null,
    temperature: 20,
    source: "ASTM D448",
    notes: "Standard"
  },
  {
    id: "crushed-stone",
    name: "Crushed Stone",
    category: "construction",
    density: 1.700,
    densityRange: null,
    temperature: 20,
    source: "ASTM D448",
    notes: "1-2\" crushed"
  },
  {
    id: "concrete-dry-mix",
    name: "Concrete (Dry Mix)",
    category: "construction",
    density: 1.500,
    densityRange: null,
    temperature: 20,
    source: "ASTM C94",
    notes: "Bagged, dry"
  },
  {
    id: "concrete-wet",
    name: "Concrete (Wet)",
    category: "construction",
    density: 2.400,
    densityRange: null,
    temperature: 20,
    source: "ASTM C94",
    notes: "Cured weight"
  },
  {
    id: "mortar-dry",
    name: "Mortar (Dry)",
    category: "construction",
    density: 1.300,
    densityRange: null,
    temperature: 20,
    source: "ASTM C387",
    notes: "Cement+sand+lime"
  },
  {
    id: "plaster-dry",
    name: "Plaster (Dry)",
    category: "construction",
    density: 1.200,
    densityRange: null,
    temperature: 20,
    source: "ASTM C28",
    notes: "Gypsum-based"
  },
  {
    id: "plaster-wet",
    name: "Plaster (Wet)",
    category: "construction",
    density: 1.600,
    densityRange: null,
    temperature: 20,
    source: "ASTM C28",
    notes: "Mixed with water"
  },
  {
    id: "drywall-sheet",
    name: "Drywall (Sheet)",
    category: "construction",
    density: 0.700,
    densityRange: null,
    temperature: 20,
    source: "ASTM C1396",
    notes: "1/2\" typical"
  },
  {
    id: "plywood-12",
    name: "Plywood (1/2\")",
    category: "construction",
    density: 0.540,
    densityRange: null,
    temperature: 20,
    source: "APA standards",
    notes: "Douglas fir"
  },
  {
    id: "osb-board",
    name: "OSB Board",
    category: "construction",
    density: 0.600,
    densityRange: null,
    temperature: 20,
    source: "APA standards",
    notes: "Oriented Strand Board"
  },
  {
    id: "mdf-board",
    name: "MDF Board",
    category: "construction",
    density: 0.750,
    densityRange: null,
    temperature: 20,
    source: "ANSI A208.2",
    notes: "Medium Density Fiberboard"
  },
  {
    id: "masonry-brick",
    name: "Masonry Brick",
    category: "construction",
    density: 2.000,
    densityRange: null,
    temperature: 20,
    source: "ASTM C62",
    notes: "Solid clay brick"
  },
  {
    id: "concrete-block",
    name: "Concrete Block",
    category: "construction",
    density: 1.800,
    densityRange: null,
    temperature: 20,
    source: "ASTM C90",
    notes: "8\" CMU block"
  },
  {
    id: "asphalt-liquid",
    name: "Asphalt (Liquid)",
    category: "construction",
    density: 1.050,
    densityRange: { min: 1.000, max: 1.100 },
    temperature: 20,
    source: "ASTM D3381",
    notes: "Hot mix"
  },
  {
    id: "asphalt-solid",
    name: "Asphalt (Solid)",
    category: "construction",
    density: 1.250,
    densityRange: { min: 1.200, max: 1.300 },
    temperature: 20,
    source: "ASTM D3381",
    notes: "Compacted"
  },
  {
    id: "roofing-shingles",
    name: "Roofing Shingles",
    category: "construction",
    density: 1.000,
    densityRange: null,
    temperature: 20,
    source: "ASTM D3462",
    notes: "Asphalt-based"
  },
  {
    id: "fiberglass-insulation",
    name: "Insulation (Fiberglass)",
    category: "construction",
    density: 0.026,
    densityRange: { min: 0.012, max: 0.040 },
    temperature: 20,
    source: "ASTM C553",
    notes: "Batt or blown"
  },
  {
    id: "foam-board-insulation",
    name: "Insulation (Foam Board)",
    category: "construction",
    density: 0.040,
    densityRange: { min: 0.030, max: 0.050 },
    temperature: 20,
    source: "ASTM C578",
    notes: "Rigid foam"
  },
  {
    id: "spray-foam-cc",
    name: "Spray Foam (Closed Cell)",
    category: "construction",
    density: 0.050,
    densityRange: { min: 0.040, max: 0.060 },
    temperature: 20,
    source: "ASTM C1029",
    notes: "High density"
  },
  {
    id: "concrete-sealant",
    name: "Concrete Sealant",
    category: "construction",
    density: 0.950,
    densityRange: null,
    temperature: 20,
    source: "ASTM C1315",
    notes: "Liquid applied"
  },

  // =========================================
  // METALS (LIQUID/MOLTEN)
  // =========================================
  {
    id: "mercury",
    name: "Mercury",
    category: "metals-molten",
    density: 13.600,
    densityRange: null,
    temperature: 20,
    source: "CRC Handbook",
    notes: "Liquid at room temperature"
  },
  {
    id: "gallium",
    name: "Gallium",
    category: "metals-molten",
    density: 5.910,
    densityRange: null,
    temperature: 30,
    source: "CRC Handbook",
    notes: "Melts at 29.8°C"
  },
  {
    id: "lead-molten",
    name: "Lead (Molten)",
    category: "metals-molten",
    density: 10.660,
    densityRange: null,
    temperature: 327,
    source: "CRC Handbook",
    notes: "Melts at 327.5°C"
  },
  {
    id: "aluminum-molten",
    name: "Aluminum (Molten)",
    category: "metals-molten",
    density: 2.370,
    densityRange: null,
    temperature: 660,
    source: "CRC Handbook",
    notes: "Melts at 660°C"
  },
  {
    id: "iron-molten",
    name: "Iron (Molten)",
    category: "metals-molten",
    density: 7.870,
    densityRange: null,
    temperature: 1538,
    source: "CRC Handbook",
    notes: "Melts at 1538°C"
  },
  {
    id: "copper-molten",
    name: "Copper (Molten)",
    category: "metals-molten",
    density: 8.020,
    densityRange: null,
    temperature: 1085,
    source: "CRC Handbook",
    notes: "Melts at 1085°C"
  },
  {
    id: "gold-molten",
    name: "Gold (Molten)",
    category: "metals-molten",
    density: 17.310,
    densityRange: null,
    temperature: 1064,
    source: "CRC Handbook",
    notes: "Melts at 1064°C"
  },
  {
    id: "silver-molten",
    name: "Silver (Molten)",
    category: "metals-molten",
    density: 9.320,
    densityRange: null,
    temperature: 962,
    source: "CRC Handbook",
    notes: "Melts at 962°C"
  },
  {
    id: "tin-molten",
    name: "Tin (Molten)",
    category: "metals-molten",
    density: 6.970,
    densityRange: null,
    temperature: 232,
    source: "CRC Handbook",
    notes: "Melts at 232°C"
  },
  {
    id: "zinc-molten",
    name: "Zinc (Molten)",
    category: "metals-molten",
    density: 6.570,
    densityRange: null,
    temperature: 420,
    source: "CRC Handbook",
    notes: "Melts at 420°C"
  },
  {
    id: "nickel-molten",
    name: "Nickel (Molten)",
    category: "metals-molten",
    density: 7.800,
    densityRange: null,
    temperature: 1455,
    source: "CRC Handbook",
    notes: "Melts at 1455°C"
  },
  {
    id: "titanium-molten",
    name: "Titanium (Molten)",
    category: "metals-molten",
    density: 4.110,
    densityRange: null,
    temperature: 1668,
    source: "CRC Handbook",
    notes: "Melts at 1668°C"
  },
  {
    id: "magnesium-molten",
    name: "Magnesium (Molten)",
    category: "metals-molten",
    density: 1.584,
    densityRange: null,
    temperature: 650,
    source: "CRC Handbook",
    notes: "Melts at 650°C"
  },
  {
    id: "platinum-molten",
    name: "Platinum (Molten)",
    category: "metals-molten",
    density: 19.770,
    densityRange: null,
    temperature: 1768,
    source: "CRC Handbook",
    notes: "Melts at 1768°C"
  },

  // =========================================
  // AGRICULTURAL & GARDENING
  // =========================================
  {
    id: "topsoil-dry",
    name: "Soil (Topsoil, Dry)",
    category: "agriculture",
    density: 1.100,
    densityRange: null,
    temperature: 20,
    source: "USDA NRCS",
    notes: "Loose, dry garden soil"
  },
  {
    id: "potting-mix",
    name: "Soil (Potting Mix)",
    category: "agriculture",
    density: 0.500,
    densityRange: { min: 0.400, max: 0.600 },
    temperature: 20,
    source: "USDA NRCS",
    notes: "Peat-based, light"
  },
  {
    id: "compost",
    name: "Compost",
    category: "agriculture",
    density: 0.600,
    densityRange: { min: 0.500, max: 0.700 },
    temperature: 20,
    source: "USDA NRCS",
    notes: "Organic matter"
  },
  {
    id: "manure-fresh",
    name: "Manure (Fresh)",
    category: "agriculture",
    density: 0.950,
    densityRange: null,
    temperature: 20,
    source: "USDA NRCS",
    notes: "Animal waste"
  },
  {
    id: "mulch-wood-chips",
    name: "Mulch (Wood Chips)",
    category: "agriculture",
    density: 0.350,
    densityRange: { min: 0.300, max: 0.400 },
    temperature: 20,
    source: "USDA NRCS",
    notes: "Shredded bark"
  },
  {
    id: "liquid-fertilizer",
    name: "Fertilizer (Liquid)",
    category: "agriculture",
    density: 1.100,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "Water-soluble mix"
  },
  {
    id: "liquid-pesticide",
    name: "Pesticide (Liquid)",
    category: "agriculture",
    density: 1.050,
    densityRange: null,
    temperature: 20,
    source: "EPA data",
    notes: "Emulsifiable concentrate"
  },
  {
    id: "liquid-herbicide",
    name: "Herbicide (Liquid)",
    category: "agriculture",
    density: 1.100,
    densityRange: null,
    temperature: 20,
    source: "EPA data",
    notes: "Glyphosate base"
  },
  {
    id: "peat-moss",
    name: "Peat Moss",
    category: "agriculture",
    density: 0.200,
    densityRange: { min: 0.150, max: 0.250 },
    temperature: 20,
    source: "USDA NRCS",
    notes: "Horticultural"
  },
  {
    id: "ag-lime",
    name: "Lime (Agricultural)",
    category: "agriculture",
    density: 1.200,
    densityRange: null,
    temperature: 20,
    source: "USDA NRCS",
    notes: "Calcium carbonate"
  },
  {
    id: "gypsum-powder",
    name: "Gypsum (Powder)",
    category: "agriculture",
    density: 1.400,
    densityRange: null,
    temperature: 20,
    source: "USDA NRCS",
    notes: "Soil amendment"
  },

  // =========================================
  // VISCOUS & SEMI-SOLID
  // =========================================
  {
    id: "asphalt-emulsion",
    name: "Asphalt (Emulsion)",
    category: "viscous",
    density: 1.020,
    densityRange: null,
    temperature: 20,
    source: "ASTM D977",
    notes: "Liquid, not molten"
  },
  {
    id: "bitumen",
    name: "Bitumen",
    category: "viscous",
    density: 1.025,
    densityRange: { min: 1.010, max: 1.040 },
    temperature: 20,
    source: "ASTM D70",
    notes: "Petroleum-based"
  },
  {
    id: "tar-creosote",
    name: "Tar (Creosote)",
    category: "viscous",
    density: 1.050,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "Wood preservative"
  },
  {
    id: "epoxy-resin",
    name: "Resin (Epoxy)",
    category: "viscous",
    density: 1.150,
    densityRange: { min: 1.100, max: 1.200 },
    temperature: 20,
    source: "Manufacturer data",
    notes: "Cured/casting"
  },
  {
    id: "wood-glue-pva",
    name: "Glue (Wood)",
    category: "viscous",
    density: 1.150,
    densityRange: null,
    temperature: 20,
    source: "Manufacturer data",
    notes: "PVA adhesive"
  },
  {
    id: "silicone-caulk",
    name: "Silicone (Caulk)",
    category: "viscous",
    density: 0.970,
    densityRange: null,
    temperature: 20,
    source: "ASTM C834",
    notes: "RTV sealant"
  },
  {
    id: "joint-compound",
    name: "Joint Compound",
    category: "viscous",
    density: 1.200,
    densityRange: null,
    temperature: 20,
    source: "ASTM C475",
    notes: "Drywall mud"
  },
  {
    id: "latex-paint",
    name: "Paint (Latex)",
    category: "viscous",
    density: 1.250,
    densityRange: { min: 1.200, max: 1.300 },
    temperature: 20,
    source: "ASTM D3925",
    notes: "Water-based"
  },
  {
    id: "oil-paint",
    name: "Paint (Oil)",
    category: "viscous",
    density: 1.350,
    densityRange: { min: 1.300, max: 1.400 },
    temperature: 20,
    source: "ASTM D3925",
    notes: "Oil-based"
  },
  {
    id: "primer",
    name: "Primer",
    category: "viscous",
    density: 1.200,
    densityRange: null,
    temperature: 20,
    source: "ASTM D3925",
    notes: "Paint preparation"
  },
  {
    id: "wood-stain",
    name: "Stain (Wood)",
    category: "viscous",
    density: 0.980,
    densityRange: null,
    temperature: 20,
    source: "ASTM D3026",
    notes: "Penetrating stain"
  },
  {
    id: "varnish",
    name: "Varnish",
    category: "viscous",
    density: 0.975,
    densityRange: { min: 0.950, max: 1.000 },
    temperature: 20,
    source: "ASTM D3026",
    notes: "Clear coating"
  },
  {
    id: "polyurethane",
    name: "Polyurethane",
    category: "viscous",
    density: 1.050,
    densityRange: { min: 1.000, max: 1.100 },
    temperature: 20,
    source: "ASTM D3026",
    notes: "Clear finish"
  },
  {
    id: "lacquer",
    name: "Lacquer",
    category: "viscous",
    density: 0.950,
    densityRange: null,
    temperature: 20,
    source: "ASTM D3026",
    notes: "Solvent-based"
  },
  {
    id: "hot-melt-adhesive",
    name: "Adhesive (Hot Melt)",
    category: "viscous",
    density: 1.025,
    densityRange: { min: 0.950, max: 1.100 },
    temperature: 20,
    source: "ASTM D1876",
    notes: "Thermoplastic"
  },
  {
    id: "silicone-caulk-bath",
    name: "Caulk (Silicone)",
    category: "viscous",
    density: 0.970,
    densityRange: null,
    temperature: 20,
    source: "ASTM C834",
    notes: "Bathroom/kitchen"
  },
  {
    id: "grout-dry",
    name: "Grout (Dry)",
    category: "viscous",
    density: 1.500,
    densityRange: null,
    temperature: 20,
    source: "ASTM C1107",
    notes: "Tile grout"
  },
  {
    id: "tile-mortar-dry",
    name: "Tile Mortar (Dry)",
    category: "viscous",
    density: 1.600,
    densityRange: null,
    temperature: 20,
    source: "ASTM C627",
    notes: "Thin-set"
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

// Get a substance by ID
export function getSubstance(id: string): SubstanceDatabaseItem | undefined {
  return SUBSTANCE_DATABASE.find(s => s.id === id);
}

// Get all substances in a category
export function getSubstancesByCategory(category: string): SubstanceDatabaseItem[] {
  return SUBSTANCE_DATABASE.filter(s => s.category === category);
}

// Get all unique categories
export function getAllCategories(): string[] {
  return Array.from(new Set(SUBSTANCE_DATABASE.map(s => s.category)));
}

// Search substances by name, category, or notes
export function searchSubstances(query: string): SubstanceDatabaseItem[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return SUBSTANCE_DATABASE;
  return SUBSTANCE_DATABASE.filter(s =>
    s.name.toLowerCase().includes(lowerQuery) ||
    s.category.toLowerCase().includes(lowerQuery) ||
    (s.notes && s.notes.toLowerCase().includes(lowerQuery))
  );
}

// Calculate volume from mass and density
export function calculateVolume(massKg: number, densityKgL: number): number {
  if (densityKgL <= 0) return Infinity;
  return massKg / densityKgL;
}

// Get density range display
export function getDensityDisplay(substance: SubstanceDatabaseItem): string {
  if (substance.densityRange) {
    return `${substance.densityRange.min} - ${substance.densityRange.max} kg/L`;
  }
  return `${substance.density} kg/L`;
}

// Map SUBSTANCE_DATABASE into Record for legacy substanceDatabase dictionary
export const substanceDatabase: Record<string, SubstanceDatabaseItem> = SUBSTANCE_DATABASE.reduce(
  (acc, item) => {
    acc[item.id] = item;
    return acc;
  },
  {} as Record<string, SubstanceDatabaseItem>
);

// Baseline substances array for tool pages
export const substances: Substance[] = [
  {
    id: 'water',
    name: 'Water',
    category: 'basic',
    density_kg_per_l: 1.00,
    density_note: 'at 4°C (maximum density)',
    seo: {
      title: 'Kg to Litres of Water Converter | 1 kg = 1 L (Exact)',
      description: 'Convert kilograms to litres of water instantly. 1 kg of water equals exactly 1 litre at 4°C. Free, accurate mass to volume calculator.',
      primary_kw: 'kg to litre water',
      secondary_kws: ['1 kg water to litre', 'convert kg to liters water', 'water density kg/L']
    },
    content: {
      intro: 'Converting kilograms of water to litres is a fundamental unit transformation based on pure water reference density. At 4°C, water reaches its maximum density of exactly 1.00 kg/L, making 1 kg equal to exactly 1 litre.',
      real_world_context: 'In hydrology, municipal water management, and culinary science, water serves as the international baseline standard for specific gravity (1.000). At higher ambient temperatures such as 25°C, thermal expansion slightly reduces water density to 0.997 kg/L, meaning 1 kg expands to approximately 1.003 litres.',
      faq: [
        {
          q: 'Why is 1 kg of water exactly 1 litre at 4°C?',
          a: 'The metric system was originally defined using water. At 4°C (39.2°F), water reaches peak molecular density of 1.000 kg/L, creating a perfect 1:1 mass-to-volume ratio.'
        },
        {
          q: 'Does hot water take up more litres than cold water?',
          a: 'Yes. As water heats up toward 100°C, thermal expansion causes its density to drop to 0.958 kg/L, so 1 kg of boiling water occupies ~1.044 litres.'
        }
      ]
    }
  },
  {
    id: 'milk',
    name: 'Milk',
    category: 'basic',
    density_kg_per_l: 1.03,
    density_note: 'at 20°C (whole milk)',
    seo: {
      title: 'Kg to Litres of Milk Converter | Density 1.03 kg/L',
      description: 'Calculate how many litres are in 1 kg of milk. Uses standard whole milk density (1.03 kg/L) for accurate baking and cooking conversions.',
      primary_kw: 'kg to litre milk',
      secondary_kws: ['how many liters in 1 kg of milk', 'milk density kg/L', 'kg to L milk']
    },
    content: {
      intro: 'Milk is slightly denser than pure water due to its suspended butterfats, proteins (casein), and dissolved milk sugars (lactose). Whole milk has a standard density of 1.03 kg/L at 20°C, which means 1 kg of milk occupies approximately 0.971 litres.',
      real_world_context: 'Dairy processing plants and commercial bakeries purchase raw milk by mass (kilograms or metric tonnes) to prevent aeration measurement errors during tanker transit. However, retail consumers buy milk by fluid volume (litres), requiring precise density conversion factors to calculate yield margins and packaging costs.',
      faq: [
        {
          q: 'Why is milk heavier than water for the same volume?',
          a: 'Milk contains dissolved solids such as proteins, lactose, and mineral salts that increase its specific gravity to 1.030 kg/L, making 1 litre weigh 1.03 kilograms.'
        },
        {
          q: 'Does skim milk have a different density than whole milk?',
          a: 'Yes. Skim milk has a higher density (~1.035 kg/L) because butterfat (which is lighter than water at 0.91 kg/L) has been skimmed away.'
        }
      ]
    }
  },
  {
    id: 'cooking-oil',
    name: 'Cooking Oil',
    category: 'cooking',
    density_kg_per_l: 0.92,
    density_note: 'at 20°C (vegetable/sunflower)',
    seo: {
      title: 'Kg to Litres of Cooking & Vegetable Oil Converter',
      description: 'Convert kg to litres of cooking oil accurately. Vegetable oil density is ~0.92 kg/L, meaning 1 kg of oil equals ~1.09 litres.',
      primary_kw: 'kg to litre cooking oil',
      secondary_kws: ['vegetable oil density kg/L', '1 kg oil to litre', 'kg to L sunflower oil']
    },
    content: {
      intro: 'Cooking oil (vegetable, sunflower, or olive oil) is significantly less dense than water, averaging 0.92 kg/L at room temperature. Consequently, 1 kg of cooking oil occupies approximately 1.087 litres, meaning oil always floats on top of water.',
      real_world_context: 'Industrial food manufacturing and deep-fryer maintenance require converting mass to volume when filling large commercial vats. Because vegetable oil expands when heated during frying (up to 0.88 kg/L at 180°C), engineers must account for thermal expansion to prevent fryer overflow.',
      faq: [
        {
          q: 'Why does 1 kg of oil equal more than 1 litre?',
          a: "Because cooking oil has a low density of 0.92 kg/L (less than water's 1.00 kg/L), 1 kilogram of oil requires a larger spatial volume (1.087 L) to contain the same mass."
        },
        {
          q: 'Does olive oil have the same density as canola or sunflower oil?',
          a: 'Nearly identical. Most plant-based culinary oils fall within a tight density range of 0.915 kg/L to 0.925 kg/L at 20°C.'
        }
      ]
    }
  },
  {
    id: 'diesel',
    name: 'Diesel',
    category: 'fuels',
    density_kg_per_l: 0.832,
    density_note: 'at 15°C (standard automotive)',
    seo: {
      title: 'Kg to Litres of Diesel Converter | Fuel Density Calculator',
      description: 'Accurately convert kilograms of diesel to litres. Standard diesel fuel density is 0.832 kg/L. Free mass to volume fuel calculator.',
      primary_kw: 'kg to litre diesel',
      secondary_kws: ['diesel fuel density kg/L', 'convert kg diesel to liters', '1 kg diesel to litre']
    },
    content: {
      intro: 'Diesel fuel has a standard automotive density of 0.832 kg/L at 15°C (EN 590 standard). Because diesel is lighter than water, 1 kg of diesel fuel yields approximately 1.202 litres of liquid volume.',
      real_world_context: 'In the petroleum and commercial freight industries, fuel is refined, bunkered, and transported by mass (metric tonnes) to maintain mass balance accuracy regardless of temperature swings. However, gas stations dispense fuel to fleet vehicles by fluid volume (litres), making density conversion critical for fuel economy tracking.',
      faq: [
        {
          q: 'How many litres of diesel fuel are in 1 kg?',
          a: 'At standard temperature (15°C), 1 kg of automotive diesel equals approximately 1.202 litres (1 ÷ 0.832).'
        },
        {
          q: 'How does temperature affect diesel fuel volume?',
          a: 'Diesel expands noticeably with heat. At 40°C, its density drops to ~0.815 kg/L, so 1 kg will expand to ~1.227 litres.'
        }
      ]
    }
  },
  {
    id: 'flour',
    name: 'All-Purpose Flour',
    category: 'cooking',
    density_kg_per_l: 0.59,
    density_note: 'sifted, at room temperature',
    seo: {
      title: 'Kg to Litres of Flour Converter | All-Purpose & Wheat',
      description: 'Convert kg to litres of flour for baking. Sifted all-purpose flour has a bulk density of ~0.59 kg/L. Accurate kitchen volume calculator.',
      primary_kw: 'kg to litre flour',
      secondary_kws: ['how many liters in 1 kg of flour', 'flour density g/ml', 'kg to L baking flour']
    },
    content: {
      intro: 'All-purpose wheat flour is a granular dry powder with a bulk density of approximately 0.59 kg/L when sifted. Unlike pure liquids, 1 kg of flour occupies roughly 1.695 litres of volume due to the significant air void space between flour particles.',
      real_world_context: 'Commercial bakeries convert flour mass (kg) to volume (litres or cups) when scaling dough recipes. Because packing or scooping flour compresses the void space (increasing bulk density up to 0.70 kg/L), professional bakers prefer measuring mass in kilograms for perfect recipe repeatability.',
      faq: [
        {
          q: 'Why does 1 kg of flour take up so much volume (~1.7 litres)?',
          a: 'Flour is a porous powder filled with microscopic air gaps (void space). Its low bulk density of 0.59 kg/L means 1 kg requires 1.695 litres of container space.'
        },
        {
          q: 'How does sifting affect the density of flour?',
          a: 'Sifting introduces air into the flour, decreasing bulk density from ~0.65 kg/L down to ~0.53 kg/L, which increases the volume occupied by 1 kg.'
        }
      ]
    }
  }
];

export const categories = [
  { id: 'basic', name: 'Basic & Universal Liquids', slug: 'basic' },
  { id: 'cooking', name: 'Cooking & Baking Ingredients', slug: 'cooking' },
  { id: 'fuels', name: 'Fuels & Automotive', slug: 'fuels' },
  { id: 'industrial', name: 'Industrial Chemicals & Solvents', slug: 'industrial' },
  { id: 'automotive', name: 'Automotive Fluids', slug: 'automotive' },
  { id: 'food', name: 'Food & Groceries', slug: 'food' },
  { id: 'beverages', name: 'Beverages & Drinks', slug: 'beverages' },
  { id: 'cleaning', name: 'Cleaning & Household Products', slug: 'cleaning' },
  { id: 'personal-care', name: 'Personal Care & Cosmetics', slug: 'personal-care' },
  { id: 'construction', name: 'Construction & Building Materials', slug: 'construction' },
  { id: 'metals-molten', name: 'Molten Metals & Elements', slug: 'metals-molten' },
  { id: 'agriculture', name: 'Agriculture, Soils & Gardening', slug: 'agriculture' },
  { id: 'viscous', name: 'Viscous Liquids & Resins', slug: 'viscous' },
  { id: 'petroleum', name: 'Petroleum Products & Hydrocarbons', slug: 'petroleum' },
  { id: 'solvents', name: 'Organic & Industrial Solvents', slug: 'solvents' },
  { id: 'acids', name: 'Acids & Corrosive Solutions', slug: 'acids' },
  { id: 'bases', name: 'Bases & Alkalis', slug: 'bases' },
  { id: 'specialty', name: 'Specialty & Polyols Chemicals', slug: 'specialty' },
  { id: 'transmission-oils', name: 'Transmission & Gear Oils', slug: 'transmission-oils' },
  { id: 'brake-fluids', name: 'Brake & Hydraulic Fluids', slug: 'brake-fluids' },
  { id: 'coolants', name: 'Coolants & Antifreeze', slug: 'coolants' },
  { id: 'auto-additives', name: 'Automotive Additives & Specialty', slug: 'auto-additives' },
  { id: 'dairy', name: 'Dairy Products', slug: 'dairy' },
  { id: 'cooking-oils', name: 'Cooking Oils & Fats', slug: 'cooking-oils' },
  { id: 'sweeteners', name: 'Sweeteners & Syrups', slug: 'sweeteners' },
  { id: 'condiments', name: 'Condiments & Sauces', slug: 'condiments' },
  { id: 'baking-ingredients', name: 'Baking Ingredients', slug: 'baking-ingredients' },
  { id: 'beverages-full', name: 'Beverages & Drinks (Expanded)', slug: 'beverages-full' },
  { id: 'produce-processing', name: 'Fruits & Vegetables (Processing)', slug: 'produce-processing' },
  { id: 'concrete-cement', name: 'Concrete & Cement Products', slug: 'concrete-cement' },
  { id: 'aggregates-fill', name: 'Aggregates & Fill Materials', slug: 'aggregates-fill' },
  { id: 'wood-lumber', name: 'Wood & Lumber', slug: 'wood-lumber' },
  { id: 'insulation-materials', name: 'Insulation Materials', slug: 'insulation-materials' },
  { id: 'masonry-block', name: 'Masonry & Block', slug: 'masonry-block' },
  { id: 'roofing-materials', name: 'Roofing Materials', slug: 'roofing-materials' },
  { id: 'paints-coatings', name: 'Paints, Coatings & Sealants', slug: 'paints-coatings' },
  { id: 'adhesives-mortars', name: 'Adhesives, Mortars & Joint Compounds', slug: 'adhesives-mortars' }
];
