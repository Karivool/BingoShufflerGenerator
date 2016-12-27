import React from "react";
import ReactDOM from "react-dom";

const BingoDefaults = require('../constants/defaults.js')
const RRelationships = require('../constants/rrelationships.js')


let bingoCard = React.createClass({
  render: function() {
    const bingoSquares = [];

    return (
      <div className="bingocard">
        { bingoSquares.map(function (){

        })}
        <p className="bingocard-square"></p>
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(bingoCard),
  document.querySelector("#container")
);
