import axios from 'axios';

const baseUrl = 'https://localhost:44346/api/walk';

const getAllWalks = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}`)
  .then((resp) => {
    const results = resp.data;
    const walks = [];
    Object.keys(results).forEach((id) => {
      walks.push(results[id]);
    });
    resolve(walks);
  })
  .catch(err => reject(err));
});

export default { getAllWalks };