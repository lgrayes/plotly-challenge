// Use D3 fetch to read the JSON file

d3.json("samples.json", function(error, data) {

  console.log(samples);
    
  if (error) {
      return console.warn(error);
  }

  d3.select("body")
          .selectAll("well")
          .data(data)
          .enter()
          .append("p")
          .text(function(d) {
              return d.samples.otu_ids + ", " + d.samples.sample_values;
          });
  });

function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

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