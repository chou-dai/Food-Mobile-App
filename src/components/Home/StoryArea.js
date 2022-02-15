import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import InstaStory from 'react-native-insta-story';
import { getHomeStoryDataSet } from '../../api/database';

const StoryArea = (props) => {
  const data = [{}];

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      getHomeStoryDataSet(data);
    });
  }, [props.navigation]);
  
  return (
    <View style={[
      styles.container,
      styles.shadow,
      {backgroundColor: props.theme.colors.base},
      {borderColor: props.theme.colors.border}
    ]}>
      <InstaStory
        data={data} duration={5} avatarSize={70}
        pressedBorderColor={props.theme.colors.border}
        avatarTextStyle={{
          color: props.theme.colors.text,
          fontSize: 12,
        }}
        style={{marginTop: 30, left:0}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.3,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
});

const testData = [
  {
    user_id: 1,
    user_image: require('../../../assets/test/5.jpeg'),
    user_name: "Test User",
    stories: [{
        story_id: 1,
        story_image: require('../../../assets/test/5.jpeg'),
        swipeText:'Custom swipe text for this story',
    }]
  },
  {
    user_id: 2,
    user_image: require('../../../assets/test/3.jpeg'),
    user_name: "Test User",
    stories: [{
        story_id: 1,
        story_image: require('../../../assets/test/5.jpeg'),
        swipeText:'Custom swipe text for this story',
    }]
  },
  {
    user_id: 3,
    user_image: require('../../../assets/test/1.jpeg'),
    user_name: "Test User",
    stories: [{
        story_id: 1,
        story_image: require('../../../assets/test/1.jpeg'),
        swipeText:'Custom swipe text for this story',},
      {
        story_id: 2,
        story_image: require('../../../assets/test/9.jpeg'),
        swipeText:'Custom swipe text for this story',
    }]
  },
];

export default withTheme(StoryArea);