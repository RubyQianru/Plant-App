import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';

import BlueWave from './Wave/Wave';
import { useEffect, useState } from 'react';
import LineChart from './Wave/Chart';
import Accordions from './Accordions/Accordions';
import Strip from './Calendar/CalendarStrip';

function HomePage(){
    const [data, setData] = useState(0)
    const [dataset, setDataSet] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const address = "http://localhost:3000/plants"
            try{
                const response = await fetch(address)
                const jsonData = await response.json()
                const humidity = jsonData.data[jsonData.data.length-1].humidity
                const humiditySet = jsonData.data.map((item)=>{
                    return item.humidity
                })
                
                setDataSet(humiditySet)
                setData(humidity)
            }catch(err){
                console.error(err)
            }
        }
        fetchData()
    }
    ,[])

    return(
        <ScrollView 
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
         <View style={{
            flex: 1,
            justifyContent: "center"

         }}> 

            <View style={{
                backgroundColor:"white",
                // borderRadius:"20",
                // shadowColor: '#000',
                // shadowOffset: { width: -2, height: 0 },
                // shadowOpacity: 0.05,
                // shadowRadius: 10,
            }}>
                <BlueWave humidity={data} />
            </View>
                <Accordions humiditySet={dataset}/>

         </View>
        </ScrollView>
    )
}

export default HomePage