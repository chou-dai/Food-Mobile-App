import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { withTheme, ThemeProvider } from 'react-native-elements';

const Setting = (props) => {
  const [dark, setDark] = useState(true);

  const handleDark = () => {
    setDark(!dark);
  }

  useEffect(() => {
    props.updateTheme({colors: {primary: '#ffffff'}})
    console.log(props.theme);
  },[dark])

  return (
    <View style={[
      styles.container,
      {backgroundColor: props.theme.colors.base}
    ]}>
      <TouchableOpacity onPress={handleDark}>
        <Text style={ styles.text }>{dark ? 'Dark':'Light'}</Text>
      </TouchableOpacity>
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