import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import HomeCalendarParts from './HomeCalendarParts';

const HomeCalendarArea = (props) => {

  const handleNavigation = () => {
    props.navigation.navigate('calendar');
  }

  return (
    <View style={[
      styles.container,
      {backgroundColor: props.theme.colors.base},
    ]}>
      <View style={styles.textRow}>
        <Text style={[
          styles.text,
          {color: props.theme.colors.text}
        ]}>Calendar</Text>
        <Text style={styles.more} onPress={handleNavigation}>
          More  {'>'}
        </Text>
      </View>
      <HomeCalendarParts navigation={props.navigation}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 17,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  textRow: {
    marginBottom: 3,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  text: {
    flex: 3,
    fontSize: 20,
    textAlign: 'left',
  },
  more: {
    flex: 1,
    fontSize: 16,
    color: '#666',
    textAlign: 'right',
  },
});

export default withTheme(HomeCalendarArea);