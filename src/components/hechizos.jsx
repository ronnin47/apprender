import React, { useState, useEffect } from "react";

export const Item = ({ id, itemValues, handleItemChange }) => {
  const handleChange = (field, value) => {
    const newValues = { ...itemValues, [field]: value };
    handleItemChange(id, newValues);
  };

  return (
    <div className="container-fluid dominios">
      <div className="gridTecnicas">
        <input
          className="inputDominio"
          type="text"
          value={itemValues.nombre}
          onChange={(e) => handleChange('nombre', e.target.value)}
          placeholder="Nombre"
        />
        <input
          className="inputDominio"
          type="number"
          value={itemValues.nivelKi}
          onChange={(e) => handleChange('nivelKi', e.target.value)}
          placeholder="Nivel arcano"
        />
        <input
          className="inputDominio"
          type="number"
          value={itemValues.costeKi}
          onChange={(e) => handleChange('costeKi', e.target.value)}
          placeholder="Coste de Ki"
        />
        <input
          className="inputDominio"
          type="text"
          value={itemValues.invo}
          onChange={(e) => handleChange('invo', e.target.value)}
          placeholder="Tiempo Invocación"
        />
        <input
          className="inputDominio"
          type="text"
          value={itemValues.ryu}
          onChange={(e) => handleChange('ryu', e.target.value)}
          placeholder="Ryu"
        />
      </div>

      <div>
        <input
          className="inputDominio"
          type="text"
          value={itemValues.descripcion}
          onChange={(e) => handleChange('descripcion', e.target.value)}
          placeholder="Descripción"
        />
        <input
          className="inputDominio"
          type="text"
          value={itemValues.sistema}
          onChange={(e) => handleChange('sistema', e.target.value)}
          placeholder="Sistema"
        />
      </div>
    </div>
  );
};

export const Hechizos = ({ hechizosN, setHechizosN }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(hechizosN.map((hc, index) => ({
      id: index,
      values: {
        ryu: hc.ryu || '',
        nombre: hc.nombre || '',
        nivelKi: hc.nivelKi || '',
        descripcion: hc.descripcion || '',
        sistema: hc.sistema || '',
        costeKi: hc.costeKi || '',
        invo: hc.invo || ''
      }
    })));
  }, [hechizosN]);

  const handleItemChange = (id, newValues) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, values: newValues } : item
      )
    );

    const newHechizos = items.map(item => (item.id === id ? newValues : item.values));
    setHechizosN(newHechizos);
  };

  const btnAgregarItem = () => {
    setItems(prevItems => [
      ...prevItems,
      {
        id: prevItems.length,
        values: {
          ryu: '',
          nombre: '',
          nivelKi: '',
          descripcion: '',
          sistema: '',
          costeKi: '',
          invo: ''
        }
      }
    ]);
    setHechizosN(prevHechizos => [
      ...prevHechizos,
      {
        ryu: '',
        nombre: '',
        nivelKi: '',
        descripcion: '',
        sistema: '',
        costeKi: '',
        invo: ''
      }
    ]);
  };

  return (
    <div className="gradComp">
      <p style={{color:"aliceblue", fontSize:"30px", fontFamily:"inpact", margin:"10px"}}>RYUS</p>
      {items.map(item => (
        <Item
          key={item.id}
          id={item.id}
          itemValues={item.values}
          handleItemChange={handleItemChange}
        />
      ))}
      <button className="btn btn-primary" style={{margin:"10px"}} onClick={btnAgregarItem}>
        + Hechizo
      </button>
    </div>
  );
};
