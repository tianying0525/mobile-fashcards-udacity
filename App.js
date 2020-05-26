import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import { pink, white } from './utils/colors'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import Constants from 'expo-constants'
import { setLocalNotification } from './utils/helpers'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createBottomTabNavigator();

const TabNav = () => (
    <Tabs.Navigator
    initialRouteName="Deck List"
    tabBarOptions={{
      activeTintColor: pink,
      style: {
        height: 80,
        backgroundColor: white,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }}>
      <Tabs.Screen name="Add Deck" component={AddDeck} />
      <Tabs.Screen name="Deck List" component={DeckList} />
    </Tabs.Navigator>
)

const Stack = createStackNavigator()
const MainNav = () => (
  <Stack.Navigator headerMode="screen">
      <Stack.Screen
          name="Home"
          component={TabNav}
          options={{headerShown: false}}/>
      <Stack.Screen
          name="Deck"
          component={Deck}
          options={{
              headerTintColor: white, headerStyle: {
                  backgroundColor: pink,
              }
          }}/>
      <Stack.Screen
          name="AddCard"
          component={AddCard}
          options={{
              headerTintColor: white, headerStyle: {
                  backgroundColor: pink,
              }
          }}/>
      <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{
              headerTintColor: white, headerStyle: {
                  backgroundColor: pink,
              }
          }}/>
  </Stack.Navigator>
)

export default class App extends Component {

  componentDidMount() {
    setLocalNotification()
  }
  
  render() {
    return (
      <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <UdaciStatusBar backgroundColor={pink} barStyle="light-content" />
          <MainNav/>
        </NavigationContainer>
      </View>
      </Provider>
    )
  }
}