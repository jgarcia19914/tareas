import './App.css';
import SearchB from './components/SearchBar';
import { useState } from 'react';
import axios from 'axios';
import {Routes,Route} from "react-router-dom"
import Home from './views/home';
import About from './views/about';
import Detail from './components/Detail';
import Form from './components/form';
import Personasjes from './components/Personasjes';


function App() {
   const [characters, setCharacters] =useState([]);

   function onSearch(id) {
      const charaterExist = characters.some((character)=> character.id === parseInt(id));
   if (charaterExist){
      window.alert("esta duplicado");
      return;
   }
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
     });
   }

   function onClose(id){
      setCharacters(characters.filter(char => char.id !== id))   
   }
return (
    <div className='App'>
      <div className='header'>
      <div>
      <Form/>
      </div>
       </div>
      <SearchB onSearch={onSearch}/>
   <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/personajes" element={<Personasjes characters={characters}/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/home" element={ <Home characters={characters} onClose={onClose} />}/>
   </Routes> 
     
   </div>
   );
};

export default App;
