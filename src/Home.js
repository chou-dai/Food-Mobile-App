import React, { useState } from 'react';
import { StyleSheet, Dimensions, Animated, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import { DetailArea } from './components/Detail';
import { HomeCalendarArea, CardArea, SearchArea, StoryArea, TitleArea } from './components/Home';

const Home = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  
  return (
    <View style ={[
      styles.container,
      {backgroundColor: props.theme.colors.base},
    ]}>
      <TitleArea scrollY={scrollY}/>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        style={ styles.scroll }
        onScroll={event => { 
          setScrollY(event.nativeEvent.contentOffset.y)
        }}
      >
        <View style={{height:160, opacity:0}}/>
        <SearchArea/>
        <StoryArea navigation={props.navigation} setIsCamera={props.setIsCamera}/>
        <CardArea navigation={props.navigation} setOpen={setOpen} setId={setId}/>
        <HomeCalendarArea navigation={props.navigation} />
      </Animated.ScrollView>
      <DetailArea navigation={props.navigation} route={props.route.name}
        id={id} open={open} setOpen={setOpen} setId={setId}
      />
    </View>
  );
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scroll: {
    width: width,
    height: height,
  },
});

export default withTheme(Home);