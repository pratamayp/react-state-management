import { Provider } from 'react-redux';
import store from '../../store/redux/store';
import { useSelector } from 'react-redux';
import { Children1 } from './children1';
import { Children2 } from './children2';
import { CounterLayout } from '../../component/counter-layout';
import { add, remove } from '../../store/redux/todo';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const ReduxWrapper = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Todo />
    </Provider>
  );
};

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <CounterLayout type="Redux" count={count}>
      <Children1 />
      <Children2 />
    </CounterLayout>
  );
};

const Todo = () => {
  const [todo, setTodo] = useState('');

  const todos = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(add(todo));
    setTodo('');
  };

  return (
    <div className="todo">
      <h1 className="todo-title">Todo</h1>
      <div className="todo-input">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>+</button>
      </div>
      <ul className="todo-item-wrapper">
        {todos.map((todo, idx) => (
          <li key={idx} className="todo-item">
            <span>{todo}</span>
            <button
              className="todo-delete-button"
              onClick={() => dispatch(remove(idx))}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
