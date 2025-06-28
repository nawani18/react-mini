import { useContext } from "react";
import "./DayForecast.scss";
import { weatherdata } from "../../Context/WeatherContext";

const DayForecast = () => {
  const { data } = useContext(weatherdata);
  const { daily } = data;
  const mainData = daily.data;
  console.log(mainData);
  const dailyData = [];
  const eachDay = mainData.map((val) => {
    const day = new Date(val.datetime).toLocaleDateString("en-US", {
      weekday: "long",
    });
    dailyData.push({
      day: day,
      icon: val.weather.icon,
      condition: val.weather.description,
      max: val.app_max_temp,
      min: val.app_min_temp,
    });
  });

  return (
    <div className="card-left-2">
      <div className="daily-forecast-container">
        <h2 className="forecast-heading">7-Day Forecast</h2>
        <div className="daily-forecast">
          {dailyData.map((day, index) => (
            <div className="daily-card" key={index}>
              <span className="day">{day.day}</span>
              <img
                className="weather-icon"
                src={`https://www.weatherbit.io/static/img/icons/${day.icon}.png`}
                alt={day.name}
              />
              <span className="temps">
                {Math.round(day.max)}° / {Math.round(day.min)}°
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayForecast;
