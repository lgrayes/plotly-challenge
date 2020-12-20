// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("samples.json").then((importedData) => {
  // console.log(importedData);
  var samples = importedData;

  // Sort the data array using the greekSearchResults value
  samples.sort(function(a, b) {
    return parseFloat(b.sample_values) - parseFloat(a.sample_values);
  });

  // Slice the first 10 objects for plotting
  samples = samples.slice(0, 10);

  // Reverse the array due to Plotly's defaults
  samples = samples.reverse();

  // Trace1 for the Greek Data
  var trace1 = {
    x: samples.map(row => row.sample_values),
    y: samples.map(row => row.otu_ids),
    text: samples.map(row => row.otu_labels),
    name: "OTU Labels",
    type: "bar",
    orientation: "h"
  };

  // data
  var chartData = [trace1];

  // Apply the group bar mode to the layout
  var layout = {
    title: "TOP 10 OTU LABELS",
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
