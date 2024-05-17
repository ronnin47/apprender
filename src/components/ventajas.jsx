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

export const Ventajas = ({ ventajas, setVentajas }) => {
  const btnAgregarVentaja = () => {
    setVentajas([...ventajas, ""]); 
  };

  const handleVentaja = (index, value) => {
    const newVentajas = [...ventajas];
    if (value === "") {
      newVentajas.splice(index, 1);
    } else {
      newVentajas[index] = value;
    }
    setVentajas(newVentajas);
  };

  return (
    <div className="gradComp">
      <p style={{ color: "aliceblue", fontSize: "30px", fontFamily: "inpact", margin: "10px" }}>VENTAJAS Y DESVENTAJAS</p>
      <div>
        {ventajas.map((itemVentaja, index) => (
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
