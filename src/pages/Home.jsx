import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import grid from "../assets/grid.png";
import logo from "../assets/logofinal2.png"; // Import logo kamu
import "../styles/home.css";

function Home() {
  return (
    <div className="container-qr">
      <div className="logo-qr-container">
        <div className="logo-container">
          <img src={logo} alt="Logo 1" className="logo005" />
        </div>
        <div className="qrcode">
          <QRCodeCanvas
            value="http://localhost:3000/register"
            bgColor="transparent"
            size={250} 
          />
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>
        </div>
      </div>
      <center>
        <img src={grid} alt="Grid" className="grid" />
      </center>
    </div>
  );
}

export default Home;
