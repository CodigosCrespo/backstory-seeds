import React, { Component } from 'react';
import { Link } from 'react-router';
import SeedsMenu from './SeedsMenu';

class BulletinBoard extends Component {
  constructor() {
    super();
    this.state = {
      commenting: false,
      editing: false,
    }
    this.populateBoard = this.populateBoard.bind(this);
  }
  populateBoard() {
    let { seedsObj } = this.props;
    return (
      <ul>
        {Object.keys(seedsObj).map((key) =>
          <li key={key} value={key}>
            <h3>Character Seed:</h3>
            <p>Name: {seedsObj[key].name}</p>
            <p>Personality type: {seedsObj[key].personality}</p>
            <p>Background: {seedsObj[key].background}</p>
            <p>
              <button>Comment</button>
              <button>Edit</button>
              <button>Delete</button>
            </p>
          </li>
          )
        }
      </ul>
    )
  }

  render() {

    return(
       <div>
        <div className="bulletin-board">
        <h2>Bulletin Board</h2>
        <SeedsMenu />
        {this.populateBoard()}
        </div>
      </div>
    )
  }
}

export default BulletinBoard;
