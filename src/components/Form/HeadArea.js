import React from 'react';
import { StyleSheet, View, SafeAreaView, Button } from 'react-native';
import { withTheme } from 'react-native-elements';


const HeadArea = (props) => {

  const handleNavigation = () => {
    props.navigation.navigate(props.path);
  }

  return (
    <SafeAreaView style={{width: '100%'}}>
      <View style={{display: 'flex', paddingVertical: 5, flexDirection:'row'}}>
        <Button title='<  キャンセル' onPress={handleNavigation}/>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
});

export default withTheme(HeadArea);