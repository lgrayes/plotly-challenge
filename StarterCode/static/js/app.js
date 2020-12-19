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
  d3.json("samples.json").then((importedData) => {

  console.log(importedData);

  var data = importedData;

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
  console.log(selectedName);
  console.log(metaDataSelected);

// **********************
// HORIZONTAL BAR GRAPH
// **********************

// Sort the data array using the greekSearchResults value
  data.sort(function(a, b) {
    return parseFloat(b.greekSearchResults) - parseFloat(a.greekSearchResults);
  });

  // Slice the first 10 objects for plotting
  data = data.slice(0, 10);

  // Reverse the array due to Plotly's defaults
  data = data.reverse();

  // Trace1 for the Greek Data
  var trace1 = {
    x: data.map(row => row.greekSearchResults),
    y: data.map(row => row.greekName),
    text: data.map(row => row.greekName),
    name: "Greek",
    type: "bar",
    orientation: "h"
  };

  // data
  var chartData = [trace1];

  // Apply the group bar mode to the layout
  var layout = {
    title: "Greek gods search results",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };

  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", chartData, layout);
});
