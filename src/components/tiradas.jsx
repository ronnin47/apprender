import { useEffect, useState, useRef } from "react"
import 'animate.css';
import { io } from 'socket.io-client';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';



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


export const Tiradas = ({nombre,setMessage,sock,setSock}) => {

const [valTirada,setValTirada]=useState("")
const [sumaTirada,setSumaTirada]=useState("")

const[valTiradaD6,setValTiradaD6]=useState("")
const[valTiradaD4,setValTiradaD4]=useState("")

// aca paso 1 para incorporar dados
const[valTiradaD12,setValTiradaD12]=useState("")

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

  //acaaaaaaaa 2
  let d12=generarNumerosAzarSinRangoMin(dadosD12Bono,12);
  let d6=generarNumerosAzarSinRangoMin(dadosD6Bono,6);
  let d4=generarNumerosAzarSinRangoMin(dadosD4Bono,4);
  
  let d10=generarNumerosAzarSinRangoMin(dadosD10,10);
  let d20=generarNumerosAzarSinRangoMin(dadosD20,20);
  let d10Bono=generarNumerosAzarSinRangoMin(dadosD10Bono,10);

  let sumaTirada = tirada.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  
  //acaaa 3
  let sumaD12= d12.reduce((acumulador, valorActual)=> acumulador +valorActual,0);
  let sumaD6= d6.reduce((acumulador, valorActual)=> acumulador +valorActual,0);
  let sumaD4= d4.reduce((acumulador, valorActual)=> acumulador +valorActual,0);

  let sumaD10= d10.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  let sumaD20= d20.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
  let sumaD10Bono= d10Bono.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

  // acaaa 4
  let total=sumaTirada+parseInt(principalValue)+parseInt(secundariaValue)+sumaD10+sumaD20+sumaD10Bono+sumaD6+sumaD4+sumaD12
  
  setValTirada(tirada.join(", "))
  
  //acaaa 5
  setValTiradaD12(d12.join(", "))
  setValTiradaD6(d6.join(", "))
  setValTiradaD4(d4.join(", "))

  setValTiradaD10(d10.join(", "))
  setValTiradaD10(d10.join(", "))
  setValTiradaD20(d20.join(", "))
  setValTiradaD10Bono(d10Bono.join(", "))
  
  setSumaTirada(total)
  let imprimirTirada
  let imprimirBase
  
  //acaaa 6
  let imprimirBonoD12;
  let imprimirBonoD6;
  let imprimirBonoD4;

  let imprimirBonoD10;
  let imprimirBonoD20;
  let imprimirBonoKen;

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

  //acaaaa 7

  if(d12.length>0){
    imprimirBonoD12=`Bono D12:    ${d12.join(", ")}`
  }else{
    imprimirBonoD12="";
  }

 
  if(d6.length>0){
    imprimirBonoD6=`Bono D6:    ${d6.join(", ")}`
  }else{
    imprimirBonoD6="";
  }

  if(d4.length>0){
    imprimirBonoD4=`Bono D4:    ${d4.join(", ")}`
  }else{
    imprimirBonoD4="";
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
  
  //acaaa 8
  const message = `     Tirada  ${nombreTirada}      ${imprimirBase}     ${imprimirTirada}       ${imprimirBonoD10}        ${imprimirBonoD20}        ${imprimirBonoKen}         ${imprimirBonoD6}        ${imprimirBonoD4}       ${imprimirBonoD12}       TOTAL: ${total}`;
  
  const msgEnviar={
    nombre:nombre,
    mensaje:message
  }
 
  setAnimacionActiva(true);
  setTimeout(() => {
  setAnimacionActiva(false); 
}, 1000); 
  
  socket.emit('message', msgEnviar);
  setMessage('')
  //Una opcion era limpiar el nombre tirada tras una tirada o activar y desactivar el boton
  setNombreTirada("");

}

//acaaaa 9
const[dadosD12Bono,setDadosD12Bono]=useState(0);

const[dadosD6Bono,setDadosD6Bono]=useState(0);
const[dadosD4Bono,setDadosD4Bono]=useState(0)


const[dadosD10,setDadosD10]=useState(0)
const[dadosD20,setDadosD20]=useState(0)
const[dadosD10Bono,setDadosD10Bono]=useState(0)

const [nombreTirada,setNombreTirada]=useState("")

//SELECTOR DEL BOTON DONDE SE GUARDARA LA TIRADA
const [selectedButton, setSelectedButton] = useState(1);


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



//acaaa 10
const addD12Bono=()=>{
  setDadosD12Bono(dadosD12Bono+1)
}
const restD12Bono=()=>{
  setDadosD12Bono(dadosD12Bono-1)
}



const addD6Bono=()=>{
  setDadosD6Bono(dadosD6Bono+1)
}
const restD6Bono=()=>{
  setDadosD6Bono(dadosD6Bono-1)
}

const addD4Bono=()=>{
  setDadosD4Bono(dadosD4Bono+1)
}
const restD4Bono=()=>{
  setDadosD4Bono(dadosD4Bono-1)
}


const handlePrincipal=(event)=>{
 setPrincipal(event.target.value)
}
const handleSecundaria=(event)=>{
  setSecundaria(event.target.value)
}

//botones state de los seis botones
const [boton1, setBoton1] = useState(() => {
  // Recuperar del localStorage si existe, si no, utilizar un valor por defecto
  const storedValue = localStorage.getItem(`boton1_${nombre}`);
  return storedValue ? JSON.parse(storedValue) : "Boton 1";
});
const [boton2, setBoton2] = useState(() => {
  // Recuperar del localStorage si existe, si no, utilizar un valor por defecto
  const storedValue = localStorage.getItem(`boton2_${nombre}`);
  return storedValue ? JSON.parse(storedValue) : "Boton 2";
});
const [boton3, setBoton3] = useState(() => {
  // Recuperar del localStorage si existe, si no, utilizar un valor por defecto
  const storedValue = localStorage.getItem(`boton3_${nombre}`);
  return storedValue ? JSON.parse(storedValue) : "Boton 3";
});
const [boton4, setBoton4] = useState(() => {
  // Recuperar del localStorage si existe, si no, utilizar un valor por defecto
  const storedValue = localStorage.getItem(`boton4_${nombre}`);
  return storedValue ? JSON.parse(storedValue) : "Boton 4";
});
const [boton5, setBoton5] = useState(() => {
  // Recuperar del localStorage si existe, si no, utilizar un valor por defecto
  const storedValue = localStorage.getItem(`boton5_${nombre}`);
  return storedValue ? JSON.parse(storedValue) : "Boton 5";
});
const [boton6, setBoton6] = useState(() => {
  // Recuperar del localStorage si existe, si no, utilizar un valor por defecto
  const storedValue = localStorage.getItem(`boton6_${nombre}`);
  return storedValue ? JSON.parse(storedValue) : "Boton 6";
});
const [boton7, setBoton7] = useState(() => {
  // Recuperar del localStorage si existe, si no, utilizar un valor por defecto
  const storedValue = localStorage.getItem(`boton7_${nombre}`);
  return storedValue ? JSON.parse(storedValue) : "Boton 7";
});
const [boton8, setBoton8] = useState(() => {
  // Recuperar del localStorage si existe, si no, utilizar un valor por defecto
  const storedValue = localStorage.getItem(`boton8_${nombre}`);
  return storedValue ? JSON.parse(storedValue) : "Boton 8";
});
const [boton9, setBoton9] = useState(() => {
  // Recuperar del localStorage si existe, si no, utilizar un valor por defecto
  const storedValue = localStorage.getItem(`boton9_${nombre}`);
  return storedValue ? JSON.parse(storedValue) : "Boton 9";
});
const [boton10, setBoton10] = useState(() => {
  // Recuperar del localStorage si existe, si no, utilizar un valor por defecto
  const storedValue = localStorage.getItem(`boton10_${nombre}`);
  return storedValue ? JSON.parse(storedValue) : "Boton 10";
});
//console.log("este es el contenido de boton 1: "+boton1)

//console.log(boton1.nombreTirada)
/************************************************** */

//GUARDAR TIRADA
const guardarTiradaMacro=()=>{
 // Crear el objeto con los valores

 Swal.fire({
  title: `Deseas guardar la accion ${nombreTirada} en el boton ${selectedButton}?`,
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Guardar",
  denyButtonText: `No guardar`
}).then((result) => {
  
  if (result.isConfirmed) {
    const tirada = {
      principal: principal || 0,
      secundaria: secundaria || 0,
      dadosD10: dadosD10 || 0,
      dadosD20: dadosD20 || 0,
      dadosD10Bono: dadosD10Bono || 0,
      dadosD6Bono: dadosD6Bono || 0,
      dadosD4Bono: dadosD4Bono || 0,
      dadosD12Bono: dadosD12Bono || 0,
      nombreTirada: nombreTirada,
      nombre:nombre,
    };
    
    localStorage.setItem(`boton${selectedButton}_${nombre}`, JSON.stringify(tirada));
    
    switch(selectedButton){
      case 1:
        setBoton1(tirada);
      break
      case 2:
        setBoton2(tirada);
      break
      case 3:
        setBoton3(tirada);
      break
      case 4:
        setBoton4(tirada);
      break
      case 5:
        setBoton5(tirada);
      break
      case 6:
        setBoton6(tirada);
      break
      case 7:
        setBoton7(tirada);
      break
      case 8:
        setBoton8(tirada);
      break
      case 9:
        setBoton9(tirada);
      break
      case 10:
        setBoton10(tirada);
      break
    }
    
    
    //LIMPIAR IMPUT 
    setNombreTirada("");

    Swal.fire("Accion guardada!", "", "tirada guardada");
  } else if (result.isDenied) {
    Swal.fire("La accion no se guardo", "", "info");
    //LIMPIAR IMPUT 
    setNombreTirada("");
  }
});

}


const handleInputChange = (event) => {
  setSelectedButton(parseInt(event.target.value, 10));
};


const cargarTirada1=()=>{
  //presenta el nombre de la tirada que queria coco
  // acaaaaaaaaaaaa
  setSelectedButton(1);
   setNombreTirada(boton1.nombreTirada || "Accion-1")
   const principal1=parseInt(boton1.principal) || 0;
   setPrincipal(principal1);
   const secundaria1=parseInt(boton1.secundaria) || 0;
   setSecundaria(secundaria1);
   const dadosD101=parseInt(boton1.dadosD10) || 0;
   setDadosD10(dadosD101);
   const dadosD10Bono1=parseInt(boton1.dadosD10Bono) || 0;
   setDadosD10Bono(dadosD10Bono1)
   const dadosD201=parseInt(boton1.dadosD20) || 0;
   setDadosD20(dadosD201); 
   const dadosD061=parseInt(boton1.dadosD6Bono) || 0;
   setDadosD6Bono(dadosD061); 
   const dadosD041=parseInt(boton1.dadosD4Bono) || 0;
   setDadosD4Bono(dadosD041);
   const dadosD121=parseInt(boton1.dadosD12Bono) || 0;
   setDadosD12Bono(dadosD121); 
}


const cargarTirada2=()=>{
  setSelectedButton(2);
  setNombreTirada(boton2.nombreTirada || "Accion-2")
  const principal2=boton2.principal || 0;
  setPrincipal(principal2);
  const secundaria2=boton2.secundaria  || 0;
  setSecundaria(secundaria2);
  const dadosD102=boton2.dadosD10  || 0;
  setDadosD10(dadosD102);
  const dadosD10Bono2=boton2.dadosD10Bono  || 0;
  setDadosD10Bono(dadosD10Bono2)
  const dadosD202=boton2.dadosD20  || 0;
  setDadosD20(dadosD202); 
  const dadosD062=boton2.dadosD6Bono  || 0;
  setDadosD6Bono(dadosD062); 
  const dadosD042=boton2.dadosD4Bono  || 0;
  setDadosD4Bono(dadosD042); 
  const dadosD122=parseInt(boton2.dadosD12Bono) || 0;
  setDadosD12Bono(dadosD122); 
}
const cargarTirada3=()=>{
  setSelectedButton(3);
  setNombreTirada(boton3.nombreTirada || "Accion-3")
  const principal3=boton3.principal  || 0;
  setPrincipal(principal3);
  const secundaria3=boton3.secundaria  || 0;
  setSecundaria(secundaria3);
  const dadosD103=boton3.dadosD10  || 0;
  setDadosD10(dadosD103);
  const dadosD10Bono3=boton3.dadosD10Bono  || 0;
  setDadosD10Bono(dadosD10Bono3)
  const dadosD203=boton3.dadosD20  || 0;
  setDadosD20(dadosD203); 
  const dadosD063=boton3.dadosD6Bono  || 0;
  setDadosD6Bono(dadosD063); 
  const dadosD043=boton3.dadosD4Bono  || 0;
  setDadosD4Bono(dadosD043);
  const dadosD123=parseInt(boton3.dadosD12Bono) || 0;
  setDadosD12Bono(dadosD123);  
}
const cargarTirada4=()=>{
  setSelectedButton(4);
  setNombreTirada(boton4.nombreTirada || "Accion-4")
  const principal4=boton4.principal  || 0;
  setPrincipal(principal4);
  const secundaria4=boton4.secundaria  || 0;
  setSecundaria(secundaria4);
  const dadosD104=boton4.dadosD10  || 0;
  setDadosD10(dadosD104);
  const dadosD10Bono4=boton4.dadosD10Bono  || 0;
  setDadosD10Bono(dadosD10Bono4)
  const dadosD204=boton4.dadosD20  || 0;
  setDadosD20(dadosD204); 
  const dadosD064=boton4.dadosD6Bono  || 0;
  setDadosD6Bono(dadosD064); 
  const dadosD044=boton4.dadosD4Bono  || 0;
  setDadosD4Bono(dadosD044);
  const dadosD124=parseInt(boton4.dadosD12Bono) || 0;
  setDadosD12Bono(dadosD124);  
}
const cargarTirada5=()=>{
  setSelectedButton(5);
  setNombreTirada(boton5.nombreTirada || "Accion-5")
  const principal5=boton5.principal  || 0;
  setPrincipal(principal5);
  const secundaria5=boton5.secundaria  || 0;
  setSecundaria(secundaria5);
  const dadosD105=boton5.dadosD10  || 0;
  setDadosD10(dadosD105);
  const dadosD10Bono5=boton5.dadosD10Bono  || 0;
  setDadosD10Bono(dadosD10Bono5)
  const dadosD205=boton5.dadosD20  || 0;
  setDadosD20(dadosD205); 
  const dadosD065=boton5.dadosD6Bono  || 0;
  setDadosD6Bono(dadosD065); 
  const dadosD045=boton5.dadosD4Bono  || 0;
  setDadosD4Bono(dadosD045);
  const dadosD125=parseInt(boton5.dadosD12Bono) || 0;
  setDadosD12Bono(dadosD125);  
}
const cargarTirada6=()=>{
  setSelectedButton(6);
  setNombreTirada(boton6.nombreTirada || "Accion-6")
  const principal6=boton6.principal  || 0;
  setPrincipal(principal6);
  const secundaria6=boton6.secundaria  || 0;
  setSecundaria(secundaria6);
  const dadosD106=boton6.dadosD10  || 0;
  setDadosD10(dadosD106);
  const dadosD10Bono6=boton6.dadosD10Bono  || 0;
  setDadosD10Bono(dadosD10Bono6)
  const dadosD206=boton6.dadosD20  || 0;
  setDadosD20(dadosD206); 
  const dadosD066=boton6.dadosD6Bono  || 0;
  setDadosD6Bono(dadosD066); 
  const dadosD046=boton6.dadosD4Bono  || 0;
  setDadosD4Bono(dadosD046); 
  const dadosD126=parseInt(boton6.dadosD12Bono) || 0;
  setDadosD12Bono(dadosD126); 
}

const cargarTirada7=()=>{
  setSelectedButton(7);
  setNombreTirada(boton5.nombreTirada || "Accion-7")
  const principal7=boton7.principal  || 0;
  setPrincipal(principal7);
  const secundaria7=boton7.secundaria  || 0;
  setSecundaria(secundaria7);
  const dadosD107=boton7.dadosD10  || 0;
  setDadosD10(dadosD107);
  const dadosD10Bono7=boton7.dadosD10Bono  || 0;
  setDadosD10Bono(dadosD10Bono7)
  const dadosD207=boton7.dadosD20  || 0;
  setDadosD20(dadosD207); 
  const dadosD067=boton7.dadosD6Bono  || 0;
  setDadosD6Bono(dadosD067); 
  const dadosD047=boton7.dadosD4Bono  || 0;
  setDadosD4Bono(dadosD047); 
  const dadosD127=parseInt(boton7.dadosD12Bono) || 0;
  setDadosD12Bono(dadosD127); 
}

const cargarTirada8=()=>{
  setSelectedButton(8);
  setNombreTirada(boton8.nombreTirada|| "Accion-8")
  const principal8=boton8.principal  || 0;
  setPrincipal(principal8);
  const secundaria8=boton8.secundaria  || 0;
  setSecundaria(secundaria8);
  const dadosD108=boton8.dadosD10  || 0;
  setDadosD10(dadosD108);
  const dadosD10Bono8=boton8.dadosD10Bono  || 0;
  setDadosD10Bono(dadosD10Bono8)
  const dadosD208=boton8.dadosD20  || 0;
  setDadosD20(dadosD208); 
  const dadosD068=boton8.dadosD6Bono  || 0;
  setDadosD6Bono(dadosD068); 
  const dadosD048=boton8.dadosD4Bono  || 0;
  setDadosD4Bono(dadosD048);
  const dadosD128=parseInt(boton8.dadosD12Bono) || 0;
  setDadosD12Bono(dadosD128);  
}

const cargarTirada9=()=>{
  setSelectedButton(9);
  setNombreTirada(boton9.nombreTirada || "Accion-9")
  const principal9=boton9.principal  || 0;
  setPrincipal(principal9);
  const secundaria9=boton9.secundaria  || 0;
  setSecundaria(secundaria9);
  const dadosD109=boton9.dadosD10  || 0;
  setDadosD10(dadosD109);
  const dadosD10Bono9=boton9.dadosD10Bono  || 0;
  setDadosD10Bono(dadosD10Bono9)
  const dadosD209=boton9.dadosD20  || 0;
  setDadosD20(dadosD209); 
  const dadosD069=boton9.dadosD6Bono  || 0;
  setDadosD6Bono(dadosD069); 
  const dadosD049=boton9.dadosD4Bono  || 0;
  setDadosD4Bono(dadosD049); 
  const dadosD129=parseInt(boton9.dadosD12Bono) || 0;
  setDadosD12Bono(dadosD129); 
}

const cargarTirada10=()=>{
  setSelectedButton(10);
  setNombreTirada(boton10.nombreTirada || "Accion-10")
  const principal10=boton10.principal  || 0;
  setPrincipal(principal10);
  const secundaria10=boton10.secundaria  || 0;
  setSecundaria(secundaria10);
  const dadosD1010=boton10.dadosD10  || 0;
  setDadosD10(dadosD1010);
  const dadosD10Bono10=boton10.dadosD10Bono  || 0;
  setDadosD10Bono(dadosD10Bono10)
  const dadosD2010=boton10.dadosD20  || 0;
  setDadosD20(dadosD2010); 
  const dadosD0610=boton10.dadosD6Bono  || 0;
  setDadosD6Bono(dadosD0610); 
  const dadosD0410=boton10.dadosD4Bono  || 0;
  setDadosD4Bono(dadosD0410); 
  const dadosD1210=parseInt(boton10.dadosD12Bono) || 0;
  setDadosD12Bono(dadosD1210); 
}

const handleNombreTirada=(event)=>{
  setNombreTirada(event.target.value)
}

///const [message, setMessage] = useState('');
//const [sock, setSock] = useState([]);

useEffect(() => {
  // Escuchar mensajes del servidor y actualizar el estado
socket.on('message', (newMessage) => {
    const mensajeC=`${newMessage.nombre}: ${newMessage.mensaje}`
    setSock((prevMessages) => [...prevMessages, mensajeC]);
  });
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

           <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}} className="botoncinios">
            <div>
            <Button variant="outline-danger" onClick={restD10}>-d10</Button>
            <label htmlFor="" value={dadosD10} className="dados10">{dadosD10}</label>
            <Button variant="outline-success" style={{marginLeft:"0.5em"}}onClick={addD10}>+d10</Button> 
            </div>
            <div>
            <Button variant="outline-danger" onClick={restD20}>-d20</Button>
            <label htmlFor="" value={dadosD20} className="dados10">{dadosD20}</label>
            <Button variant="outline-success" style={{marginLeft:"0.5em"}} onClick={addD20}>+d20</Button>
            
            </div>
            <div>
            <Button variant="outline-danger" onClick={restD10Bono}>-d10</Button>
            <label htmlFor="" value={dadosD10Bono} className="dados10">{dadosD10Bono}</label>
            <Button variant="outline-success"  style={{marginLeft:"0.5em"}} onClick={addD10Bono}>+d10</Button>
          
            </div>    

            <div>
            <Button variant="outline-danger" onClick={restD6Bono}> -d06</Button>
            <label htmlFor="" value={dadosD6Bono} className="dados10">{dadosD6Bono}</label>
            <Button variant="outline-success" style={{marginLeft:"0.5em"}} onClick={addD6Bono}> +d06</Button>
           
            </div>    

            <div>
            <Button variant="outline-danger" onClick={restD12Bono}> -d12</Button>
            <label htmlFor="" value={dadosD12Bono} className="dados10">{dadosD12Bono}</label>
            <Button variant="outline-success" style={{marginLeft:"0.5em"}} onClick={addD12Bono}> +d12</Button>
            
            </div>     

            <div>
            <Button variant="outline-danger" onClick={restD4Bono}> -d04</Button>
            <label htmlFor="" value={dadosD4Bono} className="dados10">{dadosD4Bono}</label>
            <Button variant="outline-success" style={{marginLeft:"0.5em"}}  onClick={addD4Bono}> +d04</Button>
           
            </div>       

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
            <input type="text" id="dadosD12Bono" className="cajaTirada" value={valTiradaD12} placeholder="dados d12 de Bono"readOnly />
        </div>    
        <div >
            <input type="text" id="dadosD10Bono" className="cajaTirada" value={valTiradaD10Bono} placeholder="dados d10 de KEN"readOnly />
        </div>

        <div>
            <input type="text" id="dadosD6Bono" className="cajaTirada" value={valTiradaD6} placeholder="dados d6 de Bono"readOnly />
        </div>
        <div>
            <input type="text" id="dadosD4Bono" className="cajaTirada" value={valTiradaD4} placeholder="dados d4 de Bono"readOnly />
        </div>
       </div>

       
 
    </div>
    <div className="macros">

        <div className="guardados">

        <input type="text" placeholder="nombra tu tirada y guardala en un boton" value={nombreTirada} onChange={handleNombreTirada} style={{backgroundColor:"black", color:"greenyellow", textAlign:"center"
        }}/>
          
        <Form.Select value={selectedButton} onChange={handleInputChange} style={{marginLeft:"2em", width:"8em", backgroundColor:"black", color:"greenyellow"}}>
        <option value={1}>Boton 1</option>
        <option value={2}>Boton 2</option>
        <option value={3}>Boton 3</option>
        <option value={4}>Boton 4</option>
        <option value={5}>Boton 5</option>
        <option value={6}>Boton 6</option>
        <option value={7}>Boton 7</option>
        <option value={8}>Boton 8</option>
        <option value={9}>Boton 9</option>
        <option value={10}>Boton 10</option>
        </Form.Select>
       
       <Button variant="outline-info"  onClick={guardarTiradaMacro} style={{marginLeft:"2em"}}>guardar</Button>

        </div>
        
        
        <div className="cajaMacros">
          
            <Button variant="outline-warning" onClick={cargarTirada1}>{boton1.nombreTirada || "Accion-1"}</Button>
            <Button variant="outline-warning" onClick={cargarTirada2}>{boton2.nombreTirada || "Accion-2"}</Button>
            <Button variant="outline-warning" onClick={cargarTirada3}>{boton3.nombreTirada || "Accion-3"}</Button>
            <Button variant="outline-warning" onClick={cargarTirada4}>{boton4.nombreTirada || "Accion-4"}</Button>
            <Button variant="outline-warning" onClick={cargarTirada5}>{boton5.nombreTirada || "Accion-5"}</Button>
            <Button variant="outline-warning" onClick={cargarTirada6}>{boton6.nombreTirada || "Accion-6"}</Button>
            <Button variant="outline-warning" onClick={cargarTirada7}>{boton7.nombreTirada || "Accion-7"}</Button>
            <Button variant="outline-warning" onClick={cargarTirada8}>{boton8.nombreTirada || "Accion-8"}</Button>
            <Button variant="outline-warning" onClick={cargarTirada9}>{boton9.nombreTirada || "Accion-9"}</Button>
            <Button variant="outline-warning" onClick={cargarTirada10}>{boton10.nombreTirada || "Accion-10"}</Button>
          </div>
    </div>
    
    </>
    
  )
}


