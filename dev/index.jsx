import React from "react";
import ReactDOM from "react-dom";

let bingoCard = React.createClass({
  render: function() {
    return (
      <div>
        <p>[][][][][]</p>
        <p>[][][][][]</p>
        <p>[][][][][]</p>
        <p>[][][][][]</p>
        <p>[][][][][]</p>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <p>[][][][][]</p>
    <p>[][][][][]</p>
    <p>[][][][][]</p>
    <p>[][][][][]</p>
    <p>[][][][][]</p>
    Pizza Lady!
  </div>,
  document.querySelector("#container")
);
