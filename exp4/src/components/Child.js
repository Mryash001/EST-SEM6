import React from "react";

function Child({ text }) {
  console.log("Child rendered");

  return <p>{text}</p>;
}

export default React.memo(Child);