import "../styles/form.css";
import grid from "../assets/grid.png";
import logo from "../assets/logofinal.png";
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const RegistrationForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [instance, setInstansi] = useState("");
  const [customInstansi, setCustomInstansi] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "registrations"), {
        fullname,
        email,
        instance: instance === "other" ? customInstansi : instance,
      });
      window.location.href = "/congratulations";
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="form-container">
      <div className="card1">

      <div className="logo-placeholder">
        <img src={logo} alt="Logo" className="logo00" />
      </div>
      <div className="register-text">Register Here</div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder=" "
            required
          />
          <label htmlFor="fullname">Fullname</label>
        </div>
        <div className="input-container">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            required
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="input-container">
          <select
            value={instance}
            onChange={(e) => setInstansi(e.target.value)}
            id="instance"
            name="instance"
            required
          >
            <option value="" disabled>
              Instance
            </option>
            <option value="EXP inc">EXP inc</option>
            <option value="UMM">UMM</option>
            <option value="other">Other</option>
          </select>
        </div>
        {instance === "other" && (
          <div className="input-container">
            <input
              type="text"
              id="customInstansi"
              name="customInstansi"
              value={customInstansi}
              onChange={(e) => setCustomInstansi(e.target.value)}
              required
            />
            <label htmlFor="customInstansi">Input Instance</label>
          </div>
        )}
        <button type="submit">Continue</button>
      </form>
      <center>
        <img src={grid} alt="Grid" className="grid" />
      </center>
      </div>

    </div>
  );
};

export default RegistrationForm;
