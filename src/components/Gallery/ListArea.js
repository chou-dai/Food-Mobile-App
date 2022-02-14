import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, Text, Button } from 'react-native';
import { withTheme } from 'react-native-elements';
import { getGalleryDataSet } from '../../api/database';
import ListParts from './ListParts';

const ListArea = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      getGalleryDataSet(setData);
    });
  }, [props.navigation]);

  return (
    <View style={[
      styles.container,
      {backgroundColor: props.theme.colors.base}
    ]}>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ListParts item={item} setOpen={props.setOpen} setId={props.setId}/>}
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
  },
  flatList: {
    width: '100%',
    flexDirection: 'column',
  },
});

const list = [
  {
    key: 1,
    url: {uri: "file:///var/mobile/Containers/Data/Application/27A1187D-B576-49BD-BEA3-6B5096079AA8/Library/Caches/ExponentExperienceData/%2540anonymous%252Ffood_app-946f831a-e9ea-4c1c-919d-76bc4cbf9306/Camera/6EBEDB6D-48F6-4850-B640-92A665657D7B.jpg"},
  },
  {
    key: 2,
    url: require('../../../assets/test/6.jpeg'),
  },
]

export default withTheme(ListArea);