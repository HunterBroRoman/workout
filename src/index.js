import './css/styles.css';
const weatherBlock = document.querySelector(".weather");

async function loadWeather(e) {
  weatherBlock.innerHTML = `
    <div class="weather_loading">
    <img src="./images/g0R5.gif" alt="Loading..." >
    </div>`;// гифка с загрузкой

  const server = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=844453e050df5ad471b8fa9c3f6d13aa";
  const response = await fetch(server, {
    metod: "GET",
  }); // формируем запрос на сервер с помощью метода ГЕТ

  const responseResult = await response.json(); //пітаемся получить ответ в формате JSON
  if (response.ok) {
    getWeather(responseResult); // если ответ ОК, то запускаем функцию и передаем туда получен.данные
  } else {
    weatherBlock.innerHTML = responseResult.message; //если ошибка, то віводим сообщение об єтом
  }
}

function getWeather(data) {
  const location = data.name;
  const temp = Math.round(data.main.temp-273.15);
  const feelsLike = Math.round(data.main.feels_like-273.15);
  const weatherStatus = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;
  
  const tempLate = `
  <div class="weather_header">
          <div class="weather_main">
            <div class="weather_city">${location}</div>
            <div class="weather_status">${weatherStatus}</div>
          </div>
          <div class="weather_icon">
          <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
          </div>
        </div>
        <div class="weather_temp">${temp}</div>
        <div class="weather_fels">Feels Like: ${feelsLike}</div>`;

weatherBlock.innerHTML = tempLate;

}

if (weatherBlock) {
  loadWeather(); // если данные есть то запускаем функцию
}
