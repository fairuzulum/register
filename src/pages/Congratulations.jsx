import React from "react";
import "../styles/success.css";
import grid from "../assets/grid.png";

function Congratulations() {
  return (
    <div className="container10">
      <div className="success-text">
        <h1>Congratulations</h1>
        <p>You have successfully registered.</p>
      </div>

      <div>
        <center>
          <img src={grid} alt="Grid" className="grid88" />
        </center>
      </div>
    </div>
  );
}

export default Congratulations;
