// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(ufo => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
        var td = row.append("td").text(value);
    });
});

d3.selectAll(".filter").on("change", updateFilters);
filter.on("click", updateFilters);

var filter = d3.select("#filter-btn");

submit.on("click", function() {
    var row = d3.select("tbody").selectAll("td");
    row.remove();

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    console.log(inputElement);

    var inputValue = inputElement.property("value");
    console.log(inputValue);

    let filteredData = tableData;

    var filtered = filteredData.filter(tbody => tbody.datetime === inputValue);
    console.log(filtered);

    createTable(filtered);
});

createTable(tableData);
