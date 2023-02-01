import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/FeedScreen';
import HomeScreen from '../screens/HomeScreen';
//import BottomNavigationTabBar from '../shared/BottomNavigationBar';
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      //tabBar={props => <BottomNavigationTabBar {...props} />}
      screenOptions={({ route }: any) => ({
        headerShown: false,
        tabBarStyle: {
          width: '90%',
          marginLeft: '5%',
          marginRight: '5%',
          borderWidth: 0,
          borderRadius: 10,
          marginBottom: 20,
          elevation: 5,
        },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let taille: number = focused ? 27 : 25;
          let couleur: string = focused ? 'black' : 'grey';
          switch (route.name) {
            case 'Friends':
              return (
                <MaterialIcons
                  name="dynamic-feed"
                  size={taille}
                  color={couleur}
                />
              );
            case 'Page':
              return <Feather name="map" size={taille} color={couleur} />;
            case 'Feed':
              taille = focused ? 28 : 25;
              return (
                <MaterialCommunityIcons
                  name="account"
                  size={taille}
                  color={couleur}
                />
              );
            default:
              return <></>;
          }
        },
      })}>
      <Tab.Screen name="Friends" component={HomeScreen} />
      <Tab.Screen name="Page" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
    </Tab.Navigator>
  );
};
export default MainNavigator;
