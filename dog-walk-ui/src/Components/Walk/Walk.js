import React, {useState, useEffect } from 'react';
import walkDataRequest from '../../DataRequests/walkDataRequest';

const ShowAllWalks = () => {

  const [allWalks, setAllWalks] = useState([]);


  useEffect(() => {

  walkDataRequest.getAllWalks()
    .then((resp) => {
    const walks = resp;
    setAllWalks(walks);
    })
  }, []);

  return (
    <>
    <div className="Walk">
      {/* {allWalks.map(walk => {
      const {userId, dateOfWalk, outcome} = walk;
        return <ul>
        <li>{userId}</li>
            <li>{dateOfWalk}</li>
            <li>{outcome}</li>
        </ul>
      })} */}
    </div>
    </>
  )

};

export default ShowAllWalks;