import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import NoteFormScreen from './screens/NoteFormScreen';

const routes = StackNavigator({
  Home: { screen: HomeScreen },
  NoteForm: { screen: NoteFormScreen },
});

export default routes;
