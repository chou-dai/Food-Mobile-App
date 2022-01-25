import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, LocaleConfig } from 'react-native-calendars';

const CalendarParts = () => {
  return (
    <View style={styles.container}>
      <CalendarList
        markedDates={{
          '2021-10-31': {selected: true, marked: true, selectedColor: 'blue'},
          '2021-10-24': {selected: true, marked: true, selectedColor: 'blue'},
          '2021-10-17': {marked: true},
          '2021-10-18': {marked: true, dotColor: 'red', activeOpacity: 0},
          '2021-10-19': {disabled: true, disableTouchEvent: true}
        }}
        style={styles.Calendar}
        horizontal={true}
        pagingEnabled={true}
        monthFormat={'yyyy年 M月'}
        theme={{
          calendarBackground: "rgba(0,0,0,0)",
          monthTextColor: '#00adf5',
          dayTextColor: '#d9e1e8',
          textDisabledColor: '#2d4150',
          'stylesheet.day.period': {
            base : {
              innerHeight: 0,
            }
          }
        }}
      />
    </View>
  )
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  Calendar: {
    width: width,
  },
});

LocaleConfig.locales.jp = {
  monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
  dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
}
LocaleConfig.defaultLocale = 'jp';

export default CalendarParts;