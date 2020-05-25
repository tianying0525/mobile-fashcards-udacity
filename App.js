// import * as React from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';
// import { Provider } from 'react-redux'
// import reducer from './reducers'
// import { createStore } from 'redux'
// import { FontAwesome, Ionicons } from '@expo/vector-icons'
// import { Constants } from "expo";
// import { white, grey, purple } from './utils/colors'
// import AddDeck from './components/AddDeck'
// import {
//   createBottomTabNavigator,
//   createStackNavigator
// } from "react-navigation-tabs";

// // const instructions = Platform.select({
// //   ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
// //   android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
// // });

// const StatusBar = ({ backgroundColor, ...props }) => (
//   <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
//     <StatusBar translucent backgroundColor={backgroundColor} {...props} />
//   </View>
// );

// const Tabs = createBottomTabNavigator(
//   {
//     // Decks: {
//     //   screen: Decks,
//     //   navigationOptions: {
//     //     tabBarLabel: "Decks",
//     //     tabBarIcon: ({ tintColor }) => (
//     //       <Feather name="list" size={30} color={tintColor} />
//     //     )
//     //   }
//     // },
//     AddDeck: {
//       screen: AddDeck,
//       navigationOptions: {
//         tabBarLabel: "New Deck",
//         tabBarIcon: ({ tintColor }) => (
//           <Feather name="plus" size={30} color={tintColor} />
//         )
//       }
//     }
//   },
//   {
//     navigationOptions: {
//       header: null
//     },
//     tabBarOptions: {
//       activeTintColor: purple,
//       style: {
//         height: 60,
//         backgroundColor: white,
//         shadowColor: "rgba(0, 0, 0, 0.24)",
//         shadowOffset: {
//           width: 0,
//           height: 3
//         },
//         shadowRadius: 6,
//         shadowOpacity: 1
//       },
//       labelStyle: {
//         paddingTop: 3,
//         fontSize: 14,
//         fontWeight: "bold"
//       }
//     }
//   }
// );

// const MainNavigator = createStackNavigator(
//   {
//     Home: Tabs
//   },
//   {
//     initialRouteName: "Home",
//     navigationOptions: {
//       headerTintColor: white,
//       headerStyle: { backgroundColor: purple },
//       headerTitleStyle: { fontWeight: "bold" }
//     }
//   }
// );

// export default function App() {
//   return (
//     <Provider store={createStore(reducer)}>
//       <View style={{ flex: 1 }}>
//       <StatusBar />
//       {/* <Text style={styles.welcome}>Welcome to MYYYYYY React Native!</Text>
//       <Text style={styles.instructions}>To get started, edit App.js</Text>
//       <Text style={styles.instructions}>{instructions}</Text> */}
//       <Text style={styles.instructions}>To get started, edit App.js</Text>
//       <MainNavigator />
//     </View>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
