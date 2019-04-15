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
                    width={400}
                    height={550}
                    theme={VictoryTheme.material}
                    containerComponent={<VictoryVoronoiContainer/>}>
                    <VictoryGroup color="#c43a31"
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
