
const currentWeatherIcon = document.querySelector("#current-weather-icon");
const dailyForecast = document.querySelector("#daily-forecast");
const hourlyForecast = document.querySelector("#hourly-forecast");

export default function clearDisplay () {
    currentWeatherIcon.textContent = "";
    dailyForecast.textContent = "";
    hourlyForecast.textContent = "";
}