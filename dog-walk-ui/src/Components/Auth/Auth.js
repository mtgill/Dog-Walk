import React from 'react';

import dogOwnerData from '../../DataRequests/dogOwnerDataRequest';

import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(() => {
      const newUser = firebase.auth().currentUser;
      const newOwner = {
        email: newUser.email
      }
      dogOwnerData.addDogOwner(newOwner);
      });
  };

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-warning" onClick={this.loginClickEvent}>Login with Google</button>
      </div>
    );
  }
}

export default Auth;