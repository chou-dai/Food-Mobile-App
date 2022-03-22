import React, { useEffect, useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { withTheme } from 'react-native-elements';
import { HeadArea, InputArea } from './components/Form';

const Form = (props) => {
  const [picture, setPicture] = useState(null);
  const [path, setPath] = useState(null);

  useEffect(() => {
    setPicture(props.route.params.url);
    setPath(props.route.params.path);
  }, [props]);


  return (
    <View style ={[styles.container, {backgroundColor: props.theme.colors.base}]}>
      <HeadArea navigation={props.navigation} path={path} />
      <InputArea picture={picture} navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default withTheme(Form);