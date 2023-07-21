import React from 'react';
import '../style/Boton.css'



function Boton(props){
    const esOperador = valor=> {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };



    return(
        <div
        className={`Boton-contendor ${esOperador(props.children) ? 'operador' : null}`} >
        {props.children}
        </div>
    );
}

export default Boton;