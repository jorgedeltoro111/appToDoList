import React from 'react';
import { useLocalStorage } from './useLocalStorage';//hook del local storage
const TodoContext = React.createContext();

function TodoProvider({children}){
    const [nameHolder, setNameHolder] = React.useState('Task name');
    const [openModal, setOpenModal] = React.useState(false);
    const [inputClass, setInputClass] = React.useState('input');
    const [taskName, setTaskName] = React.useState('');
    const [searchState, setSearchState] = React.useState('');//manejo de estados
    const [saveTodos, tareas] = useLocalStorage('TODOS_V1', []);
    const completedTodos = tareas.filter(todo => !!todo.completed).length;//calculamos cuantos todos tenemos completos
    const totalTodos =  tareas.length;//total de todos
    const filteredTodos = tareas.filter((todo) =>
      todo.text.toLowerCase().includes(searchState.toLowerCase())
    );
    return(
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchState,
            setSearchState,
            filteredTodos,
            tareas,
            saveTodos,
            openModal,
            setOpenModal,
            inputClass,
            setInputClass,
            taskName,
            setTaskName,
            nameHolder,
            setNameHolder,
        }}>
            {children}
        </TodoContext.Provider>
    );
}
export { TodoContext, TodoProvider };