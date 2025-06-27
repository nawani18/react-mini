import { toast } from "react-toastify";
import Header from "../../Components/Header/Header";
import Search from "../../Components/SearchBar/Search";
import "./Weather.scss";
import { useContext } from "react";
import { weatherdata } from "../../Context/WeatherContext";
import WeatherCard from "../Weather Card/WeatherCard";
import { fetchWeatherData } from "../../API/Weatherdata";

const Weather = () => {
  const { data, setdata } = useContext(weatherdata);

  const getData = async (cityName) => {
    try {
      const data1 = await fetchWeatherData(cityName);
      toast.success(`Weather data for ${data1.city} fetched successfully!`);
      setdata(data1);
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
        {data ? <WeatherCard /> : null}
      </div>
    </div>
  );
};

export default Weather;
