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
        <div></div>
      </div>
      <div>
        <h2>Droppable area</h2>
        <div></div>
      </div>
    </div>
  );
}
