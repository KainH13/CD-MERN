import React from "react";

const Input = (props) => {

  if (isNaN(props.input)) {
    return (
      <h1>The word is: {props.input}</h1>
    )
  }
  else {
    return (
      <h1>The number is: {props.input}</h1>
    )
  }
}

export default Input;