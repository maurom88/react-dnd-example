import React, { useState } from "react";

import Card from "./Card";

import { mockDraggableCards } from "./mockData";
import "./App.css";

export default function App() {
  const [draggableCards, setDraggableCards] = useState(mockDraggableCards);
  const [droppableCards, setDroppableCards] = useState([]);

  return (
    <div className="App">
      <div>
        <h2>Draggable cards</h2>
        <div>
          {draggableCards.map((card) => (
            <Card id={card.id} name={card.name} content={card.content} />
          ))}
        </div>
      </div>
      <div>
        <h2>Droppable area</h2>
        <div></div>
      </div>
    </div>
  );
}
