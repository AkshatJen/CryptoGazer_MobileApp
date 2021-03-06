import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Store from './Store';
import {createStackNavigator , createAppContainer , createBottomTabNavigator} from 'react-navigation';
import { Header, CryptoContainer } from './components';
import Wallet from './Screens/Wallet';
// import News from './Screens/News';
// import Article from './Screens/Article';
import AccountPage from "./components/AccountPage";
import BitcoinSentiment from './components/BitcoinSentiment';
import DisplayArticles from './components/DisplayArticles';
// import EthSentiments from './components/EthSentiments';

// const Feed = createStackNavigator({
//   News: { screen: News,
//   navigationOptions: () => ({
//       headerBackTitle: `News`,
//       headerMode: 'none'
//     })},
//   ArticlePage: { screen: Article,
//   }});

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
      <DisplayArticles/>
    );
  }
}

class Sentiments extends Component {
  render() {
    return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Settings</Text>
      // </View>
      <Provider store={Store}>
        <BitcoinSentiment/>
        {/* <EthSentiments/> */}
      </Provider>
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
    Sentiments,
    Account,
    Wallet
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        //header : null,
        headerTitle: routeName,
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