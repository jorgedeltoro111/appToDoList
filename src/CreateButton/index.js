import React from 'react';
import './index.css';
import { TodoContext } from '../Context/index';
function CreateTodoButton(){
    var newText;
    const createTodo = () => {
        const newTodos = [...tareas];
        newText = prompt('Enter new task');
        if(newText === null || newText === ''){
            return alert('No task was entered.');
        }else{
            newTodos.push({text: newText, completed: false});
            saveTodos(newTodos);
        }
    }
    const {
        tareas,
        saveTodos
    } = React.useContext(TodoContext);
    return (
        <div className='containerButton'> {/**Asi creamos un evento */}
            <button className='button' onClick={() => {createTodo()}}><span>+</span><i></i></button>
            <div className='parrafo'>
                <p className='autor'>Created and designed by Jorge Enrique Hernández Del Toro.</p>
            </div>
        </div>
    );
}

export {CreateTodoButton};