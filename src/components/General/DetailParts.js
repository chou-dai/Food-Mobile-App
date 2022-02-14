import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const DetailParts = (props) => {

  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  }

  return (
    <View style={styles.container}>

      <View style={styles.topContent}>
        <View style={styles.topLeft}>
          <Image style={styles.icon} source={props.item.icon}/>
          <Text style={{color: props.theme.colors.text}}>{props.item.date}</Text>
        </View>
        <Feather style={{marginRight: 20}} name="more-horizontal"
          size={26} color={props.theme.colors.text}
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
            style={{marginLeft: 20}} color={props.theme.colors.text}
            onPress={handleLike}
          />
        )}
        <Entypo name="share" size={24} 
          style={{marginLeft: 12}} color={props.theme.colors.text}
          onPress={() => {alert("share")}}
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