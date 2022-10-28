import React, { useState } from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario (props){

    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value);
    };
    const manejarEnvio = e => {
        e.preventDefault(); //sirve para que la pagina no recargue al momento de agregar la tarea
        
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completda: false
        }
        props.onSubmit(tareaNueva);
    };

    return(
        <form 
            className="tarea-formulario"
            onSubmit={ manejarEnvio }
        > 
            <input 
                className="tarea-input"
                type="text"
                placeholder="Coloca tu SpiderTarea aqui"
                name="testo"
                onChange={ manejarCambio }
            />
            <button className="tarea-boton">
                Agregar SpiderTarea
            </button>
        </form>
    );
}
export default TareaFormulario;