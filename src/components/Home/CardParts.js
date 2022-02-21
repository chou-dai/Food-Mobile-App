import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const CardParts = (props) => {
  
  const handleOpen = () => {
    props.setId(props.item.id);
    props.setOpen(true);
  }

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.touch} activeOpacity={0.8} onPress={handleOpen}>
        <Image style={styles.image} source={props.item.url} />
      </TouchableOpacity>
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
  touch: {
    height: '100%',
    width: '100%'
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default CardParts;