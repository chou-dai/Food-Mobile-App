import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';


export default function CameraScreen() {
  const [hasPermission, sertHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const image = await camera.takePictureAsync();

      const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      const N=16
      const id = Array.from(Array(N)).map(()=>S[Math.floor(Math.random()*S.length)]).join('')

      setPicture(image.uri);
      console.log(image.uri);
      console.log(id);
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === 'granted') {
        // const asset = await MediaLibrary.createAssetAsync(image.uri);
      }
    }
  };
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {!picture ? (
          <Camera
            style={{ flex: 1 }}
            ref={(ref) => {
              setCamera(ref);
            }}
          />
        ) : (
          <Image source={{ uri: "file:///var/mobile/Containers/Data/Application/27A1187D-B576-49BD-BEA3-6B5096079AA8/Library/Caches/ExponentExperienceData/%2540anonymous%252Ffood_app-946f831a-e9ea-4c1c-919d-76bc4cbf9306/Camera/6EBEDB6D-48F6-4850-B640-92A665657D7B.jpg" }} style={{ flex: 1 }} />
        )}
      </View>
      <View
        style={{
          height: 60,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        {picture ? (
          <TouchableOpacity onPress={() => setPicture(null)}>
            <Ionicons name="ios-camera-outline" size={40} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => takePicture()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              borderWidth: 5,
              borderColor: 'black',
            }}
          ></TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10000,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
