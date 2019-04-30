
import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {SafeAreaView , ScrollView , AsyncStorage , TextInput , TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


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
      duration: 50,
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
    maxVal:10,
    holdings: 0.0,
      //to get the holdings from the TextInput
    getHoldings: 0.0,
      //to set the holdings on Text
  };

  getHoldingsFunction = () => {
    //function to get the holdings from AsyncStorage
    AsyncStorage.getItem('my_holding').then(
      holdings =>
        //AsyncStorage returns a promise so adding a callback to get the holdings
        this.setState({ getHoldings: holdings})
      //Setting the holdings in Text
    )
  };

  saveHoldingsFunction = () => {
    //function to save the holdings in AsyncStorage
    if (this.state.holdings) {
      //To check the input not empty
      AsyncStorage.setItem('my_holding', this.state.holdings);
      //Setting a data to a AsyncStorage with respect to a key
      this.setState({ holdings: '' });
      //Resetting the TextInput
      alert('Holdings Saved');
      //alert to confirm
    } else {
      alert('Its empty');
      //alert for the empty InputText
    }
  };
    /*
    componentWillMount(){
      this.getHoldingsFunction();
    }
  
    componentWillUpdate(){
      this.getHoldingsFunction();
    }  */
  async componentDidMount() {
    const usd = await fetchPrice('https://api.cryptowat.ch/markets/gdax/btcusd/price');
    const eur = await fetchPrice('https://api.cryptowat.ch/markets/gdax/btceur/price');
    this.props.dispatch({
      type: 'UPDATE_STATE',
      state: { usd, eur, isAvailable: true },
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
      <View>
      <ScrollView>
      <View style={styles.container}>
      
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        <PriceSectionComponent
          top={this.state.value}
          bottom="Bitcoin"
          symbol="₿"
          fixed={4}
        />
        

        <Slider
          style={styles.slider}
          maximumValue={this.state.maxVal}
          minimumValue={0}
          step={0.001}
          value={this.state.value}
          //onSlidingComplete={this._handleUpdateConversion}
          onValueChange={this._handleUpdateConversion}
        />
        <PriceSectionComponent
          top={Number(this.state.value*this.props.eur)}
          bottom="Euro"
          symbol="€"
          fixed={2}
        />
        <PriceSectionComponent
          top={Number(this.state.value*this.props.usd)}
          bottom="US Dollar"
          symbol="$"
          fixed={2}
        />
        {/*<PriceSectionComponent
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
        */}
       
      </View>
      <View style={styles.newStyle}>
      <View style={styles.inputBoard}>
      <View style={{flex : 5}}>
        <Text style={styles.text}> Your Holdings : ₿ {this.state.getHoldings} </Text>
      </View>
      <TouchableOpacity onPress={this.getHoldingsFunction} style={styles.button}>
          <Text style={styles.buttonText}> GET </Text>
          {/*<Ionicons name={'ios-arrow-round-forward'} size={35} color={'white'} />*/}
        </TouchableOpacity> 
        </View>
      <View style={styles.inputBoard}>
      <TextInput
        placeholder="Enter or Update your holdings "
        keyboardType={'numeric'}
        holdings={this.state.holdings}
        onChangeText={data => this.setState({ holdings: data })}
        underlineColorAndroid="transparent"
        style={styles.TextInputStyle}
      />

      <TouchableOpacity
        onPress={this.saveHoldingsFunction}
        style={styles.button}>
        <Text style={styles.buttonText}> SAVE </Text>
       {/*<Ionicons style={{alignContent : 'center'}}name={'ios-save'} size={35} color={'white'} />*/}

      </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
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
    marginTop: 50
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
  newStyle:{
    flexDirection: 'column',
    justifyContent : 'flex-end'
  },
  inputBoard: {
    alignItems: 'center',
    flex: 3,
    margin: 10,
    marginTop: 60,
    flexDirection : 'row',
  },

  TextInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    flex : 5,
    borderWidth: 1,
    borderColor: '#265A4A',
  },

  button: {
    width: '20%',
    height: 40,
    flex : 1 ,
    marginLeft : 10,
    padding: 10,
    backgroundColor: '#262A4A',
  
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },

  text: {
    paddingTop : 0,
    fontSize: 25,
    textAlign: 'center',
    color: '#262A4A'
  },
});