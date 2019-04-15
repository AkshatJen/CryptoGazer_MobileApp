import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from 'react-redux';
import FetchSentimentData from '../Actions/FetchSentimentData';
import SentimentContainer from './SentimentContainer';

class BitcoinSentiment extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.FetchSentimentData("Bitcoin");
    }

    renderSentimentGraph() {
        const { sentiment } = this.props;
        console.log(sentiment);
        if (sentiment.coinSentiments.data != null) {
            let sentimentArr = [];
            for (var key in sentiment.coinSentiments.data) {
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
        return (
            <View tyle={styles.container}>
                <Text>
                    Bitcoin Sentiments
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