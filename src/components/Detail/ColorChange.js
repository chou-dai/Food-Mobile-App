import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import ColorPicker from 'react-native-wheel-color-picker';
import Modal from 'react-native-modal';
import SwitchSelector from 'react-native-switch-selector';
import * as Haptics from 'expo-haptics';

const ColorChange = (props) => {
  const options = [
    { label: '背景', value: true },
    { label: '文字', value: false }
  ];

  const handleClose = () => {
    props.setOpen(false);
  }
  const handleSwitch = (value) => {
    props.setWhich(value);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }
  const handleColorChange = (color) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    props.which ? props.setBgColor(color) : props.setTxtColor(color);
  }

  return (
    <Modal
      onBackdropPress={handleClose}
      style={{margin: 1}}
      isVisible={props.open}
      animationInTiming={400}
      animationOutTiming={400}
      backdropOpacity={0}
    >
      <View style={[styles.container, {backgroundColor: props.theme.colors.border}]}>
          <SwitchSelector options={options} initial={props.which ? 0 : 1}
            selectedColor={props.theme.colors.base}
            buttonColor={props.theme.colors.main}
            backgroundColor={props.theme.colors.border}
            textColor={props.theme.colors.text}
            style={[styles.switch, {borderColor: props.theme.colors.main}]}
            fontSize={15}
            borderRadius={6}
            onPress={handleSwitch} 
          />
          <ColorPicker style={styles.color}
            color={props.which ? props.bgColor : props.txtColor}
            onColorChange={handleColorChange}
            discrete={true}
            gapSize={10}
            swatchesLast={false}
            autoResetSlider={false}
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
    height: 220,
    width: width-2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,
    padding: 30,
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  switch: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 40
  },
  color: {
    width: width*0.88,
  },
});

export default withTheme(ColorChange);