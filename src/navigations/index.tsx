import React from 'react'
import { NavigationContainer, RouteProp } from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Button, Footer, FooterTab, Icon } from 'native-base'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types'
import { HomeScreen } from '../components/screens/HomeScreen'
import { MenuScreen } from '../components/screens/MenuScreen'
import { ListScreen } from '../components/screens/ListScreen'
import { ListDetailScreen } from '../components/screens/ListDetailScreen'

const MainStack = createStackNavigator()
const MainStackScreen = (): JSX.Element => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'ホーム' }}
      />
    </MainStack.Navigator>
  )
}
type MainStackParamList = {
  Home: undefined
}
export type MainStackNavigationProps<
  RouteName extends keyof MainStackParamList
> = {
  navigation: StackNavigationProp<MainStackParamList, RouteName>
  route: RouteProp<MainStackParamList, RouteName>
}

const ListStack = createStackNavigator()
const ListStackScreen = (): JSX.Element => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List" component={ListScreen} />
      <ListStack.Screen name="ListDetail" component={ListDetailScreen} />
    </ListStack.Navigator>
  )
}
type ListStackParamList = {
  List: undefined
  ListDetail: { id: number }
}
export type ListStackNavigationProps<
  RouteName extends keyof ListStackParamList
> = {
  navigation: StackNavigationProp<ListStackParamList, RouteName>
  route: RouteProp<ListStackParamList, RouteName>
}

const MenuStack = createStackNavigator()
const MenuStackScreen = (): JSX.Element => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="Menu" component={MenuScreen} />
    </MenuStack.Navigator>
  )
}
type MenuStackParamList = {
  Menu: undefined
}
export type MenuStackNavigationProps<
  RouteName extends keyof MenuStackParamList
> = {
  navigation: StackNavigationProp<MenuStackParamList, RouteName>
  route: RouteProp<MenuStackParamList, RouteName>
}

const TabBar = ({ state, navigation }: BottomTabBarProps): JSX.Element => {
  return (
    <Footer>
      <FooterTab>
        <Button
          active={state.index === 0}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon
            name="home"
            type="MaterialCommunityIcons"
            style={{ fontSize: 30 }}
          />
        </Button>
        <Button
          active={state.index === 1}
          onPress={() => navigation.navigate('List')}
        >
          <Icon
            name="magnify"
            type="MaterialCommunityIcons"
            style={{ fontSize: 30 }}
          />
        </Button>
      </FooterTab>
    </Footer>
  )
}

const Tab = createBottomTabNavigator()
const TabScreen = (): JSX.Element => {
  return (
    <Tab.Navigator tabBar={TabBar}>
      <Tab.Screen name="Home" component={MainStackScreen} />
      <Tab.Screen name="List" component={ListStackScreen} />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator()
export const AppNavigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Tab" component={TabScreen} />
        <Drawer.Screen name="Menu" component={MenuStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
