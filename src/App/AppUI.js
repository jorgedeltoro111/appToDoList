import React from 'react';
import { TodoCounter } from '../TodoCounter/index';
import { TodoItem } from '../TodoItem/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { CreateTodoButton } from '../CreateButton/index';
import { TodoContext } from '../Context/index';
import { Modal } from '../Modal/index';
function AppUI() {
    const {
      searchState,
      filteredTodos,
      tareas,
      saveTodos,
      openModal,
    } = React.useContext(TodoContext);
    return(
    <div className="App">{/**Esta etiqueta es la contenedora de todos los componentes */}
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
      {
      searchState === '' ? tareas.map((todo, index) => (//si esta vacio mostramos todas las tareas
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          index={index}
          tareas={tareas}
          saveTodos={saveTodos}
        />
      )): 
      tareas.map((todo, index) => {
        var i = 0;
        if(filteredTodos[i] && todo.text.toLowerCase() === filteredTodos[i].text.toLowerCase()){//si el texto incluye el texto que estamos buscando
          return (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              index={index}
              tareas={tareas}
              saveTodos={saveTodos}
            />
          );
        }
        i++;
        return null;
      })
      }
      </TodoList>
      <CreateTodoButton/>
      {openModal && (
        <Modal/>
      )}
    </div> 
    );
}
export { AppUI };