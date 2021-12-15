import React from "react";
import { useDrag } from "react-dnd";

const cardStyle = {
  borderStyle: "solid",
  minWidth: "20%",
};

export default function Card({ id, name, content }) {
  const [{}, drag] = useDrag(() => ({
    type: "card",
    item: { id },
  }));
  return (
    <div ref={drag} style={cardStyle} key={id}>
      <h5>{name}</h5>
      <p>{content}</p>
    </div>
  );
}
