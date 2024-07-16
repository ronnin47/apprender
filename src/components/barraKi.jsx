import React, { useState } from 'react';

import { io } from 'socket.io-client';
const socket = io(process.env.REACT_APP_BACKEND_URL);


export const BarraKi = ({nombreN, consumisionN, setConsumisionN, kiN, kiActualN, setKiActualN }) => {
    

    const [animacionActiva, setAnimacionActiva] = useState(true);

   
    const [consumir,setConsumir]=useState("")

    const porcentajeKi = (kiActualN / kiN) * 100;

    const handleInput = (event) => {
        const newValue = parseInt(event.target.value, 10);
        // Verificar si el nuevo valor es válido (no menor que 0 ni mayor que ken)
        if (!isNaN(newValue) && newValue >= 0 && newValue <= kiN) {
            setKiActualN(newValue);
        }
    };

    const handleConsumir=(event)=>{
      setConsumir(event.target.value)
    }

    const consumirKi=()=>{

        setAnimacionActiva(true);
        setTimeout(() => {
          setAnimacionActiva(false);
        }, 1000); 
        
        const newValue=kiActualN-consumir

        if (!isNaN(newValue) && newValue >= 0) {
            setKiActualN(newValue);

            let message

            if(consumir>0){
                message = `            Consumio ${consumir} p de KI                     KI: ${newValue} / ${kiN}`;
            }else if(consumir<0){
                let recuperado=-(consumir)
                message = `            Recupero ${recuperado} p de KI                     KI: ${newValue} / ${kiN}`;
            }else {
                message = `                             KI: ${newValue} / ${kiN}`;
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




    const handleConsumision=(event)=>{
          setConsumisionN(event.target.value)

    }

    return (
        <div className="col1" style={{marginTop:"10px"}}>
            <div className='col4'>
            <div className={`animate__animated ${animacionActiva ? 'animate__flip' : ''}`}>
            <p style={{ fontSize: "20px", color: "aliceblue",marginTop:"10px" }}>Ki: {kiActualN}/{kiN}</p>
            </div>
        
            <button className='btn btn-primary' onClick={consumirKi} style={{margin:"7px"}} >consumir ki</button>
            <input type="number" value={consumir} onChange={handleConsumir} className='inputKen'/>
            <input type="number" value={consumisionN} onChange={handleConsumision} className='inputConsumision'/>

            </div>
           

            <div className="barraExterna">
                <div
                    className="barraInterna"

                    style={{ width: `${porcentajeKi > 100 ? 100 : porcentajeKi}%` }}
                ></div>
            </div>
        </div>
    );
};
