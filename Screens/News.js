import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import ShareIcon from './ShareIcon'
import styles from './Style';
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          articleImage:
            'https://ethereumworldnews.com/wp-content/uploads/2019/01/32628115378_e25a2c9277_o.jpg',
          articleTitle: 'Crypto Prediction: Bitcoin (BTC) If $4,000 Isn’t Inbound, Test Of $3,000 Possible',
          articleLink: 'https://ethereumworldnews.com/crypto-prediction-bitcoin-4000-inbound-3000-possible/',
        },
        {
          id: 2,
          articleImage:
            'https://ethereumworldnews.com/wp-content/uploads/2019/01/Litecoin_Price_Chart-3.png',
          articleTitle: 'Litecoin (LTC) Price Analysis: Decision Time for Buyers',
          articleLink:
            'https://ethereumworldnews.com/litecoin-ltc-price-analysis-decision-time-for-buyers/',
        },
        {
          id: 3,
          articleImage:
            'https://ethereumworldnews.com/wp-content/uploads/2019/01/brexit.jpg',
          articleTitle: 'Binance’s New UK Exchange Overwhelmed by Demand Amid Brexit Fears',
          articleLink:
            'https://ethereumworldnews.com/binances-new-uk-exchange-overwhelmed-by-demand-amid-brexit-fears/',
        },
        {
          id: 4,
          articleImage:
            'https://ethereumworldnews.com/wp-content/uploads/2019/01/How-to-figure-out-cryptocurrency-price-beforehand-New-way-to-find-out-about-Bitcoin-rallies-in-advance-chart-high-low-up-down-bitcoin-ethereum-e1517928661545.jpg',
          articleTitle:
            'BTC will rise 80%, XLM 260%, ADA +99% and ETH 55%. DOGE will dump -77% by Dec 31, 2019. TRX -52% this Month, Panel of Experts Predicts',
          articleLink: 'https://ethereumworldnews.com/btc-will-rise-80-xlm-260-ada-99-and-eth-55-doge-will-dump-77-by-dec-31-2019-trx-52-this-month-panel-of-experts-predicts/',
        },
      ],
    };
  }

  static navigationOptions = {
    header: null
  };
  
  _onRefresh() {
    this.setState({ refreshing: true });
    let temp = this.state.data.slice();
    var newElement = {
      id: 5,
      articleImage:       'https://248qms3nhmvl15d4ne1i4pxl-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/Bitcoin-bear-Shutterstock-760x400.jpg',
      articleTitle: 'Crypto Market Up $6 Billion in 4 Days: Is Bitcoin King During the Bear Market?',
      articleLink: 'https://www.ccn.com/crypto-market-up-6-billion-in-4-days-is-bitcoin-king-during-the-bear-market/',
    };
    temp.unshift(newElement);
    this.setState({ data: temp });
    this.setState({ refreshing: false });
  }

  loadMore() {
    let temp = this.state.data.slice();
    let temp2 = this.state.data.slice();
    var myArray = temp.concat(temp2);
    this.setState({ data: myArray });
  }

  newsTile(item) {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => this.props.navigation.navigate('ArticlePage', {link: item.articleLink})}>
          <View style={styles.container}>
            <Image
              resizeMode="cover"
              source={{ uri: item.articleImage }}
              style={styles.imageBox}
            />
            <Text style={styles.title}>{item.articleTitle}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.iconRow}>
        <ShareIcon link={item.articleLink} title={item.articleTitle}/>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.pageStyle}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          onEndReached={this.loadMore.bind(this)}
          onEndReachedThreshold={0.5}
          data={this.state.data}
          renderItem={({ item }) => this.newsTile(item)}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
