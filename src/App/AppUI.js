import React from 'react';
import { TodoCounter } from '../TodoCounter/index';
import { TodoItem } from '../TodoItem/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { CreateTodoButton } from '../CreateButton/index';

function AppUI({
    completedTodos,
    totalTodos,
    searchState,
    setSearchState,
    filteredTodos,
    tareas,
    saveTodos
}) {
    return(
    <div className="App">{/**Esta etiqueta es la contenedora de todos los componentes */}
      <TodoCounter
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />{/**Contenedor donde ira nuestro contador encabezado */}
      <TodoSearch
        searchState={searchState}//vamos a enviarle a este componente el estado
        setSearchState={setSearchState}//y de igual forma le vamos a enviar la funcion para actualizar el estado
      />{/**Nuestro buscador de tareas */}
      <TodoList>
        {
        searchState === '' ? tareas.map((todo, index) => (//si esta vacio mostramos todas las tareas
          <TodoItem
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
      <CreateTodoButton
        saveTodos={saveTodos}
        tareas={tareas}
      />{/**Boton para agrgar nuevos elementos */}
      
    </div> 
    );
}
export { AppUI };