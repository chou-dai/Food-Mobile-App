import React from 'react';
import { withTheme } from 'react-native-elements';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Menu, MenuItem } from 'react-native-material-menu';
import * as Haptics from 'expo-haptics';
import { MaterialIcons } from '@expo/vector-icons';

const FilterMenu = (props) => {

  const hideMenu = () => {
    props.setVisible(false);
  };

  const showMenu = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    props.setVisible(true);
  };

  return (
      <Menu
        visible={props.visible}
        anchor={
          <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={showMenu}>
            <MaterialIcons onPress={showMenu} name="sort" size={24} color="rgba(0,0,0,0.5)"/>
          </TouchableOpacity>
        }
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={hideMenu}>新しい順</MenuItem>
        <MenuItem onPress={hideMenu}>古い順</MenuItem>
        <MenuItem onPress={hideMenu}>評価順</MenuItem>
        <MenuItem onPress={hideMenu}>お気に入り</MenuItem>
      </Menu>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withTheme(FilterMenu);