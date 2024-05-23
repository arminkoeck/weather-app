let tempUnit = "c";

export default function getCurrentTempUnit() {
    return tempUnit;
  }

  export function toggleTempUnit() {
    tempUnit = tempUnit === "c" ? "f" : "c";
  }