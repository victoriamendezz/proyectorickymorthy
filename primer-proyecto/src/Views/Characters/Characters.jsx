import { useEffect, useState } from "react";
import{ Link } from'react-router-dom';

import './Characters.css'



import Nav from '../../Components/Nav/Navbar'
import Card from '../../Components/Card/Card'
import Filter from '../../Components/Filters/Filters'

export default function Characters (){
    let [itemMenu]=useState("Characters");
    let [personajes,setPersonajes]=useState([]);
    let [listaCompleta,setListaCompleta]=useState([]);
    let [filtros]=useState([
        {
            nombre:"Alive",
            filtro:'Character Alive'
        },{  
            nombre:"Dead",
            filtro:'Character Dead'
        },{
            nombre:'Female',
            filtro:'Female'
        },{
            nombre:"Male",
            filtro:'Male'
        },{
            nombre:"unknown",
            filtro:'Origin Unknown'
        }]);
    let[filtrosAplicados,setFiltrosAplicados]=useState([]);
    
    let traerPersonajes=async()=>{
        let dato= await fetch("https://rickandmortyapi.com/api/character")
        .then(resp=>resp.json())
        .catch(err=>console.log("Hubo un err:"+ err))
        
        return dato
    }

    let aplicarFiltros=(event)=>{
        let nombreCheckbox=event.target.id;

        if(event.target.checked === true){
            console.log("Aplicar filtro")
            setFiltrosAplicados([...filtrosAplicados,nombreCheckbox]);
            //console.log(personajes)
        }else{
            console.log("sacar filtro")
            let filtrosRestantes=filtrosAplicados.filter((el)=>el !== nombreCheckbox);
            setPersonajes(listaCompleta);
            setFiltrosAplicados(filtrosRestantes)
    
        }    
           
    }


    
    let guardarPersonajes=async()=>{
       let info= await traerPersonajes();

       console.log(info.results)
       let listaPersonajes=info.results;
       setPersonajes(listaPersonajes)
     

    }
     useEffect(()=>{

        let guardarPersonajes=async()=>{
            let info= await traerPersonajes();
     
            console.log(info.results)
            let listaPersonajes=info.results;
            setPersonajes(listaPersonajes)
    }
    guardarPersonajes();
     },[])


   let handlerChange=(event)=>(event.target.id)

   useEffect( ()=>{
    
  filtrosAplicados.forEach((filtroNombre)=>{
        let resultado;
        if(filtroNombre === "Alive" || filtroNombre === "Dead"){
                resultado=personajes.filter((personaje)=> personaje.status === filtroNombre)
            }
            if(filtroNombre === "Female" || filtroNombre === "Male"){
                resultado=personajes.filter((personaje)=> personaje.gender === filtroNombre)
            }
            if(filtroNombre === "unknown"){
                resultado=personajes.filter((personaje)=> personaje.origin.name === filtroNombre)
                
            }
            setPersonajes(resultado)
    })
   
},[filtrosAplicados])



    return(
        <div>
            <Nav itemMenu={itemMenu}/>
            <section>
            <h2 className="titulo-filtros">Filters</h2>
            <form className="d-flex gap-5 p-5">
            {filtros.map((item)=>{ return <Filter key={item.nombre} valorFiltro={item.filtro} idFiltro={item.nombre} handlerChange={aplicarFiltros}/>})}
           </form>
            </section>
            <button onClick={guardarPersonajes}>Traer Info</button>
            <section>

                {personajes.map((personaje)=>{
               return <Card key={personajes.id} data={personaje} />
                })}
              {personajes.length>0?
                    personajes.map((personaje)=>{
                                return <Card key={personaje.id} data={personaje}/>
                    }):
                    <div className="alert  d-flex gap-2" role="alert">
                        <i className="bi bi-exclamation-triangle-fill fs-5"></i>{}
                        <p className='m-0'>Sorry! There are no characters width all those properties</p>
                    </div>
                }

            </section>
        </div>
    )
}