import { useState, useEffect } from "react";
import { View, Text } from 'react-native';

function WateringGuide (props){

    return(
        <>
            <Text style={{
                padding: 20
            }}>
                {props.data[1]}
            </Text>
        </>
    )
}
export default WateringGuide
