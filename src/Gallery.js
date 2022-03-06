import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import { ListArea, SearchArea } from './components/Gallery';
import { DetailArea } from './components/Detail';

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
      <DetailArea navigation={props.navigation} route={props.route.name}
        id={id} open={open} setOpen={setOpen} setId={setId}
      />
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