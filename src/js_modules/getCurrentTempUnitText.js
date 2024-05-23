let tempUnitText = "°C";

export default function getCurrentTempUnitText() {
  return tempUnitText;
}

export function toggleTempUnitText() {
  tempUnitText = tempUnitText === "°C" ? "°F" : "°C";
}
