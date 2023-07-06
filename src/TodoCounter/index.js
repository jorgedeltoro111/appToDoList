import React from 'react'; 
import './index.css';
import { TodoContext } from '../Context/index';
function TodoCounter(){
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  return (
  <div className='counterContainer'>
    <h2 className='TodoCounter'>Completed <span className='number'>{completedTodos}</span> of <span className='number'>{totalTodos}</span> TODO's</h2>
    <progress value={completedTodos} max={totalTodos} className='bar'>hola</progress>
  </div>
  );
}

export { TodoCounter }; //exportacion correcta.