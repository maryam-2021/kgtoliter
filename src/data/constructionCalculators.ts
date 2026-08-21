type BeamInput = {
  beamLength: number;
  loadType: 'point' | 'uniform';
  loadMagnitude: number;
  pointLoadPosition?: number;
  beamWidth: number;
  beamHeight: number;
  materialModulus: number;
  supportType?: 'simply-supported' | 'cantilever';
};

type ColumnInput = {
  columnHeight: number;
  crossSectionWidth: number;
  crossSectionDepth: number;
  concreteStrength: number;
  steelYieldStrength: number;
  rebarArea: number;
  eccentricity?: number;
  endCondition?: 'fixed-fixed' | 'pinned-pinned' | 'fixed-pinned';
};

type FoundationInput = {
  soilType: 'clay' | 'sand' | 'gravel' | 'rock';
  foundationWidth: number;
  foundationLength: number;
  foundationDepth: number;
  soilDensity: number;
  cohesion: number;
  angleOfFriction: number;
  waterTableDepth: number;
  loadVertical: number;
  loadHorizontal: number;
  factorOfSafety?: number;
};

type UValueInput = {
  layers: Array<{ material: string; thickness: number; conductivity: number }>;
  insideTemp: number;
  outsideTemp: number;
  insideResistance?: number;
  outsideResistance?: number;
  includeThermalBridge?: boolean;
};

function requirePositive(values: Record<string, number>) {
  for (const [name, value] of Object.entries(values)) {
    if (!Number.isFinite(value) || value <= 0) {
      throw new TypeError(`${name} must be a positive finite number`);
    }
  }
}

function beamAnalysis({
  beamLength,
  loadType,
  loadMagnitude,
  pointLoadPosition,
  beamWidth,
  beamHeight,
  materialModulus,
  supportType = 'simply-supported',
}: BeamInput) {
  requirePositive({ beamLength, loadMagnitude, beamWidth, beamHeight, materialModulus });
  const inertia = (beamWidth * beamHeight ** 3) / 12;
  const modulus = materialModulus * 1e9;
  let maxMoment: number;
  let maxDeflection: number;
  let reactionLeft: number;
  let reactionRight: number;
  let formula: string;

  if (loadType === 'point') {
    const position = pointLoadPosition ?? beamLength / 2;
    if (position <= 0 || position > beamLength) {
      throw new RangeError('pointLoadPosition must be within the beam span');
    }
    const remainder = beamLength - position;
    const load = loadMagnitude * 1000;
    if (supportType === 'cantilever') {
      reactionLeft = load;
      reactionRight = 0;
      maxMoment = load * position;
      maxDeflection = (load * position ** 3) / (3 * modulus * inertia);
      formula = 'M_max = Pa, δ_max = Pa³/(3EI)';
    } else {
      reactionLeft = (load * remainder) / beamLength;
      reactionRight = (load * position) / beamLength;
      maxMoment = (load * position * remainder) / beamLength;
      maxDeflection =
        (load *
          position *
          remainder *
          (position + 2 * remainder) *
          Math.sqrt(3 * position * (position + 2 * remainder))) /
        (27 * modulus * inertia * beamLength);
      formula = 'M_max = Pab/L, δ_max = Pab(a+2b)√(3a(a+2b))/(27EIL)';
    }
  } else if (loadType === 'uniform') {
    const distributedLoad = (loadMagnitude * 1000) / beamLength;
    if (supportType === 'cantilever') {
      reactionLeft = distributedLoad * beamLength;
      reactionRight = 0;
      maxMoment = (distributedLoad * beamLength ** 2) / 2;
      maxDeflection = (distributedLoad * beamLength ** 4) / (8 * modulus * inertia);
      formula = 'M_max = wL²/2, δ_max = wL⁴/(8EI)';
    } else {
      reactionLeft = (distributedLoad * beamLength) / 2;
      reactionRight = reactionLeft;
      maxMoment = (distributedLoad * beamLength ** 2) / 8;
      maxDeflection = (5 * distributedLoad * beamLength ** 4) / (384 * modulus * inertia);
      formula = 'M_max = wL²/8, δ_max = 5wL⁴/(384EI)';
    }
  } else {
    throw new TypeError(`Unsupported load type: ${loadType}`);
  }

  const neutralAxis = beamHeight / 2;
  const maxStress = (maxMoment * neutralAxis) / inertia;
  return {
    reactions: {
      left: (reactionLeft / 1000).toFixed(2),
      right: (reactionRight / 1000).toFixed(2),
    },
    maxMoment: (maxMoment / 1000).toFixed(2),
    maxDeflection: maxDeflection.toFixed(6),
    maxDeflection_mm: (maxDeflection * 1000).toFixed(3),
    maxStress: (maxStress / 1e6).toFixed(2),
    stressCheck: maxStress / 1e6 > 30 ? '⚠️ Overstressed' : '✅ Within limits',
    formula,
    spanToDeflectionRatio: (beamLength / (maxDeflection || 1e-9)).toFixed(0),
    sectionModulus: (inertia / neutralAxis).toFixed(6),
  };
}

