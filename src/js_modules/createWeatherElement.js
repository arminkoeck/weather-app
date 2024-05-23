export default function createWeatherElement(className, textContent, parentContainer) {
    const element = document.createElement("div");
    element.className = className;
    element.textContent = textContent;
    parentContainer.appendChild(element);
  }