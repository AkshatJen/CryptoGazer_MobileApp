import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryVoronoiContainer, VictoryLine, VictoryScatter } from "victory-native";

const sentimentCard = ({ sentiment_score }) => {

    class SentimentGraph extends React.PureComponent {

        render() {
            return (
                <View style={styles.container}>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        domainPadding={10}>
                        <VictoryBar
                            style={{ data: { fill: "#c43a31" } }}
                            data={[sentiment_score]}
                        />
                    </VictoryChart>
                </View>
            );
        }
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

// export default SentimentGraph;
export default sentimentCard;