import React from 'react'; //Esta importancion se debe de hacer siempre
import './index.css';
import { AppUI } from './AppUI';//Importacion de mis componentes
import { TodoProvider } from '../Context';

function App() {
  return (
      <TodoProvider>
        <AppUI/>
      </TodoProvider>
  );
}

export default App;