import createWeatherElement from "./createWeatherElement"
import createWeatherElementTitle from "./createWeatherElementTitle"

export default function createWeatherElementAndTitle(
    className,
    textContent,
    title,
    parentContainer
  ) {
    createWeatherElementTitle(className, title, parentContainer);
    createWeatherElement(className, textContent, parentContainer);
  }