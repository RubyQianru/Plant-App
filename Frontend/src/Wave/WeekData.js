import {
    LineChart
  } from "react-native-chart-kit";
import { View, Text, Dimensions } from "react-native";

function TestChart(props){
    return(
        <View>
        {/* <Text>Current Week</Text> */}
        <LineChart
            data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                data: props.humiditySet
                }
            ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={180}
            // yAxisLabel="%"
            yAxisSuffix="%"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
            backgroundColor: "white",
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(165,229,255, 1)`,
            labelColor: (opacity = 1) => `rgba(0,0,0, 1)`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "1",
                strokeWidth: "0.5",
                stroke: "#a5e5ff"
            }
            }}
            bezier
            style={{
            marginVertical: 8,
            borderRadius: 16
            }}
        />
        </View>
    )
}

export default TestChart