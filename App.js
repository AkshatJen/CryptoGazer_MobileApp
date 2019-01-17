import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Store from './Store';
import FlatListExample from './components/FlatListExample';

import { Header, CryptoContainer } from './components';

export default class App extends Component{
  render() {
    return (
      <Provider store={Store}>
      <View style={styles.container}>
      <Header style={styles.header}/> 
      <CryptoContainer />
      {/*<FlatListExample /> */}
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // alignItems: 'center',  // This caused the android scroll view width problem
    backgroundColor: 'white',
    width: '100%',
  },
 
});