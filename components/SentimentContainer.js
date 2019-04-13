import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryLine, VictoryChart, VictoryVoronoiContainer, VictoryTheme } from "victory-native";


export default class SentimentContainer extends React.Component {
    render() {
        const { sentiment_score } = this.props;

        return (
            <View>
                <VictoryChart
                    width={400}
                    height={750}
                    theme={VictoryTheme.material}
                    containerComponent={
                        <VictoryVoronoiContainer
                            voronoiDimension="x"
                            labels={(d) => `${d.y}`}
                        />
                    }>
                    <VictoryLine
                        interpolation="natural"
                        data={sentiment_score}
                    />
                </VictoryChart>
            </View>
        );
    }
}
