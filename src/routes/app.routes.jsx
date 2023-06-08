import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Scan } from '../screens/Scan';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Logout } from '../components/Logout';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#002A5E',
        tabBarInactiveBackgroundColor: '#002A5E',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: 'flex',
          position: 'absolute',
          elevation: 5,
          backgroundColor: '#002A5E',
          height: '10%',
          paddingTop: '1%',
          paddingLeft: 40,
          paddingRight: 40
        },
      } 
      )}
      initialRouteName="Editar"
    >
      <Screen
        name="Editar"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons
            name={focused ? "home" : "home"}
              size={focused ? 28 : size}
              color={'#fff'}
            />
          ),
        }}
      />
      <Screen
        name="Escanear"
        component={Scan}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons
              name={focused ? "qr-code-scanner" : "qr-code"}
              size={focused ? 28 : size}
              color={'#002A5E'}
              backgroundColor={'#fff'}
              height={70}
              marginBottom={'200%'}
              paddingTop={'95%'}
              width={'270%'}
              paddingLeft={'85%'}
              style={styles.centerIcon}
            />
          ),
        }}
      />
      <Screen
        name="Sair"
        component={Logout}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity onPress={Logout} {...props} />
          ),
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="settings" size={size} color={'#fff'} />
          ),
        }}
      />
    </Navigator>
  );
}
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#000",
  },
  centerIcon: {
    borderRadius: 100,
    borderColor: '#002A5E',
    borderWidth: 3,
  }
})
