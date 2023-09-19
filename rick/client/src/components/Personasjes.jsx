import { useEffect, useState } from "react";
import "../style/personajes.css"

const URL ="https://rickandmortyapi.com/api/character";


export default function Personasjes() {

  const [characters, setCharacters] = useState([])
  const fetchCharacter =(URL)=>{
   fetch(URL)
   .then(response => response.json())
   .then(data => {
     setCharacters(data.results)
    })
    
   .catch(error => console.log(error));
 };

 useEffect(() => {
   fetchCharacter(URL);
 }, []);



  return (
    <div className='contenedor1'>
    {
        characters.map((item,index)=>(
            <div key={index} className='col'>
            <div className='cardtarjeta'>  
                 <img className="imegentarjeta" src={item.image} alt='imagenterjeta'/>
                 <h1>{item.name}</h1>
                 <h2>{item.gender}</h2>
                 <h5>{item.status}</h5>
                 <p>Especie:{item.species}</p>
                 <p>Location:{item.location.name}</p>
               
            </div>
            </div>
        ))
    }

    </div>
  )
}

