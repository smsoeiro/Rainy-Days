function showTemperature(response) {
  let temperature = document.querySelector("#temperature");

  temperature.innerText = Math.round(response.data.main.temp);
}
let city = "Lisbon";
let apiKey = "a56a00f6a5a3edb84cee6e71e1a24e77";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(showTemperature);
