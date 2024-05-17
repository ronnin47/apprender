import React, { useState, useEffect } from "react";

export const Item = ({ id, itemValues, handleItemChange }) => {
  const handleChange = (field, value) => {
    const newValues = { ...itemValues, [field]: value };
    handleItemChange(id, newValues);
  };

  return (
    <div className="container-fluid items">
      <input
        className="inputInventario"
        type="text"
        value={itemValues.nombre}
        onChange={(e) => handleChange('nombre', e.target.value)}
        placeholder="Nombre"
      />
      <input
        className="inputInventario"
        type="number"
        value={itemValues.cantidad}
        onChange={(e) => handleChange('cantidad', e.target.value)}
        placeholder="Cantidad"
      />
      <input
        className="inputInventario"
        type="text"
        value={itemValues.descripcion}
        onChange={(e) => handleChange('descripcion', e.target.value)}
        placeholder="Descripción"
      />
    </div>
  );
};

export const Inventario = ({ inventarioN, setInventarioN }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      inventarioN.map((item, index) => ({
        id: index,
        values: {
          nombre: item.nombre || "",
          cantidad: item.cantidad || "",
          descripcion: item.descripcion || "",
        },
      }))
    );
  }, [inventarioN]);

  const handleItemChange = (id, newValues) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, values: newValues } : item
    );

    // Verificar si todos los campos están vacíos y eliminar el elemento si es así
    const isEmpty = Object.values(newValues).every((value) => value === "");
    const finalItems = isEmpty
      ? updatedItems.filter((item) => item.id !== id)
      : updatedItems;

    setItems(finalItems);

    // Actualizar el inventario general con los nuevos valores
    const newInventario = finalItems.map((item) => item.values);
    setInventarioN(newInventario);
  };

  const btnAgregarItem = () => {
    setItems([
      ...items,
      { id: items.length, values: { nombre: "", cantidad: "", descripcion: "" } },
    ]);
    setInventarioN([
      ...inventarioN,
      { nombre: "", cantidad: "", descripcion: "" },
    ]);
  };

  return (
    <div className="gradComp">
      <p style={{ color: "aliceblue", fontSize: "30px", fontFamily: "inpact", margin: "10px" }}>INVENTARIO</p>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          itemValues={item.values}
          handleItemChange={handleItemChange}
        />
      ))}
      <button className="btn btn-primary" style={{ margin: "10px" }} onClick={btnAgregarItem}>
        +item
      </button>
    </div>
  );
};
