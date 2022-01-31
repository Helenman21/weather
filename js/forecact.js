import { changeCity } from './main.js'
import { api, domElements } from './constants.js'

const { fetchForecast, apiKey } = api;

export function setCityForecast(nameCity) {
	const urlForecast = `${fetchForecast}?q=${nameCity}&appid=${apiKey}&units=metric`;

	return fetch(urlForecast)
		.then((response) => {
			return response.json();
		})
};

export function runMagicTwo(nameCity) {
	setCityForecast(nameCity)
		.then((forecast) => {
			console.log(forecast)
			const calcTempForecast = temp => (Math.round(temp));
			const calcFeelsLike = feelsLike => (Math.round(feelsLike));
			const array = forecast?.list?.slice(0, 8);
			console.log('array: ', array);
			const resultArray = array.map(item => {
				const newItem = {
					temp: calcTempForecast(item?.main?.temp),
					date: item?.dt_txt,
					feelsLike: calcFeelsLike(item?.main?.feels_like),
					icon: item?.weather[0]?.icon,
					cloudiness: item?.weather[0]?.main,
				}
				return newItem;
			})

			console.log('resultArray: ', resultArray);
			tabForecast.textContent = '';
			resultArray.forEach(item => {
				const newElement = createElemntForecast(item)
				addContainerForecast(newElement);
			})

			const imageForecast = document.querySelector('.img-rain');
			const iconForecast = resultArray[0]?.icon + '@2x.png';
			const serverUrlIconForecast = 'http://openweathermap.org/img/wn/';
			const iconUrlForecast = `${serverUrlIconForecast}${iconForecast}`;
			imageForecast.src = iconUrlForecast;

			resultArray.forEach(item => {
				const newElement = createElemntForecast(item)
				addContainerForecast(newElement);
			})
		})
		.catch(error => {
			console.log(error)
		});
}

export function formatedForecastData(data) {
	return {
		cloneTemp: data?.temp,
		cloneDate: data?.date,
		cloneCloudines: data?.cloudiness,
		cloneClock: data?.date,
		cloneFeelsLike: data?.feelsLike,
		cloneIcon: data?.icon,
	}
};

export function createElemntForecast(value) {

	const clone = cloneForecast.content.cloneNode(true);
	const elemDate = clone.querySelector('.tabs__date');
	const elemClock = clone.querySelector('.tabs__clock');
	const elemTemperatures = clone.querySelector('.tabs__temperatures');
	const elemLikes = clone.querySelector('.tabs__likes');
	const elemCloudes = clone.querySelector('.tabs__rain');
	const elemImgRain = clone.querySelector('.img-rain');
	const {
		cloneTemp,
		cloneDate,
		cloneCloudines,
		cloneClock,
		cloneFeelsLike,
		cloneIcon
	} = formatedForecastData(value);
	elemTemperatures.textContent = 'Temperature: ' + cloneTemp + '°';
	elemCloudes.textContent = cloneCloudines;
	elemDate.textContent = cloneDate?.slice(0, 10);
	elemClock.textContent = cloneClock?.slice(11, 16);
	elemLikes.textContent = 'Feelse like: ' + cloneFeelsLike + '°';
	elemImgRain.textContent = cloneIcon;
	return clone;
};

export function addContainerForecast(element) {

	tabForecast.append(element)
};