check.addEventListener("click", () => {
    const key = "2da37cfe7fd2a430436c5638b214e1d6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${key}`;
    
    // Show a loading spinner or disable the button
    check.disabled = true;
    check.innerText = "Loading...";
  
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("City not found");
        return response.json();
      })
      .then(data => {
        weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${data.main.temp}°<b>C</b>`;
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${data.weather[0].main}')`;
  
        const item = data.weather[0];
        weatherDescription.innerText = item.description;
  
        // if (item.id < 250) tempIcon.src = `tempicons/storm.svg`;
        // else if (item.id < 350) tempIcon.src = `tempicons/drizzle.svg`;
        // else if (item.id < 550) tempIcon.src = `tempicons/snow.svg`;
        // else if (item.id < 650) tempIcon.src = `tempicons/rain.svg`;
        // else if (item.id < 800) tempIcon.src = `tempicons/atmosphere.svg`;
        // else if (item.id === 800) tempIcon.src = `tempicons/sun.svg`;
        // else if (item.id > 800) tempIcon.src = `tempicons/clouds.svg`;
  
        feelsLike.innerText = `Feels Like ${data.main.feels_like}°C`;
        humidity.innerText = `Humidity ${data.main.humidity}%`;
        latitude.innerText = `Latitude ${data.coord.lat}`;
        longitude.innerText = `Longitude ${data.coord.lon}`;
      })
      .catch(error => {
        console.error(error);
        alert("Error: Unable to fetch data. Please check the city and country values.");
      })
      .finally(() => {
        check.disabled = false;
        check.innerText = "Check Weather";
        country.value = "";
        city.value = "";
      });
  });
  