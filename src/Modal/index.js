import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TodoContext } from '../Context/index';
function Modal(){
    const {
        openModal,
        setOpenModal,
        tareas,
        saveTodos,
        inputClass,
        setInputClass,
        taskName,
        setTaskName,
        nameHolder,
        setNameHolder
    } = React.useContext(TodoContext);
    
    const cancel = () => {
        setOpenModal(!openModal);
    }
    const empty = () => {
        setInputClass('empty');
        setNameHolder('Enter a valid name !')
    }
    const addTask = () => {
        const newTodos = [...tareas];
        if(taskName === null || taskName === ''){
            return empty();
        }else{
            newTodos.push({text: taskName, completed: false});
            saveTodos(newTodos);
            setInputClass('input');
            setNameHolder('Enter task');
            setTaskName('');
        }
        setOpenModal(!openModal);
    }
    return ReactDOM.createPortal(
       <div className='Modal'>
            <h1 className='title'>Enter new task</h1>
            <input 
                type='text'
                className={inputClass}
                placeholder={nameHolder}
                value={taskName}
                onChange={(event) => {
                    setTaskName(event.target.value);
                }}
                onClick={() => {
                    if(inputClass === 'empty'){
                        setInputClass('input');
                        setNameHolder('Enter task');
                        setTaskName('');
                    }
                }}
            />
            <button className='buttonModal' onClick={addTask}>Add</button>
            <button className='buttonCancel' onClick={cancel}>Cancel</button>
       </div>,
       document.getElementById('modal')
    );
}
export { Modal };