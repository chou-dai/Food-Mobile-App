import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withTheme } from 'react-native-elements';

const SearchArea = (props) => {
  return (
    <View style={[
      styles.container,
      styles.shadow,
      {borderColor: props.theme.colors.base}
    ]}>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top: 138,
    zIndex: 1,
    height: 44,
    borderRadius: 4,
    width: '90%',
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#777',
  },
  shadow: {
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
});

export default withTheme(SearchArea);