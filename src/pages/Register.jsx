import "../styles/form.css";
import grid from "../assets/grid.png";
import logo from "../assets/logo.png";
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const RegistrationForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [instansi, setInstansi] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "registrations"), {
        fullname,
        email,
        instansi,
      });
      window.location.href = "/congratulations";
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="form-container">
      <div className="logo-placeholder">
        <img src={logo} alt="Logo" className="logo" />
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
            value={instansi}
            onChange={(e) => setInstansi(e.target.value)}
            id="instansi"
            name="instansi"
            required
          >
            <option value="" disabled selected>
              Choose
            </option>
            <option value="instansi1">Instansi 1</option>
            <option value="instansi2">Instansi 2</option>
            <option value="instansi3">Instansi 3</option>
          </select>
        </div>
        <button type="submit">Continue</button>
      </form>
      <center>
        <img src={grid} alt="Grid" className="grid" />
      </center>
    </div>
  );
};

export default RegistrationForm;