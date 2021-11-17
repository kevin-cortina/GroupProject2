// const router = require('express').Router();

// router.get('/', async (req, res) => {
//     try {
//       res.render('./partials/resultsCard', {
//         movieData,

//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });


// function createCard(movieData) {
//     let imgUrl = movieData[0];
//     let movieTitle = movieData[1];
//     let movieYear = movieData[2];
//     // let directorName = ;
//     // console.log(movieData)
//     let containerDiv = resultsCol.appendChild(document.createElement(“div”));
//     containerDiv.setAttribute(“class”, “container, left-align”);
//     let hoverDiv = containerDiv.appendChild(document.createElement(“div”));
//     hoverDiv.setAttribute(“class”, “col s12 m6 hoverable”);
//     hoverDiv.setAttribute(“id”, “results-card-holder”);
//     let cardHorizDiv = hoverDiv.appendChild(document.createElement(“div”));
//     cardHorizDiv.setAttribute(“class”, “card-horizontal”);
//     let cardImageDiv = cardHorizDiv.appendChild(document.createElement(“div”));
//     cardImageDiv.setAttribute(“class”, “card-image-holder”);
//     cardImageDiv.setAttribute(“id”, “poster-image”);
//     let posterImg = cardImageDiv.appendChild(document.createElement(“img”));
//     posterImg.setAttribute(“class”, “card-image”);
//     posterImg.setAttribute(“src”, imgUrl);
//     let cardStackedDiv = cardHorizDiv.appendChild(document.createElement(“div”));
//     cardStackedDiv.setAttribute(“class”, “card-stacked”);
//     let cardContentDiv = cardStackedDiv.appendChild(document.createElement(“div”));
//     cardContentDiv.setAttribute(“class”, “card-content”);
//     let movieTitleDiv = cardContentDiv.appendChild(document.createElement(“h4”));
//     movieTitleDiv.setAttribute(“id”, “movies-title”);
//     movieTitleDiv.textContent = movieTitle;
//     let movieYearDiv = cardContentDiv.appendChild(document.createElement(“div”));
//     movieYearDiv.setAttribute(“id”, “year”);
//     movieYearDiv.textContent = “(” + movieYear + “)”;
//     let directorNameDiv = cardContentDiv.appendChild(document.createElement(“div”));
//     directorNameDiv.setAttribute(“id”, “director”);
}