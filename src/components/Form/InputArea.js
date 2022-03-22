import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { withTheme } from 'react-native-elements';
import SubmitButton from './SubmitButton';
import InputRating from './InputRating';
import InputImage from './InputImage';
import InputText from './InputText';
import InputDate from './InputDate';


const InputArea = (props) => {
  const [title, setTitle] = useState(null);
  const [shop, setShop] = useState(null);
  const [place, setPlace] = useState(null);
  const [memo, setMemo] = useState(null);
  const [error, setError] = useState(false);

  const handleStore = () => {
    console.log('test');
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