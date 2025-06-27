import { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const weatherdata = createContext(null);

const WeatherContext = (props) => {
  const [data, setdata] = useState(null);
  return (
    <weatherdata.Provider value={{ data, setdata }}>
      {props.children}
    </weatherdata.Provider>
  );
};

export default WeatherContext;
