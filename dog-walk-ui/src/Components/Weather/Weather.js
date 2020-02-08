import React, {useState, useEffect } from 'react';

import weatherData from '../../DataRequests/weatherDataRequest';

const Weather = (props) => {
const {getWeatherInfo} = props;
const [weather, setWeather] = useState([]);
const [decision, setDecision] = useState([]);
const [zip, setZip] = useState(props.zip);

useEffect(() => {
  let mounted = true;
    async function getForecast(zipCode) {
      const data = await weatherData.getForecast(zipCode)
      .catch(err => {
        console.log(err);
      });
      if (data){
        setWeather(data);
        getWeatherInfo(data);
      }
  }
    getForecast(zip);
  return () => { mounted = false; };
}, []);

getWeatherInfo(weather);  



return (
  <>
    {console.log('zipcode', zip)}
  </>
)

};

export default Weather;