import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';



export default BankButton = function ({title, onPress}) {
    return <Pressable 
        style={styles.button}
        onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text>{title}</Text>
      </View>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
      borderRadius: 5,
      padding: 10,
      margin: 5,
      backgroundColor:'red',
      width:'100%'
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
    },
  });