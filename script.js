function showTemperature(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerText = Math.round(response.data.main.temp);

  let place = document.querySelector("#place");
  place.innerText = response.data.name;

  let description = document.querySelector("#description");
  description.innerText = response.data.weather[0].description;

  let humidity = document.querySelector("#humidity");
  humidity.innerText = response.data.main.humidity;

  let windSpeed = document.querySelector("#windspeed");
  windSpeed.innerText = response.data.wind.speed;

  let maxTemp = document.querySelector("#maxtemp");
  maxTemp.innerText = response.data.main.temp_max;

  let minTemp = document.querySelector("#mintemp");
  minTemp.innerText = Math.round(response.data.main.temp_min);
  console.log(response.data);
}
let city = "Lisbon";
let apiKey = "a56a00f6a5a3edb84cee6e71e1a24e77";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(showTemperature);
