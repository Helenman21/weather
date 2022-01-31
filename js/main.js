
import { runMagic, colorLike, setCity, pushArrayFavoritSity, addContainer, toggle } from './now.js';
import { calcTemp, calcTempFeelsLike, arrayFavoritSity } from './utils.js';
import { setCityForecast, runMagicTwo, formatedForecastData, createElemntForecast } from './forecact.js';
import { createElement } from './rightSideBar.js'
import { whiteHeart, domElements } from './constants.js'

const detailsCurrentCity = document.querySelector('.tabs__sity-name');
const description = document.querySelector('.description');

const crossDeleteSity = document.querySelector('.delete-sity');
const forecastMonth = document.querySelector('.months')
buttonlike.textContent = whiteHeart;

arrayFavoritSity.forEach(item => {
	const newElement = createElement(item)
	addContainer(newElement);
})

function handleSetCity(event) {
	event.preventDefault();
	const nameCity = input.value;
	changeCity(nameCity);
	runMagic(nameCity);
	runMagicTwo(nameCity);
	colorLike(buttonlike);
};

export function changeCity(currentValue) {
	sityNameTubNow.textContent = currentValue;
	detailsCurrentCity.textContent = currentValue;
	forecastMonth.textContent = currentValue;
}


form.addEventListener('submit', handleSetCity);

buttonlike.addEventListener('click', toggle);