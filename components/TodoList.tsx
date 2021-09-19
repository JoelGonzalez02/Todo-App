import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native'
import { Todo } from '../store/store';
import TodoItem from './TodoItem';

type TodoListProps = {
    todos: Todo[];
    removeTodo: (id: number) => void;
    toggleCompleteTodo: (id: number) => void;
  };
  
  const TodoList: FC<TodoListProps> = ({ todos, removeTodo, toggleCompleteTodo }) => {
    return (
      <ScrollView style={styles.todoList}>
        {todos.map(todo => (
          <TodoItem todo={todo}
                    removeTodo={removeTodo}
                    toggleCompleteTodo={toggleCompleteTodo}
                    key={todo.id}/>
        )) }
      </ScrollView>
    );
  };


  export default TodoList;


  const styles = StyleSheet.create({
    todoList: {
        flex: 1
      },
  })