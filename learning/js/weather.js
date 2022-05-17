

const city = document.querySelector('#city');
const country = document.querySelector('#country');
var i = 0;

  $.get("https://ipinfo.io", function(response) {
    i = 1;
    city.innerText = response.city;
    country.innerText = response.country;
    cityfortemp = response.city;
}, "jsonp");

function weatherBalloon( cityName ) {
  var key = 'a692c4bc95275382624df8e34d89d462';
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    document.getElementById("celc").innerHTML = Math.round((data['main']['temp'])-273.15) + "<sup>&#8451</sup>";
  })
  .catch(function() {
    // catch any errors
  });
}

if(i == 1)
{
  window.onload = function() {
    weatherBalloon(cityfortemp);
  }
}
else
{
  window.onload = function() {
    weatherBalloon('Lviv');
    city.innerText = 'Lviv';
    country.innerText = 'UA';
  }
}
