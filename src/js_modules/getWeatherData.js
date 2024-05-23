let currentWeatherData = "";

export default async function getWeatherData(location) {
  const errorMessage = document.querySelector("#error-message");
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=0624f9944b85464e84c120405240405&q=${location}&days=3`,
      { mode: "cors" },
    );
    const weatherData = await response.json();
    currentWeatherData = weatherData;
    return weatherData
  } catch (error) {
    errorMessage.textContent = "Please fill in a valid location";
    console.error("Error fetching weather data:", error);
  }
}

export function getCurrentWeatherData() {
  return currentWeatherData;
}
