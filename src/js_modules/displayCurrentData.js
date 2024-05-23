import getCurrentTempUnit from "./getCurrentTempUnit";
import displayCurrentTempUnit from "./getCurrentTempUnitText";
import weekDayArray from "./weekDayArray";
import monthArray from "./monthArray";

export default function displayCurrentData(weatherData) {
  const currentTemp = document.querySelector("#current-weather-temp");
  const currentLocation = document.querySelector("#current-weather-location");
  const currentText = document.querySelector("#current-weather-text");
  const currentIcon = document.querySelector("#current-weather-icon");
  const currentSunrise = document.querySelector("#current-weather-sunrise");
  const currentSunset = document.querySelector("#current-weather-sunset");
  const currentDay = document.querySelector("#current-weather-day");
  const currentDate = document.querySelector("#current-weather-date");
  const currentMaxTemp = document.querySelector("#current-weather-max-temp");
  const currentMinTemp = document.querySelector("#current-weather-min-temp");
  currentTemp.textContent =
    weatherData.current[`temp_${getCurrentTempUnit()}`] +
    " " +
    displayCurrentTempUnit();
  currentMaxTemp.textContent =
    weatherData.forecast.forecastday[0].day[`maxtemp_${getCurrentTempUnit()}`] +
    " " +
    displayCurrentTempUnit();
  currentMinTemp.textContent =
    weatherData.forecast.forecastday[0].day[`mintemp_${getCurrentTempUnit()}`] +
    " " +
    displayCurrentTempUnit();
  currentLocation.textContent =
    weatherData.location.name + ", " + weatherData.location.country;
  currentText.textContent = weatherData.current.condition.text;
  const localTime = new Date(weatherData.location.localtime);
  currentDay.textContent = weekDayArray[localTime.getDay()] + ", ";
  currentDate.textContent =
    `${localTime.getDate()}` +
    ". " +
    monthArray[localTime.getMonth()] +
    " " +
    `${localTime.getFullYear()}`;
  currentSunrise.textContent =
    weatherData.forecast.forecastday[0].astro.sunrise;
  currentSunset.textContent = weatherData.forecast.forecastday[0].astro.sunset;
  const img = document.createElement("img");
  img.src = weatherData.current.condition.icon;
  currentIcon.appendChild(img);
}
