import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import InstaStory from 'react-native-insta-story';
import { getHomeStoryDataSet } from '../../api/database';
import { Ionicons } from '@expo/vector-icons';

const StoryArea = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      getHomeStoryDataSet(setData);
    });
  }, [props.navigation]);

  const handleNavigation = () => {
    props.setIsCamera(true);
    props.navigation.navigate('Camera');
  }

  
  return (
    <View style={[
      styles.container,
      styles.shadow,
      {backgroundColor: props.theme.colors.base},
      {borderColor: props.theme.colors.border}
    ]}>
      {data.length===0 ? (
        <View style={styles.noneStyle}>
          <View style={styles.story}>
            <TouchableOpacity style={[styles.avatarWrapper, {backgroundColor: props.theme.colors.border}]}
              onPress={handleNavigation} activeOpacity={0.5}>
                <Ionicons name="add" style={{marginLeft: 5, marginTop: 2.5}} size={60} color="black"/>
            </TouchableOpacity>
            <Text style={[styles.text, {color: props.theme.colors.text}]}>ストーリーズ</Text>
          </View>
        </View>
      ):(
        <InstaStory
          data={data} duration={5} avatarSize={70}
          pressedBorderColor={props.theme.colors.border}
          avatarTextStyle={{
            color: props.theme.colors.text,
            fontSize: 12,
          }}
          style={{marginTop: 30, left:0}}
        />
      )}
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
  noneStyle: {
    width:'100%',
    paddingLeft: 12,
    alignItems:'flex-start',
    position: 'absolute',
    bottom: 0
  },
  story: {
    marginVertical: 5,
    marginRight: 10
  },
  avatarWrapper: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: 'gray',
    height: 74,
    width: 74,
  },
  text: {
    marginTop: 3,
    textAlign: "center",
    alignItems: "center",
    fontSize: 12,
    paddingBottom: 8
  }
});

export default withTheme(StoryArea);