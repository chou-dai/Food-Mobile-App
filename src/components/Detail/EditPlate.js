import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, withTheme } from 'react-native-elements';
import Modal from 'react-native-modal';
import { deleteData } from '../../api/database';


const EditPlate = (props) => {

  const handleClose = () => {
    props.setOpen(false);
  }
  const handleEdit = () => {
    props.handleClose();
    props.navigation.navigate('Form', {url: props.image, path: props.route});
  }
  const handleDelete = () => {
    // deleteData(props.id);
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
        style={{height:height-240}}
      />
      <View style={[styles.container, {backgroundColor: props.theme.colors.border}]}>
        <Button title='編集'
          containerStyle={styles.buttonOuter}
          buttonStyle={styles.buttonInner}
          titleStyle={{color: '#007AFF'}}
          onPress={handleEdit}
        />
        <Button title='削除'
          containerStyle={styles.buttonOuter}
          buttonStyle={styles.buttonInner}
          titleStyle={{color: '#ff0f0f'}}
          onPress={handleDelete}
        />
        <Button title='キャンセル'
          containerStyle={[styles.buttonOuter, {marginTop: 15}]}
          buttonStyle={styles.buttonInner}
          titleStyle={{color: '#007AFF'}}
          onPress={handleClose}
        />
      </View>
    </Modal>
  )
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 240,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
    paddingTop: 10,
  },
  buttonOuter: {
    width: width*0.9,
    height: 50,
    marginBottom: 6,
  },
  buttonInner: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    borderRadius: 10,
    height: '100%',
  }
});

export default withTheme(EditPlate);