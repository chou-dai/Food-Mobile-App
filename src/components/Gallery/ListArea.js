import React from 'react';
import { FlatList, StyleSheet, View, Text, Button } from 'react-native';
import { withTheme } from 'react-native-elements';
import ListParts from './ListParts';

const ListArea = (props) => {

  return (
    <View style={[
      styles.container,
      {backgroundColor: props.theme.colors.base}
    ]}>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={list}
        renderItem={({item}) => <ListParts key={item.key} url={item.url}/>}
        numColumns={3}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingLeft: 1,
    paddingRight: 1,
    alignItems: 'center',
  },
  flatList: {
    width: '100%',
    flexDirection: 'column',
  },
});

const list = [
  {
    key: 1,
    url: require('../../../assets/test/5.jpeg'),
  },
  {
    key: 2,
    url: require('../../../assets/test/6.jpeg'),
  },
  {
    key: 3,
    url: require('../../../assets/test/7.jpeg'),
  },
  {
    key: 4,
    url: require('../../../assets/test/8.jpeg'),
  },
  {
    key: 5,
    url: require('../../../assets/test/9.jpeg'),
  },
  {
    key: 6,
    url: require('../../../assets/test/10.jpeg'),
  },
  {
    key: 7,
    url: require('../../../assets/test/1.jpeg'),
  },
  {
    key: 8,
    url: require('../../../assets/test/2.jpeg'),
  },
  {
    key: 9,
    url: require('../../../assets/test/3.jpeg'),
  },
  {
    key: 10,
    url: require('../../../assets/test/4.jpeg'),
  },
  {
    key: 11,
    url: require('../../../assets/test/5.jpeg'),
  },
  {
    key: 12,
    url: require('../../../assets/test/6.jpeg'),
  },
  {
    key: 13,
    url: require('../../../assets/test/7.jpeg'),
  },
  {
    key: 14,
    url: require('../../../assets/test/8.jpeg'),
  },
  {
    key: 15,
    url: require('../../../assets/test/9.jpeg'),
  },
  {
    key: 16,
    url: require('../../../assets/test/10.jpeg'),
  },
  {
    key: 17,
    url: require('../../../assets/test/1.jpeg'),
  },
  {
    key: 18,
    url: require('../../../assets/test/2.jpeg'),
  },
  {
    key: 19,
    url: require('../../../assets/test/3.jpeg'),
  },
  {
    key: 20,
    url: require('../../../assets/test/4.jpeg'),
  },
]

export default withTheme(ListArea);