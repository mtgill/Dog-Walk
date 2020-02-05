import axios from 'axios';

const baseUrl = 'https://localhost:44346/api/dogOwner';

const getAllDogOwners = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}`)
  .then((resp) => {
    const results = resp.data;
    const dogOwners = [];
    Object.keys(results).forEach((id) => {
      dogOwners.push(results[id]);
    });
    resolve(dogOwners);
  })
  .catch(err => reject(err));
});

export default { getAllDogOwners };