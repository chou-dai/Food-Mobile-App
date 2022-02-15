import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import { withTheme } from 'react-native-elements';
import { getCalendarMarkSet } from '../../api/database';

const CalendarParts = (props) => {
  const [markData, setMarkData] = useState(null);

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      getCalendarMarkSet(setMarkData, 'green');
    });
  }, [props.navigation]);
  

  const handleMonth = (data) => {
    // console.log(data[0].year + '-' + data[0].month);
  }
  const handleDay = (data) => {
    // console.log(data.year + '-' + data.month + '-' + data.day);
  }

  return (
    <View style={styles.container}>
      <CalendarList
        onVisibleMonthsChange={handleMonth}
        onDayPress={handleDay}
        markedDates={markData}
        style={styles.calendar}
        horizontal={true}
        pagingEnabled={true}
        monthFormat={'yyyy年 M月'}
        headerStyle={{height:80}}
        theme={{
          calendarBackground: "rgba(0,0,0,0)",
          monthTextColor: props.theme.colors.text,
          textMonthFontWeight: '600',
          todayTextColor: "white",
          todayBackgroundColor: 'rgba(0,0,0,0.05)',
          dayTextColor: props.theme.colors.text,
          textDayFontWeight: '500',
          textSectionTitleColor: props.theme.colors.text,
          textDayHeaderFontWeight: '500',
          'stylesheet.day.basic':{
            'base':{
              marginTop: -6,
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
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
  calendar: {
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

export default withTheme(CalendarParts);