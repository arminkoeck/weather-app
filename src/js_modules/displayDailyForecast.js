import getCurrentTempUnit from "./getCurrentTempUnit";
import displayCurrentTempUnit from "./getCurrentTempUnitText";
import weekDayArray from "./weekDayArray";
import createWeatherElement from "./createWeatherElement";
import createWeatherElementIcon from "./createWeatherElementIcon";
import createWeatherElementAndTitle from "./createWeatherElementAndTitle";

export default function displayDailyForecast(weatherData) {
  const daysArray = [1, 2];
  for (let i = 0; i < daysArray.length; i++) {
    createDailyForecast(weatherData, daysArray[i]);
  }
}

function createDailyForecast(weatherData, day) {
  const dailyForecast = document.querySelector("#daily-forecast");
  const dailyForecastContainer = document.createElement("div");
  dailyForecastContainer.classList.add("daily-forecast-container");

  const dailyNameContainer = document.createElement("div");
  dailyNameContainer.classList.add("daily-name-container");
  const dailyTempContainer = document.createElement("div");
  dailyTempContainer.classList.add("daily-temp-container");
  const dailyRainContainer = document.createElement("div");
  dailyRainContainer.classList.add("daily-rain-container");
  const dailyDate = new Date(weatherData.forecast.forecastday[day].date);
  const dailyChanceOfRainContainer = document.createElement(
    "daily-chance-of-rain-container",
  );
  const dailyPrecipContainer = document.createElement("daily-precip-container");
  dailyRainContainer.appendChild(dailyChanceOfRainContainer);
  dailyRainContainer.appendChild(dailyPrecipContainer);
  const fragment = document.createDocumentFragment();
  fragment.appendChild(dailyNameContainer);
  fragment.appendChild(dailyTempContainer);
  fragment.appendChild(dailyRainContainer);
  dailyForecastContainer.appendChild(fragment);
  dailyForecast.appendChild(dailyForecastContainer);

  createWeatherElement(
    "daily-day-name",
    weekDayArray[dailyDate.getDay()],
    dailyNameContainer,
  );

  createWeatherElementIcon(
    "daily-day-icon",
    weatherData.forecast.forecastday[day].day.condition.icon,
    dailyNameContainer,
  );

  createWeatherElementAndTitle(
    "daily-chance-of-rain",
    `${weatherData.forecast.forecastday[day].day.daily_chance_of_rain}%`,
    "Chance of Rain",
    dailyChanceOfRainContainer,
  );

  createWeatherElementAndTitle(
    "daily-precip",
    `${weatherData.forecast.forecastday[day].day.totalprecip_mm} mm`,
    "Precip",
    dailyPrecipContainer,
  );

  createWeatherElement(
    "daily-max-temp",
    weatherData.forecast.forecastday[day].day[
      `maxtemp_${getCurrentTempUnit()}`
    ] +
      " " +
      displayCurrentTempUnit(),
    dailyTempContainer,
  );

  createWeatherElement(
    "daily-min-temp",
    weatherData.forecast.forecastday[day].day[
      `mintemp_${getCurrentTempUnit()}`
    ] +
      " " +
      displayCurrentTempUnit(),
    dailyTempContainer,
  );
}
