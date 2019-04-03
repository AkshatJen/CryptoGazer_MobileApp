import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {Provider}  from 'react-redux';
import Store from './Store';
import SentimentGraph from './components/SentimentGraph';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
          <SentimentGraph />
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
