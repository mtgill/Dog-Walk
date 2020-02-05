import axios from 'axios';

import zipCodeConfig from '../Helpers/apiKeys.json';

const baseUrl = 'https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest';


const getLatLng = zipCode => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/${zipCodeConfig.zipCodeKeys.apiKey}/info.json/${zipCode}/degrees`)
  .then((resp) => {
    const results = resp.data;
    const latLng = [];
    Object.keys(results).forEach((id) => {
      latLng.push(results[id]);
    });
    resolve(latLng);
  })
  .catch(err => reject(err));
});

export default { getLatLng };