import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import InputCalendar from './InputCalendar';
import InputLabel from './InputLabel';
import { Ionicons } from '@expo/vector-icons';

const InputDate = (props) => {
  const tmp = new Date();
  const [date, setDate] = useState(tmp.getFullYear() + "年" + (tmp.getMonth()+1) + "月" + tmp.getDate() + "日");
  const [caleDate, setCaleDate] = useState(
    tmp.getFullYear() + "-" +
    (tmp.getMonth()+1).toString().padStart(2, '0') + "-" +
    tmp.getDate().toString().padStart(2, '0'));
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <View style={{paddingHorizontal: 10}}>
      <InputLabel label={'日付'} isRequired={true}/>
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchContainer} activeOpacity={0.7} onPress={handleOpen}>
          <Text style={{color: props.theme.colors.text, fontSize: 18}}>{date}</Text>
          <Ionicons name="chevron-forward" size={18} color="#86939e" />
        </TouchableOpacity>
      </View>
      <InputCalendar open={open} setOpen={setOpen} 
        setDate={setDate} caleDate={caleDate} setCaleDate={setCaleDate}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 11,
    borderBottomColor: '#86939e',
    borderBottomWidth: 1,
    marginBottom: 22,
  },
  touchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10
  },
});

export default withTheme(InputDate);