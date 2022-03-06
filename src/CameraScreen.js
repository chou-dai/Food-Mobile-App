import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Image, Button } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { firstSaveDatabase } from './api/database';
import * as ImageManipulator from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';



export default window.onload = function CameraScreen(props) {
  const [hasPermission, sertHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  const resizeImage = async (imageUri, width) => {
    const result = await ImageManipulator.manipulateAsync(
      imageUri,
      // width or height のみの場合は、アスペクトを保持したままリサイズする
      [{ resize: { width: width } }],
      {
        compress: 0.1,
        format: ImageManipulator.SaveFormat.PNG,
      }
    );
    return result.uri;
  };

  const takePicture = async () => {
    if (camera) {
      const image = await camera.takePictureAsync();
      setPicture(image.uri);

      const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      const N=16
      const id = Array.from(Array(N)).map(()=>S[Math.floor(Math.random()*S.length)]).join('')

      const date = new Date();
      const isPressed = 0;
      const today = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() 
                    + "-" + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
      
      const smallImage = await resizeImage(image.uri, 300);
      const mediumImage = await resizeImage(image.uri, 800);
      const largeImage = await resizeImage(image.uri, 400);
      
      // firstSaveDatabase(id, isPressed, smallImage, mediumImage, largeImage, today);

      routeForm(image.uri);

      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === 'granted') {
        // const asset = await MediaLibrary.createAssetAsync(image.uri);
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      setPicture(result.uri);
      routeForm(result.uri);
    }
  };

  const routeForm = (pictureUrl) => {
    props.navigation.navigate('Form', {url: {uri: pictureUrl}, path: props.route.name});
  }
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#222222' }}>
      <View style={{flex: 1}}>
        <Camera style={{flex: 1}} type={type}
          ref={(ref) => {
            setCamera(ref);
          }}
        />
      </View>
      <View style={[styles.bottomBar,{}]}>
        <View style={styles.buttonArea}>
          <TouchableOpacity onPress={pickImage} activeOpacity={0.5}>
            <SimpleLineIcons name="picture" size={32} color="#eee"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture}>
            <MaterialCommunityIcons name="circle-slice-8" size={52} color="#fff"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleType} activeOpacity={0.5}>
            <Ionicons name="md-sync" size={32} color="#eee"/>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    height: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#222222'
  },
  buttonArea: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width: '90%'
  }
});
