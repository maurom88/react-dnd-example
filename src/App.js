import React, { useState } from "react";

import Card from "./Card";

import { mockDraggableCards } from "./mockData";
import "./App.css";

export default function App() {
  const [draggableCards, setDraggableCards] = useState(mockDraggableCards);
  const [droppableCards, setDroppableCards] = useState([]);

  return (
    <div className="App">
      <div className="App-section">
        <h2 className="App-cards-title">Draggable cards</h2>
        <div className="App-cards-list">
          {draggableCards.map((card) => (
            <Card id={card.id} name={card.name} content={card.content} />
          ))}
        </div>
      </div>
      <div className="App-section">
        <h2 className="App-cards-title">Droppable area</h2>
        <div className="App-cards-list">
        {droppableCards.map((card) => (
            <Card id={card.id} name={card.name} content={card.content} />
          ))}
        </div>
      </div>
    </div>
  );
}
