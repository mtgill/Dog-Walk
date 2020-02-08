import React, {useState, useEffect} from 'react';
import { Input, Button } from 'reactstrap';
import Walk from '../Walk/Walk';
import DogOwner from '../DogOwner/DogOwner';
import Weather from '../Weather/Weather';

import dogOwnerData from '../../DataRequests/dogOwnerDataRequest';

import firebase from 'firebase/app';
import 'firebase/auth';

import weatherData from '../../DataRequests/weatherDataRequest';

const Home = () => {
  const [userZipCode, setUserZipCode] = useState(0);
  const [userWeather, setUserWeather] = useState([]);
  const [decisionCode, setDecisionCode] = useState([]);

  const yesCodes = [300, 301, 500, 600, 601, 701, 800, 801, 802];

  const register = () => {
      dogOwnerData.getAllDogOwners()
      .then((resp) => {
      const allOwners = resp;
      const currentEmail = firebase.auth().currentUser.email;
      const emails = [];
      allOwners.forEach((owner) => {
        emails.push(owner.email);
        });
        if (!emails.includes(currentEmail)){
          console.log('user does not exist')
          if (!allOwners.includes(firebase.auth().currentUser.email)){
            console.log('user does not exist');
            const newOwner = {
              email: currentEmail
            }
            dogOwnerData.addDogOwner(newOwner);
          } else {
            console.log('user does exist');
          }
        }
        console.log('test', emails);
      // console.log('all owners', allOwners);
        });
  }

  register();

  async function getWeatherInfo(zip) {
    const data = await weatherData.getForecast(zip)
    .catch(err => {
      console.log(err);
    });
    if (data){
      setUserWeather(data);
      setDecisionCode(data[1][0].id);
      walkDecision(data[1][0].id);
      console.error('weather', data);
    }
}
  

  const getUserWeather = () => {
    getWeatherInfo(userZipCode)
  };

  const walkDecision = (weatherCode) => {
    if (yesCodes.includes(weatherCode)){
      console.log('yes', weatherCode);
    }
    else{
      console.log('no', weatherCode);
    }
  }


  return (
    <div className="Home">

        <Input onChange={event => setUserZipCode(event.target.value)}/>
        <Button color="success" onClick={getUserWeather}>success</Button>
    <Walk />
    <DogOwner />
    {/* <Weather test={test} getWeatherInfo={getWeatherInfo} zip={userZipCode}/> */}
    </div>
  )

};

export default Home;