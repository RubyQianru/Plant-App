import { useState, useEffect, useRef } from "react";
import { View, Text } from 'react-native';

function WateringGuide (props){

    const [description, setDescription] = useState("Loading...")
    useEffect(()=>{
        for(let item of props.data){
            if (item.name.toLowerCase() == props.plant){
                setDescription(item.watering_description)
                break
            }
        }

    },[props.data, props.plant])

    


    return(
        <>
            <Text style={{
                padding: 20
            }}>
                {description}
            </Text>
        </>
    )
}
export default WateringGuide
