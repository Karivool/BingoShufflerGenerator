import React from "react";
import ReactDOM from "react-dom";

const BingoDefaults = require('../constants/defaults.js')
const RRelationships = require('../constants/rrelationships.js')


let bingoCard = React.createClass({
  getInitialState () {
    return {
      bingoSquares: [],
      squareCount: 0,
      bingoValues: this.setMultipleFalse(false)
    };
  },

  setMultipleFalse (val) {
    let array = [];
    for (let times = 0; times < 25; times++) {
      array.push(val);
    }
    return array;
  },

  squareClicked(idx) {
    let valChange = this.state.bingoValues;
    valChange[idx] = !valChange[idx];

    this.setState({
      bingoValues: valChange
    });
    console.log(this.state.bingoValues);
  },

  render: function() {
    const bingoSquares = [[]];
    const bingoValues = this.state.bingoValues;

    return (
      <div className="bingo">
        <div className="title">BINGO!</div>
        <div className="bingocard">
          { RRelationships.map(function (square, idx){
            return <p
              key={"square-" + idx}
              className={bingoValues[idx] === true ? "bingocard-selected" : "bingocard-square"}
              onClick={this.squareClicked.bind(this, idx)}
              >{square}
            </p>
          }.bind(this))
        }
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(bingoCard),
  document.querySelector("#container")
);
