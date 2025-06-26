import React from "react";
import { Search, MapPin, RefreshCw } from "lucide-react";
import "./NoCityFound.scss";

const NoCityFound = ({ noCityFound }) => {
  if (!noCityFound) {
    return null;
  }

  return (
    <div className="no-city-found">
      <div className="no-city-found__container">
        <div className="no-city-found__icon-wrapper">
          <div className="no-city-found__icon-bg">
            <MapPin className="no-city-found__icon" size={48} />
          </div>
          <div className="no-city-found__search-icon">
            <Search size={24} />
          </div>
        </div>

        <div className="no-city-found__content">
          <h2 className="no-city-found__title">City Not Found</h2>
          <p className="no-city-found__message">
            We couldn't find weather information for the requested city
          </p>
          <p className="no-city-found__suggestion">
            Please check the spelling or try searching for a different city
          </p>
        </div>

        <div className="no-city-found__tips">
          <h3 className="no-city-found__tips-title">Search Tips:</h3>
          <ul className="no-city-found__tips-list">
            <li>Use the full city name (e.g., "New York" instead of "NY")</li>
            <li>
              Include country for international cities (e.g., "Paris, France")
            </li>
            <li>Check for typos in your search</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoCityFound;
