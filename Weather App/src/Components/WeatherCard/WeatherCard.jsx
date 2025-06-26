import "./WeatherCard.scss";

const WeatherCard = (props) => {
  const { city, country, current } = props.props;
  console.log(current);

  const currentDate = new Date();
  const day = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const time = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="weather-card">
      <div className="card-left">
        <div className="card-left-1">
          <div className="card-left-1-right">
            <div className="weather-data">
              <h1 className="temp">
                {Math.floor(current.temp)}
                <span>°C</span>
              </h1>
              <h3 className="weather-type">{current.condition}</h3>
            </div>
            <div className="icon">
              <img
                className="weather-icon"
                src={`https://openweathermap.org/img/wn/${current.icon}@2x.png`}
                alt=""
              />
            </div>
          </div>
          <div className="card-left-1-left">
            <div className="card-left-1-left-part">
              <h1 className="location">
                {city},{country}
              </h1>
              <h2 className="date-time">
                {day},{time}
              </h2>
            </div>
            <div className="card-left-1-left-part">
              <h3 className="real">Real Feel</h3>
              <h1 className="realTemp">
                {Math.floor(current.feelsLike)}
                <span>°C</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="card-left-2"></div>
        <div className="card-left-2"></div>
      </div>
    </div>
  );
};

export default WeatherCard;
