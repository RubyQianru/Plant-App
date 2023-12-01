import { useState, useEffect } from "react";
import { View, Text } from 'react-native';

function SunlightGuide (props){

    return(
        <>
            <Text>
                {props.data[1]}
            </Text>
        </>
    )
}
export default SunlightGuide
