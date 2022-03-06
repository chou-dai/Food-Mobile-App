import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import { withTheme } from 'react-native-elements';
import { getHomeCardDataSet } from '../../api/database';
import CardParts from './CardParts';

const CardArea = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      getHomeCardDataSet(setData);
    });
  }, [props.navigation]);

  const handleNavigation = () => {
    props.navigation.navigate('Gallery');
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
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <CardParts item={item} setOpen={props.setOpen} setId={props.setId}/>}
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
    height: 214
  },
});

export default withTheme(CardArea);