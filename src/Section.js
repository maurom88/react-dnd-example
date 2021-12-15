import React from "react";
import { useDrop } from "react-dnd";

import Card from "./Card";

export default function Section({ title, cards }) {
  const [{}, drop] = useDrop(() => ({
    accept: "card",
  }));

  return (
    <div className="App-section">
      <h2 className="App-cards-title">{title}</h2>
      <div ref={drop} className="App-cards-list">
        {cards.map((card) => (
          <Card id={card.id} name={card.name} content={card.content} />
        ))}
      </div>
    </div>
  );
}
