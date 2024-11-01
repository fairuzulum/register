import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import grid from "../assets/grid.png";
import logo from "../assets/logofinal2.png";
import "../styles/home.css";

function Home() {
  const isMobile = window.innerWidth <= 768;
  const qrCodeSize = isMobile ? 200 : 350; // Smaller size on mobile
  return (
    <div className="container-qr">
      <div className="card">
        <div className="logo-qr-container">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo005" />
          </div>
          <div className="qrcode">
            <QRCodeCanvas
              value="https://register-theta-orpin.vercel.app/register"
              bgColor="transparent"
              size={qrCodeSize}
            />
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>
          </div>
        </div>
      <center>
        <img src={grid} alt="Grid" className="grid01" />
      </center>
      </div>
    </div>
  );
}

export default Home;
