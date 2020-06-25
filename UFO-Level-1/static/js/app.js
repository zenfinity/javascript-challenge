// from data.js date/time, city, state, country, shape, and comment
var tableData = data;

// Table
//-------------------------------------------------------------
var tbody = d3.select("tbody");

//Read every key-value pair in the data list of dict, and inject 
//into a new row 
data.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function([key, value]) {
      //console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
});

//form-control
//-------------------------------------------------------------
// Select the button
var button = d3.select("#filter-btn");

// Select the form id="datetime"
var form = d3.select("#datetime");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

var trow = tbody.selectAll("tr");

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node 
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    //Clear table     
    trow.remove(); 
    
    //Get the search results and load those rows
    data.forEach(function(tableData) {
        console.log(inputValue);
        if (tableData.datetime == inputValue){
            var row = tbody.append("tr");
            Object.entries(tableData).forEach(function([key, value]) {
            //console.log(key, value);
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
            });
        };
    });
};//end func runEnter()

/*
The Truth is out there...

     ___
 ___/   \___
/   '---'   \
'--_______--'
     / \
    /   \
    /\O/\
    / | \
    // \\

*/