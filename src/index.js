import './css/styles.css';
const KEY = '844453e050df5ad471b8fa9c3f6d13aa';
const weatherBlock = document.querySelector('#weather');

async function loadWeather(e) {
    weatherBlock.innerHTML = `
    <div class="weather_loading">
    <img src="./images/7gQj.jpg" alt="Loading..."
    </div>`;

const server = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=844453e050df5ad471b8fa9c3f6d13aa";    
const response = await fetch(server, { //формируем запрос на сайт методом ГЕТ
   metod: 'GET', 
});
const responseResult = await response.json(); //пітаемся получить ответ в формате JSON

if (response.ok) {
    getWeather(responseResult);// если ответ ОК, то запускаем функцию и передаем туда получен.данные
} else {
   weatherBlock.innerHTML = responseResult.message; //если ошибка, то віводим сообщение об єтом
}
}

function getWeather(data ) {
console.log(data);
}

if (weatherBlock) {
    loadWeather(); // если данные есть то запускаем функцию
}