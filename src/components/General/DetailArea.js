import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import { getDetailDataSet } from '../../api/database';
import { Dialog } from 'react-native-simple-dialogs'
import DetailParts from './DetailParts';
import GestureRecognizer from 'react-native-swipe-gestures';


const DetailArea = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    getDetailDataSet(props.id, setData);
  }, []);

  const handleClose = () => {
    props.setId(null);
    props.setOpen(false);
  }

  return (
    <GestureRecognizer onSwipe={() => handleClose()}>
      <Dialog
        visible={true}
        animationType={'fade'}
        onTouchOutside={() => handleClose()}
        dialogStyle={[
          styles.dialog,
          {backgroundColor: 'rgba(0,0,0,0)'}
        ]}
        contentStyle={[
          styles.container,
          {backgroundColor: props.theme.colors.base}
        ]}
        overlayStyle={{backgroundColor: 'rgba(0,0,0,0.8)'}}
      >
        <View style={styles.inner}>
          {data ? <DetailParts item={data}/> : null}
        </View>
      </Dialog>
    </GestureRecognizer>
  )
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({

  dialog: {
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  container: {
    height: height*0.55+110,
    width: '100%',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  inner: {
    position: 'relative',
    height: height*0.6+100,
    top: 0,
    width: width*0.89,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withTheme(DetailArea);