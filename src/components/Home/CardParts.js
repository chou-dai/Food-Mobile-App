import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Ripple from 'react-native-material-ripple';

const CardParts = (props) => {
  
  return (
    <View style={styles.card}>
      <Ripple style={styles.ripple}>
        <Image
          style={styles.image}
          source={props.item.url}
        />
      </Ripple>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 7,
    height: 200,
    width: 130,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ripple: {
    height: '100%',
    width: '100%'
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default CardParts;