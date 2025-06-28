import { useContext } from "react";
import {
  Droplets,
  Eye,
  Gauge,
  Wind,
  Sunrise,
  Sunset,
  Thermometer,
  ThermometerSun,
  Navigation,
  Zap,
} from "lucide-react";
import "./WeatherDetails.scss";
import { weatherdata } from "../../Context/WeatherContext";

const WeatherDetails = () => {
  const { data } = useContext(weatherdata);
  const { current, daily } = data;
  console.log(daily);

  return (
    <div className="weather-details">
      <div className="weather-details__grid">
        {/* Humidity */}
        <div className="detail-card">
          <div className="detail-card__icon detail-card__icon--humidity">
            <Droplets size={20} />
          </div>
          <div className="detail-card__content">
            <span className="detail-card__label">Humidity</span>
            <span className="detail-card__value">{current.humidity}%</span>
          </div>
        </div>

        {/* Visibility */}
        <div className="detail-card">
          <div className="detail-card__icon detail-card__icon--visibility">
            <Eye size={20} />
          </div>
          <div className="detail-card__content">
            <span className="detail-card__label">Visibility</span>
            <span className="detail-card__value">
              {current.visible * 0.0001} km
            </span>
          </div>
        </div>

        {/* Pressure */}
        <div className="detail-card">
          <div className="detail-card__icon detail-card__icon--pressure">
            <Gauge size={20} />
          </div>
          <div className="detail-card__content">
            <span className="detail-card__label">Pressure</span>
            <span className="detail-card__value">{current.pressure} hPa</span>
          </div>
        </div>

        {/* Wind Speed */}
        <div className="detail-card">
          <div className="detail-card__icon detail-card__icon--wind">
            <Wind size={20} />
          </div>
          <div className="detail-card__content">
            <span className="detail-card__label">Wind Speed</span>
            <span className="detail-card__value">{current.windSpeed} km/h</span>
          </div>
        </div>

        {/* Wind Direction */}
        <div className="detail-card">
          <div className="detail-card__icon detail-card__icon--direction">
            <Navigation size={20} />
          </div>
          <div className="detail-card__content">
            <span className="detail-card__label">Wind Direction</span>
            <span className="detail-card__value">{current.deg}°</span>
          </div>
        </div>

        {/* Wind Gust */}
        <div className="detail-card">
          <div className="detail-card__icon detail-card__icon--gust">
            <Zap size={20} />
          </div>
          <div className="detail-card__content">
            <span className="detail-card__label">Wind Gust</span>
            <span className="detail-card__value">{current.gust} km/h</span>
          </div>
        </div>

        {/* Sunrise */}
        <div className="detail-card">
          <div className="detail-card__icon detail-card__icon--sunrise">
            <Sunrise size={20} />
          </div>
          <div className="detail-card__content">
            <span className="detail-card__label">Sunrise</span>
            <span className="detail-card__value">
              {new Date(current.sunrise * 1000).toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </span>
          </div>
        </div>

        {/* Sunset */}
        <div className="detail-card">
          <div className="detail-card__icon detail-card__icon--sunset">
            <Sunset size={20} />
          </div>
          <div className="detail-card__content">
            <span className="detail-card__label">Sunset</span>
            <span className="detail-card__value">
              {new Date(current.sunset * 1000).toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </span>
          </div>
        </div>

        {/* Max Temperature */}
        <div className="detail-card">
          <div className="detail-card__icon detail-card__icon--max-temp">
            <ThermometerSun size={20} />
          </div>
          <div className="detail-card__content">
            <span className="detail-card__label">Max Temp</span>
            <span className="detail-card__value">
              {Math.floor(current.max)}°C
            </span>
          </div>
        </div>

        {/* Min Temperature */}
        <div className="detail-card">
          <div className="detail-card__icon detail-card__icon--min-temp">
            <Thermometer size={20} />
          </div>
          <div className="detail-card__content">
            <span className="detail-card__label">Min Temp</span>
            <span className="detail-card__value">
              {Math.floor(current.min)}°C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
