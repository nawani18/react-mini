import { useContext } from "react";
import { weatherdata } from "../../Context/WeatherContext";
import "./HourForecast.scss";

const HourForecast = () => {
  const { data } = useContext(weatherdata);
  const { forecast } = data;
  const current = { Hourly: [] };
  const eachDay = forecast.map((val) => {
    const time = new Date(val.dt * 1000).toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    });
    current.Hourly.push({
      time: time,
      temp: Math.floor(val.main.temp),
      icon: val.weather[0].icon,
    });
  });

  return (
    <div className="weather-hour">
      <h2 className="forecast-heading">Hourly Forecast</h2>
      <div className="hourly-forecast">
        {current.Hourly.slice(0, 40).map((item, index) => (
          <div className="hour-block" key={index}>
            <div className="hour">{item.time}</div>
            <img
              className="hour-icon"
              src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt=""
            />
            <div className="hour-temp">{Math.round(item.temp)}°</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourForecast;
