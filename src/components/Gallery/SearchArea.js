import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { withTheme } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';

const SearchArea = (props) => {

  return (
    <View style={[
      styles.container,
      {backgroundColor: props.theme.colors.base}
    ]}>
      <SafeAreaView style={styles.safeArea}>
        <Searchbar style={styles.search}/>
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
  search: {
    marginTop: 8,
    height: 35,
    width: '100%',
    backgroundColor: 'gray'
  }
});

export default withTheme(SearchArea);