function columnAnalysis({
  columnHeight,
  crossSectionWidth,
  crossSectionDepth,
  concreteStrength,
  steelYieldStrength,
  rebarArea,
  eccentricity = 0,
  endCondition = 'fixed-fixed',
}: ColumnInput) {
  requirePositive({
    columnHeight,
    crossSectionWidth,
    crossSectionDepth,
    concreteStrength,
    steelYieldStrength,
    rebarArea,
  });
  const grossArea = crossSectionWidth * crossSectionDepth;
  const steelArea = rebarArea / 10000;
  const effectiveLengthFactors = { 'fixed-fixed': 0.65, 'pinned-pinned': 1, 'fixed-pinned': 0.8 };
  const radius = Math.sqrt((crossSectionWidth * crossSectionDepth) / 12);
  const slenderness = (effectiveLengthFactors[endCondition] * columnHeight) / radius;
  const axialCapacity =
    0.85 * concreteStrength * (grossArea - steelArea) + steelYieldStrength * steelArea;
  const momentCapacity =
    0.85 * concreteStrength * crossSectionWidth * crossSectionDepth * 0.25 * crossSectionDepth;
  const reducedCapacity =
    eccentricity > 0
      ? axialCapacity / (1 + (eccentricity * 1000) / (crossSectionDepth * 100))
      : axialCapacity;

  return {
    grossArea: (grossArea * 10000).toFixed(0),
    slendernessRatio: slenderness.toFixed(2),
    axialCapacity: (axialCapacity * 1000).toFixed(0),
    axialCapacityReduced: (reducedCapacity * 1000).toFixed(0),
    momentCapacity: (momentCapacity * 1000).toFixed(0),
    capacityReduction: ((reducedCapacity / axialCapacity) * 100).toFixed(1) + '%',
    interactionCheck:
      eccentricity <= 0
        ? ''
        : eccentricity < crossSectionDepth * 0.1
          ? '✅ Acceptable'
          : '⚠️ Excessive eccentricity',
    isSlender: slenderness > 22 ? '⚠️ Slender column' : '✅ Short column',
    recommendations: slenderness > 22 ? 'Consider increasing section size' : 'Section adequate',
  };
}

