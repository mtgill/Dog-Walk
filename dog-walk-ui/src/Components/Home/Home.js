import React from 'react';
import Walk from '../Walk/Walk';
import DogOwner from '../DogOwner/DogOwner';

const Home = () => {

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