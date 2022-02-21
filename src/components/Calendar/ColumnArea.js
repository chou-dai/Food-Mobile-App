import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { withTheme } from 'react-native-elements';
import { getCalendarDataSet } from '../../api/database';
import ColumnParts from './ColumnParts';

const ColumnArea = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCalendarDataSet(props.date, setData);
  }, [props.date]);

  return (
    <View style={[
      styles.container,
      {backgroundColor: props.theme.colors.base}
    ]}>
      <FlatList
        style={styles.flatList}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ColumnParts item={item} setOpen={props.setOpen} setId={props.setId}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  flatList: {
    paddingLeft: 10,
    width: '100%',
  },
});


const list = [
  {
    id: 1,
    color: '#800000'
  },
  {
    id: 2,
    color: '#4b0082'
  },
]

export default withTheme(ColumnArea);
