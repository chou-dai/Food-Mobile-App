import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

const DetailParts = (props) => {

  const [like, setLike] = useState(false);
  const [bgColor, setBgColor] = useState('black');
  const [txtColor, setTxtColor] = useState(props.theme.colors.text);

  const handleLike = () => {
    setLike(!like);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  }

  const handleColor = () => {
    setBgColor('green');
    setTxtColor('white');
    alert('Change Color');
  }

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>

      <View style={styles.topContent}>
        <View style={styles.topLeft}>
          <Image style={styles.icon} source={props.item.icon}/>
          <Text style={{color: txtColor}}>{props.item.date}</Text>
        </View>
        <Feather style={{marginRight: 20}} name="more-horizontal"
          size={26} color={txtColor}
          onPress={() => {alert("edit")}}/>
      </View>

      <Image style={styles.image} source={props.item.url}/>

      <View style={styles.bottomContent}>
        {like ? (
          <AntDesign name="heart" size={24} 
            style={{marginLeft: 20}} color={'#e62e56'}
            onPress={handleLike}
          />
          ):(
          <AntDesign name="hearto" size={24} 
            style={{marginLeft: 20}} color={txtColor}
            onPress={handleLike}
          />
        )}
        <Entypo name="share" size={24} 
          style={{marginLeft: 12}} color={txtColor}
          onPress={() => {alert("share")}}
        />
        <Ionicons name="color-palette-outline" size={27}
          style={{marginLeft: 12}} color={txtColor}
          onPress={handleColor}
        />
      </View>

    </View>
  )
}

const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContent: {
    height: 55,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottomContent: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  topLeft: {
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row'
  },
  image: {
    height: height*0.55,
    width: '100%',
  },
  icon: {
    height: 33,
    width: 33,
    borderRadius: 20,
    marginLeft: 18,
    marginRight: 10,
  },
});

export default withTheme(DetailParts);