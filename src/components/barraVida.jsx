

import { useEffect } from "react";

import React, { useState } from "react";

import { io } from 'socket.io-client';
const socket = io(process.env.REACT_APP_BACKEND_URL);

import 'animate.css';



export const BarraVida = ({nombreN,fortalezaN, kiN, positivaN,setPositivaN, negativaN,setNegativaN, damageActualN, setDamageActualN }) => {
  const faseSalud = parseInt(kiN) + parseInt(fortalezaN);
  const vidaTotalPositiva = faseSalud * parseInt(positivaN);
  const vidaTotalNegativa = faseSalud * parseInt(negativaN);
  const vidaTotal = vidaTotalPositiva + vidaTotalNegativa;

  // Calcular el porcentaje inicial, asegurándose de que no supere el 100%
  let porcentajeVidaPositivaInicial = (damageActualN * 100) / vidaTotalPositiva;
  let porcentajeVidaNegativaInicial = 0;

  if (porcentajeVidaPositivaInicial > 100) {
    porcentajeVidaNegativaInicial = ((damageActualN - vidaTotalPositiva) * 100) / vidaTotalNegativa;
    porcentajeVidaPositivaInicial = 100;
    // Asegurar que el porcentaje de la barra negativa no supere el 100%
    porcentajeVidaNegativaInicial = porcentajeVidaNegativaInicial > 100 ? 100 : porcentajeVidaNegativaInicial;
  }

  const [porcentajeVidaPositiva, setPorcentajeVidaPositiva] = useState(porcentajeVidaPositivaInicial);
  const [porcentajeVidaNegativa, setPorcentajeVidaNegativa] = useState(porcentajeVidaNegativaInicial);
  
  const [consumirVida, setConsumirVida] = useState("");

  const [animacionActiva, setAnimacionActiva] = useState(true);
  

  const agregarDamage = async () => {
    let newValue = parseInt(consumirVida)|| 0;;
    //daño acumulado
    let newDamage = damageActualN + newValue;
  
    setAnimacionActiva(true);
    setTimeout(() => {
      setAnimacionActiva(false); // Desactivar la animación después de un tiempo
    }, 1000); // Duración de la animación en milisegundos


    
    // Validar que el nuevo daño no sea menor que cero
    if (newDamage < 0) {
      newDamage = 0; // Establecer el daño a cero si es negativo
    }
  
    setDamageActualN(newDamage);
    console.log(damageActualN)
  
    if (newDamage <= vidaTotalPositiva) {
      // Calcular el porcentaje de vida positiva si el daño no supera la vida positiva
      setPorcentajeVidaPositiva((newDamage * 100) / vidaTotalPositiva);
      setPorcentajeVidaNegativa(0); // Reiniciar la barra negativa
    } else {
      // Si el daño supera la vida positiva, calcular el porcentaje de vida negativa
      const nuevoPorcentajeNegativa = ((newDamage - vidaTotalPositiva) * 100) / vidaTotalNegativa;
      const porcentajeNegativaAjustado = nuevoPorcentajeNegativa > 100 ? 100 : nuevoPorcentajeNegativa;
      setPorcentajeVidaPositiva(100); // La barra positiva estará llena
      setPorcentajeVidaNegativa(porcentajeNegativaAjustado); // Establecer el porcentaje de la barra negativa
    }
    
    let estadoDeFase=""

    if(newDamage<=vidaTotalPositiva && newDamage>=(vidaTotalPositiva-faseSalud)){
      estadoDeFase="fase MALHERIDO"
   }
   
   if(newDamage<=(vidaTotalPositiva-faseSalud) && newDamage>=(vidaTotalPositiva-faseSalud*2)){
    estadoDeFase="fase MALTRECHO"
  }
  if(newDamage<=(vidaTotalPositiva-faseSalud*2) && newDamage>=(vidaTotalPositiva-faseSalud*3)){
    if(newDamage!==0){
     estadoDeFase="fase RAZGADO"
    }
  }

   if(newDamage>vidaTotalPositiva && newDamage<=(vidaTotalPositiva+faseSalud)){
      estadoDeFase="fase INCONCIENTE"
   }
   if(newDamage>(vidaTotalPositiva+faseSalud) && newDamage<=(vidaTotalPositiva+faseSalud*2)){
    estadoDeFase="fase iNCAPACITADO"
   }
   if(newDamage>(vidaTotalPositiva+faseSalud*2) && newDamage<=(vidaTotalPositiva+faseSalud*3)){
    estadoDeFase="fase MORIBUNDO"
   }
  




    let aturdimiento="";
    //catidad de fase positivas, cantidad de fases negativas
    if(newValue>=faseSalud){
      aturdimiento="****ATURDIDO*****"
    }

    let estadoSalud
    if(newDamage>vidaTotalPositiva){
      if(newDamage<=vidaTotal){
          estadoSalud=`barra negativa ${aturdimiento}`
      }else if(newDamage>vidaTotal){
        estadoSalud=`********************* ${nombreN} MUERTO ********************* ${aturdimiento}`
      }
      
    }else if(newDamage<=vidaTotalPositiva){
      estadoSalud=`barra positiva ${aturdimiento}`
    }


    let message

    if(newValue>0){
        message = `            Recibio ${newValue} p de DAÑO                        VITALIDAD: ${newDamage} / ${vidaTotal}                             ${estadoDeFase}   ${estadoSalud}`;
    }else if(newValue<0){
        let recuperado=-(newValue)
        message = `            Restauro ${recuperado} p de VIDA                     VITALIDAD: ${newDamage} / ${vidaTotal}                             ${estadoDeFase}   ${estadoSalud}`;
    }else {
        message = `                             VITALIDAD: ${newDamage} / ${vidaTotal}          ${estadoDeFase}   ${estadoSalud}`;
    }
  
   
    const nombre=nombreN

    const msgEnviar={
    nombre:nombre,
    mensaje:message
    }
    
    socket.emit('message', msgEnviar);
   
   
  };

  const handleConsumirVida = (event) => {
    setConsumirVida(event.target.value);
  };

  // Verificar si el personaje está muerto
  const estaMuerto = damageActualN > vidaTotal;


   

  const handlePos=(event)=>{
    const newPos=parseInt(event.target.value)
    setPositivaN(newPos)
  }
  const handleNeg=(event)=>{
    const newNeg=parseInt(event.target.value)
    setNegativaN(newNeg)
  }

  
  return (
    <div className="col1" >
      <div className='colBarraVida'>
      <div className={`animate__animated ${animacionActiva ? 'animate__flip' : ''}`}>
      <p style={{ fontSize: "20px", color: "aliceblue",marginTop:"10px"}}>Daño: {damageActualN}/{vidaTotal}</p>
      </div>  
        <div className="col2">
        <button className='btn btn-danger' onClick={agregarDamage} style={{margin:"7px"}} >+ Daño</button>
        <input type="number" value={consumirVida} onChange={handleConsumirVida} className='inputKen'/>
        </div>
        <div className="col4" id="fases" style={{transform:"scale(0.7)",marginLeft:"100%"}}>
            <p style={{color:"aliceblue"}}>fases +</p>
            <input type="number" value={positivaN} onChange={handlePos} className='inputKen' />
            <p style={{color:"aliceblue"}}>fases -</p>
            <input type="number" value={negativaN} onChange={handleNeg} className='inputKen' />
        </div>
      </div>
      {estaMuerto ? (
        <>
        
        <div className="barraExterna">
            <div className="barraInternaVida" style={{ width: "100%", background: "black" }}></div>
          </div>
          <div className="barraExterna">
            <div className="barraInternaVidaNegativa" style={{ width: "100%", background: "black" }}></div>
          </div>
  
         
        </>
        
      ) : (
        <>
          <div className="barraExternaN"  style={{ '--divisiones': positivaN }}>
            <div className="barraInternaVida" style={{ width: `${porcentajeVidaPositiva}%` }}></div>
          </div>
          <div className="barraExternaN"  style={{ '--divisiones': negativaN }}>
            <div className="barraInternaVidaNegativa" style={{ width: `${porcentajeVidaNegativa}%` }}></div>
          </div>
        </>
      )}
    </div>
  );
}







