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
d3.json("samples.json").then(function(data) 
    {
      console.log(data);
    }
);

const dataPromise = d3.json("samples.json");
  
console.log("Data Promise: ", dataPromise)

  function unpack(rows, index) {
  
    return rows.map(function(row) {

      return row[index];

  });
}


// **********************
// LOAD NAMES ARRAY TO DROPDOWN
// **********************

function init() {

  var dropdown = d3.select("#selDataset");

    d3.json("samples.json").then(function(data) 
    {
      data.names.forEach(function(name) 
        {
          dropdown.append("option").text(name).property("value");
        }
      );
  
    //   var sampleIDNames = data.names;
  
    //   console.log("IDs ", sampleIDNames);
  
    //   sampleIDNames.forEach((sample) => {
  
    //     selector.append("option").text(sample).property("value");
    //   })
  
    //   buildBarPlot(sampleIDNames[0]);
    })
}
init();

// **********************
// WHEN SELECTION IS MADE AT THE DROPDOWN
// **********************

function optionChanged(id) {

  getPlot(id);
  getInfo(id);
};

// **********************
// HORIZONTAL BAR GRAPH
// **********************

function getPlot(id) 
{
  d3.json("samples.json").then(function(data)
  {
    var samples = data.samples.filter(function(samplesdata)
    {
      return samplesdata.id === id;
    }
    )[0]

    console.log(samples);
    
    // slice
    var sampleValues = samples.sample_values.slice(0, 10).reverse();

    var idValues = (samples.otu_ids.slice(0,10)).reverse();

    var idOtu = idValues.map(function(datavalue)
      {
        return "OTU" + datavalue
      }
    )

    console.log(`OTU IDS: ${idOtu}`)

    // labels
    var labels = samples.otu_labels.slice(0,10);

    console.log(`Sample Values: ${sampleValues}`)
    console.log(`ID Values: ${idValues}`)

    // trace
    var trace1 = 
    {
      x: sampleValues,
      y: idOtu,
      type: "bar",
      orientation: "h",
    };

    // layout
    var data1 = [trace1];

    var layout1 = 
    {
      title: "Top 10 OTU",
      yaxis:
      {
        tickmode: "linear",
      }
    };

    Plotly.newPlot("bar", data1, layout1);
  }
  )
}

// **********************
// BUBBLES - trace2
// **********************

// **********************
// OPTIONAL: GAUGE
// **********************


