import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, View, TouchableOpacity } from 'react-native';

const ListParts = (props) => {

  const handleOpen = () => {
    props.setId(props.item.id);
    props.setOpen(true);
  }

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.touch} activeOpacity={0.8} onPress={handleOpen}>
        <Image style={styles.image} source={props.item.url}/>
      </TouchableOpacity>
    </View>
  )
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    height: (width-10)/3+10,
    width: (width-10)/3,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touch: {
    height: '100%',
    width: '100%'
  },
  image: {
    height: '100%',
    width: '100%'
  }
});

export default ListParts;