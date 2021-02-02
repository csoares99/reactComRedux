import './App.css';

import { Provider } from "react-redux";
import store from './store';

import TodoList from './todoList';
import Counter from './counter';

function App() {
  return (
    <Provider store={store}>
      <div>
        <TodoList></TodoList>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
