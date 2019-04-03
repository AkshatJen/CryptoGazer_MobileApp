import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";

// const SentimentContainer = ({ sentiment_score }) => {
   
    export default class SentimentContainer extends React.Component {
        render() {
            const {sentiment_score} = this.props;
            return (
                <View style={styles.container}>
                    <VictoryChart
                    theme={VictoryTheme.material}>
                        <VictoryLine
                            style={{
                                data: { stroke: "#c43a31" },
                                parent: { border: "1px solid #ccc"}
                              }}
                            data={sentiment_score}
                        />
                    </VictoryChart>
                </View>
            );
        }

    }
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff"
    }
});

// export default SentimentContainer;
// export default SentimentContainer;