function foundationBearing({
  soilType,
  foundationWidth,
  foundationLength,
  foundationDepth,
  soilDensity,
  cohesion,
  angleOfFriction,
  waterTableDepth,
  loadVertical,
  loadHorizontal,
  factorOfSafety = 3,
}: FoundationInput) {
  requirePositive({
    foundationWidth,
    foundationLength,
    foundationDepth,
    soilDensity,
    loadVertical,
    factorOfSafety,
  });
  const gamma = (soilDensity * 9.81) / 1000;
  const angleRadians = (angleOfFriction * Math.PI) / 180;
  const nq =
    Math.tan(Math.PI / 4 + angleRadians / 2) ** 2 * Math.exp(Math.PI * Math.tan(angleRadians));
  const nc = (nq - 1) / Math.tan(angleRadians) || 25;
  const ngamma = 2 * (nq + 1) * Math.tan(angleRadians);
  const ratio = foundationWidth / foundationLength;
  const sc = 1 + ratio * (nq / nc);
  const sq = 1 + ratio * Math.tan(angleRadians);
  const sgamma = 1 - 0.4 * ratio;
  const dc = 1 + 0.4 * (foundationDepth / foundationWidth);
  const dq =
    angleOfFriction === 0
      ? 1
      : 1 +
        2 *
          Math.tan(angleRadians) *
          (1 - Math.sin(angleRadians)) *
          (foundationDepth / foundationWidth);
  let ultimate =
    soilType === 'clay'
      ? 5.14 * cohesion * sc * dc + gamma * foundationDepth
      : soilType === 'rock'
        ? 10 * cohesion
        : 0.5 * gamma * foundationWidth * ngamma * sgamma + gamma * foundationDepth * nq * sq * dq;

  if (waterTableDepth < foundationDepth) {
    const correction = 1 - (foundationDepth - waterTableDepth) / (2 * foundationWidth);
    ultimate *= Math.max(0, Math.min(correction, 1));
  }
  const allowable = ultimate / factorOfSafety;
  const applied = loadVertical / (foundationWidth * foundationLength);
  const horizontalRatio = loadHorizontal / loadVertical;

  return {
    ultimateBearingCapacity: ultimate.toFixed(2),
    allowableBearingCapacity: allowable.toFixed(2),
    appliedPressure: applied.toFixed(2),
    safetyFactor: (ultimate / applied).toFixed(2),
    settlementRisk: ultimate / applied < 2 ? '⚠️ High settlement risk' : '✅ Safe',
    horizontalStability: horizontalRatio < 0.5 ? '✅ Stable' : '⚠️ Check sliding',
    recommendedFooting: allowable > applied ? '✅ Adequate' : '❌ Increase footing size',
    requiredWidth: Math.sqrt(loadVertical / (allowable || 1)).toFixed(2),
    bearingCapacityFactors: { N_c: nc.toFixed(2), N_q: nq.toFixed(2), N_gamma: ngamma.toFixed(2) },
  };
}

function uValueCalculator({
  layers,
  insideTemp,
  outsideTemp,
  insideResistance = 0.13,
  outsideResistance = 0.04,
  includeThermalBridge = false,
}: UValueInput) {
  if (!Array.isArray(layers) || layers.length === 0) {
    throw new TypeError('layers must contain at least one material');
  }
  requirePositive({ insideResistance, outsideResistance });
  let totalResistance = insideResistance + outsideResistance;
  const layerDetails = layers.map((layer) => {
    requirePositive({ thickness: layer.thickness, conductivity: layer.conductivity });
    const resistance = layer.thickness / layer.conductivity;
    totalResistance += resistance;
    return { ...layer, resistance: resistance.toFixed(4) };
  });
  const uValue = 1 / totalResistance;
  const adjusted = includeThermalBridge ? uValue * 1.15 : uValue;
  const temperatureDrop = insideTemp - outsideTemp;
  const heatLoss = adjusted * temperatureDrop;

  return {
    uValue: uValue.toFixed(4),
    uValueAdjusted: adjusted.toFixed(4),
    totalResistance: totalResistance.toFixed(4),
    rValue: (totalResistance * 5.678).toFixed(2),
    heatLoss: heatLoss.toFixed(2),
    layerDetails: layerDetails.map((layer) => ({
      ...layer,
      resistancePercent: ((Number(layer.resistance) / totalResistance) * 100).toFixed(1),
    })),
    temperatureDrop: temperatureDrop.toFixed(1),
    insulationEffectiveness: uValue < 0.3 ? 'Excellent' : uValue < 0.6 ? 'Good' : 'Poor',
    energyCost: ((heatLoss * 24 * 365) / 1000).toFixed(0),
    recommendations:
      uValue > 0.6 ? 'Consider additional insulation' : 'Thermal performance adequate',
  };
}

export const ConstructionCalculators = {
  structural: { beamAnalysis, columnAnalysis, foundationBearing },
  thermal: { uValueCalculator },
};
