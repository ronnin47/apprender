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
          placeholder="Nivel de Ki"
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
          value={itemValues.dominio}
          onChange={(e) => handleChange('dominio', e.target.value)}
          placeholder="Arte"
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

export const Dominios = ({ dominiosN, setDominiosN }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(dominiosN.map((dominio, index) => ({
      id: index,
      values: {
        dominio: dominio.dominio || '',
        nombre: dominio.nombre || '',
        nivelKi: dominio.nivelKi || '',
        descripcion: dominio.descripcion || '',
        sistema: dominio.sistema || '',
        costeKi: dominio.costeKi || '',
        invo: dominio.invo || ''
      }
    })));
  }, [dominiosN]);

  const handleItemChange = (id, newValues) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, values: newValues } : item
      )
    );

    const newDominios = items.map(item => (item.id === id ? newValues : item.values));
    setDominiosN(newDominios);
  };

  const btnAgregarItem = () => {
    setItems(prevItems => [
      ...prevItems,
      {
        id: prevItems.length,
        values: {
          dominio: '',
          nombre: '',
          nivelKi: '',
          descripcion: '',
          sistema: '',
          costeKi: '',
          invo: ''
        }
      }
    ]);
    setDominiosN(prevDominios => [
      ...prevDominios,
      {
        dominio: '',
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
      <p style={{color:"aliceblue", fontSize:"30px", fontFamily:"inpact", margin:"10px"}}>DOMINIOS</p>
      {items.map(item => (
        <Item
          key={item.id}
          id={item.id}
          itemValues={item.values}
          handleItemChange={handleItemChange}
        />
      ))}
      <button className="btn btn-primary" style={{margin:"10px"}} onClick={btnAgregarItem}>
        + Tecnica
      </button>
    </div>
  );
};
