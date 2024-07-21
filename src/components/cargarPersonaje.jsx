
import React, { useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Ventajas } from './ventajas.jsx';

export const CargarPersonaje = ({

  setActiveKey,
  personajes,
  setPersonajes,
  setNombre,
  setDominio,
  setRaza,
  setEdad,
  imagen,
  setKen,
  setKi,
  setDestino,
  setPdestino,

  setFuerza,
  setFortaleza,
  setAgilidad,
  setImagen,
  setDestreza,
  setSabiduria,
  setPresencia,
  setPrincipio,
  setSentidos,

  nombre,
  dominio,
  raza,
  edad,
  ken,
  ki,
  destino,
  pDestino,

  fuerza,
  fortaleza,
  destreza,
  agilidad,
  sabiduria,
  presencia,
  principio,
  sentidos,

  academisismo,
  alerta,
  atletismo,
  conBakemono,
  mentir,
  pilotear,
  artesMarciales,
  medicina,
  conObjMagicos,
  sigilo,
  conEsferas,
  conLeyendas,
  forja,
  conDemonio,
  conEspiritual,
  manejoBlaster,
  manejoSombras,
  tratoBakemono,
  conHechiceria,
  medVital,
  medEspiritual,
  rayo,
  fuego,
  frio,
  veneno,
  corte,
  energia,

 
  setAcademisismo,
  setAlerta,
  setAtletismo,
  setConBakemono,
  setMentir,
  setPilotear,
  setArtesMarciales,
  setMedicina,
  setConObjMagicos,
  setSigilo,
  setConEsferas,
  setConLeyendas,
  setForja,
  setConDemonio,
  setConEspiritual,
  setManejoBlaster,
  setManejoSombras,
  setTratoBakemono,
  setConHechiceria,
  setMedVital,
  setMedEspiritual,
  setRayo,
  setFuego,
  setFrio,
  setVeneno,
  setCorte,
  setEnergia,

  setApCombate,
  setValCombate,
  setApCombate2,
  setValCombate2,
  apCombate,
  valCombate,
  apCombate2,
  valCombate2,
  ventajas,
  setVentajas,
  inventario,
  dominios,
  kenActual,
  positiva,
  negativa,
  vidaActual,
  hechizos,

  add1,
  setAdd1,
  valAdd1,
  setValAdd1,
  add2,
  setAdd2,
  valAdd2,
  setValAdd2,
  add3,
  setAdd3,
  valAdd3,
  setValAdd3,
  add4,
  setAdd4,
  valAdd4,
  setValAdd4,
  consumision,
  naturaleza,
  setNaturaleza,
  

}) => {
 
  const inputFileRef = useRef(null);

  const handleImageUpload = () => {
    inputFileRef.current.click();
  };
  
  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleChangeDominio=(event)=>{
    setDominio(event.target.value)
   }
   const handleChangeRaza = (event) => {
    setRaza(event.target.value);
  };
  const handleChangeEdad=(event)=>{
    setEdad(event.target.value)
   }
   const handleChangeKen=(event)=>{
    setKen(event.target.value)
   }

   const handleChangeKi=(event)=>{
    setKi(event.target.value)
   }
   const handleChangeDestino=(event)=>{
    setDestino(event.target.value)
   }
   const handleChangePdestino=(event)=>{
    setPdestino(event.target.value)
   }


  const handleChangeFuerza=(event)=>{
    setFuerza(event.target.value)
   }
   const handleChangeFortaleza=(event)=>{
    setFortaleza(event.target.value)
   }
  const handleChangeDestreza=(event)=>{
    setDestreza(event.target.value)
   }
   const handleChangeAgilidad=(event)=>{
    setAgilidad(event.target.value)
   }
   const handleChangeSabiduria = (event) => {
    setSabiduria(event.target.value)    
  }
  const handleChangePresencia = (event) => {
    setPresencia(event.target.value)    
  }
  const handleChangePrincipio = (event) => {
    setPrincipio(event.target.value)    
  }
  const handleChangeSentidos = (event) => {
    setSentidos(event.target.value)    
  }

  const handleChangeAcademisismo = (event) => {
    setAcademisismo(event.target.value)    
  }
  const handleChangeAlerta = (event) => {
    setAlerta(event.target.value)    
  }
  const handleChangeAtletismo = (event) => {
    setAtletismo(event.target.value)    
  }
  const handleChangeConBakemono = (event) => {
    setConBakemono(event.target.value)    
  }
  const handleChangeMentir = (event) => {
    setMentir(event.target.value)    
  }
  const handleChangePilotear = (event) => {
    setPilotear(event.target.value)    
  }
  const handleChangeArtesMarciales = (event) => {
    setArtesMarciales(event.target.value)    
  }
  const handleChangeMedicina = (event) => {
    setMedicina(event.target.value)    
  }
  const handleChangeObjMagicos = (event) => {
    setConObjMagicos(event.target.value)    
  }
  const handleChangeSigilo = (event) => {
    setSigilo(event.target.value)    
  }
  const handleChangeConEsferas = (event) => {
    setConEsferas(event.target.value)    
  }
  const handleChangeConLeyendas = (event) => {
    setConLeyendas(event.target.value)    
  }
  const handleChangeForja = (event) => {
    setForja(event.target.value)    
  }
  const handleChangeConDemonio = (event) => {
    setConDemonio(event.target.value)    
  }
  const handleChangeConEspiritual = (event) => {
    setConEspiritual(event.target.value)    
  }
  const handleChangeManejoBlaster = (event) => {
    setManejoBlaster(event.target.value)    
  }
  const handleChangeManejoSombras = (event) => {
    setManejoSombras(event.target.value)    
  }
  const handleChangeTratoBakemono = (event) => {
    setTratoBakemono(event.target.value)    
  }
  const handleChangeConHechiceria = (event) => {
    setConHechiceria(event.target.value)    
  }
  const handleChangeMedVital = (event) => {
    setMedVital(event.target.value)    
  }
  const handleChangeMedEspiritual = (event) => {
    setMedEspiritual(event.target.value)    
  }
  const handleChangeRayo = (event) => {
    setRayo(event.target.value)    
  }
  const handleChangeVeneno = (event) => {
    setVeneno(event.target.value)    
  }
  const handleChangeFuego = (event) => {
    setFuego(event.target.value)    
  }
  const handleChangeFrio = (event) => {
    setFrio(event.target.value)    
  }
  const handleChangeCorte = (event) => {
    setCorte(event.target.value)    
  }
  const handleChangeEnergia = (event) => {
    setEnergia(event.target.value)    
  }

  const handleChangeApCombate2=(event)=>{
    setApCombate2(event.target.value)
   }
   const handleChangeApCombate=(event)=>{
    setApCombate(event.target.value)
   }
   const handleChangeValCombate=(event)=>{
    setValCombate(event.target.value)
   }
   const handleChangeValCombate2=(event)=>{
    setValCombate2(event.target.value)
   }

   



   const handleChangeAdd1=(event)=>{
    setAdd1(event.target.value)
   }
   const handleChangeValAdd1=(event)=>{
    setValAdd1(event.target.value)
   }

   const handleChangeAdd2=(event)=>{
    setAdd2(event.target.value)
   }
   const handleChangeValAdd2=(event)=>{
    setValAdd2(event.target.value)
   }

   const handleChangeAdd3=(event)=>{
    setAdd3(event.target.value)
   }
   const handleChangeValAdd3=(event)=>{
    setValAdd3(event.target.value)
   }
   
   const handleChangeAdd4=(event)=>{
    setAdd4(event.target.value)
   }
   const handleChangeValAdd4=(event)=>{
    setValAdd4(event.target.value)
   }




  const handleChangeNaturaleza=(event)=>{
    setNaturaleza(event.target.value)
  }


 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {     
      setImagen(reader.result); 
    };
    reader.readAsDataURL(file);
  };

  const agregarPersonaje = () => {
 // Obtener el último id del localStorage o inicializarlo en 0 si no existe
 let lastId = parseInt(localStorage.getItem('lastId')) || 0;

 // Incrementar el id para el nuevo personaje
 const nextId = lastId + 1;
    
    const pjNuevo = {
      id: nextId,
      nombre: nombre,
      dominio: dominio,
      raza:raza,
      naturaleza:naturaleza,
      edad:edad,

      ken:ken || 0,
      ki:ki || 0,
      destino:destino,
      pDestino:pDestino,

      fuerza: fuerza || 0,
      fortaleza: fortaleza || 0,
      destreza: destreza || 0,
      agilidad: agilidad || 0,
      sabiduria:sabiduria || 0,
      presencia:presencia || 0,
      principio:principio ||0,
      sentidos:sentidos ||0,


      academisismo:academisismo ||0,
      alerta:alerta ||0,
      atletismo:atletismo ||0,
      conBakemono:conBakemono ||0,
      mentir:mentir||0,
      pilotear:pilotear ||0,
      artesMarciales:artesMarciales ||0,
      medicina:medicina ||0,
      conObjMagicos:conObjMagicos ||0,
      sigilo:sigilo ||0,
      conEsferas:conEsferas ||0,
      conLeyendas:conLeyendas ||0,
      forja:forja ||0,
      conDemonio:conDemonio ||0,
      conEspiritual:conEspiritual ||0,
      manejoBlaster:manejoBlaster ||0,
      manejoSombras:manejoSombras ||0,
      tratoBakemono:tratoBakemono ||0,
      conHechiceria:conHechiceria ||0,
      medVital:medVital ||0,
      medEspiritual:medEspiritual ||0,
      rayo:rayo ||0,
      fuego:fuego ||0,
      frio:frio ||0,
      veneno:veneno ||0,
      corte:corte ||0,
      energia:energia ||0,


      ventajas:ventajas,
      

      
      apCombate: apCombate,
      valCombate: valCombate ||0,
      apCombate2:apCombate2,
      valCombate2:valCombate2 ||0,


      add1:add1,
      valAdd1: valAdd1 || 0,
      add2:add2,
      valAdd2: valAdd2 || 0,
      add3:add3,
      valAdd3: valAdd3 || 0,
      add4:add4,
      valAdd4: valAdd4 || 0,

      imagen: imagen,
      inventario: inventario,
      dominios: dominios,
      kenActual:ken || 0,
      kiActual:ki || 0,
      positiva:3,
      negativa:3,
      vidaActual:0,
      hechizos:hechizos,
      consumision:consumision,
      iniciativa:(parseInt(sentidos)+parseInt(agilidad)) || 0,
      historia:"",
      
   
    };
    localStorage.setItem('lastId', nextId);

    setPersonajes([...personajes, pjNuevo]);
     
   console.log(personajes[0].ventajas)


    setNombre("");
    setDominio("");
    setRaza("");
    setEdad("");

    setKen("");
    setKi("");
    setDestino("")
    setPdestino("")

    setFuerza("");
    setFortaleza("");
    setDestreza("");
    setAgilidad("");
    setSabiduria("");
    setPresencia("");
    setPrincipio("");
    setSentidos("");


    
    setAcademisismo("");
    setAlerta("")
    setAtletismo("")
    setConBakemono("")
    setMentir("")
    setPilotear("")
    setArtesMarciales("")
    setMedicina("")
    setConObjMagicos("")
    setSigilo("")
    setConEsferas("")
    setConLeyendas("")
    setForja("")
    setConDemonio("")
    setConEspiritual("")
    setManejoBlaster("")
    setManejoSombras("")
    setTratoBakemono("")
    setConHechiceria("")
    setMedVital("")
    setMedEspiritual("")
    setRayo("")
    setFuego("")
    setFrio("")
    setVeneno("")
    setCorte("")
    setEnergia("")
    setNaturaleza("")

   
    setApCombate("");
    setValCombate("");
    setApCombate2("");
    setValCombate2("");


    setAdd1("");
    setValAdd1("");
    setAdd2("");
    setValAdd2("");
    setAdd3("");
    setValAdd3("");
    setAdd4("");
    setValAdd4("");

    
    setImagen("/imagenBase.jpeg");
    setVentajas([]);
    


    Swal.fire({
      position: "top-center",
      icon: "success",
      title: `${nombre} fue cargado`,
      showConfirmButton: false,
      timer: 1500
    });
   
  };

  useEffect(() => {
    //console.log(personajes);
  }, [personajes]); 

  return (
    <>
    <div className='container'> 
     <div className='row col1'>
         <p style={{color:"aliceblue", fontSize:"50px", fontFamily:"cursive",display:"grid",justifyItems:"center"}}>{nombre}</p>
        <div className='row col2' >
          <div className='col1'>
            <img src={imagen}  className="imagenPj"/>
            <button onClick={handleImageUpload} className='btn btn-danger' style={{width:"30%",fontSize:"10px", marginTop:"3px"}}>Seleccionar Imagen</button>
            <input type="file" accept="image/*" ref={inputFileRef} style={{ display: 'none' }} onChange={handleFileChange} />
          </div>
          <div className='col1'>
            <label htmlFor="">Nombre:</label>
            <input type="text" value={nombre} onChange={handleChangeNombre} placeholder="ingrese nombre" />
            <label htmlFor="">Dominio:</label>
            <input type="text" value={dominio} onChange={handleChangeDominio} placeholder="ingrese dominio" />
            <label htmlFor="">Raza:</label>
            <input type="text" value={raza} onChange={handleChangeRaza} placeholder="ingrese raza" />
            <label htmlFor="">Naturaleza:</label>
            <input type="text" value={naturaleza} onChange={handleChangeNaturaleza} placeholder="ingrese naturaleza" />
            <label htmlFor="">Edad:</label>
            <input type="text" value={edad} onChange={handleChangeEdad} placeholder="ingrese edad" />
            
            <div className='col4' style={{gap:"10%" ,justifyContent: "center"}}>
              <div className='col1' >
              <label htmlFor="">Ki</label>
              <input type="number" value={ki} onChange={handleChangeKi} placeholder="0" />
              </div>
              
              <div className='col1'>
              <label htmlFor="">Ken</label>
              <input type="number" value={ken} onChange={handleChangeKen} placeholder="0" />
              </div>

              <div className='col1'>
              <label htmlFor="">Destino</label>
              <input type="number" value={destino} onChange={handleChangeDestino} placeholder="0" />
              </div>
              <div className='col1'>
              <label htmlFor="">P. Destino</label>
              <input type="number" value={pDestino} onChange={handleChangePdestino} placeholder="0" />
              </div>
            </div>
          
          </div>

        </div>
         
         
      <div className="container row col4 gradComp" style={{marginTop:"10px", padding:"15px"}}>
       
        <div className="col1" > 
         
          <label htmlFor="">Fuerza:</label>
          <input type="number" value={fuerza} onChange={handleChangeFuerza} placeholder="Fza" />
          <label htmlFor="">Fortaleza:</label>
          <input type="number" value={fortaleza} onChange={handleChangeFortaleza} placeholder="Fort" />
          <label htmlFor="">Destreza:</label>
          <input type="number" value={destreza} onChange={handleChangeDestreza} placeholder="Des"/>
          <label htmlFor="">Agilidad</label>
          <input type="number" value={agilidad} onChange={handleChangeAgilidad} placeholder="Agi" />          
          <label htmlFor="">Sabiduria</label>
          <input type="number" value={sabiduria} onChange={handleChangeSabiduria} placeholder="Sab" />
          <label htmlFor="">Presencia</label>
          <input type="number" value={presencia} onChange={handleChangePresencia} placeholder="Pre" />
          <label htmlFor="">Principio</label>
          <input type="number" value={principio} onChange={handleChangePrincipio} placeholder="Pri" />
          <label htmlFor="">Sentidos</label>
          <input type="number" value={sentidos} onChange={handleChangeSentidos} placeholder="Sen" />
          
       
        </div>
        <div className='col1'>
          
          <label htmlFor="">Academisismo</label>
          <input type="number" value={academisismo} onChange={handleChangeAcademisismo} placeholder="0" />
          <label htmlFor="">Alerta</label>
          <input type="number" value={alerta} onChange={handleChangeAlerta} placeholder="0" />
          <label htmlFor="">Atletismo</label>
          <input type="number" value={atletismo} onChange={handleChangeAtletismo} placeholder="0" />        
          <label htmlFor="">Con. Bakemono</label>
          <input type="number" value={conBakemono} onChange={handleChangeConBakemono} placeholder="0" />
          <label htmlFor="">Mentir</label>
          <input type="number" value={mentir} onChange={handleChangeMentir} placeholder="0" />
          <label htmlFor="">Pilotear</label>
          <input type="number" value={pilotear} onChange={handleChangePilotear} placeholder="0" />
          <label htmlFor="">Artes marciales</label>
          <input type="number" value={artesMarciales} onChange={handleChangeArtesMarciales} placeholder="0" />
          <input style={{border:"3px solid black", width:"80%"}}  type="text" value={apCombate} onChange={handleChangeApCombate} placeholder="ingrese Arma:"/>
          <input type="number" value={valCombate} onChange={handleChangeValCombate} placeholder="0"/>
          <input style={{border:"3px solid black", width:"80%"}} type="text" value={apCombate2} onChange={handleChangeApCombate2} placeholder="ingrese Arma:"/>
          <input type="number" value={valCombate2} onChange={handleChangeValCombate2} placeholder="0"/>
          
          <input style={{border:"3px solid black", width:"80%"}} type="text" value={add1} onChange={handleChangeAdd1} placeholder="Ap. nueva:"/>
          <input type="number" value={valAdd1} onChange={handleChangeValAdd1} placeholder="0"/>
          <input style={{border:"3px solid black", width:"80%"}} type="text" value={add2} onChange={handleChangeAdd2} placeholder="Ap. nueva:"/>
          <input type="number" value={valAdd2} onChange={handleChangeValAdd2} placeholder="0"/>
          
            
        </div>

        <div className='col1'>
          <label htmlFor="">Medicina</label>
          <input type="number" value={medicina} onChange={handleChangeMedicina} placeholder="0" />
          <label htmlFor="">Con. Obj Magicos</label>
          <input type="number" value={conObjMagicos} onChange={handleChangeObjMagicos} placeholder="0" />
          <label htmlFor="">Sigilo</label>
          <input type="number" value={sigilo} onChange={handleChangeSigilo} placeholder="0" />
          <label htmlFor="">Con. de Esferas</label>
          <input type="number" value={conEsferas} onChange={handleChangeConEsferas} placeholder="0" />  
          <label htmlFor="">Con. de Leyendas</label>
          <input type="number" value={conLeyendas} onChange={handleChangeConLeyendas} placeholder="0" />
          <label htmlFor="">Forja</label>
          <input type="number" value={forja} onChange={handleChangeForja} placeholder="0" />
          <label htmlFor="">Con. Demonio</label>
          <input type="number" value={conDemonio} onChange={handleChangeConDemonio} placeholder="0" />
          <label htmlFor="">Con. Espiritual</label>
          <input type="number" value={conEspiritual} onChange={handleChangeConEspiritual} placeholder="0" />
          <label htmlFor="">Manejo de Blaster</label>
          <input type="number" value={manejoBlaster} onChange={handleChangeManejoBlaster} placeholder="0" />

          <input style={{border:"3px solid black", width:"80%"}} type="text" value={add3} onChange={handleChangeAdd3} placeholder="Ap. nueva:"/>
          <input type="number" value={valAdd3} onChange={handleChangeValAdd3} placeholder="0"/>
          <input style={{border:"3px solid black", width:"80%"}} type="text" value={add4} onChange={handleChangeAdd4} placeholder="Ap. nueva:"/>
          <input type="number" value={valAdd4} onChange={handleChangeValAdd4} placeholder="0"/>


          
        </div>

        <div className='col1'>
          <label htmlFor="">Manejo de sombras</label>
          <input type="number" value={manejoSombras} onChange={handleChangeManejoSombras} placeholder="0" />
          <label htmlFor="">Trato Bakemono</label>
          <input type="number" value={tratoBakemono} onChange={handleChangeTratoBakemono} placeholder="0" />
          <label htmlFor="">Con. de hechiceria</label>
          <input type="number" value={conHechiceria} onChange={handleChangeConHechiceria} placeholder="0" />
          <label htmlFor="">Meditacion vital</label>
          <input type="number" value={medVital} onChange={handleChangeMedVital} placeholder="0" />
          <label htmlFor="">Meditacion Espiritual</label>
          <input type="number" value={medEspiritual} onChange={handleChangeMedEspiritual} placeholder="0" />
          <label htmlFor="">Res. Esp. Rayo</label>
          <input type="number" value={rayo} onChange={handleChangeRayo} placeholder="0" />
          <label htmlFor="">Res. Esp. Veneno</label>
          <input type="number" value={veneno} onChange={handleChangeVeneno} placeholder="0" />
          <label htmlFor="">Res. Esp. Fuego</label>
          <input type="number" value={fuego} onChange={handleChangeFuego} placeholder="0" />
          <label htmlFor="">Res Esp. Frio</label>
          <input type="number" value={frio} onChange={handleChangeFrio} placeholder="0" />
          <label htmlFor="">Res. Esp. Corte</label>
          <input type="number" value={corte} onChange={handleChangeCorte} placeholder="0" />
          <label htmlFor="">Res. Esp. Energia</label>
          <input type="number" value={energia} onChange={handleChangeEnergia} placeholder="0" />
        </div>  

      </div>

     
    </div>


      
     
    </div>
    <div style={{padding:"2rem"}}>
      <Ventajas setVentajas={setVentajas} ventajas={ventajas}></Ventajas>
    </div>
    <div className='col1'>
    <button className="btn btn-success" style={{width:"150px", marginTop:"10px"}} onClick={agregarPersonaje}>Crear Personaje</button>
    </div>
    </>
    
  );
};

