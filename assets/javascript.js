console.log('hi')

let forecastURL = 'https://api.openweathermap.org/data/2.5/';
const apiQuery = 'forecast?';
const cityName = 'seattle';
const apiKey = 'f1904d406184f3cd6d2b1fa662fe0acf';

forecastURL += apiQuery;
forecastURL += 'q=' + cityName;
forecastURL += '&appid=' + apiKey;

console.log('forecastURL', forecastURL)

fetch(forecastURL)
.then(function (response) {
    console.log('Forecast: ', response);
})
.catch(function (err) {
    console.log("Something went wrong!", err);
});






