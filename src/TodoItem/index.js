import React from 'react';
import "./index.css";
function TodoItem(props) {
    const completedTodo = (index) => {
        const newTodos = [...props.tareas];
        if(newTodos[index].completed === false){
            newTodos[index].completed = true;
            props.saveTodos(newTodos);
        }else{
            newTodos[index].completed = false;
            props.saveTodos(newTodos);
        }
    }
    return (
        <li className='TodoItem'>
            <span className={`Icon Icon-check ${props.completed && 'checkBox--active'}`}><button className='checkBox' type="checkbox" onClick={() => {completedTodo(props.index)}}>✓</button></span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
            <div className='delete'>
                <span className='Icon Icon-delete' onClick={() => {
                    const newTodos = [...props.tareas];
                    newTodos.splice(props.index, 1);
                    props.saveTodos(newTodos);
                }}>Delete</span>
            </div>
        </li>
    );
}

export { TodoItem };