import { useEffect, useState, useRef } from "react"

import 'animate.css';
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


const textareaRef = useRef(null);
const messagesEndRef = useRef(null);
const [animacionActiva, setAnimacionActiva] = useState(false);



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
  const message = `           Tirada       ${imprimirBase}     ${imprimirTirada}       ${imprimirBonoD10}        ${imprimirBonoD20}        ${imprimirBonoKen}                TOTAL: ${total}`;
  
  const msgEnviar={
    nombre:nombre,
    mensaje:message
  }
 
  setAnimacionActiva(true);
  setTimeout(() => {
  setAnimacionActiva(false); // Desactivar la animación después de un tiempo
}, 1000); // Duración de la animación en milisegundos
  
  socket.emit('message', msgEnviar);
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

    
   
console.log("nombre: ",newMessage.nombre)
console.log("mensaje: ",newMessage.mensaje)
    const mensajeC=`${newMessage.nombre}: ${newMessage.mensaje}`
    setSock((prevMessages) => [...prevMessages, mensajeC]);
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

  //const msgEnviar=`${nombre}: ${mensajeChat}`
const msgEnviar={
  nombre:nombre,
  mensaje:mensajeChat
}
  socket.emit('message', msgEnviar);
  setMessage('')
  setMensajeChat("")

}




useEffect(() => {
  if (textareaRef.current) {
    textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
  }
}, [sock]);


const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Previene el comportamiento por defecto del Enter
    enviar();
  }
};

/* <textarea 
      name="" 
      id="" 
      ref={textareaRef}
      value={sock.join('\n')} className="consolaTiradas" readOnly></textarea>*/


      useEffect(() => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, [sock]);

     

  return (
    <>
      <div>
      <div className="contChat">
          {/* Verificar contenido de sock */}
          {console.log("Contenido de sock:", sock)}
          {sock.map((msg, index) => {
            // Dividir el mensaje si es necesario
            const [msgNombre, ...msgMensajeArray] = msg.split(': ');
            const msgMensaje = msgMensajeArray.join(': ');
            return (
              <div key={index} className={msgNombre === nombre ? 'red' : 'green'}>
                <span>{msgNombre}: {msgMensaje}</span>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
     
      <input type="text" className="chatcito" value={mensajeChat} onChange={handleChangeM} onKeyPress={handleKeyPress}/>
      <button className="btn btn-primary" onClick={enviar} style={{marginLeft:"10px"}}>enviar</button>
      </div>
      
    

      <div className="tiradas">
      
        <div className="container">
            <h1>{nombre}</h1>
            <button className="btn btn-primary" onClick={tirarDados} style={{marginTop:"1em",marginBottom:"1em", width:"8em", placeItems:"center"}}>tirar</button>
            <div style={{display:"grid", gridTemplateColumns:"1fr", marginBottom:"1em"}}>
            <input type="number" placeholder="caracteristica principal" value={principal} onChange={handlePrincipal} className="cajaTirada" style={{width:"50%"}}/>
            <input type="number" placeholder="caracteristica secundaria" value={secundaria} onChange={handleSecundaria} className="cajaTirada" style={{width:"50%"}}/>
            </div>
           
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
        <div className={`animate__animated ${animacionActiva ? 'animate__bounce' : ''}`}>   
            <input type="text" id="totalTirada" className="cajaTotal" value={sumaTirada} placeholder="total de tirada" readOnly />
        </div>
        <div>
            <input type="text" id="dadosEsfuerzo" className="cajaTirada" value={valTirada} placeholder="dados de esfuerzo base" readOnly />
        </div>
        <div>
            <input type="text" id="dadosD10" className="cajaTirada" value={valTiradaD10} placeholder="dados d10 de Bono "readOnly />
        </div>
        <div>
            <input type="text" id="dadosD20" className="cajaTirada" value={valTiradaD20} placeholder="dados d20 de Bono"readOnly />
        </div>
      
        <div >
            <input type="text" id="dadosD10Bono" className="cajaTirada" value={valTiradaD10Bono} placeholder="dados d10 de KEN"readOnly />
        </div>
       </div>
 
    </div>
    </>
    
  )
}


/*

 

     
*/