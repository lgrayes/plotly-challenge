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
d3.json(samples.json).then(function(data) {

  console.log(data);

  var selection = Object.keys(data);

  console.log(selection);

  var names = data.names;
  var samples = data.samples;

  let options = {};

  let selectedName = {};

  for (let i = 0; i < samples.length; i++) {
    if (options === samples[i].id) {
      selectedName = samples[i];
    }
  }
  function data
  // pick up info here
};

// Does this go inside?

console.log("Names array selection");
console.log(selection);


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