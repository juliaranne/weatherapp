/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data for London
- Print the temperature in console.
- Possible next steps
- 1: Display the temperature in the UI rather than the console
- 2: Display an icon or image depending on the current weather
- 3: add a form prompting user for the city.
- 4: add a toggle for switching between farenheit and celcius

*/
$(document).ready(function(){
var app = {};

function rowColor(temp){
	var $table = $('.theweather tr.data');
	if(temp > 20){
		$table.addClass('red');
	} else{
		$table.addClass('blue')
	}
}

function addCountry(name){
	var item = '<tr class="data"><td>' +name+ '</td></tr>';
	$('.theweather').append(item);
}

function addTemp(temp){
	var $table = $('.theweather tr.data');
	var item = '<td>' +temp+ '</td>';
	$table.append(item);
	rowColor(temp);
}
function addDesc(desc){
	var $table = $('.theweather tr.data');
	var item = '<td>' +desc+ '</td>';
	$table.append(item);

}

app.init = function(){
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/group?id=524901&units=metric&APPID=e57c38a9af025a4539fb499e1446ef56',
		success: function(response){
			var allCountries = response.list;
			for(var i=0; i < allCountries.length; i++){
				var country = allCountries[i];
				addCountry(country.name);
				addTemp(country.main.temp);
				addDesc(country.weather[0].description);
	  		}

    	}
	});
};




	var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
	var apiKey = 'e57c38a9af025a4539fb499e1446ef56';
	app.init();


});

// ,703448,2643743,3117735
//$.ajax({
    //url: weatherUrl + city + '&appid=' + apiKey,
    // &APPID=e57c38a9af025a4539fb499e1446ef56
    // ,703448,2643743
    // 703448,2643743,3117735
    // $.each(country, function(key, value){
				// 	console.log( key + ": " + value );
				// });