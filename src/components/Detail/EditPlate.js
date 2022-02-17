import React from 'react';
import { Button, Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import Modal from 'react-native-modal';


const EditPlate = (props) => {

  const handleClose = () => {
    props.setOpen(false);
  }
  const handleEdit = () => {
    alert('Edit');
  }
  const handleDelete = () => {
    alert('Delete');
  }

  return (
    <Modal
      style={{margin: 0}}
      isVisible={props.open}
      animationInTiming={400}
      animationOutTiming={400}
      backdropOpacity={0}
    >
      <TouchableOpacity
        onPress={handleClose}
        style={{height:height*0.7}}
      />
      <View style={[styles.container, {backgroundColor: props.theme.colors.border}]}>
        <Button title='編集' onPress={handleEdit} />
        <Button title='削除' color={'red'} onPress={handleDelete} />
        <Button title='キャンセル' onPress={handleClose} />
      </View>
    </Modal>
  )
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: height*0.3,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
});

export default withTheme(EditPlate);