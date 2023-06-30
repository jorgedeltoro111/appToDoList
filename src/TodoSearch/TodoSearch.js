import React from 'react';//forma correcta de importar react
import './TodoSearch.css';

function TodoSearch({
    searchState,
    setSearchState,
}) {//vamos a recibir el estado y la funcion para actualizar el estado

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