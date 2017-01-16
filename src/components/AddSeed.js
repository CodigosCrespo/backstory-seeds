import React, { Component } from 'react';
import { Link } from 'react-router';
import SeedsMenu from './SeedsMenu';


class AddSeed extends Component {
  constructor() {
    super();
    this.state = {
      nameValue: '',
      backgroundValue: '',
      personalityValue: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePersonalityChange = this.handlePersonalityChange.bind(this);
    this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ nameValue: event.target.value })
  }

  handlePersonalityChange(event) {
    this.setState({ personalityValue: event.target.value })
  }

  handleBackgroundChange(event) {
    this.setState({ backgroundValue: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    let { nameValue, personalityValue, backgroundValue } = this.state;
    this.props.onAddSeed(nameValue, personalityValue, backgroundValue);
    this.setState({
      nameValue: '',
      personalityValue: '',
      backgroundValue: '',
    })
  }

  render() {

    return(
       <div>
        <form onSubmit={this.handleSubmit}>
          <div className="add-seed">
              <h2>New character form:</h2>
              <SeedsMenu />
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                value={this.state.nameValue}
                onChange={this.handleNameChange} />
              <p>Personality: {this.state.personalityValue}</p>
                <select
                  value={this.state.personalityValue}
                  onChange={this.handlePersonalityChange}
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
              <p>Background:</p>
              <textarea
                placeholder="Background history of your developing character.."
                rows="10"
                cols="50"
                value={this.state.backgroundValue}
                onChange={this.handleBackgroundChange}
                >
              </textarea>
              <p>
                <input type="submit" value="Plant Seed" />
              </p>
          </div>
        </form>
      </div>
    )
  }
}

export default AddSeed;
