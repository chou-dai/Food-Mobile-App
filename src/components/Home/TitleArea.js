import React from 'react';
import { StyleSheet, Animated, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const AnimatedLinearGradient = Animated.createAnimatedComponent(
  LinearGradient
)

const TitleArea = (props) => {
  return (
    <View style={ styles.container }>
      <AnimatedLinearGradient
        colors={['rgba(240,152,25,1)', 'rgba(255,88,88,1)']} 
        start={{x: 0.0, y: 1}} 
        end={{x: 1, y: 1}}
        style={[
          styles.linearGradient,
          {display: props.scrollY > 260 ? 'none' : 'block'},
          {transform: [{scale: props.scrollY < 0 ? (0,1+props.scrollY*(-0.01)) : (1)}],
          },
        ]}
      />
      <Animated.Text
        style={[
          styles.text,
          {transform: [{translateY: props.scrollY < 0 ? (props.scrollY*(-0.25)) : (props.scrollY*-0.5),}],},
        ]}
        >Title</Animated.Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 300,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    position: 'absolute',
    height: 300,
    width: '100%',
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
    marginBottom: 140,
  },
});

export default TitleArea;