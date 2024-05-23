
export default function createWeatherElementTitle(className, title, parentContainer) {
    const elementTitle = document.createElement("div");
    elementTitle.className = `${className}-title`;
    elementTitle.textContent = title;
    parentContainer.appendChild(elementTitle);
  }