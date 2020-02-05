import React from 'react';
import Walk from '../Walk/Walk';
import DogOwner from '../DogOwner/DogOwner';

import weatherData from '../../DataRequests/weatherDataRequest';

const Home = () => {

  const getForecast = (zipCode) => {
    weatherData.getForecast(zipCode)
    .then((resp) => {
      const weather = resp;
      console.log('lat lng', weather);
      })
  }

  getForecast(37216);
  return (
    <>
    <h2>Walks</h2>
      <Walk />
      <h2>Dog Owners</h2>
      <DogOwner />
    </>
  )

}

export default Home;