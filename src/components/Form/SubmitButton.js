import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Dimensions } from 'react-native';
import { withTheme } from 'react-native-elements';


const SubmitButton = (props) => {
  const handlePress = () => {
    if(!props.title) {
      props.setError(true);
    }
  }

  useEffect(() => {
    props.setError(false);
  }, [props.title]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.buttonContainer, {backgroundColor: props.theme.colors.base}]}>
        <TouchableOpacity activeOpacity={0.6} onPress={handlePress}>
          <LinearGradient style={styles.linearGradient}
            colors={['rgba(240,152,25,1)', 'rgba(255,88,88,1)']} 
            start={{x: 0.0, y: 1}} 
            end={{x: 1, y: 1}}
          >
            <Text style={styles.text}>登録</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    alignItems: 'center'
  },
  buttonContainer: {
    width: width*0.9,
    borderRadius: 15,
    height: 48,
    marginBottom: 25,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  linearGradient:{
    height: 48,
    borderRadius: 15,
    justifyContent: 'center'
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default withTheme(SubmitButton);