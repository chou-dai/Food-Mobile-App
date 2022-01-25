import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const ColumnParts = (props) => {

  let top = 0;
  if(props.id == 1) top=408;

  return (
    <View style={[
      styles.card,
      {
        backgroundColor: '#666',
        marginTop: top,
      },
    ]}>
      <LinearGradient
        colors={['rgba(240,152,25,1)', 'rgba(255,88,88,1)']} 
        start={{x: 0.0, y: 1}} 
        end={{x: 1, y: 1}}
        style={styles.linearGradient}
      ></LinearGradient>
    </View>
  )
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    top: 10,
    height: 100,
    width: width-20,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    marginBottom: 12,
  },
  linearGradient: {
    width: 80,
    height: 100,
    borderRadius: 10,
  }
});

export default ColumnParts
