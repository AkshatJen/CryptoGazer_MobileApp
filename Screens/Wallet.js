
import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';


import { createStore } from 'redux';

const INITIAL_STATE = {
  btc: 0,
  ltc: 0,
  euro: 0,
  eth: 0,
  isAvailable: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return { ...state, ...action.state };
  }
};

const store = createStore(reducer, {});

import { Animated, StatusBar, StyleSheet, Text, View, Slider } from 'react-native';
import { Provider, connect } from 'react-redux';

const mapStateToProps = state => {
  return { ...state };
};

const numberWithCommas = x => {
  let parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

const fetchPrice = async source => {
  const response = await fetch(source);
  const json = await response.json();
  return json.result.price;
};

class PriceSectionComponent extends React.Component {
  state = {
    display: new Animated.Value(this.props.top),
    value: this.props.top,
  };

  componentWillReceiveProps(nextProps) {
    Animated.timing(this.state.display, {
      toValue: nextProps.top,
      duration: 600,
    }).start();
  }

  componentDidMount() {
    this.state.display.addListener(({ value }) => {
      this.setState({ value });
    });
  }

  render() {
    const valueToRender = numberWithCommas(this.state.value.toFixed(this.props.fixed));

    return (
      <View style={styles.priceSection}>
        <Text style={[styles.priceSectionTop]}>
          {this.props.symbol ? `${this.props.symbol} ` : undefined}
          {valueToRender}
        </Text>
        <Text style={[styles.priceSectionBottom]}>{this.props.bottom}</Text>
      </View>
    );
  }
}

class AppScreen extends React.Component {
  state = {
    value: 1,
  };

  async componentDidMount() {
    const usd = await fetchPrice('https://api.cryptowat.ch/markets/gdax/btcusd/price');
    const ltc = await fetchPrice('https://api.cryptowat.ch/markets/gdax/ethusd/price');
    const eth = await fetchPrice('https://api.cryptowat.ch/markets/gdax/ltcusd/price');
    const euro = await fetchPrice('https://api.cryptowat.ch/markets/bitstamp/eurusd/price');

    this.props.dispatch({
      type: 'UPDATE_STATE',
      state: { usd, ltc, eth, euro, isAvailable: true },
    });
  }

  _handleUpdateConversion = value => this.setState({ value });

  render() {
    if (!this.props.isAvailable) {
      return (
          <View>
        <Spinner
            visible={!this.props.isAvailable}
            textContent={"Calculating..."}
            textStyle={{color: '#262A4A'}}
            animation="none"
            cancelable={true}
            //overlayColor="white"
        />
    </View>);
    }

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        <PriceSectionComponent
          top={this.state.value/this.props.usd}
          bottom="Bitcoin"
          symbol="BTC"
          fixed={5}
        />
        

        <Slider
          style={styles.slider}
          maximumValue={10000}
          minimumValue={1}
          step={2}
          value={this.state.value}
          onSlidingComplete={this._handleUpdateConversion}
        />
        <PriceSectionComponent
          top={Number(this.state.value/this.props.euro)}
          bottom="Euro"
          symbol="€"
          fixed={2}
        />
        <PriceSectionComponent
          top={Number(this.state.value)}
          bottom="US Dollar"
          symbol="$"
          fixed={2}
        />
        <PriceSectionComponent
          top={Number(this.state.value / this.props.ltc)}
          bottom="Litecoin"
          symbol="LTC"
          fixed={3}
        />

        <PriceSectionComponent
          top={Number(this.state.value / this.props.eth)}
          bottom="Ethereum"
          symbol="ETH"
          fixed={4}
        />

        
      </View>
    );
  }
}

const ConnectedAppScreen = connect(mapStateToProps)(AppScreen);


export default class RootComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedAppScreen />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  slider: {
    width: '90%',
  },
  priceSection: {
    width: '100%',
    padding: 16,
  },
  priceSectionTop: {
    color: '#262A4A',
    fontSize: 32,
  },
  priceSectionBottom: {
    color: '#262A4A',
    fontSize: 12,
    marginTop: 2,
  },
});