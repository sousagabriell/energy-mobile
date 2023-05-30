import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { AppRoutes } from './app.routes';
import { useAuth } from '../hooks/auth';
import { RecuperarSenha } from '../screens/RecuperarSenha';
import { ConfirmPassword } from '../screens/ConfirmPassword';
import { ColumnDetail } from '../screens/DetailColumn';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  const { user } = useAuth();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Main" component={AppRoutes} />
      <Screen name="RecuperarSenha" component={RecuperarSenha}/>
      <Screen name="ConfirmarRecuperacao" component={ConfirmPassword}/>
    </Navigator>
  );
}
