import React from 'react'; //Esta importancion se debe de hacer siempre
import './index.css';
import { useLocalStorage } from './useLocalStorage';//hook del local storage
import { AppUI } from './AppUI';//Importacion de mis componentes

function App() {
  //Maquetacion de mi aplicacion
  const [searchState, setSearchState] = React.useState('');//manejo de estados
  const [saveTodos, tareas] = useLocalStorage('TODOS_V1', []);
  const completedTodos = tareas.filter(todo => !!todo.completed).length;//calculamos cuantos todos tenemos completos
  const totalTodos =  tareas.length;//total de todos
  const filteredTodos = tareas.filter((todo) =>
      todo.text.toLowerCase().includes(searchState.toLowerCase())
  );
  return (
      <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchState={searchState}
      setSearchState={setSearchState}
      filteredTodos={filteredTodos}
      tareas={tareas}
      saveTodos={saveTodos}
      />
  );
}

export default App;