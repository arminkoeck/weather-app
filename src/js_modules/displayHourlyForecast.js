import getCurrentTempUnit from "./getCurrentTempUnit";
import displayCurrentTempUnit from "./getCurrentTempUnitText";
import createWeatherElement from "./createWeatherElement";
import createWeatherElementIcon from "./createWeatherElementIcon";

export default function displayHourlyForecast(weatherData) {
  const hoursArray = [3, 6, 9, 12, 15, 18, 21];
  const hoursTextArray = [
    "3:00 am",
    "6:00 am",
    "9:00 am",
    "12:00 pm",
    "3:00 pm",
    "6:00 pm",
    "9:00 pm",
  ];
  for (let i = 0; i < hoursArray.length; i++) {
    createHourlyForecast(weatherData, 0, hoursArray[i], hoursTextArray[i]);
  }
  createHourlyForecast(weatherData, 1, 0, "12:00 am");
}

function createHourlyForecast(weatherData, day, hour, hourText) {
  const hourlyForecast = document.querySelector("#hourly-forecast");
  const hourlyForecastContainer = document.createElement("div");
  hourlyForecastContainer.classList.add("hourly-forecast-container");
  hourlyForecast.appendChild(hourlyForecastContainer);

  createWeatherElement("hourly-time", hourText, hourlyForecastContainer);

  createWeatherElement(
    "hourly-temp",
    weatherData.forecast.forecastday[day].hour[hour][
      `temp_${getCurrentTempUnit()}`
    ] +
      " " +
      displayCurrentTempUnit(),
    hourlyForecastContainer,
  );

  createWeatherElement(
    "hourly-text",
    weatherData.forecast.forecastday[day].hour[hour].condition.text,
    hourlyForecastContainer,
  );

  createWeatherElementIcon(
    "hourly-icon",
    weatherData.forecast.forecastday[day].hour[hour].condition.icon,
    hourlyForecastContainer,
  );
}
