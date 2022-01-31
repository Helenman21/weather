export const calcTemp = temp => {
	if (temp) {
		return (Math.round(temp - 273));
	} else {
		throw 'temp is not defined';
	}
};
export const calcTempFeelsLike = feels_like => {
	if (feels_like) {
		return (Math.round(feels_like - 273));
	} else {
		throw 'feels_like is not defined';
	}
};

export const storage = {
	saveFavoriteCities(favoriteCities) {
		localStorage.setItem('items', JSON.stringify(favoriteCities));
	},
	getFavoriteCities() {
		return localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : null;
	},
	//getCurrentCity() {}
}

export const arrayFavoritSity = storage.getFavoriteCities() ? storage.getFavoriteCities() : [];
