import React from "react";
import ReactDOM from "react-dom";

const BingoDefaults = require('../constants/defaults.js')
const RRelationships = require('../constants/rrelationships.js')


let bingoCard = React.createClass({

  squareClicked(idx) {
    console.log(idx);
  },

  render: function() {
    const bingoSquares = [
      [],[],[],[],[],
      [],[],[],[],[],
      [],[],[],[],[],
      [],[],[],[],[],
      [],[],[],[],[],
    ];

    return (
      <div className="bingo">
        <div className="title">BINGO!</div>
        <div className="bingocard">
          { RRelationships.map(function (square, idx){
            return <p
              key={"square-" + idx}
              className="bingocard-square"
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
