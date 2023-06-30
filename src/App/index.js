import React from 'react';
import './index.css';
import { TodoCounter } from '../TodoCounter/index';
import { TodoItem } from '../TodoItem/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { CreateTodoButton } from '../CreateButton/index';
import { useLocalStorage } from './useLocalStorage';
function App() {
  const [searchState, setSearchState] = React.useState('');
  const [saveTodos, tareas] = useLocalStorage('TODOS_V1', []);
  const completedTodos = tareas.filter((todo) => !!todo.completed).length;
  const totalTodos = tareas.length;
  const filteredTodos = tareas.filter((todo) =>
    todo.text.toLowerCase().includes(searchState.toLowerCase())
  );

  return (
    <div className="App">
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch
        searchState={searchState}
        setSearchState={setSearchState}
      />
      <TodoList>
        {searchState === ''
          ? tareas.map((todo, index) => (
              <TodoItem
                key={index}
                text={todo.text}
                completed={todo.completed}
                index={index}
                tareas={tareas}
                saveTodos={saveTodos}
              />
            ))
          : filteredTodos.map((todo, index) => (
              <TodoItem
                key={index}
                text={todo.text}
                completed={todo.completed}
                index={index}
                tareas={tareas}
                saveTodos={saveTodos}
              />
            ))}
      </TodoList>
      <CreateTodoButton tareas={tareas} saveTodos={saveTodos} />
    </div>
  );
}

export default App;
