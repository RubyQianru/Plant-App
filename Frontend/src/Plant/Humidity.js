import * as React from 'react';
import { Text, View } from 'react-native';
import BlueWave from './Wave';
import { useEffect, useState } from 'react';
import LineChart from './Chart';
import Strip from '../Calendar/CalendarStrip';

function Humidity(){
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
        <>
         <View style={{
            flex: 1,
            justifyContent: "center"

         }}> 
            <View style={{
                backgroundColor:"white",
                padding: "20px",
                borderRadius:"20px",
                shadowColor: '#000',
                shadowOffset: { width: -2, height: 0 },
                shadowOpacity: 0.05,
                shadowRadius: 10,
            }}>
                <BlueWave humidity={data} />

            </View>
            <br/>
            <LineChart humiditySet={dataset} />

         </View>
        </>
    )
}

export default Humidity