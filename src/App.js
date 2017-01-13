import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import Resources from './components/Resources';

import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Match exactly pattern="/" component={Home} />
          <Match exactly pattern="/resources" component={Resources}  />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
