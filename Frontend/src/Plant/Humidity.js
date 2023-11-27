import * as React from 'react';
import { Text, View } from 'react-native';
import BlueWave from './Wave';
import { Col, Row } from 'react-native-responsive-grid';
import { useEffect, useState } from 'react';
import LineChart from './Chart';

function Humidity(){
    const [data, setData] = useState(0)
    const [dataset, setDataSet] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const address = "http://localhost:3000/plants"
            try{
                const response = await fetch(address)
                const jsonData = await response.json()
                console.log(jsonData)
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
            <LineChart humiditySet={dataset} style={{
            }}/>
    
            <BlueWave humidity={data} style={{
                margin: "10px"
            }}/>
         </View>
        </>
    )
}

export default Humidity