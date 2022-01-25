import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withTheme } from 'react-native-elements';

const Setting = (props) => {
  return (
    <View style={[
      styles.container,
      {backgroundColor: props.theme.colors.base}
    ]}>
      <Text style={ styles.text }>設定</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
  },
});

export default withTheme(Setting);