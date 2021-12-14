import React from "react";

const cardStyle = {
    borderStyle: "solid",
    width: "50%",
}

export default function Card({ id, name, content }) {
  return (
    <div style={cardStyle} key={id}>
      <h5>{name}</h5>
      <p>{content}</p>
    </div>
  );
}
