export const buttonlike = document.querySelector('.tabs__like');
export const whiteHeart = '\u2661';
export const blackHeart = '\u2665';
export const sityNameTubNow = document.querySelector('.sity-name');

export const api = {
	fetchForecast: 'http://api.openweathermap.org/data/2.5/forecast',
	apiKey: 'f660a2fb1e4bad108d6160b7f58c555f',
	fetchWeather: 'http://api.openweathermap.org/data/2.5/weather'
}

const domElements = {
	buttonlike: document.querySelector('.tabs__like'),
	sityNameTubNow: document.querySelector('.sity-name'),
	input: document.querySelector('.entry-field'),
	form: document.getElementsByTagName('form'),
	detailsCurrentCity: document.querySelector('.tabs__sity-name'),
	description: document.querySelector('.description'),
	crossDeleteSity: document.querySelector('.delete-sity'),
	forecastMonth: document.querySelector('.months'),
	locationName: document.querySelector('.location__name'),
   temperatureNow: document.querySelector('.tabs__temperature'),
   deteilsTemperature: document.querySelector('.tabs__description'),
   detailsFeelsLike: document.querySelector('.like'),
   detailsWeather: document.querySelector('.weather'),
   detailsSunrise: document.querySelector('.sunrise'),
   detailsSunset: document.querySelector('.sunset'),
};

export const {
	buttonlike,
	sityNameTubNow,
	input,
	form,
	detailsCurrentCity,
	description,
	crossDeleteSity,
	forecastMonth,
	locationName,
	temperatureNow,
	deteilsTemperature,
	detailsFeelsLike,
	detailsWeather,
	detailsSunrise,
	detailsSunset,
} = domElements;