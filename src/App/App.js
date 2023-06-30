import React from 'react';
import './App.css';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateButton/CreateButton';

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem = localStorageItem ? JSON.parse(localStorageItem) : initialValue;

  if (!Array.isArray(parsedItem)) {
    parsedItem = initialValue;
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [saveItem, item];
}

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
