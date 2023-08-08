import { useState } from 'react';
import '../style/search.css'

export default function SearchBar({onSearch}) {
   const[id ,setId]=useState("");

   const handleChange =(event) => {
      setId(event.target.value);
   };
 
   return (
      <div className='InputContenedor'>
         <input className='InputSearch' type='search' onChange={handleChange} />
         <button className='ButtonSearch' onClick={()=>{onSearch(id)}}>Agregar</button> 
      </div>
   ); 
}
