import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import Section from "./Section";

import "./App.css";

export default function App() {

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Section title="Draggable cards" />
      </div>
    </DndProvider>
  );
}
