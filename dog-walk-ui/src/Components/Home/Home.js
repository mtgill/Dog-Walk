import React from 'react';
import Walk from '../Walk/Walk';
import DogOwner from '../DogOwner/DogOwner';

import zipCodeData from '../../DataRequests/zipCodeDataRequest';

const Home = () => {

  const showLatLng = (zipCode) => {
    zipCodeData.getLatLng(zipCode)
    .then((resp) => {
      const latLng = resp;
      console.log('lat lng', latLng);
      })
  }

  showLatLng(37216);
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