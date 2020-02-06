import React, {useState} from 'react';
import { Input, Button } from 'reactstrap';
import Walk from '../Walk/Walk';
import DogOwner from '../DogOwner/DogOwner';
import Weather from '../Weather/Weather';



const Home = () => {
  const [userZipCode, setUserZipCode] = useState(0);

  const getWeatherInfo = (weather) => {
    return weather;
  }

  const getZip = () => {
    console.log('zip', userZipCode);
  }

  return (
    <div className="Home">

        <Input onChange={event => setUserZipCode(event.target.value)}/>
        <Button color="success" onClick={getZip}>success</Button>

    <Weather getWeatherInfo={getWeatherInfo}/>
    <Walk />
    <DogOwner />
    </div>
  )

}

export default Home;