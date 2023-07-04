import React from 'react';//forma correcta de importar react
import './index.css';
import { TodoContext } from '../Context/index';//importamos el contexto
function TodoSearch() {//vamos a recibir el estado y la funcion para actualizar el estado
    const {
        searchState,
        setSearchState
    } = React.useContext(TodoContext);//desestructuramos el contexto
    return (
    <div className='inputContainer'>
        <input 
        className='textInput'
        placeholder='Wash my car'
        value={searchState}//valor inicial del estado que es una cadena vacia 
        onChange={(event) => {
            setSearchState(event.target.value);//actualizamos la funcion de 'set' para actualizar el estado de la variable
        }} 
        />
        <label className='label'>Search 🔍︎</label>
    </div>
    );
}

export { TodoSearch };