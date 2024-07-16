


import React, { useState } from 'react';

import { io } from 'socket.io-client';
const socket = io(process.env.REACT_APP_BACKEND_URL);

export const BarraKen = ({ nombreN, kenN, kenActualN, setKenActualN }) => {

    const [animacionActiva, setAnimacionActiva] = useState(true);

    const [consumir,setConsumir]=useState("")

    const porcentajeKen = (kenActualN / kenN) * 100;

    const handleInput = (event) => {
        const newValue = parseInt(event.target.value, 10);
        // Verificar si el nuevo valor es válido (no menor que 0 ni mayor que ken)
        if (!isNaN(newValue) && newValue >= 0 && newValue <= kenN) {
            setKenActualN(newValue);
        }
    };

    const handleConsumir=(event)=>{
      setConsumir(event.target.value)
    }

    const consumirKen=()=>{

        setAnimacionActiva(true);
        setTimeout(() => {
          setAnimacionActiva(false);
        }, 1000); 
        
        const newValue=kenActualN-consumir
        if (!isNaN(newValue) && newValue >= 0) {
            setKenActualN(newValue);

            let message

            if(consumir>0){
                message = `             Consumio ${consumir} p de KEN                     KEN: ${newValue} / ${kenN}`;
            }else if(consumir<0){
                let recuperado=-(consumir)
                message = `             Recupero ${recuperado} p de KEN                     KEN: ${newValue} / ${kenN}`;
            }else {
                message = `                             KEN: ${newValue} / ${kenN}`;
            }
          // ESTAMOS ACA EMITIENDO EL MENSAJE DE PRUEBA
           
            const nombre=nombreN
      
            const msgEnviar={
            nombre:nombre,
            mensaje:message
            }
            
            socket.emit('message', msgEnviar);
        }
       
    }

    return (
        <div className="col1" style={{marginTop:"10px"}}>
            <div className='col4'>
            <div className={`animate__animated ${animacionActiva ? 'animate__flip' : ''}`}>
            <p style={{ fontSize: "20px", color: "aliceblue",marginTop:"10px" }}>Ken: {kenActualN}/{kenN}</p>
            </div>
        
            <button className='btn btn-success' onClick={consumirKen} style={{margin:"7px"}} >consumir ken</button>
            <input type="number" value={consumir} onChange={handleConsumir}className='inputKen'/>

            </div>
           

            <div className="barraExterna">
                <div
                    className="barraInternaKen"
                    style={{ width: `${porcentajeKen > 100 ? 100 : porcentajeKen}%`}}
                ></div>
            </div>
        </div>
    );
};

