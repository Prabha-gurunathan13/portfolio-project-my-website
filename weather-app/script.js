async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '70d2684bbcb21f5ae64dd52e9825d3e4'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
  
      if (data.cod === '404') {
        document.getElementById('weather-result').innerHTML = `<p>City not found</p>`;
        return;
      }
  
      document.getElementById('weather-result').innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ ${data.main.temp} °C</p>
        <p>${data.weather[0].main} - ${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      `;
    } catch (err) {
      document.getElementById('weather-result').innerHTML = `<p>Error fetching data</p>`;
    }
  }