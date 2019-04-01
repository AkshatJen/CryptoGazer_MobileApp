import React, {Component} from "react";
import { StyleSheet, View } from "react-native";
import { connect } from 'react-redux';
import FetchSentimentData from './../Actions/FetchSentimentData';
import SentimentContainer from './SentimentContainer';

class SentimentGraph extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.FetchSentimentData("Bitcoin");
    }

    renderSentimentGraph() {
        const { sentiment } = this.props;
        
        return sentiment.coinSentiments.map((emo) =>
            <SentimentContainer
                sentiment_score={emo.score}
            />
        ) 
    }


    render() {
        // var max = 1;
        // var min = -1;
        // var data1 = [];
        // // var randomnumber=Math.floor(Math.random()*11);
        // for (var i = 1; i <= 10; i++) {
        //   var randomnumber = (Math.random() * (max - min + 0)) + min;
        //   data1.push(randomnumber);
        // }

        // const { sentiment } = this.props;
        return (
            <View style={styles.container}>

                {/* <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={10}
                >
                    <VictoryBar
                        style={{ data: { fill: "#c43a31" } }}
                        data={this.state.sentimentScore}
                    />
                </VictoryChart> */}
                {this.renderSentimentGraph()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff"
    }
});

function mapStateToProps(state) {
    return {
        sentiment: state.sentiment
    }
}

export default connect(mapStateToProps, { FetchSentimentData })(SentimentGraph)