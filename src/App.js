import React, { useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import Section from "./Section";

import { mockDraggableCards } from "./mockData";
import "./App.css";

export default function App() {
  const [draggableCards, setDraggableCards] = useState(mockDraggableCards);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Section title="Draggable cards" cards={draggableCards} />
      </div>
    </DndProvider>
  );
}
