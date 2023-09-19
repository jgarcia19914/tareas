import HenryLogo from "../img/HenryLogo.webp"
import original from "../img/original.png"
import "../style/about.css"

const About =()=> {
    return(
        <div>
        <h1>JONATAN GARCIA ROSERO</h1>
        <p>PROYECTO INTEGRADOR</p> 
        <img src={original} alt="logo2"/>
        <img src={HenryLogo} alt="logo_henry"></img>
        <h2>HENRY</h2>       
        </div>

    )
};

export default About;