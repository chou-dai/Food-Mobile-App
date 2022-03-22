import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { withTheme } from 'react-native-elements';
import SubmitButton from './SubmitButton';
import InputRating from './InputRating';
import InputImage from './InputImage';
import InputText from './InputText';
import InputDate from './InputDate';
import * as ImageManipulator from 'expo-image-manipulator';
import { firstSaveDatabase } from '../../api/database';
import * as Haptics from 'expo-haptics';


const InputArea = (props) => {
  const [title, setTitle] = useState(null);
  const [shop, setShop] = useState(null);
  const [place, setPlace] = useState(null);
  const [memo, setMemo] = useState(null);
  const [error, setError] = useState(false);

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

  const handleStore = async() => {
    const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const N=16
    const id = Array.from(Array(N)).map(()=>S[Math.floor(Math.random()*S.length)]).join('')

    const date = new Date();
    const today = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() 
                  + "-" + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
    
    const isPressed = 0;
    
    const smallImage = await resizeImage(props.picture.uri, 300);
    const mediumImage = await resizeImage(props.picture.uri, 800);
    const largeImage = await resizeImage(props.picture.uri, 400);

    firstSaveDatabase(id, isPressed, smallImage, mediumImage, largeImage, today);

    Alert.alert(
      'Alert',
      title + ' 保存完了',
      [
        {text: 'OK', onPress: () => props.navigation.navigate('Home')},
      ],
      { cancelable: false }
    )
  }
 
  return (
    <View style={{width: '100%', flex: 1}}>
      <ScrollView>
        <View style={{marginTop: 50, marginBottom: 80}}>
          <InputText
            placeholder='タイトルを入力' label={'タイトル'} isRequired={true}
            value={title} setValue={setTitle} error={error}
          />
          <InputImage image={props.picture} style={{ height: 200, width: 150 }} />
          <InputRating />
          <InputDate />
          <InputText
            placeholder='マクドナルド'label={'店名'} isRequired={false}
            value={shop} setValue={setShop} error={false}
          />
          <InputText
            placeholder='東京都千代田区' label={'場所'} isRequired={false}
            value={place} setValue={setPlace} error={false}
          /> 
          <InputText
            placeholder='メモを入力' label={'メモ'} isRequired={false}
            value={memo} setValue={setMemo} error={false}
          />
        </View>
      </ScrollView>
      <SubmitButton title={title} setError={setError} handleStore={handleStore} />
    </View>
  )
}
const styles = StyleSheet.create({
});

export default withTheme(InputArea);