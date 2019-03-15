import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount = () => {
    this.getParks();
  }

  getParks = () => {
    axios.get('/parks')
    .then((response) => {
      console.log('back from server');
      this.props.dispatch({ type: 'SET_PARKS', payload: response.data})
    }).catch(error => {
      console.log('error in parks client get request', error);
    });
  }
  
 

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Parks!</h1>
        </header>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);

