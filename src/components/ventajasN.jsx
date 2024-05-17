import React, { useState } from "react";

export const ItemVentaja = ({ itemVentaja, handleVentaja }) => {
  const handleChange = (e) => {
    handleVentaja(e.target.value);
  };

  return (
    <div className="container-fluid">
      <input
        type="text"
        className="inputVentajas"
        value={itemVentaja}
        onChange={handleChange}
      />
    </div>
  );
};

export const VentajasN = ({ ventajasN, setVentajasN }) => {
  const btnAgregarVentaja = () => {
    setVentajasN([...ventajasN, ""]); 
  };

  const handleVentaja = (index, value) => {
    const newVentajas = [...ventajasN];
    if (value === "") {
      newVentajas.splice(index, 1);
    } else {
      newVentajas[index] = value;
    }
    setVentajasN(newVentajas);
  };

  return (
    <div className="gradComp">
      <p style={{ color: "aliceblue", fontSize: "30px", fontFamily: "inpact", margin: "10px" }}>VENTAJAS Y DESVENTAJAS</p>
      <div>
        {ventajasN.map((itemVentaja, index) => (
          <ItemVentaja
            key={index}
            itemVentaja={itemVentaja}
            handleVentaja={(value) => handleVentaja(index, value)}
          />
        ))}
      </div>
      <button className="btn btn-primary" style={{ margin: "10px" }} onClick={btnAgregarVentaja}>
        +ventaja
      </button>
    </div>
  );
};