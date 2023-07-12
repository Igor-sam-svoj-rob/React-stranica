import React from "react";
import Button from "../components/Button";
import { FaGlobe } from "react-icons/fa";
import "./Pocetna.css";
import Cards from "../components/Cards";

const Pocetna = () => {
  return (
    <>
      <div className="hero-container">
        <video src="../../src/assets/video-1.mp4" autoPlay loop muted></video>

        <h1>Avantura počinje</h1>
        <p>Nemojte čekati, bukirajte danas...</p>
        <div className="hero-btns">
          <Button buttonStyle="btn-outline" buttonSize="btn-large">
            REZERVIRAJTE SAD!
          </Button>
          <Button buttonSize="btn-large">
            POGLEDAJ PONUDU <FaGlobe />
          </Button>
        </div>
      </div>
      <Cards />
    </>
  );
};

export default Pocetna;
