import React from 'react'
import { Dimensions, FlatList, StyleSheet, View } from 'react-native'
import { withTheme } from 'react-native-elements';
import ColumnParts from './ColumnParts';

const ColumnArea = (props) => {

  return (
    <View style={[
      styles.container,
      {backgroundColor: props.theme.colors.base}
    ]}>
      <FlatList
        style={styles.flatList}
        data={list}
        renderItem={({item}) => <ColumnParts key={item.key} id={item.key}/>}
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
    key: 1,
    color: '#800000'
  },
  {
    key: 2,
    color: '#4b0082'
  },
  {
    key: 3,
    color: '#008b8b'
  },
  {
    key: 4,
    color: '#006400'
  },
  {
    key: 5,
    color: '#191970'
  },
  {
    key: 6,
    color: '#800000'
  },
  {
    key: 7,
    color: '#4b0082'
  },
  {
    key: 8,
    color: '#008b8b'
  },
]

export default withTheme(ColumnArea);
