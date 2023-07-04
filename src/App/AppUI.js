import React from 'react';
import { TodoCounter } from '../TodoCounter/index';
import { TodoItem } from '../TodoItem/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { CreateTodoButton } from '../CreateButton/index';
import { TodoContext } from '../Context/index';
function AppUI() {
    return(
    <div className="App">{/**Esta etiqueta es la contenedora de todos los componentes */}
      <TodoContext.Consumer>
        {({
          totalTodos,
          completedTodos,
        }) => (
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
        )}
      </TodoContext.Consumer>
      <TodoContext.Consumer>
        {({
          searchState,
          setSearchState,
        }) => (
          <TodoSearch
            searchState={searchState}
            setSearchState={setSearchState}
          />
        )}
      </TodoContext.Consumer>
      <TodoContext.Consumer>{/**Consumimos el contexto para poder usarlo en el componente */}
        {({//desestructuramos el contexto
          searchState,
          filteredTodos,
          tareas,
          saveTodos
        }) => (//retornamos el componente
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
        )}
      </TodoContext.Consumer>
      <TodoContext.Consumer>
        {({
          saveTodos,
          tareas
        }) => (
          <CreateTodoButton
          saveTodos={saveTodos}
          tareas={tareas}
          />
        )}
      </TodoContext.Consumer>
    </div> 
    );
}
export { AppUI };