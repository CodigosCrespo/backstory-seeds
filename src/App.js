import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import Resources from './components/Resources';
import BulletinBoard from './components/BulletinBoard';
import AddSeed from './components/AddSeed';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      seeds: {},
    }
    this.getSeeds = this.getSeeds.bind(this);
    this.addSeed = this.addSeed.bind(this);
    this.deleteSeed = this.deleteSeed.bind(this);
  }

  componentDidMount() {
    this.getSeeds();
  }

  getSeeds() {
    axios({
      url: 'bulletin-board/.json',
      baseURL: 'https://backstory-seeds.firebaseio.com/',
      method: "GET",
    }).then((response) => {
      this.setState({ seeds: response.data })
    }).catch((error) => {
      console.log(error);
    });
  }

  addSeed(name, personality, background) {
    let newSeed = {
       name: name,
       personality: personality,
       background: background
      };
    axios({
      url: 'bulletin-board/.json',
      baseURL: 'https://backstory-seeds.firebaseio.com/',
      method: "POST",
      data: newSeed,
    }).then(() => {
      this.getSeeds();
    }).catch((error) => {
      console.log(error);
    });
  }

  deleteSeed(key) {
    axios({
      url: `bulletin-board/${key}.json`,
      baseURL: 'https://backstory-seeds.firebaseio.com/',
      method: "DELETE",
    }).then(() => {
      this.getSeeds();
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Match exactly pattern="/" component={Home} />
          <Match exactly pattern="/resources" component={Resources}  />
          <Match pattern="/seeds/bulletin-board" component={() =>
            <BulletinBoard
              seedsObj={this.state.seeds}
              onDeleteSeed={this.deleteSeed}
            />
            }
          />
          <Match pattern="/seeds/add-seed" component={() =>
            <AddSeed
              seedsObj={this.state.seeds}
              onAddSeed={this.addSeed}
            />
            }
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
