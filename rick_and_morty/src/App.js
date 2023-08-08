import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import axios from 'axios';



function App() {
   const [characters, setCharacters] =useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
return (
      <div className='App'>
         <SearchBar onSearch={onSearch}/>
         <Cards characters={characters} />
         </div>
   );
};

export default App;
