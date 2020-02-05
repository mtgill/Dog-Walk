import axios from 'axios';

import weatherConfig from '../Helpers/apiKeys.json';

// https://cors-anywhere.herokuapp.com/https://openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=${weatherConfig.weatherKey.apiKey}

const getForecast = zipCode => new Promise((resolve, reject) => {
  axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&APPID=${weatherConfig.weatherKey.apiKey}`)
  .then((resp) => {
    const results = resp.data;
    const weather = [];
    Object.keys(results).forEach((id) => {
      weather.push(results[id]);
    });
    resolve(weather);
  })
  .catch(err => reject(err));
});

export default { getForecast };