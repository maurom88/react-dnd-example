import React, { useState, useCallback } from "react";
import update from "immutability-helper";

import { mockDraggableCards } from "./mockData";
import Card from "./Card";

export default function Section({ title }) {
  const [cards, setCards] = useState(mockDraggableCards);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [cards]
  );

  return (
    <div className="App-section">
      <h2 className="App-cards-title">{title}</h2>
      <div className="App-cards-list">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            content={card.content}
            index={index}
            moveCard={moveCard}
          />
        ))}
      </div>
    </div>
  );
}
