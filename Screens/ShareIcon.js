import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  Share
} from 'react-native';

import styles from './Style';


export default class ShareIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  onCancel() {
    this.setState({visible:false});
  }
  onOpen() {
    this.setState({visible:true});
  }

  render(){

    let shareOptions = {
      title: this.props.title,
      message: this.props.title,
      url: this.props.link,
      subject: "Check Out This Article" //for email
    };

    return(
        <TouchableOpacity onPress={()=>{
              Share.share(shareOptions)
        }}>
            <Image
              source={require('./assets/upload.png')}
              style={styles.icons}
            />
          </TouchableOpacity>
      )
  }
}