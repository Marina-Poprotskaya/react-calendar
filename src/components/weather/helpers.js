const createTemplateObjectWithWeather = (data) => {
    const weatherData = data.data[0];
    const dataAboutWeather = {
        description: weatherData.weather.description,
        temperature: weatherData.temp,
        humidity: weatherData.rh,
        windDirection: weatherData.wind_cdir_full,
        windSpeed: weatherData.wind_spd
    };
    return dataAboutWeather;
  }

  
  export { createTemplateObjectWithWeather };