import React from 'react';
import Walk from '../Components/Home/Home';
import NavBar from '../Components/NavBar/NavBar';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <NavBar />
    <h1>Should I Walk My Dog?</h1>
    <Walk />
    </>
  );
};

export default App;
