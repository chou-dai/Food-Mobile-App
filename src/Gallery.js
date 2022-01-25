import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import { ListArea, SearchArea } from './components/Gallery';

const Gallery = (props) => {
  return (
    <View style={[
      styles.container,
      {backgroundColor: props.theme.colors.base}
    ]}>
      <SearchArea />
      <ListArea />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
  },
});

export default withTheme(Gallery);