import { toast } from "react-toastify";
import { fetchWeatherData } from "../API/Weatherdata";
import Header from "../Components/Header/Header";
import Search from "../Components/SearchBar/Search";
import WeatherCard from "../Components/WeatherCard/WeatherCard";
import "./Weather.scss";
import { useState } from "react";

const Weather = () => {
  const [weatherData, setweatherData] = useState(null);

  const getData = async (cityName) => {
    try {
      const data = await fetchWeatherData(cityName);
      toast.success(`Weather data for ${data.city} fetched successfully!`);
      setweatherData(data);
      console.log(cityName);
    } catch {
      console.log("Error fetching weather data");
    }
  };

  return (
    <div className="weather-page">
      <div className="weather__image">
        <img className="image" src="/sunny.webp" alt="" />
      </div>
      <div className="content">
        <Header />
        <Search onSearch={getData} />
        {weatherData ? <WeatherCard props={weatherData} /> : null}
      </div>
    </div>
  );
};

export default Weather;
