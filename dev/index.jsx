import React from "react";
import ReactDOM from "react-dom";

let bingoCard = React.createClass({
  render: function() {
    return (
      <div>
        <p>{this}</p>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    Pizza Lady!
  </div>,
  document.querySelector("#container")
);
