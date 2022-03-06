import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Input, withTheme } from 'react-native-elements';
import InputLabel from './InputLabel';

const InputImage = (props) => {
  
  return (
    <Input
      placeholder={props.placeholder}
      label={<InputLabel label={props.label} isRequired={props.isRequired}/>}
      inputContainerStyle={styles.inputContainer}
    />
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#86939e'
  },
});

export default withTheme(InputImage);