import React, { FC, useState } from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Todo } from '../store/store';

type InputProps = {
    onSubmit: (todo: Todo) => void;
  };
  
  const Input: FC<InputProps> = ({ onSubmit }) => {
    const [text, setText] = useState('');
  
    const onSubmitEditingHandler = () => {
      if (!text) return;
      onSubmit({
        isCompleted: false,
        id: Date.now(),
        text
      });
      setText('');
    };
  
    return (
      <View style={styles.inputWrapper}>
        <TextInput 
            style={styles.input}
            placeholder={'Add a task!'}
            placeholderTextColor='white'
            onChangeText={setText}
            onSubmitEditing={onSubmitEditingHandler}
            blurOnSubmit={false}
            value={text}
        />
      </View>
    );
  
  };

  export default Input;


  const styles = StyleSheet.create({
    inputWrapper: {
        borderTopWidth: 1,
        borderTopColor: 'grey',
        backgroundColor: 'dodgerblue',
      },
      input: {
        height: 50,
        padding: 15,
        top: 10,
        marginBottom: 20,
        fontSize: 16,
        color: 'white'
      },
  })
  