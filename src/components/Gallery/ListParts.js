import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Ripple from 'react-native-material-ripple';

const ListParts = (props) => {

  const handleOpen = () => {
    props.setId(props.item.id);
    props.setOpen(true);
  }

  return (
    <View style={styles.card}>
      <Ripple style={styles.ripple}
        onPress={handleOpen}
      >
        <Image
          style={styles.image}
          source={props.item.url}
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