// src/api/fetchCombinedWeather.js
import axios from "axios";

const API_KEY = "56ae57bca9b19f7c168805d439d75e48";

export const fetchWeatherData = async (city) => {
  try {
    // 1️⃣ Current Weather API
    const currentRes = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      }
    );

    // 2️⃣ Forecast API
    const forecastRes = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      }
    );

    //fetch lat and lan
    const coord = await axios.get(
      "http://api.openweathermap.org/geo/1.0/direct",
      {
        params: {
          q: city,
          limit: 1,
          appid: API_KEY,
        },
      }
    );
    const location = coord.data[0];

    // 3️⃣ Combine and return
    return {
      city: currentRes.data.name,
      country: currentRes.data.sys.country,
      lat: location?.lat,
      lon: location?.lon,
      state: location?.state,
      current: {
        temp: currentRes.data.main.temp,
        feelsLike: currentRes.data.main.feels_like,
        humidity: currentRes.data.main.humidity,
        pressure: currentRes.data.main.pressure,
        windSpeed: currentRes.data.wind.speed,
        condition: currentRes.data.weather[0].description,
        icon: currentRes.data.weather[0].icon,
      },
      forecast: forecastRes.data.list, // Array of 3-hourly data
    };
  } catch (error) {
    console.error(
      "❌ Combined Weather API Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};
