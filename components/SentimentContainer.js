import React from "react";
import { StyleSheet, View ,Text} from "react-native";
import { VictoryLine, VictoryChart,
     VictoryVoronoiContainer, VictoryTheme, VictoryLabel, 
     VictoryTooltip, VictoryScatter,VictoryGroup} from "victory-native";


export default class SentimentContainer extends React.Component {
    render() {
        const { sentiment_score } = this.props;

        return (
            <View>
                <VictoryChart
                    width={450}
                    height={650}
                    theme={VictoryTheme.material}
                    containerComponent={<VictoryVoronoiContainer/>}>
                    <VictoryGroup color="#262A4A"
                        labels={(d) => `${d.y}`}
                        labelComponent={
                            <VictoryTooltip
                                style={{fontSize:10}}
                            />
                        }
                        data={sentiment_score}
                    >
                    <VictoryLine/>
                    <VictoryScatter
                        size={(d,a) => {return a ? 8:3;}}
                    />
                    </VictoryGroup>
                </VictoryChart>
            </View>
        );
    }
}