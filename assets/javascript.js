
// Global Variables
const apiKey = '67ef4e4a60b4acfa5458eea4807a1de1';
const tmdbUrl = 'https://api.themoviedb.org/3/';

const actorName = 'John Travolta';
const urlActorIdByActorName = makeUrlActorIdByActorName(actorName);

let actorId = '';
fetch(urlActorIdByActorName)
    .then(function (response) {
        return response.json();
    })
    .then(data => {
        actorId = data.results[0].id;
        console.log('actorId for ' + actorName, actorId);

        const urlMoviesByActorId = makeUrlMoviesByActorId(actorId);
        fetch(urlMoviesByActorId)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                const dataMovies = data.cast;
                // console.log(dataMovies)
                let movieObjects = [];
                for (let i = 0; i < dataMovies.length; i++) {
                    const dataMovie = dataMovies[i];
                    const movieObject = {};
                    movieObject.id = dataMovie.id;
                    movieObject.name = dataMovie.title;
                    movieObjects.push(movieObject);
                }
                // console.log('movie objects:', movieObjects)
            })
            .catch(function (err) {
                console.log("Something went wrong calling this url:", urlMoviesByActorId, err);
            });
    })
    .catch(function (err) {
        console.log("Something went wrong calling this url:", urlActorIdByActorName, err);
    });

// https://stackoverflow.com/questions/1885557/simplest-code-for-array-intersection-in-javascript


// Get actor #1 id by name.
// Get movies by actor #1 id.
// Get actor #2 id by name.
// Get movies by actor #2 id.
// Combine lists.
const doFetch = (url) => {
    return fetch(url)
        .then(response => {
            return response.json();
        })
        .catch(function (err) {
            console.log("Something went wrong calling this url:", url, err);
        });
};

let actorId_1 = '';
const getActorIdByActorName = actorName => {
    const urlActorIdByActorName = makeUrlActorIdByActorName(actorName);
    doFetch(urlActorIdByActorName)
    .then( (data) => {
        actorId_1 = data.results[0].id;
        console.log('actorId_1', actorId_1);
        getMoviesByActorId(actorId_1);
    });
}
getActorIdByActorName('john travolta');

const getMoviesByActorId = actorId => {
    const urlMoviesByActorId = makeUrlMoviesByActorId(actorId);
    doFetch(urlMoviesByActorId)
    .then( (data) => {
        console.log('kurtData:', data)
        const movieObjects = processMovieList(data);
        console.log('movieObjects', movieObjects)
    });
}

const processMovieList = data => {
    const dataMovies = data.cast;
    let movieObjects = [];
    for (let i = 0; i < dataMovies.length; i++) {
        const dataMovie = dataMovies[i];
        const movieObject = {};
        movieObject.id = dataMovie.id;
        movieObject.name = dataMovie.title;
        movieObjects.push(movieObject);
    }
    return movieObjects;
};

// Utility Functions. //////////////////////////////////
function makeUrlActorIdByActorName(actorName) {
    // Example: https://api.themoviedb.org/3/search/person?api_key=67ef4e4a60b4acfa5458eea4807a1de1&query=john%20travolta&include_adult=false
    let url = tmdbUrl;
    url += 'search/person';
    url += '?api_key=' + apiKey;
    url += '&query=' + actorName;
    url += '&include_adult=false';
    return url;
}

function makeUrlMoviesByActorId(actorId) {
    // Example: https://api.themoviedb.org/3/person/8891/movie_credits?api_key=67ef4e4a60b4acfa5458eea4807a1de1
    let url = tmdbUrl;
    url += 'person/' + actorId;
    url += '/movie_credits';
    url += '?api_key=' + apiKey;
    return url;
}

const hardcodedData = [
    {
        "id": 621,
        "name": "Grease"
    },
    {
        "id": 680,
        "name": "Pulp Fiction"
    },
    {
        "id": 754,
        "name": "Face/Off"
    },
    {
        "id": 1252,
        "name": "Lonely Hearts"
    },
    {
        "id": 2275,
        "name": "The General's Daughter"
    },
    {
        "id": 2928,
        "name": "Michael"
    },
    {
        "id": 10782,
        "name": "Basic"
    },
    {
        "id": 10783,
        "name": "Lucky Numbers"
    }
]

