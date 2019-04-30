import React, { Component } from "react";
import { View, Text } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import FetchSentimentData from './../Actions/FetchSentimentData';
import SentimentContainer from './SentimentContainer';

class BitcoinSentiment extends Component {

    state = {
        coin : 'Bitcoin'
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.FetchSentimentData(this.state.coin);
    }

    renderSentimentGraph() {
        const { sentiment } = this.props;
        console.log(sentiment);
        if (sentiment.coinSentiments.data != null) {
            let sentimentArr = [];
            for (var key in sentiment.coinSentiments.data) {
               //for (var key = 0 ; key< 10 ; key++){
                if (sentiment.coinSentiments.data.hasOwnProperty(key)) {
                    sentimentArr.push({ y: sentiment.coinSentiments.data[key].score })
                }
            }

            return (
                <SentimentContainer
                    sentiment_score={sentimentArr}>
                </SentimentContainer>
            );
        }
        else {
            return null;
        }



    }

    render() {
        const { sentiment } = this.props;
        if (sentiment.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={sentiment.isFetching}
                        textContent={"Loading Graph..."}
                        textStyle={{color: '#262A4A'}}
                        animation="fade"
                    />
                </View>
            )
        }
        else
        return (
            <View tyle={styles.container}>
            <Text style={{fontSize : 25 , alignContent : 'center' , paddingLeft : '40%' , color : '#262A4A'}}>
            {this.state.coin}
            </Text>
                {this.renderSentimentGraph()}
            </View>
        );

    }

}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff"
    }
}

function mapStateToProps(state) {
    return {
        sentiment: state.sentiment
    }
}

export default connect(mapStateToProps, { FetchSentimentData })(BitcoinSentiment)