import React from "react";

const QRCodeDetails = ({ qrValue, onClose }) => {
  // Use the qrCodeValue to fetch the details or perform any desired action

  return (
    <div className="qr-code-details">
      <h3>QR Code Details</h3>
      <p>{qrValue}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default QRCodeDetails;
