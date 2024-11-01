import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import * as XLSX from "xlsx";
import print from "../assets/print.png";
import "../styles/report.css";

function Report() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "registrations"));
      setUsers(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(users);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");
    XLSX.writeFile(wb, "Registered_Users.xlsx");
  };

  return (
    <div className="container">
      <div className="content">
        <p>To print register data</p>
        <img
          onClick={exportToExcel}
          src={print}
          alt="print"
          className="print"
        />
      </div>
    </div>
  );
}

export default Report;
