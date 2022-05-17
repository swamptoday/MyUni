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
  
  window.onload = function() {
    weatherBalloon('Lviv');
  }

  async function loadWeather(e)
  {
    var key = 'a692c4bc95275382624df8e34d89d462';
    cityName = 'Kyiv';
    const server ='https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key;
    const response = await fetch(server, {
      method: 'GET',
    });
    const responseResult = await response.json();

    if (response.ok) 
    {
      getWeather(responseResult);
    }
    else
    {
      console.log(responseResult.message);
    }
  }

function getWeather(data)
{
  const location = data.name;
  const temp = Math.round(data.main.temp);
}

var country = document.getElementById('country');

var city = document.getElementById('city');

function callback(data)
{
    country.innerText = data.country_name;
    city.innerText = data.city;
}

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://geolocation-db.com/json/geoip.php?jsonp=callback';
var h = document.getElementsByTagName('script')[0];
h.parentNode.insertBefore(script, h);
