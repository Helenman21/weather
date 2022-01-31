import { domElements } from './constants.js'
import { changeCity } from './main.js'
import { colorLike, runMagic } from './now.js'
import { runMagicTwo } from './forecact.js'
import { arrayFavoritSity, storage } from './utils.js'

function handleClickCity(event) {
	const nameCity = event.target.textContent;
	changeCity(nameCity);
	colorLike(buttonlike);
	runMagic(nameCity);
	runMagicTwo(nameCity);
};

function handleRemoveFavoritSity(event) {
	const currentSity = event.target.closest('.location__row');
	const elem = currentSity.querySelector('.description');
	const string = elem.textContent;
	const pos = arrayFavoritSity.indexOf(string);
	const removedItem = arrayFavoritSity.splice(pos, 1);
	console.log(arrayFavoritSity);
	currentSity.remove();
	storage.saveFavoriteCities(arrayFavoritSity)
}

export function createElement(value) {
	const cloneFavoritSity = document.querySelector('#favorite-city');
	const clone = cloneFavoritSity.content.cloneNode(true);
	const elem = clone.querySelector('.description');
	elem.addEventListener('click', handleClickCity);
	elem.textContent = value;
	const deleteFavoritSity = clone.querySelector('.delete-sity')
	deleteFavoritSity.addEventListener('click', handleRemoveFavoritSity);

	return clone;
};