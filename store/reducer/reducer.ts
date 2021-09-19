import { action, ActionType } from 'typesafe-actions';
import { Todo } from '../store';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';
export const REMOVE_COMPLETED_TODOS = 'REMOVE_COMPLETED_TODOS';
export const COMPLETE_ALL = 'COMPLETE_ALL';

export const todoActions = {
  addTodo: (todo: Todo) => action(ADD_TODO, todo),
  removeTodo: (id: number) => action(REMOVE_TODO, id),
  toggleCompleteTodo: (id: number) => action(TOGGLE_COMPLETE_TODO, id),
  removeCompletedTodos: () => action(REMOVE_COMPLETED_TODOS),
  completeAll: () => action(COMPLETE_ALL)
};


export type TodoActions = ActionType<typeof todoActions>;

export type TodoState = {
  todos: Todo[];
  hasCompleted: boolean;
}

const initialState: TodoState = {
  todos: [],
  hasCompleted: false,
};

export const todoReducer = (state: TodoState = initialState, action: TodoActions): TodoState => {
  switch (action.type) {
    case 'COMPLETE_ALL':
      return {
        ...state,
        todos: state.todos.map(td => td.isCompleted ? {...td} : {...td, isCompleted: true}),
        hasCompleted: true
      };
    case 'REMOVE_TODO':
      const filteredTodos = state.todos.filter(td => td.id !== action.payload);
      return {
        ...state,
        todos: filteredTodos,
        hasCompleted: filteredTodos.some(td => td.isCompleted)
      };
    case 'TOGGLE_COMPLETE_TODO':
      const todos = state.todos.map(td => {
        return td.id === action.payload
          ? {...td, isCompleted: !td.isCompleted}
          : {...td};
      });
      return {
        ...state,
        todos,
        hasCompleted: todos.some(td => td.isCompleted)
      };
    case 'REMOVE_COMPLETED_TODOS':
      return {
        ...state,
        todos: state.todos.filter(td => !td.isCompleted),
        hasCompleted: false
      };
    case 'ADD_TODO':
      const todo = {...action.payload};
      const updatedTodos = [...state.todos, todo];

      return {
        ...state,
        todos: updatedTodos,
        hasCompleted: updatedTodos.some(td => td.isCompleted)
      };
    default:
      return state;
  }
};