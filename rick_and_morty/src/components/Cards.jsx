import Card from './Card';

export default function Cards({characters}) {
   return <div>
   {characters.map((character) => (
   <Card 
   key={character.id}
   id={character.id}
   name={character.name}
   status={character.status}
   species={character.species}
   origin={character.origin.name}
   gender={character.gender}
   image={character.image}
   onClose={()=> window.alert('Emulamos que se cierra')}
   
   />
   ))}

   </div>; 
}
