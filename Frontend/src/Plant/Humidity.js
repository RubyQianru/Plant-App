import * as React from 'react';
import { Text, View } from 'react-native';
import BlueWave from './Wave';

import { useEffect, useState } from 'react';
// import LineChart from './Chart';

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
         <View>
         {/* <LineChart humiditySet={dataset}/> */}
         <BlueWave humidity={data} />
         </View>
        </>
    )
}

export default Humidity