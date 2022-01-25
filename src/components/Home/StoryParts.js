import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import Ripple from 'react-native-material-ripple';

const StoryParts = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Ripple style={styles.ripple}>
          <Image
            style={styles.image}
            source={props.url}
          />
        </Ripple>
      </View>
      <Text style={[
        styles.text,
        {color: props.theme.colors.text}
      ]}>{props.label}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    margin: 7,
    height: 70,
    width: 70,
    borderRadius: 50,
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
    width: '100%',
  },
  text: {
    flex: 1,
    fontSize: 11,
    textAlign: 'left'
  }
});

export default withTheme(StoryParts);