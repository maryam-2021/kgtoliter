// src/utils/conversions.js

/**
 * Convert kilograms to litres given density in kg/L
 * @param {number} massKg
 * @param {number} densityKgL
 * @returns {number}
 */
export function kgToLitres(massKg, densityKgL) {
  if (!densityKgL || densityKgL <= 0) return 0;
  return massKg / densityKgL;
}

/**
 * Convert litres to kilograms given density in kg/L
 * @param {number} volumeL
 * @param {number} densityKgL
 * @returns {number}
 */
export function litresToKg(volumeL, densityKgL) {
  if (!densityKgL || densityKgL <= 0) return 0;
  return volumeL * densityKgL;
}

/**
 * Convert litres to millilitres
 * @param {number} volumeL
 * @returns {number}
 */
export function toMillilitres(volumeL) {
  return volumeL * 1000;
}

/**
 * Convert litres to US Gallons (1 US gal = 3.78541 L)
 * @param {number} volumeL
 * @returns {number}
 */
export function toUSGallons(volumeL) {
  return volumeL / 3.78541;
}

/**
 * Convert litres to UK/Imperial Gallons (1 UK gal = 4.54609 L)
 * @param {number} volumeL
 * @returns {number}
 */
export function toUKGallons(volumeL) {
  return volumeL / 4.54609;
}

/**
 * Convert litres to US Fluid Ounces (1 L = 33.814 fl oz)
 * @param {number} volumeL
 * @returns {number}
 */
export function toFluidOunces(volumeL) {
  return volumeL * 33.814;
}

/**
 * Convert kilograms to grams
 * @param {number} massKg
 * @returns {number}
 */
export function toGrams(massKg) {
  return massKg * 1000;
}

/**
 * Convert kilograms to pounds (1 lb = 0.45359237 kg)
 * @param {number} massKg
 * @returns {number}
 */
export function toPounds(massKg) {
  return massKg / 0.45359237;
}

/**
 * Convert kilograms to ounces (1 oz = 0.028349523 kg)
 * @param {number} massKg
 * @returns {number}
 */
export function toOunces(massKg) {
  return massKg / 0.028349523;
}

/**
 * Convert density from various units to standard kg/L
 * @param {number} value
 * @param {'kg/L' | 'g/mL' | 'lb/ft3' | 'kg/m3' | string} unit
 * @returns {number}
 */
export function densityToKgL(value, unit = 'kg/L') {
  const factors = {
    'kg/L': 1,
    'g/mL': 1,
    'lb/ft3': 0.0160185,
    'kg/m3': 0.001,
  };
  return value * (factors[unit] || 1);
}
