import '../style/card.css'


export default function Card({name,status,species,gender,image,origin}) {
   return (
      <div className="Card">
          <button className='ButtonCard'>X</button>
          <div className='TextCard'>
         <h1>{name}</h1>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{origin.name}</h2>
         <h2>{gender}</h2> 
         </div>
         <img className="imgcard" src={image} alt='imagen' /> 
      </div>
   );
}
