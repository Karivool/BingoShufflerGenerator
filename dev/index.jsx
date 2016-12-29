import React from "react";
import ReactDOM from "react-dom";

const Default = require('../constants/defaults.js')
const RRelationships = require('../constants/rrelationships.js')


let bingoCard = React.createClass({
  getInitialState () {
    let url = window.location.href.split('?')[1];
    const options = (url === "rrelationships") ? RRelationships : Default;

    return {
      bingoSquares: [],
      squareCount: 0,
      bingoValues: this.setMultipleFalse(false),
      bingoOptions: this.shuffle(options)
    };
  },

  shuffle(arr) {
    for (let idx = arr.length; idx; idx--) {
      let rand = Math.floor(Math.random() * idx);
      [arr[idx - 1], arr[rand]] = [arr[rand], arr[idx - 1]];
    }
    return arr;
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
    if (valChange[idx]) {
      this.setState({
        squareCount: this.state.squareCount += 1
      });
    } else {
      this.setState({
        squareCount: this.state.squareCount -= 1
      });
    }
    console.log(this.state.squareCount);

    this.setState({
      bingoValues: valChange
    });
  },

  render: function() {
    const bingoSquares = [[]];
    const bingoValues = this.state.bingoValues;
    const bingoOptions = this.state.bingoOptions;

    return (
      <div className="bingo">
        <div className="title">BINGO!</div>
        <div className="bingocard">
          { bingoOptions.map(function (square, idx){
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
