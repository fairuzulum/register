import React from 'react';
import { QRCodeCanvas } from 'qrcode.react'; 

function Home() {
  return (
    <div>
      <h1>Scan QR Code to Register</h1>
      <QRCodeCanvas value="http://localhost:3000/register" bgColor="transparent" />
    </div>
  );
}

export default Home;
