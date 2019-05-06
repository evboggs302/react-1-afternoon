import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  sepEvenAndOdds(userInput) {
    let bank = userInput.split("");
    let eArr = [];
    let oArr = [];
    for (let i = 0; i < bank.length; i++) {
      if (bank[i] % 2 !== 0) {
        oArr.push(parseInt(bank[i]));
      } else {
        eArr.push(parseInt(bank[i]));
      }
    }
    this.setState({ evenArray: eArr, oddArray: oArr });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={event => this.handleChange(event.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.sepEvenAndOdds(this.state.userInput);
          }}
        >
          Button
        </button>
        <span className="resultsBox">Evens: {this.state.evenArray}</span>
        <span className="resultsBox">Odds: {this.state.oddArray}</span>
      </div>
    );
  }
}
