console.log('This is the index page console log !!!');
var city = "Charlestown";
var token = "18c144487b0ef177e793605169137e86";
var api  = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+token;

var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var cityName = document.querySelector('.cityName');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

var url = 'https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid='+token

console.log(url);

button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid='+token)
.then(response => response.json())
.then(data => {
	var nameValue = data['name'];
	var tempValue = data['main']['temp'];
	var descValue = data['weather'][0]['description'];

	cityName.innerHTML = nameValue;
	temp.innerHTML = tempValue;
	desc.innerHTML = descValue;
	document.title = cityName.innerHTML;
})

.catch(err => alert('Wrong City Name'))

})
