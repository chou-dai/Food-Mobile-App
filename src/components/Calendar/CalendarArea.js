import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import CalendarParts from './CalendarParts';

const CalendarArea = (props) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.inner}>
        <LinearGradient
          colors={['rgba(240,152,25,1)', 'rgba(255,88,88,1)']} 
          start={{x: 0.0, y: 1}}
          end={{x: 1, y: 1}}
          style={{width: width, alignItems: 'center'}}
        >
          <CalendarParts navigation={props.navigation} setDate={props.setDate}/>
        </LinearGradient>
      </View>
    </View>
  );
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width,
    height: 360,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 1,
  },
  inner: {
    height: '99.99%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
});

export default withTheme(CalendarArea);