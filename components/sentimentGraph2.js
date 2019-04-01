import React from "react";
import { StyleSheet, View ,Text} from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryVoronoiContainer, VictoryLine, VictoryScatter } from "victory-native";
import { RotationGestureHandler } from "react-native-gesture-handler";

export default class victoryChart extends React.PureComponent {
  render() {
    var max = 1;
    var min = -1;
    var data1 = [];
    // var randomnumber=Math.floor(Math.random()*11);
    for (var i = 1; i <= 10; i++) {
      var randomnumber = (Math.random() * (max - min + 0)) + min;
      data1.push(randomnumber);
    }
    return (
      <View style={styles.container}>
        <Text>Sentiment Analysis</Text>
        <VictoryChart height = {590} width = {400}
          theme={VictoryTheme.material}
          containerComponent={
           <VictoryVoronoiContainer
           labels={(d) => `${(d.x,d.x)}, ${(d.y,d.y)}`}
            /> 
          }
          >
          <VictoryLine
            interpolation = "natural"
            style={{
              data: { stroke: "blue" },
            //   parent: { border: "1px solid #ccc" }
            }}
            data = {data1}
          />
        </VictoryChart>
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