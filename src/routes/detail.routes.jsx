import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes } from './app.routes';
import { ColumnDetail } from '../screens/DetailColumn';
import { Detail } from '../screens/Detail';
import { Home } from '../screens/Home';


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
      <Screen name="Detalhe" component={Detail} />
      <Screen name="EditarNovo" component={Home} />
    </Navigator>
  );
}
