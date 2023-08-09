import Cards from "../components/Cards";

export default function Home ({characters,onClose}){
   
   return(
        <div>
        <h1>prueba</h1>
        <Cards characters={characters}  onClose={onClose}/>
        </div>
    );
}