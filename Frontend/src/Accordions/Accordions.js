import * as React from 'react';
import { List } from 'react-native-paper';
import { useState } from 'react';
import LineChart from '../Wave/Chart';
const Accordions = (props) => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion
        title="Weekly Data Overview"
        // left={props => <List.Icon {...props} icon="folder" />}
        >
        <List.Item title="" />
        <LineChart humiditySet={props.humiditySet}/>
        <List.Item title="Second item" />
      </List.Accordion>

      {/* <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion> */}
    </List.Section>
  );
};

export default Accordions;