import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import HomeScreen from '../components/HomeScreen';
import MusicScreen from '../components/MusicScreen';
import ProfileScreen from '../components/ProfileScreen';
import SearchScreen from '../components/SearchScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {baseBackgroundColor, baseColor, secondaryColor} from '../styles';
import LinearGradient from 'react-native-linear-gradient';

const Tab = AnimatedTabBarNavigator();
const MainTab = () => {
  const renderIcon = (name: any, color: any) => {
    return <FontAwesome name={name} color={color} size={22} />;
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: '#cccc',
        activeBackgroundColor: baseBackgroundColor,
        tabStyle: {
          backgroundColor: secondaryColor,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({color}: any) => renderIcon('home', color),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          // tabBarLabel: 'Search',
          tabBarIcon: ({color}: any) => renderIcon('search', color),
        }}
      />
      <Tab.Screen
        name="Music"
        component={MusicScreen}
        options={{
          // tabBarLabel: 'Music',
          tabBarIcon: ({color}: any) => renderIcon('music', color),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          // tabBarLabel: 'Profile',
          tabBarIcon: ({color}: any) => renderIcon('user', color),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;

const styles = StyleSheet.create({});
