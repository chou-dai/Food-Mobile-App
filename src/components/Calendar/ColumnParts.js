import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withTheme } from 'react-native-elements';

const ColumnParts = (props) => {

  const handleOpen = () => {
    alert(props.item.id);
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleOpen}>
      <View style={[
        styles.card,
        {backgroundColor: '#666', marginTop: (props.item.num===1 ? 360 : 0)},
      ]}>
        <LinearGradient
          colors={['rgba(240,152,25,1)', 'rgba(255,88,88,1)']} 
          start={{x: 0.0, y: 1}} 
          end={{x: 1, y: 1}}
          style={styles.linearGradient}
        >
          <Text style={[
            styles.text,
            {color: props.theme.colors.text}
          ]}>{props.item.day}</Text>
        </LinearGradient>
        <Image style={styles.image} source={props.item.url}/>
      </View>
    </TouchableOpacity>
  )
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    top: 10,
    height: 100,
    width: width-20,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  linearGradient: {
    width: 80,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '600'
  },
  image: {
    height: '100%',
    width: 80
  }
});

export default withTheme(ColumnParts);
