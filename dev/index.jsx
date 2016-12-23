import React from "react";
import ReactDOM from "react-dom";

let bingoCard = React.createClass({
  render: function() {
    return (
      <p>Hello, {this.props.greetTarget}!</p>
    );
  }
});

ReactDOM.render(
  <div>
    <bingoCard greetTarget="Pizza Lady"/>
    <bingoCard greetTarget="Bungh0"/>
    <bingoCard greetTarget="Br00klyn Lady"/>
    <bingoCard greetTarget="Gr0ce"/>
    <bingoCard greetTarget="Swede"/>
    <bingoCard greetTarget="Jesterwalky"/>
  </div>,
  document.querySelector("#container")
);
