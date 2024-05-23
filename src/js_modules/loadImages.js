import feelslike from "../images/feelslike.png";
import chanceOfRain from "../images/rain.png";
import cloudCover from "../images/cloud.png";
import windSpeed from "../images/wind.png";
import humidity from "../images/humidity.png";

const feelslikeContainer = document.querySelector("#feelslike-image");
feelslikeContainer.src = feelslike;

const chanceOfRainContainer = document.querySelector("#chance-of-rain-image");
chanceOfRainContainer.src = chanceOfRain;

const cloudCoverContainer = document.querySelector("#cloud-cover-image");
cloudCoverContainer.src = cloudCover;

const windSpeedContainer = document.querySelector("#wind-speed-image");
windSpeedContainer.src = windSpeed;

const humidityContainer = document.querySelector("#humidity-image");
humidityContainer.src = humidity;
