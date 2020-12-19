/*
BIG PICTURE

- LOAD NAMES ARRAY TO DROP DOWN
-- use DATA PROMISE, as names array loads, the rest of the fields are loading - is this what data promise means?

- WHATEVER YOU SELECT IN DROP DOWN MENU, MATCH NUMBER IN METADATA ARRAY TO GET VALUES FOR GRAPHS
-- use FUNCTION method

- GAUGE IS OPTIONAL
*/

// **********************
// 1: USE D3 TO FETCH AND READ THE JSON FILE
// **********************

// Fetch the JSON data and console log it
d3.json(samples.json).then((data) => {

  console.log(data);

  var optionsNames = Object.keys(data);

  console.log(optionsNames);

  var names = data.names;
  var samples = data.samples;

  let metaDataSelected = {};

  let selectedName = {};

  for (let i = 0; i < samples.length; i++) {
    if (selectedName === samples[i].id) {
      metaDataSelected = samples[i];
    }
};

// Does this go inside?
console.log("Names array selection");
console.log(metaDataSelected);


// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);


// **********************
// 2. 
// **********************

// **********************
// 3.
// **********************

// **********************
// 4.
// **********************

// **********************
// 
// **********************

// **********************
// 
// **********************

// **********************
// 
// **********************

// **********************
// 
// **********************

// **********************
// 
// **********************


// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
d3.json("samples.json").then((incomingData) => {
  function filterMovieRatings(movie) {
    return movie.imdbRating > 8.9;
  }

  // Use filter() to pass the function as its argument
  var filteredMovies = incomingData.filter(filterMovieRatings);

  //  Check to make sure your are filtering your movies.
  console.log(filteredMovies);

  // Use the map method with the arrow function to return all the filtered movie titles.
  var titles = filteredMovies.map(movies =>  movies.title);

  // Use the map method with the arrow function to return all the filtered movie metascores.
  var ratings = filteredMovies.map(movies => movies.metascore);

  // Check your filtered metascores.
  console.log(ratings);

  // Create your trace.
  var trace = {
    x: titles,
    y: ratings,
    type: "bar"
  };

  // Create the data array for our plot
  var data = [trace];

  // Define the plot layout
  var layout = {
    title: "The highest critically acclaimed movies.",
    xaxis: { title: "Title" },
    yaxis: { title: "Metascore (Critic) Rating"}
  };

  // Plot the chart to a div tag with id "bar-plot"
  Plotly.newPlot("bar-plot", data, layout);
});


/*

NEED TO CHANGE OPTIONS TO SEE WHICH WORKS FOR THE GRAPHS

GET DATA

samples.samples.id
samples.samples.otu_ids
samples.samples.sample_values
samples.samples.otu_labels

"samples":[{
    "id": "940", 
    "otu_ids": [1167, 2859, 2, 2264, 41, 1189, 357, 342], 
    "sample_values": [163, 126, 2, 2], 
    "otu_labels": ["Bac

UNPACK

var dates = unpack(data.dataset.data, 0);

is this what you use to unpack the names array of samples.json?


CREATE TRACE
*/