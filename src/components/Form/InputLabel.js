import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withTheme } from 'react-native-elements';


const InputLabel = (props) => {

  return (
    <View style={styles.labelContainer}>
      <Text style={{color: props.theme.colors.text, fontSize: 18}}>{props.label}</Text>
      {props.isRequired ? (
        <View style={styles.required}>
          <Text style={{color: '#ffffff'}}>必須</Text>
        </View>
      ):(
        null
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  labelContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  required: {
    backgroundColor: '#c70000',
    paddingHorizontal: 10,
    marginLeft: 10,
    height: 20,
    justifyContent: 'center',
    borderRadius: 4,
  }
});

export default withTheme(InputLabel);