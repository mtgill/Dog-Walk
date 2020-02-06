import React, {useState} from 'react';
import { Input, Button } from 'reactstrap';
import Walk from '../Walk/Walk';
import DogOwner from '../DogOwner/DogOwner';
import Weather from '../Weather/Weather';



const Home = () => {
  const [userZipCode, setUserZipCode] = useState(0);
  const [userWeather, setUserWeather] = useState([]);

  const getWeatherInfo = (weather) => {
    setUserWeather(weather);
    console.log('zip', userZipCode);
    console.log('weather', userWeather);
  }

  const getUserZip = () => {
    return userZipCode;
  }

  const test = (stuff) => {
    console.log(stuff);
  }


  return (
    <div className="Home">

        <Input onChange={event => setUserZipCode(event.target.value)}/>
        <Button color="success" onClick={test}>success</Button>
    <Walk />
    <DogOwner />
    <Weather test={test} getWeatherInfo={getWeatherInfo} zip={userZipCode}/>
    </div>
  )

}

export default Home;