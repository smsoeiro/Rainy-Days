function formatDate(date) {
  let day = date.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${days[day]} ${date.getHours()}:${minutes}`;
}

function search(city) {
  let apiKey = "a56a00f6a5a3edb84cee6e71e1a24e77";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}
function handleSubmit(event) {
  event.preventDefault();
  let keyword = document.querySelector("#keyword");
  search(keyword.value);
}

function showWeather(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerText = Math.round(response.data.main.temp);

  console.log(response.data);

  let place = document.querySelector("#place");
  place.innerText = response.data.name;

  let description = document.querySelector("#description");
  description.innerText = response.data.weather[0].description;

  let humidity = document.querySelector("#humidity");
  humidity.innerText = Math.round(response.data.main.humidity);

  let windSpeed = document.querySelector("#windspeed");
  windSpeed.innerText = Math.round(response.data.wind.speed);

  let maxTemp = document.querySelector("#maxtemp");
  maxTemp.innerText = Math.round(response.data.main.temp_max);

  let minTemp = document.querySelector("#mintemp");
  minTemp.innerText = Math.round(response.data.main.temp_min);

  let date = document.querySelector("#date");
  date.innerText = formatDate(new Date(response.data.dt * 1000));

  console.log(response.data);

  let icon = document.querySelector("#icon");

  icon.setAttribute(
    "src",
    `https://openweathermap.org/img/w/${response.data.weather[0].icon}.png `
  );
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
search("Lisbon,pt ");
