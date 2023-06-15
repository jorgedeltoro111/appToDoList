import React from 'react';
import './CreateButton.css';
function CreateTodoButton(props){
    var newText;
    const createTodo = () => {
        const newTodos = [...props.tareas];
        newText = prompt('Enter new task');
        if(newText === null || newText === ''){
            return alert('No task was entered.');
        }else{
            newTodos.push({text: newText, completed: false});
            props.setTareas(newTodos);
        }
    }
    return (
        <div className='containerButton'> {/**Asi creamos un evento */}
            <button className='button' onClick={() => {createTodo()}}><span>+</span><i></i></button>
            <p className='autor'>Created and designed by Jorge Enrique Hernández Del Toro, June 15, 2023.</p>
        </div>
    );
}

export {CreateTodoButton};