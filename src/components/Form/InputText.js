import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, withTheme } from 'react-native-elements';
import InputLabel from './InputLabel';

const InputImage = (props) => {

  const handleChange = (text) => {
    props.setValue(text)
  }

  return (
    <Input
      placeholder={props.placeholder} style={{color: props.theme.colors.text}}
      label={<InputLabel label={props.label} isRequired={props.isRequired}/>}
      errorMessage={props.error ? 'タイトルを入力してください。' : null}
      errorStyle={{marginLeft: 0}}
      inputContainerStyle={styles.inputContainer}
      onChangeText={handleChange} value={props.value}
    />
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#86939e'
  },
});

export default withTheme(InputImage);