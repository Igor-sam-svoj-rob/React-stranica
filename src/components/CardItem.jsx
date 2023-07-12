import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ src, text, path, label }) => {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={path}>
          <figure className="cards__item__pic-wrap" data-category={label}>
            <img src={src} alt="Slika putovanja" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h2 className="cards__item__text">{text}</h2>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
