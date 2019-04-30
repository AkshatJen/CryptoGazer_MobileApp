import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , SafeAreaView } from 'react-native';
import {Provider} from 'react-redux';
import Store from './Store';
import FlatListExample from './components/FlatListExample';
import {createStackNavigator , createAppContainer , createBottomTabNavigator , createMaterialTopTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header, CryptoContainer } from './components';
import Wallet from './Screens/Wallet';
import News from './Screens/News';
import DisplayArticles from './components/DisplayArticles';
import Article from './Screens/Article';
import Watchlist from './Screens/Watchlist';
import BitcoinSentiment from './components/BitcoinSentiment';

const Feed = createStackNavigator({
  News: { screen: DisplayArticles},
  ArticlePage: { screen: Article }
},
{
  headerMode : 'none',
  headerBackTitle: 'News'
});

  const Portfolio = createMaterialTopTabNavigator({
    Watchlist : {screen : Watchlist,
      navigationOptions: () => ({
        headerTitle : 'none',
        headerMode: 'none',
        lazy : 'true',
        optimizationsEnabled: 'true',
        tabBarOptions :{
          style: {
            backgroundColor: '#262A4A',
          },
        },
       
      })},
    Wallet :{screen : Wallet,
      navigationOptions: () => ({
        headerTitle : 'none',
        headerMode: 'none',
        lazy : 'true',
        optimizationsEnabled: 'true',
        tabBarOptions :{
          style: {
            backgroundColor: '#262A4A',
          },
        },
       
      })}
    
  })


  

export default class App extends Component{
  render() {
    return (
     <AppContainer/>   
    );
  }
}

class Trends extends Component {
  static navigationOptions={}
  render(){
    return ( 
      <Provider store={Store}>
      <BitcoinSentiment />
      </Provider>
  
      
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

/*class Feed extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed</Text>
      </View>
    );
  }
} */
class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
}

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Coins,
    Trends,
    Feed,
    Portfolio, 
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      let IconComponent = Ionicons;
      if(navigation.state.index == 0 || navigation.state.index == 1 || Platform.OS == 'ios'){
      return {
        //header : null,
        headerTitle: routeName,
        
      }}
      else
      return{
        header : null,
      };
    }
      
    ,defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName == 'Coins') {
          //iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          iconName = `ios-stats`;
          //iconName = 'person';
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
         
          
        } else if (routeName === 'Feed') {
          iconName = `ios-paper`;
        }
        else if (routeName === 'Trends'){
          iconName = 'ios-trending-up';
        }
        else {
          iconName = `ios-wallet`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }) 
  
  ,
    tabBarOptions: {
      allowFontScaling : true,
      animation : 'true',
      activeTintColor: '#262A4A', //#FFEB3C
      inactiveTintColor: '#B0B1BD',
      labelStyle:{
        fontSize :16
      },
      style: {
        backgroundColor: 'white',
        borderTopWidth : 0,
        
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