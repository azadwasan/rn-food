import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import SingleRestaurantScreen from './src/screens/SingleRestaurantScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    SingleResScr: SingleRestaurantScreen
  },
  {
    initialRouteName: 'Search',
    defaulNavigationOptions: {
      title: 'Business Search'
    }
  }
);

export default createAppContainer(navigator);