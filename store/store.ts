import { combineReducers, createStore } from 'redux';
import { todoReducer } from './reducer/reducer';

export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

const rootReducer = combineReducers({
  todos: todoReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default (initialState?: AppState) => {
  return createStore(
    rootReducer,
    initialState,
  );
};