import { useState } from 'react';
import '../style/search.css'
import {Link} from "react-router-dom"

export default function SearchBar({onSearch}) {
   const[id ,setId]=useState("");

   const handleChange =(event) => {
      setId(event.target.value);
   };
 
   return (
      <div className='InputContenedor'>
      <Link to='/home'>
      <button>Home</button>
      </Link>
      <Link to='/about'> 
      <button>About</button>
      </Link>
         <input className='InputSearch' type='search' onChange={handleChange} />
         <button className='ButtonSearch' onClick={()=>{onSearch(id)}}>Agregar</button> 
      </div>
   ); 
}
