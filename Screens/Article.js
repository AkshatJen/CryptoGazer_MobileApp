import React, { Component } from 'react';
import {
  WebView
} from 'react-native';

export default class Article extends Component {
  render(){
    return(
       <WebView
       renderLoading = {true}
        source={{uri: this.props.navigation.state.params.link}}
      />
      )
  }
}