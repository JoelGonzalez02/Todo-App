import React, { FC } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { TodoActions, todoActions } from '../store/reducer/reducer';
import { AppState} from '../store/store';
import Title from '../components/Title';
import Input from '../components/Input';
import TodoList from '../components/TodoList';



type AppProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
const Main: FC<AppProps> = ({ todoState, addTodo, removeTodo, toggleCompleteTodo}) => {
  return (
    <View style={{flex: 1}}>
      <Title/>
      <TodoList todos={todoState.todos} removeTodo={removeTodo} toggleCompleteTodo={toggleCompleteTodo}/>
      <Input onSubmit={addTodo}/>
    </View>
  );
};


const mapStateToProps = (state: AppState) => ({
  todoState: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch<TodoActions>) => bindActionCreators(
  {
    addTodo: todoActions.addTodo,
    removeTodo: todoActions.removeTodo,
    toggleCompleteTodo: todoActions.toggleCompleteTodo,
    removeCompletedTodos: todoActions.removeCompletedTodos,
    completeAll: todoActions.completeAll
  },
  dispatch
  );
  
  const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(Main);
  

  export {ConnectedApp};





