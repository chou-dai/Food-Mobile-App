import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import InputLabel from './InputLabel';

const InputImage = (props) => {

  return (
    <View style={{paddingHorizontal: 10}}>
      <InputLabel label={'画像'} isRequired={true}/>
      <View style={styles.imageContainer}>
        <Image source={props.image} style={styles.image} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  imageContainer: {
    paddingVertical: 11,
    borderBottomColor: '#86939e',
    borderBottomWidth: 1,
    marginBottom: 22,
    alignItems: 'center'
  },
  image: {
    height: 200,
    width: 150,
  },
});

export default withTheme(InputImage);