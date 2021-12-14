import React, { useState } from "react";

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
            <div key={card.id}>
              <h5>{card.name}</h5>
              <p>{card.content}</p>
            </div>
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
