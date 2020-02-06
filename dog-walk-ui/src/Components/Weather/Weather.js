import React, {useState, useEffect } from 'react';

import weatherData from '../../DataRequests/weatherDataRequest';

const Weather = (props) => {
const {getWeatherInfo} = props;
const [weather, setWeather] = useState([]);
const [decision, setDecision] = useState([]);

useEffect(() => {
  let mounted = true;
    async function getForecast(zipCode) {
      const data = await weatherData.getForecast(zipCode)
      .catch(err => {
        console.log(err);
      });
      if (mounted && data){
        setWeather(data);
      }
  }
    getForecast(37216);
  return () => { mounted = false; };
}, []);

  getWeatherInfo(weather);

return (
  <>
  </>
)

};

export default Weather;