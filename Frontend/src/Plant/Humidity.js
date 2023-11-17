import * as React from 'react';
import { Text, View } from 'react-native';

import { useEffect, useState } from 'react';

function Humidity(){
    const [data, setData] = useState(0)
    useEffect(()=>{
        async function fetchData(){
            const address = "https://216.165.95.139:3000/plants"
            try{
                const response = await fetch(address)
                const jsonData = await response.json()
                console.log(jsonData)
                // const humidity = jsonData.data[0].humidity
                // setData(humidity)
            }catch(err){
                console.error(err)
            }
        }
        fetchData()
    }
    ,[])

    return(
        <>
            <Text>
                Humidity
            </Text>
            <Text>
                {data}
            </Text>
        
        </>
    )
}

export default Humidity