document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('weatherForm');
    if (form) {
      form.addEventListener('submit', showWeatherDetails);
    }
  });
  
  function showWeatherDetails(event) {
    event.preventDefault();
  
    const lonInput = document.getElementById('lon').value.trim();
    const latInput = document.getElementById('lat').value.trim();
    const weatherInfo = document.getElementById('weatherInfo');
  
    // Convert inputs to numbers
    const lon = parseFloat(lonInput);
    const lat = parseFloat(latInput);
  
    // Validate latitude and longitude range
    if (isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) {
      weatherInfo.innerHTML = `<p style="color:red;">Please enter valid latitude (-90 to 90) and longitude (-180 to 180).</p>`;
      return;
    }
  
    const apiKey = 'YOUR API'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        weatherInfo.innerHTML = `
          <h2>Weather in ${data.name || 'Unknown Location'}</h2>
          <p><strong>Temperature:</strong> ${data.main.temp} &#8451;</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        weatherInfo.innerHTML = `<p style="color:red;">Failed to fetch weather: ${error.message}. Please try again.</p>`;
      });
  }
  