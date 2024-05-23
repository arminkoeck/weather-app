import "./style.css";

import "./js_modules/loadImages";
import getWeatherData, {getCurrentWeatherData} from "./js_modules/getWeatherData";
import clearDisplay from "./js_modules/clearDisplay";
import displayWeatherData from "./js_modules/displayWeatherData";
import changeTempUnit from "./js_modules/changeTempUnit";
import getSearchLocation from "./js_modules/getSearchLocation";

const searchButton = document.querySelector("#search-button");
const changeTempButton = document.querySelector("#change-temp");

document.addEventListener("DOMContentLoaded", () => {
  getWeatherData("vienna")
    .then((weatherData) => {
      clearDisplay();
      displayWeatherData(weatherData);
    })
    .catch((error) => {
      console.error(
        "Error fetching weather data while DOMContentLoaded:",
        error,
      );
    });
});


searchButton.addEventListener("click", () => {
  const searchLocation = getSearchLocation();
  if (searchLocation) {
    getWeatherData(searchLocation)
    .then((weatherData) => {
      const errorMessage = document.querySelector("#error-message");
      if (weatherData.error) {
        errorMessage.textContent = weatherData.error.message;
      } else {
        errorMessage.textContent = "";
        clearDisplay();
        displayWeatherData(weatherData);
      }
    })
    .catch((error) => {
      console.error(
        "Error fetching weather data while getSearchLocation:",
        error,
      );
    });
  }
});

changeTempButton.addEventListener("click", () => {
  changeTempUnit();
  clearDisplay();
  displayWeatherData(getCurrentWeatherData());
});