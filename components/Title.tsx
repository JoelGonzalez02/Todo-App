import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';


const Title: FC = () => {
    return (
      <View style={styles.titleWrapper}>
          <View style={styles.titleInnerWrapper}>
            <Text style={styles.title}>
              Todo List
            </Text>
          </View>
        </View>
    );
  };

  export default Title;


  const styles = StyleSheet.create({
    titleWrapper: {
        backgroundColor: 'dodgerblue',
        padding: 20,
        height: 65,
        marginTop: getStatusBarHeight(),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation: 9
      },
      titleInnerWrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      },
      title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
      },
  })