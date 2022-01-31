import { whiteHeart, blackHeart, api, domElements } from './constants.js'
import { arrayFavoritSity, storage, calcTemp, calcTempFeelsLike } from './utils.js'
import { createElement } from './rightSideBar.js'
import { createElemntForecast, addContainerForecast } from './forecact.js'

export function setCity(nameCity) {
	const url = `${fetchWeather}?q=${nameCity}&appid=${apiKey}`;

	return fetch(url)
		.then((response) => {
			return response.json();
		})
};

export function runMagic(nameCity) {
	setCity(nameCity)
		.then((data) => {
			console.log(data)

			const weather = {
				temp: calcTemp(data?.main?.temp),
				feels_like: calcTempFeelsLike(data?.main?.feels_like),
				weather: data?.weather?.length ? data?.weather[0]?.main : null,
				icon: data?.weather?.length ? data?.weather[0]?.icon : null,
				sunrise: data?.sys?.sunrise,
				sunset: data?.sys?.sunset,
			}
			const f = weather.temp;
			console.log('f: ', f)
			temperatureNow.textContent = f + '°';
			const imageTubNow = document.querySelector('.cloudy');

			const iconWeather = weather.icon + '@2x.png';

			const serverUrlIcon = 'http://openweathermap.org/img/wn/';

			const iconURL = `${serverUrlIcon}${iconWeather}`;

			imageTubNow.src = iconURL;

			deteilsTemperature.textContent = 'Temperature: ' + f + '°';

			const feelsLike = weather.feels_like;

			detailsFeelsLike.textContent = 'Feels like: ' + feelsLike + '°';

			const cloudiness = weather.weather;

			detailsWeather.textContent = 'Weather: ' + cloudiness;

			const sunrise = weather.sunrise;

			detailsSunrise.textContent = 'Sunrise: ' + sunrise;

			const sunset = weather.sunset;

			detailsSunset.textContent = 'Sunset: ' + sunset;

			console.log(weather);

		})
		.catch(error => {
			console.log(error)
		});
};

export function toggle() {
	const like = buttonlike.textContent;

	if (like == whiteHeart) {
		const nameSity = sityNameTubNow.textContent;
		const isValid = pushArrayFavoritSity(nameSity)

		if (isValid) {

			const newElement = createElement(nameSity);
			addContainer(newElement);
			const newElementForecast = createElemntForecast(nameSity);
			addContainerForecast(newElementForecast);
		}
	}
};

export function addContainer(element) {
	colorLike(buttonlike);
	locationName.append(element);
};

export function colorLike(value) {
	const currentCity = sityNameTubNow.textContent;
	console.log(arrayFavoritSity)
	const isValidArray = arrayFavoritSity.includes(currentCity);
	console.log(isValidArray)
	if (isValidArray) {
		value.textContent = blackHeart;
	} else { value.textContent = whiteHeart; }
};


export function pushArrayFavoritSity(value) {

	const isValid = !arrayFavoritSity.includes(value);
	if (isValid) {
		arrayFavoritSity.push(value);
		storage.saveFavoriteCities(arrayFavoritSity);
		storage.getFavoriteCities();
		console.log(arrayFavoritSity);
	}
	return isValid
};