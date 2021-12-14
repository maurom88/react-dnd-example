import React, { useState } from "react";

import Section from "./Section";

import { mockDraggableCards } from "./mockData";
import "./App.css";

export default function App() {
  const [draggableCards, setDraggableCards] = useState(mockDraggableCards);
  const [droppableCards, setDroppableCards] = useState([]);

  return (
    <div className="App">
      <Section title="Draggable cards" cards={draggableCards} />
      <Section title="Droppable cards" cards={droppableCards} />
    </div>
  );
}
