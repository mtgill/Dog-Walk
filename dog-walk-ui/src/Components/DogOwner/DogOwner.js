import React, {useState, useEffect } from 'react';
import dogOwnerDataRequest from '../../DataRequests/dogOwnerDataRequest';

const ShowAllDogOwners = () => {

  const [allDogOwners, setAllDogOwners] = useState([]);

  useEffect(() => {
    dogOwnerDataRequest.getAllDogOwners()
    .then((resp) => {
    const dogOwners = resp;
    setAllDogOwners(dogOwners);
    })
  }, []);

  return (
    <>
    <div className="DogOwner">
      {allDogOwners.map(dog => {
      const {id, email} = dog;
        return <ul>
        <li>{id}</li>
            <li>{email}</li>
        </ul>
      })}
    </div>
    </>
  )

};

export default ShowAllDogOwners;