// from data.js
var tableData = data;
var tbody = d3.select('tbody')

// CInitial Load of Table

data.forEach(function(sighting){

	var row = tbody.append('tr');

		Object.entries(sighting).forEach(function([key,value]) {
			var cell= tbody.append('td');
			cell.text(value);

		});
	});



 // Filter User Action

 var inputElement =  d3.select('#datetime');
 var filterButton = d3.select('#filter-btn');

 inputElement.on('submit', function(event){
 	event.preventDefault();
  });


 filterButton.on('click', function(){

  var inputValue = inputElement.property('value');

  var filteredSightings = tableData.filter( sighting => sighting.datetime === inputValue)
  
  d3.selectAll('td').remove();

filteredSightings.forEach(function(sighting){

	var row = tbody.append('tr');

		Object.entries(sighting).forEach(function([key,value]) {
			var cell= tbody.append('td');
			cell.text(value);

		});
	});

 });


