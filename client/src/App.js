import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import AddField from './AddField';
import ShowField from './ShowField';

class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={ShowField} />
          <Route path="/AddField" exact component={AddField} />
        </div>
      </Router>
    );
  }
}

export default App;
