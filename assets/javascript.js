// Sample
// https://api.themoviedb.org/3/movie/550?api_key=67ef4e4a60b4acfa5458eea4807a1de1

// Get actor id (travolta 8891), then movies by id?
// https://api.themoviedb.org/3/search/person?api_key=67ef4e4a60b4acfa5458eea4807a1de1&language=en-US&query=john%20travolta&page=1&include_adult=false

// const actorId = 8891;

// Get movie credits.
// https://api.themoviedb.org/3/person/8891/movie_credits?api_key=67ef4e4a60b4acfa5458eea4807a1de1&language=en-US&query=john%20travolta&page=1&include_adult=false
// Variables accessible to all functions ///////////////////////////////////////////////////
const apiKey = '67ef4e4a60b4acfa5458eea4807a1de1';
const tmdbUrl = 'https://api.themoviedb.org/3/';
const searchPersonById = 'search/person';
const authentication = '?api_key=' + apiKey;
const query = '&query=' + 'John Travolta';
const noAdult = '&include_adult=false';

let fullUrl = '';
fullUrl += tmdbUrl;
fullUrl += searchPersonById;
fullUrl += authentication;
fullUrl += query;
fullUrl += noAdult;

console.log('fullUrl:', fullUrl)

const myResults = fetch(fullUrl);
myResults.then(function (response) {
    return response.json();
})
.then(data => {
    console.log('data:', data.results[0].id)
})
.catch(function (err) {
    console.log("Something went wrong!", err);
});






