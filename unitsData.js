const unitsList = [
  "Length",
  // "Currency",
  "Area",
  "Volume",
  "Weight",
  // "Temperature",
  "Speed",
  "Pressure",
  "Power",
];
unitsList.sort();
const lenghtUnits = {
  METER: 1,
  KILOMETER: 1000,
  CENTIMETER: 0.01,
  MILLIMETER: 0.001,
  MICROMETER: 0.000001,
  NANOMETER: 0.000000001,
  MILE: 1609.344,
  YARD: 0.9144,
  FOOT: 0.3048,
  INCH: 0.0254,
  NAUTICALMILE: 1852,
  ASTRONOMICALUNIT: 149597870700,
};
const areaUnits = {
  SQUAREMETER: 1,
  SQUAREKILOMETER: 1000000,
  HECTARE: 10000,
  SQUAREMILE: 2589988.11,
  ACRE: 4046.86,
  SQUAREFOOT: 0.092903,
  SQUAREYARD: 0.836127,
  SQUAREINCH: 0.00064516,
  SQUARECENTIMETER: 0.0001,
};
const volumeUnits = {
  CUBICMETER: 1,
  LITER: 0.001,
  MILLILITER: 0.000001,
  CUBICINCH: 0.0000163871,
  CUBICFOOT: 0.0283168,
  GALLON: 0.00378541,
  QUART: 0.000946353,
  PINT: 0.000473176,
  FLUIDOUNCE: 0.0000295735,
  BARREL: 0.158987,
  CUBICCENTIMETER: 0.000001,
};
const weightUnits = {
  KILOGRAM: 1,
  GRAM: 0.001,
  MILLIGRAM: 0.000001,
  METRICTON: 1000,
  POUND: 0.453592,
  OUNCE: 0.0283495,
  CARAT: 0.0002,
  TON: 907.185,
  STONE: 6.35029,
};
const temperatureUnits = {
  celsius: {
    toCelsius: (value) => value,
    toFahrenheit: (value) => (value * 9) / 5 + 32,
    toKelvin: (value) => value + 273.15,
  },
  fahrenheit: {
    toCelsius: (value) => ((value - 32) * 5) / 9,
    toFahrenheit: (value) => value,
    toKelvin: (value) => ((value - 32) * 5) / 9 + 273.15,
  },
  kelvin: {
    toCelsius: (value) => value - 273.15,
    toFahrenheit: (value) => ((value - 273.15) * 9) / 5 + 32,
    toKelvin: (value) => value,
  },
};
const speedUnits = {
  METERSPERSECOND: 1,
  KILOMETERSPERHOUR: 0.277778,
  MILESPERHOUR: 0.44704,
  FEETPERSECOND: 0.3048,
  KNOTS: 0.514444,
  MACH: 343.2,
  KILOMETERSPERSECOND: 1000,
  KILOMETERSPERMINUTE: 16.6667,
  MILESPERMINUTE: 26.8224,
  MILESPERSECOND: 1609.34,
};
const pressureUnits = {
  PASCAL: 1,
  KILOPASCAL: 1000,
  MEGAPASCAL: 1000000,
  BAR: 100000,
  ATMOSPHERE: 101325,
  PSI: 6894.76,
  TORR: 133.322,
  MILLIBAR: 100,
  MILLIMETEROFMERCURY: 133.322,
  POUNSDPERSQUAREINCH: 6894.76,
};
const powerUnits = {
  WATT: 1,
  KILOWATT: 1000,
  HORSEPOWER: 745.7,
  FOOTPOUNDPERSECOND: 1.35582,
};
