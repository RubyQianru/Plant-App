import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { Dimensions } from 'react-native';

const CalendarTable = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedColor: '#1976d2', selectedDotColor: '#1976d2'},
        '2023-12-05': {marked: true},
        '2023-12-12': {marked: true},
        '2023-12-19': {marked: true}
      }}

    />
  );
};

export default CalendarTable;