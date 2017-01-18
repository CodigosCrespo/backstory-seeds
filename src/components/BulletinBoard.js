import React, { Component } from 'react';
import SeedsMenu from './SeedsMenu';

class BulletinBoard extends Component {
  constructor() {
    super();
    this.state = {
      commenting: false,
      editing: false,
      currentKey: '',
      currentBackground: '',
      currentName: '',
      currentPersonality: '',
    }
    this.populateBoard = this.populateBoard.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleNameEdit = this.handleNameEdit.bind(this);
    this.handleBackgroundEdit = this.handleBackgroundEdit.bind(this);
    this.handlePersonalityEdit = this.handlePersonalityEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleNameEdit(event) {
    this.setState({ currentName: event.target.value })
  }

  handleBackgroundEdit(event) {
    this.setState({ currentBackground: event.target.value })
  }

  handlePersonalityEdit(event) {
    this.setState({ currentPersonality: event.target.value })
  }


  handleDelete(key) {
    this.props.onDeleteSeed(key);
  }

  handleEdit(key) {
    this.setState({
      editing: true,
      currentKey: key,
      currentBackground: this.props.seedsObj[key].background,
      currentName: this.props.seedsObj[key].name,
      currentPersonality: this.props.seedsObj[key].personality,
    });
  }

  handleSave(event) {
    event.preventDefault();
    let { currentKey, currentName, currentPersonality, currentBackground } = this.state;
    this.props.onEditSeed(currentKey, currentName, currentPersonality, currentBackground);
    this.setState({
      editing: false,
      currentKey: '',
      currentBackground: '',
      currentName: '',
      currentPersonality: '',
    });
  }

  handleCancel(event) {
    event.preventDefault();
    this.setState({
      editing: false,
      currentKey: '',
      currentBackground: '',
      currentName: '',
      currentPersonality: '',
    });
  }

/*  handleComment(key) {
    console.log('commenting on:');
    console.log(key);
    // add a post within the key's data with a comment history trail
  }*/

  populateBoard() {
    let { seedsObj } = this.props;
    let { editing, currentKey } = this.state;
    let content;
    if (editing === true) {
      content = (
        <form onSubmit={this.handleSave}>
        <div>
          <div key={currentKey} value={currentKey} className="edit-seed">
            <h3>Edit Seed:</h3>
            <label>Name:</label>
            <input
              type="text"
              defaultValue={this.state.currentName}
              onChange={this.handleNameEdit}
              >
            </input>
            <label>Personality type:</label>
            <select
              type="text"
              defaultValue={seedsObj[currentKey].personality}
              onChange={this.handlePersonalityEdit}
              >
              <option>Choose type</option>
              <option value="INTJ">Analyst: Architect</option>
              <option value="INTP">Analyst: Logician</option>
              <option value="ENTJ">Analyst: Commander</option>
              <option value="ENTP">Analyst: Debater</option>
              <option value="INFJ">Diplomats: Advocate</option>
              <option value="INFP">Diplomats: Mediator</option>
              <option value="ENFJ">Diplomats: Protagonist</option>
              <option value="ENFP">Diplomats: Campaigner</option>
              <option value="ISTJ">Sentinals: Logistician</option>
              <option value="ISFJ">Sentinals: Defender</option>
              <option value="ESTJ">Sentinals: Executive</option>
              <option value="ESFJ">Sentinals: Consul</option>
              <option value="ISTP">Explorers: Virtuoso</option>
              <option value="ISFP">Explorers: Adventurer</option>
              <option value="ESTP">Explorers: Entrepreneur</option>
              <option value="ESFP">Explorers: Entertainer</option>
            </select>
            <label>Background:</label>
            <textarea
            rows="10"
            cols="50"
            defaultValue={seedsObj[currentKey].background}
            onChange={this.handleBackgroundEdit}></textarea>
            <p>
              <input type="submit" value="Save" />
              <button onClick={(event) => this.handleCancel(event) }>
                Cancel
              </button>
            </p>
          </div>
        </div>
        </form>
      )
    } else {
        content = (
          <div className="seed-list">
          {Object.keys(seedsObj).reverse().map((key) =>
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
                {/*<button onClick={() => this.handleComment(key) }>
                                  Comment
                                </button>*/}
              </p>
            </div>
            )
          }
        </div>
        )
      }
   return content;
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
