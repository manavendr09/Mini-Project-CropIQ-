const apiKey = '2da37cfe7fd2a430436c5638b214e1d6'; // Replace with your OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('fetch-weather').addEventListener('click', async () => {
    const city = document.getElementById('city-input').value.trim();
    if (city === '') {
        alert('Please enter a city name');
        return;
    }
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);

    try {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `<p>${error.message}</p>`;
    }
    
    const data = await response.json();
    displayWeather(data);
});

function displayWeather(data) {
    document.getElementById('weather-info').innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
    `;
}
