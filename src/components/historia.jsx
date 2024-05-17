

export const Historia = ({historiaN,setHistoriaN}) => {

   
 const handleChange=(event)=>{
   setHistoriaN(event.target.value)
 }

  return (
    <div className="gradComp" style={{padding:"20px"}}>
         <p style={{color:"aliceblue", fontSize:"30px", fontFamily:"inpact", margin:"10px"}}>HISTORIA</p>
      <textarea name="" id="" value={historiaN} onChange={handleChange} className="historiaPj"></textarea>
    </div>
  )
}

