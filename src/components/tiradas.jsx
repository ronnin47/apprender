import { useEffect, useState } from "react"


import { io } from 'socket.io-client';

const socket = io(process.env.REACT_APP_BACKEND_URL);
//REACT_APP_BACKEND_URL=https://tu-backend-en-render.onrender.com

function generarNumerosAzarSinRangoMin(cantidad, rangoMax) {
  var numeros = [];
  for (var i = 0; i < cantidad; i++) {
      var numero = Math.floor(Math.random() * rangoMax) + 1; // Genera un número aleatorio entre 1 y rangoMax
      numeros.push(numero);
  }
  return numeros;
}



export const Tiradas = ({nombre, message,setMessage,sock,setSock}) => {
 
const [valTirada,setValTirada]=useState("")
const [sumaTirada,setSumaTirada]=useState("")
const [valTiradaD10,setValTiradaD10]=useState("")
const [valTiradaD20,setValTiradaD20]=useState("")
const [valTiradaD10Bono,setValTiradaD10Bono]=useState("")


const[principal,setPrincipal]=useState("")
const[secundaria,setSecundaria]=useState("")



 const tirarDados=()=>{
  const principalValue = principal === "" ? 0 : parseInt(principal);
  const secundariaValue = secundaria === "" ? 0 : parseInt(secundaria);
    let base=1
    if(principal==0){
      base=0
    }
  let cantD10= Math.floor(principal / 10)+base;
  console.log("base: ",base)
  let tirada=generarNumerosAzarSinRangoMin(cantD10,10);
  let d10=generarNumerosAzarSinRangoMin(dadosD10,10);
  let d20=generarNumerosAzarSinRangoMin(dadosD20,20);
  let d10Bono=generarNumerosAzarSinRangoMin(dadosD10Bono,10);

  let sumaTirada = tirada.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  let sumaD10= d10.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  let sumaD20= d20.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
  let sumaD10Bono= d10Bono.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

  let total=sumaTirada+parseInt(principalValue)+parseInt(secundariaValue)+sumaD10+sumaD20+sumaD10Bono
  
 

  setValTirada(tirada.join(", "))
  setValTiradaD10(d10.join(", "))
  setValTiradaD20(d20.join(", "))
  setValTiradaD10Bono(d10Bono.join(", "))
  
  setSumaTirada(total)
  let imprimirTirada
  let imprimirBase
  let imprimirBonoD10
  let imprimirBonoD20
  let imprimirBonoKen

console.log("suma de la base ", principalValue+secundariaValue)
const baset=principalValue+secundariaValue

  if(baset>0){
    imprimirBase=`Base:    ${baset}`
  }else{
    imprimirBase="";
  }

  if(tirada.length>0){
    imprimirTirada=`D10 esfuerzo:    ${tirada.join(", ")}`
  }else{
    imprimirTirada="";
  }

  if(d10.length>0){
    imprimirBonoD10=`Bono D10:    ${d10.join(", ")}`
  }else{
    imprimirBonoD10="";
  }

  if(d20.length>0){
    imprimirBonoD20=`Bono D20:    ${d20.join(", ")}`
  }else{
    imprimirBonoD20="";
  }

  if(d10Bono.length>0){
    imprimirBonoKen=`Bono D10 KEN:    ${d10Bono.join(", ")}`
  }else{
    imprimirBonoKen="";
  }
  const message = `Tirada de ${nombre}:       ${imprimirBase}     ${imprimirTirada}       ${imprimirBonoD10}        ${imprimirBonoD20}        ${imprimirBonoKen}                TOTAL: ${total}`;
  
  
  
  socket.emit('message', message);
  setMessage('')

}


const[dadosD10,setDadosD10]=useState(0)
const[dadosD20,setDadosD20]=useState(0)
const[dadosD10Bono,setDadosD10Bono]=useState(0)



const addD10=()=>{
  setDadosD10(dadosD10+1)
}

const restD10=()=>{
  setDadosD10(dadosD10-1)
}

useEffect(() => {
 console.log(dadosD10)
}, [dadosD10]);

const addD20=()=>{
  setDadosD20(dadosD20+1)
}

const restD20=()=>{
  setDadosD20(dadosD20-1)
}

useEffect(() => {
 console.log(dadosD20)
}, [dadosD20]);


const addD10Bono=()=>{
  setDadosD10Bono(dadosD10Bono+1)
}

const restD10Bono=()=>{
  setDadosD10Bono(dadosD10Bono-1)
}

useEffect(() => {
 console.log(dadosD10)
}, [dadosD10]);


const handlePrincipal=(event)=>{
 setPrincipal(event.target.value)
}
const handleSecundaria=(event)=>{
  setSecundaria(event.target.value)
}





///const [message, setMessage] = useState('');
//const [sock, setSock] = useState([]);

useEffect(() => {
  // Escuchar mensajes del servidor y actualizar el estado
  socket.on('message', (newMessage) => {
    setSock((prevMessages) => [...prevMessages, newMessage]);
  });

  // Limpiar el evento al desmontar el componente
  return () => {
    socket.off('message');
  };
}, []);



const [mensajeChat,setMensajeChat]=useState("")


const handleChangeM=(event)=>{
  setMensajeChat(event.target.value)
}
const enviar=()=>{

  const msgEnviar=`${nombre}: ${mensajeChat}`
  socket.emit('message', msgEnviar);
  setMessage('')
  setMensajeChat("")

}


  return (
    <>
      <div>
      <textarea name="" id="" value={sock.join('\n')} className="consolaTiradas" readOnly></textarea>
      <input type="text" className="chatcito" value={mensajeChat} onChange={handleChangeM} />
      <button className="btn btn-primary" onClick={enviar}>enviar</button>
      </div>
      <div className="tiradas">
      
        <div>
          <h1>{nombre}</h1>
        <button className="btn btn-primary" onClick={tirarDados}>tirar</button>
   
        <input type="number" placeholder="caracteristica principal" value={principal} onChange={handlePrincipal}/>
        <input type="number" placeholder="caracteristica secundaria" value={secundaria} onChange={handleSecundaria}/>
        <div>
        <button className="btn btn-success" onClick={addD10}>+d10</button>
        <button className="btn btn-danger" onClick={restD10}>-d10</button>
        <label htmlFor="" value={dadosD10} className="dados10">{dadosD10}</label>
        </div>
        <div>
        <button className="btn btn-success" onClick={addD20}>+d20</button>
        <button className="btn btn-danger" onClick={restD20}>-d20</button>
        <label htmlFor="" value={dadosD20} className="dados10">{dadosD20}</label>
        </div>
        <div>
        <button className="btn btn-success" onClick={addD10Bono}>+d10</button>
        <button className="btn btn-danger" onClick={restD10Bono}>-d10</button>
        <label htmlFor="" value={dadosD10Bono} className="dados10">{dadosD10Bono}</label>
        </div>
        
        


       
        </div>
        <div className="cajasTirdas">
        <div>
            <input type="text" id="dadosEsfuerzo" className="cajaTirada" value={valTirada} placeholder="dados de esfuerzo" readOnly />
        </div>
        <div>
            <input type="text" id="dadosD10" className="cajaTirada" value={valTiradaD10} placeholder="dados d10"readOnly />
        </div>
        <div>
            <input type="text" id="dadosD20" className="cajaTirada" value={valTiradaD20} placeholder="dados d20"readOnly />
        </div>
        <div>
            <input type="text" id="dadosD10Bono" className="cajaTirada" value={valTiradaD10Bono} placeholder="dados d10 de bono"readOnly />
        </div>
        <div>   
            <input type="text" id="totalTirada" className="cajaTotal" value={sumaTirada} placeholder="total de tirada" readOnly />
        </div>

       
       </div>
 
    </div>
    </>
    
  )
}
