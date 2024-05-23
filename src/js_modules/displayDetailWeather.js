import getCurrentTempUnit from "./getCurrentTempUnit";
import displayCurrentTempUnit from "./getCurrentTempUnitText";

export default function displayDetailWeather(weatherData) {
  const feelsLike = document.querySelector("#detail-weather-feels-like");
  const chanceOfRain = document.querySelector("#detail-weather-chance-of-rain");
  const cloudCover = document.querySelector("#detail-weather-cloud-cover");
  const windSpeed = document.querySelector("#detail-weather-wind-speed");
  const humidity = document.querySelector("#detail-weather-humidity");

  feelsLike.textContent =
    weatherData.current[`feelslike_${getCurrentTempUnit()}`] +
    " " +
    displayCurrentTempUnit();
  chanceOfRain.textContent =
    weatherData.forecast.forecastday[0].day.daily_chance_of_rain +
    "% |  " +
    weatherData.forecast.forecastday[0].day.totalprecip_mm +
    " mm";
  cloudCover.textContent = weatherData.current.cloud + "%";
  windSpeed.textContent = weatherData.current.wind_kph + " km/h";
  humidity.textContent = weatherData.current.humidity + "%";
}
