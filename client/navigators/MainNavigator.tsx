import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/FeedScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
    </Tab.Navigator>
  );
};
export default MainNavigator;
