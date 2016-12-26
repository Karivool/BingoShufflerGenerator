import React from "react";
import ReactDOM from "react-dom";

const BingoDefaults = require('../constants/defaults.js')
const RRelationships = require('../constants/rrelationships.js')


let bingoCard = React.createClass({
  render: function() {
    return (
      <div className="bingocard">
        <p className="bingocard-row">[][][][][]</p>
        <p className="bingocard-row">[][][][][]</p>
        <p className="bingocard-row">[][][][][]</p>
        <p className="bingocard-row">[][][][][]</p>
        <p className="bingocard-row">[][][][][]</p>        
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(bingoCard),
  document.querySelector("#container")
);
