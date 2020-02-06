import React, {useState, useEffect } from 'react';

import weatherData from '../../DataRequests/weatherDataRequest';

const Weather = () => {

const [weather, setWeather] = useState([]);
const [decision, setDecision] = useState([]);

useEffect(() => {
  console.log('weather mounted');
  let mounted = true;
    async function getForecast(zipCode) {
      const data = await weatherData.getForecast(zipCode)
      .catch(err => {
        console.log(err);
      });
      if (mounted && data){
        console.log('data', data);
        setWeather(data);
      }
  }
    getForecast(37216);
  return () => { mounted = false; };
}, []);

return (
  <>
    {console.log('weather', weather)}
  </>
)

};

export default Weather;