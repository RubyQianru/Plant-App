import * as React from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import BlueWave from './Wave/Wave';
import { useEffect, useState } from 'react';
import Accordions from './Accordions/Accordions';
import CalendarTable from './Calendar/Calendar';

function HomePage(){
    const [data, setData] = useState(0)
    const [dataset, setDataSet] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const address = "http://localhost:3000/plants"
            try{
                const response = await fetch(address)
                const jsonData = await response.json()
                const humidity = jsonData.data[0].humidity
                // const humiditySet = jsonData.data.map((item)=>{
                //     const time = item.time
                //     const humidity = item.humidity
                //     return { humidity, time }
                // })
                
                // setDataSet(humiditySet.reverse())
                setData(humidity)
            }catch(err){
                console.error(err)
            }
        }
        fetchData()
    }
    ,[])

    const theme = useTheme();

    return(
        <ScrollView 
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
         <View style={{
            flex: 1,
            justifyContent: "center",
            width: Dimensions.get("window").width - 20,
         }}> 

            <View style={{
                backgroundColor:"white",
                marginVertical: 10,
                padding: 20,
                borderRadius: 10
            }}>
                <BlueWave humidity={data} />
            </View>

            <View style={{
                backgroundColor:"white",
                marginVertical: 10,
                padding: 20,
                borderRadius: 10
            }}>
                <CalendarTable />

            </View>
            <View style={{
                marginVertical: 10,
                borderRadius: 10
            }}>
                <Accordions />


            </View>

         </View>
        </ScrollView>
    )
}

export default HomePage