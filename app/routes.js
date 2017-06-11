import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';

const routes = StackNavigator({
  Home: { screen: HomeScreen },
});

export default routes;
