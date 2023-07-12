import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <div className="cards">
      <h2>Pogledajte TOP destinacije</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../../src/assets/img-9.jpg"
              text="Istraži vodopade"
              path="/servisi"
              label="Avantura"
            />
            <CardItem
              src="../../src/assets/img-2.jpg"
              text="Istraži plaže"
              path="/servisi"
              label="Ljetovanje"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="../../src/assets/img-3.jpg"
              text="Odaberi krstarenje"
              path="/servisi"
              label="Avantura"
            />
            <CardItem
              src="../../src/assets/img-4.jpg"
              text="Istraži dvorce"
              path="/servisi"
              label="Turistički izleti"
            />
            <CardItem
              src="../../src/assets/img-8.jpg"
              text="Istraži ukuse"
              path="/servisi"
              label="Gastronomija"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
