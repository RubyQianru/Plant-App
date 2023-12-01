import * as React from 'react';
import { List } from 'react-native-paper';
import { useState } from 'react';
// import LineChart from '../Wave/Chart';
import TestChart from '../Wave/WeekData';
import Guides from './Guides';
import { useTheme } from 'react-native-paper';


const Accordions = (props) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section style={{
      borderRadius: 10,
      backgroundColor: 'white',
      overflow: 'hidden'
    }}>
      <List.Accordion
        style={{
          backgroundColor: "white",
        }}
        title="Watering Guide"

      >
          <Guides/>
      </List.Accordion>
      <List.Accordion
        title="Weekly Data Overview"
        style={{
          backgroundColor: "white"
        }}
      >
        <TestChart humiditySet ={props.humiditySet}/>
      </List.Accordion>

      
    </List.Section>
  );
};

export default Accordions;