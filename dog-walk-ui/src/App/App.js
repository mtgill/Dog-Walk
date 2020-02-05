import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// Import firebase requirements
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../DataRequests/firebaseConnection';

import Walk from '../Components/Home/Home';
import MyNavBar from '../Components/NavBar/NavBar';
import Auth from '../Components/Auth/Auth';
import Home from '../Components/Home/Home';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props}/>)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />)
  );
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props}/>)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />)
  );
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavBar authed={authed} />
            <div className="container-fluid">
            <div className="row">
                <Switch>
                  <PublicRoute path="/auth" component={Auth} authed={authed} />
                  <PrivateRoute path="/home" component={Home} authed={authed} />
                  <Redirect from="*" to="/auth" />
                </Switch>
              </div>
              </div>
          </React.Fragment>
        </BrowserRouter>
      </div>      
    )
  }
};

export default App;
