import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Ripple from 'react-native-material-ripple';

const ListParts = (props) => {
  return (
    <View style={[
      styles.card,
    ]}>
      <Ripple style={styles.ripple}>
        <Image
          style={styles.image}
          source={props.url}
        />
      </Ripple>
    </View>
  )
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    height: (width-10)/3+10,
    width: (width-10)/3,
    margin: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ripple: {
    height: '100%',
    width: '100%'
  },
  image: {
    height: '100%',
    width: '100%'
  }
});

export default ListParts;