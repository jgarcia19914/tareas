import Cards from "../components/Cards";

export default function Home ({characters,onClose}){
   
   return(
        <div>
        <h1>BIENVENIDO BUSCA EL ID DE UN PERSONAJE</h1>
        <Cards characters={characters}  onClose={onClose}/>
        </div>
    );
}