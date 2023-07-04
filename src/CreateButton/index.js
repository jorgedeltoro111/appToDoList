import React from 'react';
import './index.css';
import { TodoContext } from '../Context/index';
function CreateTodoButton(){
    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    
    return (
        <div className='containerButton'> {/**Asi creamos un evento */}
            <button className='button' onClick={() => {setOpenModal(!openModal)}}><span>+</span><i></i></button>
            <div className='parrafo'>
                <p className='autor'>Created and designed by Jorge Enrique Hernández Del Toro.</p>
            </div>
        </div>
    );
}

export {CreateTodoButton};