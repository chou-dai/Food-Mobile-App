import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { withTheme } from 'react-native-elements';
import InputLabel from './InputLabel';
import * as Haptics from 'expo-haptics';

const InputRating = (props) => {

  const handleStar = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }

  return (
    <View style={{paddingHorizontal: 10}}>
      <InputLabel label={'評価'} isRequired={true}/>
      <AirbnbRating
        reviews={[]}
        size={30} onFinishRating={handleStar}
        ratingContainerStyle={styles.ratingContainer}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingVertical: 11,
    borderBottomColor: '#86939e',
    borderBottomWidth: 1,
    marginBottom: 22,
  },
});

export default withTheme(InputRating);