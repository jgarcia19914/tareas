import Card from './Card';

export default function Cards({characters, onClose}) {
   return <div>
   {characters.map(function (charater){
      return(
   
   <Card 
   key={charater.id}
   id={charater.id}
   name={charater.name}
   status={charater.status}
   species={charater.species}
   origin={charater.origin.name}
   gender={charater.gender}
   image={charater.image}
   onClose={onClose}
   />
      )
    } )}

   </div>; 
}
