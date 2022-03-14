import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { withTheme } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import FilterMenu from './FilterMenu';

const SearchArea = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={[
      styles.container,
      {backgroundColor: props.theme.colors.base}
    ]}>
      <SafeAreaView style={styles.safeArea}>
        <Searchbar style={styles.search}/>
        <View style={styles.filter}>
          <FilterMenu visible={visible} setVisible={setVisible} />
        </View>
      </SafeAreaView >
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flexDirection: 'row'
  },
  search: {
    marginTop: 8,
    flex: 1,
    height: 35,
    backgroundColor: 'gray'
  },
  filter: {
    height: 35,
    width: 35,
    marginLeft: 5,
    marginTop: 8,
    height: 35,
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: 'gray',
  }
});

export default withTheme(SearchArea);