import '../style/card.css'
import {Link} from "react-router-dom"

export default function Card({id,name,status,species,gender,image,origin, onClose}) {
   return (
      <div className="Card">
          <button className='ButtonCard' onClick={()=> onClose(id)}>X</button>
          <div className='TextCard'>
         <Link to={`/detail/${id}`}>
          <h1>{name}</h1>
          </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{origin.name}</h2>
         <h2>{gender}</h2> 
         </div>
         <img className="imgcard" src={image} alt='imagen' /> 
      </div>
   );
}
