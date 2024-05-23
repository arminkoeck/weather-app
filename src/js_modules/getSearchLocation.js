export default function getSearchLocation() {
  const errorMessage = document.querySelector("#error-message");
  const locationInput = document.querySelector("#location");
  let location = locationInput.value;
  if (location !== "") {
    errorMessage.textContent = "";
    return location;
  } else {
    errorMessage.textContent = "Please fill in a location";
    return false;
  }
}


