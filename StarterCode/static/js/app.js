/*
BIG PICTURE

- LOAD NAMES ARRAY TO DROP DOWN
-- use DATA PROMISE, as names array loads, the rest of the fields are loading - is this what data promise means?

- WHATEVER YOU SELECT IN DROP DOWN MENU, MATCH NUMBER IN METADATA ARRAY TO GET VALUES FOR GRAPHS
-- use FUNCTION method

- GAUGE IS OPTIONAL
*/

// **********************
// USE D3 TO FETCH AND READ THE JSON FILE
// **********************

// Fetch the JSON data and console log it
d3.json("samples.json").then(function(data) {
  
  console.log(data);

});

const dataPromise = d3.json("samples.json");
  
console.log("Data Promise: ", dataPromise)

  function unpack(rows, index) {
  
    return rows.map(function(row) {

      return row[index];

  });
}


// **********************
// INITIALIZE PAGE 
// **********************

function init() {

  var selector = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
  
      var sampleIDNames = data.names;
  
      console.log("IDs ", sampleIDNames);
  
      sampleIDNames.forEach((sample) => {
  
        selector.append("option").text(sample).property("value");
      })
  
      buildPlot(sampleIDNames[0]);
  })
}
init();

// **********************
// HORIZONTAL BAR GRAPH
// **********************

// Change bar graph when a selection is made and update its values
d3.selectAll("#selDataset").on("change", updateBarGraph);

// This function is called when a dropdown menu item is selected
function updateBarGraph() {

  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");

  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

// Sort the data array using the greekSearchResults value
  data.sort(function(a, b) {
    return parseFloat(b.sample_values) - parseFloat(a.sample_values);
  });

  // Slice the first 10 objects for plotting
  data = data.slice(0, 10);

  // Reverse the array due to Plotly's defaults
  data = data.reverse();

  // Trace1 for the SAMPLE VALUES Data
  var trace1 = {
    x: data.map(row => row.sample_values),
    y: data.map(row => row.otu_ids),
    text: data.map(row => row.otu_labels),
    type: "bar",
    orientation: "h"
  };

  // data
  var chartData = [trace1];

  // Apply the group bar mode to the layout
  var layout = {
    title: "OTU LABELS",
    xaxis: { title: "SAMPLE VALUES" },
    yaxis: { title: "OTU IDs" },
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };

  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", chartData, layout);
};

// **********************
// BUBBLES
// **********************

// **********************
// OPTIONAL: GAUGE
// **********************


