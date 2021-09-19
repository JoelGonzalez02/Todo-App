import React, {FC} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type CheckboxProps = {
    isChecked: boolean;
    onToggle: () => void;
  };
  
  const Checkbox: FC<CheckboxProps> = ({ isChecked, onToggle }) => {
    return (
      <TouchableOpacity onPress={onToggle}>
        <View style={ styles.checkboxWrapper }>
          {isChecked && <View>
            <FontAwesome style={{right: .4, bottom: 2}}name='check-square' size={20} />
          </View>}
        </View>
      </TouchableOpacity>
    );
  };

  export default Checkbox;

  const styles = StyleSheet.create({
    checkboxWrapper: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderColor: 'black',
      },
      checkboxInner: {
        flex: 1,
        margin: 2,
        backgroundColor: 'rgba(0,0,0,0.8)',
      },
  })