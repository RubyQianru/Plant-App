import {LineChart} from "react-native-chart-kit";
import { View, Text, Dimensions } from "react-native";
import { getDatesForWeek } from "../Helpers/Helpers.js"
import {useState, useEffect} from 'react'

function TestChart(){
    const [data, setData] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const address = "http://localhost:3000/week"
            try{
                const response = await fetch(address)
                const jsonData = await response.json()
                const dataset = jsonData.data.map((item)=>{
                    return item
                })
                setData(dataset.reverse())
            }catch(err){
                console.error(err)
            }
        }
        fetchData()
    }
    ,[])

    const labels = getDatesForWeek()

    return(
        <View>
        {/* <Text>Current Week</Text> */}
        <LineChart
            data={{
            labels: labels,
            datasets: [
                {
                data: data,
                }
            ]
            }}
            width={Dimensions.get("window").width - 20} 
            height={180}
            // yAxisLabel="%"
            yAxisSuffix="%"
            yAxisInterval={1} 
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