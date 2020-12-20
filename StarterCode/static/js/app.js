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
// WHEN SELECTION IS MADE AT THE DROPDOWN
// **********************

function optionChanged(newSample) {

     buildPlot(newSample);
  };

// **********************
// HORIZONTAL BAR GRAPH
// **********************

function buildPlot(sample) {

  d3.json("samples.json").then((data) => {
  
      var samples = data.samples 
      var filteredData = samples.filter(sampleID => sampleID.id === sample)[0]
  
      var sample_values = filteredData.sample_values;
      var otu_ids = filteredData.otu_ids;
      var otu_labels = filteredData.otu_labels;
  
      console.log(sample_values);
      console.log(otu_ids);
      console.log(otu_labels);
  
      let trace1 = {
          x: sample_values,
          y: otu_ids,
          text: otu_labels,
          type: 'bar',
          orientation: 'h'
      };

      let layout = {
          xaxis: { title: "Sample Values" },
          yaxis: { title: "OTU IDs" }
      };
      
      Plotly.NewPlot("bar",trace1, layout);
  }) 
}

// **********************
// BUBBLES
// **********************

// **********************
// OPTIONAL: GAUGE
// **********************


