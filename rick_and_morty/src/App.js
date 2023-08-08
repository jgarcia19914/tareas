import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import axios from 'axios';



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
         <SearchBar onSearch={onSearch}/>
         <Cards characters={characters}  onClose={onClose}/>
         </div>
   );
};

export default App;
