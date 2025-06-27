import Temperture from "../../Components/Temperture/Temperture";
import HourForecast from "../../Components/HourForecast/HourForecast";
import "./WeatherCard.scss";
import DayForecast from "../../Components/DayForecast/DayForecast";
const WeatherCard = () => {
  return (
    <div className="weather-card">
      <div className="weather-card-left">
        <Temperture />
        <HourForecast />
        <DayForecast />
      </div>
      <div className="weather-card-right"></div>
    </div>
  );
};

export default WeatherCard;
