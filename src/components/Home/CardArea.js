import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { withTheme } from 'react-native-elements';
import CardParts from './CardParts';

const CardArea = (props) => {

  const handleNavigation = () => {
    props.navigation.navigate('gallery')
  }

  return (
    <View style={[
      styles.container,
      {backgroundColor: props.theme.colors.base}
    ]}>
      <View style={styles.textRow}>
        <Text style={[
          styles.text,
          {color: props.theme.colors.text}
        ]}>Gallery</Text>
        <Text style={styles.more} onPress={handleNavigation}>
          More  {'>'}
        </Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={list}
        renderItem={({item}) => <CardParts key={item.key} url={item.url}/>}
        horizontal={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 17,
    paddingBottom: 5,
    width: '100%',
    borderBottomWidth: 0.3,
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
    textAlign: 'left'
  },
  more: {
    flex: 1,
    fontSize: 16,
    color: '#666',
    textAlign: 'right',
  },
  flatList: {
    paddingLeft: 3,
    width: '100%',
  },
});

const list = [
  {
    key: 1,
    url: require('../../../assets/test/1.jpeg'),
  },
  {
    key: 2,
    url: require('../../../assets/test/2.jpeg'),
  },
  {
    key: 3,
    url: require('../../../assets/test/3.jpeg'),
  },
  {
    key: 4,
    url: require('../../../assets/test/4.jpeg'),
  },
  {
    key: 5,
    url: require('../../../assets/test/5.jpeg'),
  },
]

export default withTheme(CardArea);