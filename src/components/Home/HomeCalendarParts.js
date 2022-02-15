import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { withTheme } from 'react-native-elements';
import { getCalendarMarkSet } from '../../api/database';

const CalendarParts = (props) => {
  const [markData, setMarkData] = useState(null);

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      getCalendarMarkSet(setMarkData, 'gray');
    });
  }, [props.navigation]);

  return (
    <View>
      <Calendar
        style={styles.Calendar}
        monthFormat={'yyyy年 M月'}
        hideArrows={true}
        markedDates={markData}
        disableAllTouchEventsForDisabledDays={true}
        theme={{
          calendarBackground: "rgba(0,0,0,0)",
          monthTextColor: props.theme.colors.main,
          todayTextColor: props.theme.colors.main,
          dayTextColor: '#d9e1e8',
          textDisabledColor: "rgba(239,129,15,0.2)"
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Calendar: {
    height: 400,
    width: 360,
    paddingTop: 10,
    marginTop: 7,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.1)',
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