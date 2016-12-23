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
    <HelloWorld greetTarget="Pizza Lady"/>
    <HelloWorld greetTarget="Bungh0"/>
    <HelloWorld greetTarget="Br00klyn Lady"/>
    <HelloWorld greetTarget="Gr0ce"/>
    <HelloWorld greetTarget="Swede"/>
    <HelloWorld greetTarget="Jesterwalky"/>
  </div>,
  document.querySelector("#container")
);
