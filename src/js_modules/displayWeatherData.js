
import displayCurrentData from "./displayCurrentData"
import displayDetailWeather from "./displayDetailWeather"
import displayDailyForecast from "./displayDailyForecast"
import displayHourlyForecast from "./displayHourlyForecast"


export default function displayWeatherData(weatherData) {
    displayCurrentData(weatherData);
    displayDetailWeather(weatherData);
    displayDailyForecast(weatherData);
    displayHourlyForecast(weatherData);
  }