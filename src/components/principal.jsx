import { MiniCard } from "./miniCard.jsx"
import { CargarPersonaje } from "./cargarPersonaje.jsx"
import { useState } from "react"
import { useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { FichaPersonaje } from "./fichaPersonaje.jsx"
import { Tiradas } from "./tiradas.jsx";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, horizontalListSortingStrategy, arrayMove,verticalListSortingStrategy} from "@dnd-kit/sortable";

import Swal from 'sweetalert2';

export const Principal= ()=> {
    const [personajes, setPersonajes] = useState(() => {
        const storedPersonajes = localStorage.getItem("personajes");
        return storedPersonajes ? JSON.parse(storedPersonajes) : [];
      });

    useEffect(() => {
        localStorage.setItem("personajes", JSON.stringify(personajes));
      }, [personajes]);


    const [pjSeleccionado,setPjSeleccionado]=useState("")

    const [nombre,setNombre]=useState("")
    const [imagen,setImagen]=useState("/imagenBase.jpeg")
    const [dominio,setDominio]=useState("")
    const [raza,setRaza]=useState("")
    const [edad,setEdad]=useState("")
    const [ken,setKen]=useState("")
    const [ki,setKi]=useState("")
    const [destino,setDestino]=useState("")
    const [pDestino,setPdestino]=useState("")
    const [fuerza,setFuerza]=useState("")
    const [fortaleza,setFortaleza]=useState("")
    const [destreza,setDestreza]=useState("")
    const [agilidad,setAgilidad]=useState("")
    const [sabiduria,setSabiduria]=useState("")
    const [presencia,setPresencia]=useState("")
    const [principio,setPrincipio]=useState("")
    const [sentidos,setSentidos]=useState("")

    const [academisismo,setAcademisismo]=useState("")
    const [alerta,setAlerta]=useState("")
    const [atletismo,setAtletismo]=useState("")
    const [conBakemono,setConBakemono]=useState("")
    const [mentir,setMentir]=useState("")
    const [pilotear,setPilotear]=useState("")
    const [artesMarciales,setArtesMarciales]=useState("")
    const [medicina,setMedicina]=useState("")
    const [conObjMagicos,setConObjMagicos]=useState("")
    const [sigilo,setSigilo]=useState("")
    const [conEsferas,setConEsferas]=useState("")
    const [conLeyendas,setConLeyendas]=useState("")
    const [forja,setForja]=useState("")
    const [conDemonio,setConDemonio]=useState("")
    const [conEspiritual,setConEspiritual]=useState("")
    const [manejoBlaster,setManejoBlaster]=useState("")
    const [manejoSombras,setManejoSombras]=useState("")
    const [tratoBakemono,setTratoBakemono]=useState("")
    const [conHechiceria,setConHechiceria]=useState("")
    const [medVital,setMedVital]=useState("")
    const [medEspiritual,setMedEspiritual]=useState("") 
    const [rayo,setRayo]=useState("")
    const [fuego,setFuego]=useState("")
    const [frio,setFrio]=useState("")
    const [veneno,setVeneno]=useState("")
    const [corte,setCorte]=useState("")
    const [energia,setEnergia]=useState("")



    const [apCombate,setApCombate]=useState("")
    const [valCombate,setValCombate]=useState("")
    const [apCombate2,setApCombate2]=useState("")
    const [valCombate2,setValCombate2]=useState("")

    const [add1,setAdd1]=useState("")
    const [valAdd1,setValAdd1]=useState("")
    const [add2,setAdd2]=useState("")
    const [valAdd2,setValAdd2]=useState("")
    const [add3,setAdd3]=useState("")
    const [valAdd3,setValAdd3]=useState("")
    const [add4,setAdd4]=useState("")
    const [valAdd4,setValAdd4]=useState("")



    const [activeKey, setActiveKey] = useState(""); 

    const [ventajas, setVentajas] = useState([]);

    const [inventario, setInventario] = useState([]);
    const [dominios, setDominios] = useState([]);
    const [hechizos, setHechizos] = useState([]);

    const [kenActual, setKenActual] = useState("");
    const [kiActual, setKiActual] = useState("");

    const [positiva, setPositivaActual] = useState("");
    const [negativa, setNegativaActual] = useState("");
    const [vidaActual,setVidaActual]=useState("")
    const [naturaleza,setNaturaleza]=useState("")

    const [consumision,setConsumision]=useState("")
  
    const pj = personajes.find(pj => pj.id === pjSeleccionado);
    const [vivoMuerto,setVivoMuerto]=useState(true)



    const [message, setMessage] = useState('');
    const [sock, setSock] = useState([]);
    
   const handleDragEnd=(event)=>{
    //console.log("orden original: ",personajes)
    const {active, over}=event
    
    
      const oldIndex= personajes.findIndex( pj=>pj.id===active.id)
      const newIndex= personajes.findIndex( pj=>pj.id===over.id)
      //console.log("oldIndex ",oldIndex);
      //console.log("newIndex ",newIndex);
      const newOrder= arrayMove(personajes,oldIndex,newIndex) 
      //console.log("nuevo orden: ",newOrder)
      setPersonajes(newOrder)
  }



  const eliminarPj = (id) => {
    Swal.fire({
        title: '¿quieres eliminar el personaje?',
        text: '¡No podrás revertir esto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo'
    }).then((result) => {
        if (result.isConfirmed) {
            const listaNueva = personajes.filter((pj) => pj.id !== id);
            setPjSeleccionado("");
            setPersonajes(listaNueva);
            Swal.fire(
                '¡Eliminado!',
                'Tu personaje ha sido eliminado.',
                'success'
            );
        }
    });
};

  return (
    <>
     <Accordion defaultActiveKey={['1']}  alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header >Cargar nuevo personaje</Accordion.Header>
        <Accordion.Body className="fondoBody">
        <CargarPersonaje 
        setActiveKey={setActiveKey}
        personajes={personajes} 
        setPersonajes={setPersonajes} 
        setNombre={setNombre} 
        setRaza={setRaza} 
        raza={raza} 
        setEdad={setEdad} 
        edad={edad} 
        setDominio={setDominio} 
        dominio={dominio} 
        ken={ken}
        setKen={setKen}
        ki={ki}
        setKi={setKi}
        destino={destino}
        setDestino={setDestino}
        pDestino={pDestino}
        setPdestino={setPdestino}

        setFuerza={setFuerza} 
        setFortaleza={setFortaleza} 
        setAgilidad={setAgilidad}
        setSabiduria={setSabiduria}
        setPresencia={setPresencia}
        setPrincipio={setPrincipio}
        setSentidos={setSentidos}
        sabiduria={sabiduria}
        presencia={presencia}
        principio={principio}
        sentidos={sentidos}

        setImagen={setImagen} 
        setDestreza={setDestreza} 
        setApCombate={setApCombate} 
        setValCombate={setValCombate} 
        setApCombate2={setApCombate2} 
        setValCombate2={setValCombate2}

        nombre={nombre} 
        fuerza={fuerza} 
        fortaleza={fortaleza} 
        agilidad={agilidad}  
        imagen={imagen} 
        destreza={destreza} 
        apCombate={apCombate} 
        valCombate={valCombate}
        apCombate2={apCombate2} 
        valCombate2={valCombate2}

        academisismo={academisismo}
        alerta={alerta}
        atletismo={atletismo}
        conBakemono={conBakemono}
        mentir={mentir}
        pilotear={pilotear}
        artesMarciales={artesMarciales}
        medicina={medicina}
        conObjMagicos={conObjMagicos}
        sigilo={sigilo}
        conEsferas={conEsferas}
        conLeyendas={conLeyendas}
        forja={forja}
        conDemonio={conDemonio}
        conEspiritual={conEspiritual}
        manejoBlaster={manejoBlaster}
        manejoSombras={manejoSombras}
        tratoBakemono={tratoBakemono}
        conHechiceria={conHechiceria}
        medVital={medVital}
        medEspiritual={medEspiritual}
        rayo={rayo}
        fuego={fuego}
        frio={frio}
        veneno={veneno}
        corte={corte}
        energia={energia}

        setAcademisismo={setAcademisismo}
        setAlerta={setAlerta}
        setAtletismo={setAtletismo}
        setConBakemono={setConBakemono}
        setMentir={setMentir}
        setPilotear={setPilotear}
        setArtesMarciales={setArtesMarciales}
        setMedicina={setMedicina}
        setConObjMagicos={setConObjMagicos}
        setSigilo={setSigilo}
        setConEsferas={setConEsferas}
        setConLeyendas={setConLeyendas}
        setForja={setForja}
        setConDemonio={setConDemonio}
        setConEspiritual={setConEspiritual}
        setManejoBlaster={setManejoBlaster}
        setManejoSombras={setManejoSombras}
        setTratoBakemono={setTratoBakemono}
        setConHechiceria={setConHechiceria}
        setMedVital={setMedVital}
        setMedEspiritual={setMedEspiritual}
        setRayo={setRayo}
        setFuego={setFuego}
        setFrio={setFrio}
        setVeneno={setVeneno}
        setCorte={setCorte}
        setEnergia={setEnergia}

        ventajas={ventajas}
        setVentajas={setVentajas}

        inventario={inventario}
        
        dominios={dominios}

        hechizos={hechizos}

        kenActual={kenActual}
        kiActual={kiActual}
        positiva={positiva}
        negativa={negativa}
        vidaActual={vidaActual}


          add1={add1}
          setAdd1={setAdd1}
          valAdd1={valAdd1}
          setValAdd1={setValAdd1}

          add2={add2}
          setAdd2={setAdd2}
          valAdd2={valAdd2}
          setValAdd2={setValAdd2}
          
          add3={add3}
          setAdd3={setAdd3}
          valAdd3={valAdd3}
          setValAdd3={setValAdd3}
          
          add4={add4}
          setAdd4={setAdd4}
          valAdd4={valAdd4}
          setValAdd4={setValAdd4}
          consumision={consumision}
          naturaleza={naturaleza}
          setNaturaleza={setNaturaleza}
          

      

        
        ></CargarPersonaje>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" >
        <Accordion.Header>Personajes cargados</Accordion.Header>
        <Accordion.Body className="container-fluid fondoBody imgZnk">   
            <DndContext collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}>
                <SortableContext items={personajes} strategy={horizontalListSortingStrategy}>
                <div className="miniCartas">
                { personajes.length>0 ?(
                  personajes.map(pj=><MiniCard vivoMuerto={vivoMuerto} setVivoMuerto={setVivoMuerto} setActiveKey={setActiveKey} personajes={personajes} setPersonajes={setPersonajes} key={pj.id} id={pj.id} nombre={pj.nombre} dominio={pj.dominio} imagen={pj.imagen} setPjSeleccionado={setPjSeleccionado} pjSeleccionado={pjSeleccionado}></MiniCard>)):(<p style={{color:"aliceblue"}}>No exiten personajes cargados</p>)} 
                </div>
                </SortableContext>     
            </DndContext>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" >
        <Accordion.Header>Ficha de personaje</Accordion.Header>
        <Accordion.Body className="fondoBody">
         {pjSeleccionado ? (
          <FichaPersonaje
          vivoMuerto={vivoMuerto}
          setVivoMuerto={setVivoMuerto}
            personajes={personajes}
            setPersonajes={setPersonajes}
            personaje={pj}
            key={pj.id} 
            id={pj.id}
            nombre={pj.nombre}
            imagen={pj.imagen}
            dominio={pj.dominio}
            raza={pj.raza}
            edad={pj.edad}

            ken={pj.ken}
            ki={pj.ki}
            destino={pj.destino}
            pDestino={pj.pDestino}
       

            fuerza={pj.fuerza}
            fortaleza={pj.fortaleza}
            destreza={pj.destreza}
            agilidad={pj.agilidad}
            sabiduria={pj.sabiduria}
            presencia={pj.presencia}
            principio={pj.principio}
            sentidos={pj.sentidos}
            academisismo={pj.academisismo}
            alerta={pj.alerta}
            atletismo={pj.atletismo}
            conBakemono={pj.conBakemono}
            mentir={pj.mentir}
            pilotear={pj.pilotear}
            artesMarciales={pj.artesMarciales}
            medicina={pj.medicina}
            conObjMagicos={pj.conObjMagicos}
            sigilo={pj.sigilo}
            conEsferas={pj.conEsferas}
            conLeyendas={pj.conLeyendas}
            forja={pj.forja}
            conDemonio={pj.conDemonio}
            conEspiritual={pj.conEspiritual}
            manejoBlaster={pj.manejoBlaster}
            manejoSombras={pj.manejoSombras}
            tratoBakemono={pj.tratoBakemono}
            conHechiceria={pj.conHechiceria}
            medVital={pj.medVital}
            medEspiritual={pj.medEspiritual}
            rayo={pj.rayo}
            fuego={pj.fuego}
            frio={pj.frio}
            veneno={pj.veneno}
            corte={pj.corte}
            energia={pj.energia}


            apCombate={pj.apCombate}
            valCombate={pj.valCombate}
            apCombate2={pj.apCombate2}
            valCombate2={pj.valCombate2}


            add1={pj.add1}
            valAdd1={pj.valAdd1}
            add2={pj.add2}
            valAdd2={pj.valAdd2}
            add3={pj.add3}
            valAdd3={pj.valAdd3}
            add4={pj.add4}
            valAdd4={pj.valAdd4}

          
            ventajas={pj.ventajas}
            inventario={pj.inventario} 
            dominios={pj.dominios}
            kenActual={pj.kenActual}
            kiActual={pj.kiActual} 
            positiva={pj.positiva}
            negativa={pj.negativa}
            vidaActual={pj.vidaActual}
            hechizos={pj.hechizos}
            consumision={pj.consumision}
            iniciativa={pj.iniciativa}
            historia={pj.historia}
            naturaleza={pj.naturaleza}
            eliminarPj={eliminarPj}



          />
        ):(<p style={{color:"aliceblue"}}>selecione un personaje de personajes cargados</p>)}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Tiradas</Accordion.Header>
        <Accordion.Body className="fondoBody">
        {pjSeleccionado ? (
          <Tiradas
            personajes={personajes}
            setPersonajes={setPersonajes}
            key={pj.id} 
            id={pj.id}
            nombre={pj.nombre}
            imagen={pj.imagen}
            destreza={pj.destreza}
            apCombate={pj.apCombate}
            valCombate={pj.valCombate}
            message={message}
            setMessage={setMessage}
            sock={sock}
            setSock={setSock}
          />
        ):(<p style={{color:"aliceblue"}}>selecione un personaje de personajes cargados</p>)}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  
    </>
   
  );
}




