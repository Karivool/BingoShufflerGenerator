import React from "react";
import ReactDOM from "react-dom";

const BingoDefaults = require('../constants/defaults.js')
const RRelationships = require('../constants/rrelationships.js')


let bingoCard = React.createClass({
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
            return <p className="bingocard-square">{square}</p>
          })}
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(bingoCard),
  document.querySelector("#container")
);
