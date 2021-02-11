import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import HelloScreen from '../screens/HelloScreen'
// import HomeScreen from '../screens/HomeScreen'
import UserScreen from '../screens/UserScreen'

const Stack = createStackNavigator()

// ### レッスン2: ホームスタックで表示する画面を変えよう ###
// 1. "HelloScreen"ではなく、"HomeScreen"を表示するように変えてみよう。
const HomeStackNavigator = () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen
      name="Main"
      component={HelloScreen}
      options={{
        headerTitle: 'ホーム',
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
)

const UserStackNavigator = () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen
      name="Main"
      component={UserScreen}
      options={{
        headerTitle: 'ユーザー',
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="HomeTab"
    tabBarOptions={{ showLabel: false }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'HomeTab') {
          return <MaterialCommunityIcons name="home" size={24} />
        }
        if (route.name === 'UserTab') {
          return <MaterialCommunityIcons name="account" size={24} />
        }
      },
    })}
  >
    <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
    <Tab.Screen name="UserTab" component={UserStackNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
