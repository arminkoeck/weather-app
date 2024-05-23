export default function createWeatherElementIcon(className, imgSrc, parentContainer) {
    const icon = document.createElement("div");
    icon.classList.add(className);
    const img = document.createElement("img");
    img.src = imgSrc;
    icon.appendChild(img);
    parentContainer.appendChild(icon);
  }