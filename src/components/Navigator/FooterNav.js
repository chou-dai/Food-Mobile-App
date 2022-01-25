import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Home from '../../Home';
import Calendar from '../../Calendar';
import Gallery from '../../Gallery';
import Setting from '../../Setting';
import { withTheme } from 'react-native-elements';
import { Alert, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FAB } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import CameraScreen from '../../CameraScreen';

const Tab = createBottomTabNavigator();

const FooterNav = (props) => {

  const handlePress = () => {
    navigation.navigate('camera')
    // Alert.alert(
    //   'カメラ処理',
    //   'カメラを起動して写真を追加',
    //   [
    //     {text: 'Cancel'},
    //     {text: 'OK'},
    //   ],
    //   { cancelable: false }
    // )    
  }

  return (
    <NavigationContainer>
		  <Tab.Navigator
        initialRouteName='home'
        screenOptions={{
          tabBarActiveTintColor: props.theme.colors.main,
          tabBarActiveBackgroundColor: props.theme.colors.base,
          tabBarInactiveBackgroundColor: props.theme.colors.base,
          tabBarStyle: {
            backgroundColor: props.theme.colors.base,
            borderTopWidth: 0,
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.9,
            shadowRadius: 3,
          },
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen name="home" component={ Home }
          options={{
            tabBarLabel: 'ホーム',
            tabBarIcon: ({ color }) => (
              <Entypo name="home"
                style={{
                  fontSize: 25,
                  color: color
                }}
              />
            )
          }}
        />
        <Tab.Screen name="calendar" component={ Calendar } 
          options={{
            tabBarLabel: 'カレンダー',
            tabBarIcon: ({ color }) => (
              <Ionicons name="calendar-sharp"
                style={{
                  fontSize: 25,
                  color: color
                }}
              />
            )
          }}
        />
        <Tab.Screen name="camera" component={ CameraScreen }
          options = {({ navigation }) => ({
            tabBarLabel: 'カメラ',
            tabBarButton: (props) => (
              <LinearGradient
                colors={['rgba(240,152,25,1)', 'rgba(255,88,88,1)']} 
                start={{x: 0.0, y: 1}} 
                end={{x: 1, y: 1}}
                style={styles.linearGradient}
              >
                <FAB style={styles.fab} icon="camera"
                  onPress={() => navigation.navigate('camera')}
                />
              </LinearGradient>
            )
          })}
        />
        <Tab.Screen name="gallery" component={ Gallery }
          options={{
            tabBarLabel: 'ギャラリー',
            tabBarIcon: ({ color }) => (
              <Ionicons name="apps-sharp"
                style={{
                  fontSize: 25,
                  color: color,
                }}
              />
            )
          }}
        />
        <Tab.Screen name="setting" component={ Setting }
          options={{
            tabBarLabel: '設定',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="settings"
                style={{
                  fontSize: 25,
                  color: color
                }}
              />
            )
          }}
        />
      </Tab.Navigator>
		</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    position: 'relative',
    width: 52,
    height: 52,
    marginLeft: 20,
    marginRight: 20,
    top: -10,
    borderRadius: 25,
    overflow: 'hidden',
  },
  fab: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
})

export default withTheme(FooterNav);