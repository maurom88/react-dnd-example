import React from "react";
import update from 'immutability-helper'

import Card from "./Card";

export default function Section({ title, cards }) {

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
