import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet, FlatList , TouchableOpacity } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/Ionicons';
import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';
import { TouchableHighlight, TouchableNativeFeedback } from 'react-native-gesture-handler';


class CryptoContainer extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount() {
        this.props.FetchCoinData();
    }


    renderCoinCards() {

        const { crypto } = this.props;
        return crypto.data.map((coin) =>
        
        <View style={styles.standalone}>
        <SwipeRow leftOpenValue={100}>
        <View style={styles.standaloneRowBack}>
        <TouchableOpacity>
        <View><Text style ={styles.text}><Icon name={'ios-add-circle'} size={40} color={'#262A4A'} /></Text></View></TouchableOpacity>
        </View>
        <View style={styles.standaloneRowFront}>
        <TouchableOpacity>
            <CoinCard
            key={coin.name}
            coin_name={coin.name}
            symbol={coin.symbol}
            price_usd={coin.price_usd}
            percent_change_24h={coin.percent_change_24h}
            percent_change_7d={coin.percent_change_7d}
        />
        </TouchableOpacity>
        </View>
        </SwipeRow>
        </View>
       
            
        ) 
    }


    render() {

        const { crypto } = this.props;
        const { contentContainer } = styles;

        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color: '#262A4A'}}
                        animation="fade"
                    />
                </View>
            )
        }
        else
        return (
         
           <ScrollView contentContainerStyle={styles.contentContainer}
                        showsVerticalScrollIndicator={true}
                        scrollEventThrottle={16}
                        >
            {this.renderCoinCards()}
            </ScrollView> 

            
        )
        

    }
}


const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 5,
    }
    ,standalone: {
        marginTop: 0,
        marginBottom: 0,
      },
      standaloneRowFront: {
        //alignItems: 'center',
        backgroundColor: 'white',
        //justifyContent: 'center',
        //height: 50,
      },
      standaloneRowBack: {
        alignItems: 'flex-end',
        backgroundColor: '#EBEBEE',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 0,
      },
      text:{
        padding : 30,
        color:'white',
        alignItems : 'center',
        //flexDirection:'column',
        //justifyContent:'space-between'

      }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)