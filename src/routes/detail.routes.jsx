import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes } from './app.routes';
import { ColumnDetail } from '../screens/DetailColumn';


const { Navigator, Screen } = createStackNavigator();

export function DetailRoutes() {

  return (

    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Screen name="Dashboard" component={AppRoutes} />    
      <Screen name="Coluna" component={ColumnDetail} />
    </Navigator>
  );
}
