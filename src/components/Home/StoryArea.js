import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withTheme } from 'react-native-elements';

import InstaStory from 'react-native-insta-story';

const StoryArea = (props) => {
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
        style={{marginTop: 30}}
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

const data = [
  {
    user_id: 1,
    user_image: require('../../../assets/test/5.jpeg'),
    user_name: "Test User",
    stories: [{
        story_id: 1,
        story_image: require('../../../assets/test/5.jpeg'),
        swipeText:'Custom swipe text for this story',
    }]
    // user_id: 1,
    // user_image: {uri: "file:///var/mobile/Containers/Data/Application/27A1187D-B576-49BD-BEA3-6B5096079AA8/Library/Caches/ExponentExperienceData/%2540anonymous%252Ffood_app-946f831a-e9ea-4c1c-919d-76bc4cbf9306/Camera/6EBEDB6D-48F6-4850-B640-92A665657D7B.jpg"},
    // user_name: "test",
    // stories: [{
    //   story_id: 1,
    //   story_image: {uri: "file:///var/mobile/Containers/Data/Application/27A1187D-B576-49BD-BEA3-6B5096079AA8/Library/Caches/ExponentExperienceData/%2540anonymous%252Ffood_app-946f831a-e9ea-4c1c-919d-76bc4cbf9306/Camera/6EBEDB6D-48F6-4850-B640-92A665657D7B.jpg"},
    //   swipeText:'Custom swipe text for this story',
    // }]
  },
  {
    user_id: 2,
    user_image: require('../../../assets/test/5.jpeg'),
    user_name: "Test User",
    stories: [{
        story_id: 1,
        story_image: require('../../../assets/test/5.jpeg'),
        swipeText:'Custom swipe text for this story',
    }]
    // user_id: 2,
    // user_image: {uri: "file:///var/mobile/Containers/Data/Application/27A1187D-B576-49BD-BEA3-6B5096079AA8/Library/Caches/ExponentExperienceData/%2540anonymous%252Ffood_app-946f831a-e9ea-4c1c-919d-76bc4cbf9306/Camera/6EBEDB6D-48F6-4850-B640-92A665657D7B.jpg"},
    // user_name: "test",
    // stories: [{
    //   story_id: 1,
    //   story_image: {uri: "file:///var/mobile/Containers/Data/Application/27A1187D-B576-49BD-BEA3-6B5096079AA8/Library/Caches/ExponentExperienceData/%2540anonymous%252Ffood_app-946f831a-e9ea-4c1c-919d-76bc4cbf9306/Camera/6EBEDB6D-48F6-4850-B640-92A665657D7B.jpg"},
    //   swipeText:'Custom swipe text for this story',
    // }]
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
  {
    user_id: 4,
    user_image: require('../../../assets/test/4.jpeg'),
    user_name: "Test User",
    stories: [{
        story_id: 1,
        story_image: require('../../../assets/test/10.jpeg'),
        swipeText:'Custom swipe text for this story',},
      {
        story_id: 2,
        story_image: require('../../../assets/test/8.jpeg'),
        swipeText:'Custom swipe text for this story',
    }]
  },
  {
    user_id: 6,
    user_image: require('../../../assets/test/9.jpeg'),
    user_name: "Test User",
    stories: [{
        story_id: 1,
        story_image: require('../../../assets/test/4.jpeg'),
        swipeText:'Custom swipe text for this story',},
      {
        story_id: 2,
        story_image: require('../../../assets/test/1.jpeg'),
        swipeText:'Custom swipe text for this story',
    }]
  },
  {
    user_id: 7,
    user_image: require('../../../assets/test/8.jpeg'),
    user_name: "Test User",
    stories: [{
        story_id: 1,
        story_image: require('../../../assets/test/10.jpeg'),
        swipeText:'Custom swipe text for this story',},
      {
        story_id: 2,
        story_image: require('../../../assets/test/7.jpeg'),
        swipeText:'Custom swipe text for this story',
    }]
  }
];

export default withTheme(StoryArea);