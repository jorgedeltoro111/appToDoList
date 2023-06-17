import React from 'react'; //Esta importancion se debe de hacer siempre
import './App.css';
//git
//Importacion de mis componentes
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateButton';
//Mi lista de tareas con 2 atributos, la tarea a realizar y su estado (pendiente / realizada).
const todos = [];


function App() {
  const saveTodos = (newTodos) => {//funcion para guardar los todos en el localstorage
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));//guardamos los todos en el localstorage
    setTareas(newTodos);//actualizamos el estado de los todos
  }
  const localStorageTodos = localStorage.getItem('TODOS_V1');//obtenemos los todos del localstorage
  let parsedTodos;
  if(localStorageTodos){//si hay algo en el localstorage
    parsedTodos = JSON.parse(localStorageTodos);//obtenemos los todos del localstorage
  }else{
    localStorage.setItem('TODOS_V1', JSON.stringify([]));//si no hay nada en el localstorage, le asignamos un arreglo vacio
    parsedTodos = todos;//si no hay nada en el localstorage, le asignamos un arreglo vacio
  }
  
  //Maquetacion de mi aplicacion
  const [searchState, setSearchState] = React.useState('');//manejo de estados
  const [tareas, setTareas] = React.useState(parsedTodos);//manejo de estados
  const completedTodos = tareas.filter(todo => !!todo.completed).length;//calculamos cuantos todos tenemos completos
  const totalTodos =  tareas.length;//total de todos
  const filteredTodos = tareas.filter((todo) =>
    todo.text.toLowerCase().includes(searchState.toLowerCase())
  );
  return (
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
            key={index}
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
                key={index}
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
        tareas={tareas}
        saveTodos={saveTodos}
      />{/**Boton para agrgar nuevos elementos */}
      
    </div>   
  );
}

export default App;
