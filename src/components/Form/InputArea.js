import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Input, Rating, withTheme } from 'react-native-elements';
import SubmitButton from './SubmitButton';
import InputLabel from './InputLabel';
import InputRating from './InputRating';
import InputImage from './InputImage';
import InputText from './InputText';


const InputArea = (props) => {

  return (
    <View style={{width: '100%', flex: 1}}>
      <ScrollView>
        <View style={{marginTop: 50, marginBottom: 80}}>
          <InputText placeholder='title' label={'タイトル'} isRequired={true}/>
          <InputImage image={props.picture} style={{ height: 200, width: 150 }} />
          <InputRating />
          <InputText placeholder='date' label={'日時'} isRequired={true}/>
          <InputText placeholder='shop' label={'店名'} isRequired={false}/>
          <InputText placeholder='place' label={'場所'} isRequired={false}/>
          <InputText placeholder='memo' label={'メモ'} isRequired={false}/>
        </View>
      </ScrollView>
      <SubmitButton />
    </View>
  )
}
const styles = StyleSheet.create({
});

export default withTheme(InputArea);