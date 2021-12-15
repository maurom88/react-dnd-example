import React, { useState } from "react";
import update from "immutability-helper";

import { mockDraggableCards } from "./mockData";
import Card from "./Card";

export default function Section({ title }) {
  const [cards, setCards] = useState(mockDraggableCards);

  return (
    <div className="App-section">
      <h2 className="App-cards-title">{title}</h2>
      <div className="App-cards-list">
        {cards.map((card) => (
          <Card id={card.id} name={card.name} content={card.content} />
        ))}
      </div>
    </div>
  );
}
