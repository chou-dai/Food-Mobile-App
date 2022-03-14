import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { withTheme } from 'react-native-elements';
import Modal from 'react-native-modal';

const InputCalendar = (props) => {
  const [selectDate, setSelectDate] = useState({[props.caleDate]:{selected: true}});
  const [tmpDate, setTmpDate] = useState(props.caleDate);

  useEffect(() => {
    setSelectDate({[props.caleDate]:{selected: true}});
    setTmpDate(props.caleDate);
  }, [props]);

  const handleSelectDate = (data) => {
    setSelectDate({[data.dateString]: {selected: true}});
    setTmpDate(data.dateString);
  }
  const handleDecision = () => {
    props.setCaleDate(tmpDate);
    const tmp = tmpDate.split('-');
    props.setDate(parseInt(tmp[0],10) + '年' + parseInt(tmp[1],10) + '月' + parseInt(tmp[2],10) + '日');
    props.setOpen(false);
  }
  const handleCancel = () => {
    props.setOpen(false);
  }

  return (
    <Modal
      isVisible={props.open}
      animationIn='fadeIn'
      animationOut='fadeOut'
      backdropOpacity={0.8}
      backdropColor={props.theme.colors.base}
    >
      <View style={[styles.container,
        {borderColor: props.theme.colors.border, backgroundColor: props.theme.colors.border}
      ]}>
        <Calendar
          style={styles.calendar}
          markedDates={selectDate}
          monthFormat={'yyyy年 M月'}
          disableAllTouchEventsForDisabledDays={true}
          onDayPress={handleSelectDate}
          theme={{
            calendarBackground: "rgba(0,0,0,0)",
            monthTextColor: props.theme.colors.main,
            todayTextColor: '#d9e1e8',
            dayTextColor: '#d9e1e8',
            textDisabledColor: "rgba(0,0,0,0)",
            selectedDayBackgroundColor: props.theme.colors.main,
            selectedDayTextColor: '#ffffff'
          }}
        />
        <View style={styles.row}>
          <Button title='キャンセル' onPress={handleCancel} />
          <Button title='決定' onPress={handleDecision} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: '100%',
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  calendar: {
    height: 370,
    width: '100%',
    paddingTop: 10,
    marginTop: 7,
  },
  row: {
    paddingHorizontal: 10,
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

LocaleConfig.locales.jp = {
  monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
  dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
}
LocaleConfig.defaultLocale = 'jp';

export default withTheme(InputCalendar);