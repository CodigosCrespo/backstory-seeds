import React, { Component } from 'react';
import SeedsMenu from './SeedsMenu';

class BulletinBoard extends Component {
  constructor() {
    super();
    this.state = {
      commenting: false,
      editing: false,
      currentKey: '',
      currentBackgroundPlaceholder: '',
      currentNamePlaceholder: '',
      currentPersonalityPlaceholder: '',
    }
    this.populateBoard = this.populateBoard.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  populateBoard() {
    let { seedsObj } = this.props;
    let content;
    if (!this.state.editing) {
      content = (
        <div className="seed-list">
          {Object.keys(seedsObj).map((key) =>
            <div key={key} value={key}>
              <h3>Character Seed:</h3>
              <p>Name: {seedsObj[key].name}</p>
              <p>Personality type: {seedsObj[key].personality}</p>
              <p>Background: {seedsObj[key].background}</p>
              <p>
                <button onClick={ () => this.handleEdit(key) }>
                  Edit
                </button>
                <button onClick={ () => this.handleDelete(key) }>
                  Delete
                </button>
                <button onClick={() => this.handleComment(key) }>
                  Comment
                </button>
              </p>
            </div>
            )
          }
        </div>
      )
    } else {
        content = (
          <div className="seed-list">
            {Object.keys(seedsObj).map((key) =>
              <div key={key} value={key}>
                <h3>Edit Seed:</h3>
                <p>Name: {seedsObj[key].name}</p>
                <p>Personality type: {seedsObj[key].personality}</p>
                <p>Background: {seedsObj[key].background}</p>
                <p>
                  <button onClick={() => this.handleSave(key) }>
                    Save
                  </button>
                </p>
              </div>
              )
            }
          </div>
        )
      }

   return content;
  }

  handleDelete(key) {
    this.props.onDeleteSeed(key);
  }

  handleEdit(key) {
    console.log('editing:');
    console.log(key);
    console.log(this.props.seedsObj[key]);
    this.setState({ editing: true, });
    this.setState({ currentKey: key });
    this.setState({ currentBackgroundPlaceholder: this.props.seedsObj[key].background });
    this.setState({ currentNamePlaceholder: this.props.seedsObj[key].name });
    this.setState({ currentPersonalityPlaceholder: this.props.seedsObj[key].personality });
    // replace p tags with input fields for the specific key.. somehow.. r.i.p.

    // send all the below
    // this.props.onEditSeed(key, name, personality, background);
  }

  handleSave(key) {
    console.log('saving:');
    console.log(key);
    this.setState({ editing: false, });
    this.setState({ currentKey: '', });
    this.setState({ currentBackgroundPlaceholder: '', });
    this.setState({ currentNamePlaceholder: '', });
    this.setState({ currentPersonalityPlaceholder: '', });
    // take the key and setState somewhere
    // send all the below
    // this.props.onEditSeed(key, name, personality, background);
  }

  handleComment(key) {
    console.log('commenting on:');
    console.log(key);
    // add a post within the key's data with a comment history trail
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
