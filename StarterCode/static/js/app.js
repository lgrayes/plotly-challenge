// Use D3 fetch to read the JSON file

function readJSON(data){
  console.log(data);
}

d3.json("samples.json").then(readJSON);

const dataPromise = d3.json(samples.json);
console.log("Data Promise:", dataPromise);

// Sort the data by Greek search results
var sortedBySampleValues = data.sort((a, b) => b.sample_values - a.sample_values);

// Slice the first 10 objects for plotting
slicedData = sortedBySampleValues.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
reversedData = slicedData.reverse();

// Trace1 for the json/samples/id/otu_ids
var trace1 = {
  x: reversedData.map(object => object.sample_values),
  y: reversedData.map(object => object.otu_ids),
  text: reversedData.map(object => object.otu_labels),
  name: "OTU",
  type: "bar",
  orientation: "h"
};

// data
var data = [trace1];

// Apply the group bar mode to the layout
var layout = {
  title: "OTUs search results",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
  });
  