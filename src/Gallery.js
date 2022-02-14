import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import { ListArea, SearchArea } from './components/Gallery';
import { DetailArea } from './components/General';

const Gallery = (props) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  return (
    <View style={[
      styles.container,
      {backgroundColor: props.theme.colors.base}
    ]}>
      <SearchArea />
      <ListArea navigation={props.navigation} setOpen={setOpen} setId={setId}/>
      {open ? <DetailArea id={id} setOpen={setOpen} setId={setId} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withTheme(Gallery);