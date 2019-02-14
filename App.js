import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Store from './Store';
import FlatListExample from './components/FlatListExample';
import {createStackNavigator , createAppContainer , createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header, CryptoContainer } from './components';
import AccountPage from "./components/AccountPage";



export default class App extends Component{
  render() {
    return (
     <AppContainer/>
    );
  }
}
class Coins extends Component{
  static navigationOptions = {
  
  }
  render() {
    return (
      <Provider store={Store}>
      <View style={styles.container}>
     { /*<Header style={styles.header}/> */ 
      }
      <CryptoContainer />
      {/*<FlatListExample /> */}
      </View>
      </Provider>
    );
  }
}

class Feed extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed</Text>
      </View>
    );
  }
}
class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
}

class Account extends Component {
  render() {
    return (
        <Provider store={Store}>
            <AccountPage/>
        </Provider>
    );
  }
}

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Coins,
    Feed,
    Settings,
    Account
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
      
    },
    tabBarOptions: {
      allowFontScaling : true,
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      labelStyle:{
        fontSize :16
      },
      style: {
        backgroundColor: '#262A4A',
      },
    },
  }
);

const AppStackNavigator = createStackNavigator({
  Home : DashboardTabNavigator, },
  {
    defaultNavigationOptions:{
        headerStyle : {
          backgroundColor : '', // #262A4A
          
        },
    
    }
  }
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // alignItems: 'center',  // This caused the android scroll view width problem
    backgroundColor: 'white',
    width: '100%',
  },
 
});

const AppContainer = createAppContainer(AppStackNavigator);