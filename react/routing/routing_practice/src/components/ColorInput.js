import React from "react";

const ColorInput = (props) => {

  const {input, color, backgroundColor} = props;

  if (isNaN(props.input)) {
    return (
      <h1 style={{color: color, backgroundColor: backgroundColor}}>The word is: {input}</h1>
    )
  }
  else {
    return (
      <h1 style={{color: color, backgroundColor: backgroundColor}}>The number is: {input}</h1>
    )
  }
}

export default ColorInput;