import React, {FC , useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Todo} from '../store/store';
import Checkbox from './CheckBox';
import { Feather } from '@expo/vector-icons';

type TodoItemProps = {
    todo: Todo;
    removeTodo: (id: number) => void;
    toggleCompleteTodo: (id: number) => void;
  };

  const TodoItem: FC<TodoItemProps> = ({ todo, toggleCompleteTodo, removeTodo}) => {
    const { text, isCompleted, id } = todo;
    const [hours, setHours] = useState(0);

    const addHour = () => {
      return (
        <View>
          <TouchableOpacity style={{paddingRight: 7}} onPress={() => setHours(hours + 1)}>
              <Feather name='plus-circle' size={23} color='blue' />
          </TouchableOpacity>
        </View>
      )
    }

    const subHour = () => {
      return (
        <View>
          <TouchableOpacity style={{paddingRight: 7}} onPress={() => setHours(hours > 0 ? hours - 1 : hours)}>
              <Feather name='minus-circle' size={23} color='red' />
          </TouchableOpacity>
        </View>
      )
    }

  
    return (
      <View style={isCompleted ? { ...styles.todoItem, ...styles.completed } : styles.todoItem}>
        <Text>{text}</Text>
        <Text style={{left: 5}}>{hours} to hours to complete</Text>
        <View style={styles.todoItemRightSection}>
          {subHour()}
          {addHour()}
          <Checkbox isChecked={isCompleted} onToggle={() => {
            toggleCompleteTodo(id);
          } }/>
          <TouchableOpacity onPress={() => removeTodo(id)}>
            <Feather style={styles.todoItemRemoveIcon} name='x-circle' />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  export default TodoItem;

  const styles = StyleSheet.create({
    todoItemRightSection: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      todoItemRemoveIcon: {
        marginLeft: 7,
        marginBottom: 2,
        color: '#CD5C5C',
        fontSize: 26,
      },
      todoItem: {
        marginTop: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        width: '95%',
        left: 10
      },
      completed: {
        backgroundColor: 'lightgreen',
        borderRadius: 20,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        left: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation: 9
      },
  })