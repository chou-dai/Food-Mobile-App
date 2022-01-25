import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import { CalendarArea, ColumnArea } from './components/Calendar';

const Calendar = (props) => {
  return (
    <View style={[
      styles.container,
      {backgroundColor: props.theme.colors.base}
    ]}>
      <CalendarArea />
      <ColumnArea />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});

export default withTheme(Calendar);