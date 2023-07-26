const button = document.getElementById("get-location");
const input = document.getElementById("input-city");
const subWeather = document.querySelector(".sub-weather");

const apiKey = "82005d27a116c2880c8f0fcb866998a0";

button.addEventListener("click", () => {
  const value = input.value;
  getCityData(value);
});

async function getCityData(city) {
  subWeather.innerHTML = `<h3>Loading...</h3>`;
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  const data = await response.json();
  showWeather(data);
}

async function toGetLocation() {
  navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
}
toGetLocation();

async function gotLocation(position) {
  const result = await getLoc(
    position.coords.latitude,
    position.coords.longitude
  );
}

function failedToGet() {
  console.log("There was some issue.");
}

async function getLoc(latitude, longitude) {
  const promise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  );
  const locData = await promise.json();
  showWeather(locData);
}

function showWeather(data) {
  if (data.cod === "404") {
    subWeather.innerHTML = `<h3>City not found</h3>`;
    return;
  }

  const dataIcon = data.weather[0].icon;

  let image = `icons/${dataIcon}.png`;

  subWeather.innerHTML = `
    <div class="icon"><img src=${image} alt=""></div>
    <div class="temp">${parseInt(data.main.temp - 273)} &#8451</div>
    <div class="type">${data.weather[0].description}</div>
    <div class="location">${data.name + ", " + data.sys.country}</div>
    `;
}
