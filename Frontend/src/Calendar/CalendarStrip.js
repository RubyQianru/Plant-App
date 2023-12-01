import React, { useState } from 'react';
import { View, AppRegistry, Dimensions } from 'react-native';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';

const Strip = () => {
  // const [datesWhitelist] = useState([
  //   {
  //     start: moment(),
  //     end: moment().add(3, 'days'), // total 4 days enabled
  //   },
  // ]);

  // const [datesBlacklist] = useState([moment().add(1, 'days')]); // 1 day disabled


  return (
    <View >
      <CalendarStrip
        flex={1}
        calendarAnimation={{ type: 'sequence', duration: 30 }}
        daySelectionAnimation={{
          duration: 200,
          borderWidth: 1,
        }}
        style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
        calendarHeaderStyle={{ transform: [{ scale: 0 }] }}
        calendarColor={'white'}
        dateNumberStyle={{ color: 'black' }}
        dateNameStyle={{ color: 'black' }}
        highlightDateNumberStyle={{ color: '#003d66' }}
        highlightDateNameStyle={{ color: '#003d66' }}
        disabledDateNameStyle={{ color: 'grey' }}
        disabledDateNumberStyle={{ color: 'grey' }}
        
        // datesWhitelist={datesWhitelist}
        // datesBlacklist={datesBlacklist}
        // iconLeft={require('./img/left-arrow.png')}
        // iconRight={require('./img/right-arrow.png')}
        // iconContainer={{ flex: 0.1 }}
      />
    </View>
  );
};

AppRegistry.registerComponent('Strip', () => Strip);

export default Strip;
