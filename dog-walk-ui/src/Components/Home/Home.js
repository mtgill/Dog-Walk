import React, {useState, useEffect } from 'react';
import walkDataRequest from '../../DataRequests/walkDataRequest';

const ShowAllWalks = () => {

const [allWalks, setAllWalks] = useState([]);


useEffect(() => {

walkDataRequest.getAllWalks()
  .then((resp) => {
   const walks = resp;
   setAllWalks(walks);
   console.log('all walks', walks);
  })



}, []);

const showAllWalks = () => {
  allWalks.forEach((walk) => {
    return <ul>
    <li>{walk.userId}</li>
        <li>{walk.dateOfWalk}</li>
        <li>{walk.outcome}</li>
        </ul>
  })
}

return (
  <>
  <div className="allWalks">
    {/* {showAllWalks} */}
    {allWalks.map(walk => {
     const {userId, dateOfWalk, outcome} = walk;
      return <ul>
      <li>{userId}</li>
          <li>{dateOfWalk}</li>
          <li>{outcome}</li>
      </ul>
    })}
  </div>
  </>
)

};

export default ShowAllWalks;