

import { InfoCard } from '../InfoCard';
import './Card.css'

import { useState } from 'react';


export default function Card({data}) {
    const [show,setShow]= useState(false);
   const[hide,setHide]=useState("card-cerrada");
    
    const mostrarLista=()=>{
        setShow(true);
         setHide("card-abierta")
    }

    return(
       <div className={show=== true? "contenedor-tarjetas2":"contenedor-tarjetas"}>
           <img src={data.image} alt="imagen-personaje"/>
            <h3>{data.name}</h3>
            <button className={show?"card-abierta":"card-cerrada"} onClick={mostrarLista}>Know More..</button>
           {show === true? <InfoCard status={data.status} genero={data.gender} especie={data.species} origen={data.origin.name} setShow={setShow}/>:''}
       </div> 
       
    )
} 