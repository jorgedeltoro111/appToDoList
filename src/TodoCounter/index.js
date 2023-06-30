import React from 'react'; 
import './index.css';

function TodoCounter({
  completedTodos,
  totalTodos
}){
     return (
      <div className='counterContainer'>
        <h2 className='TodoCounter'>Completed {completedTodos} of {totalTodos} TODO's</h2>
      </div>
     );
}

export { TodoCounter }; //exportacion correcta.