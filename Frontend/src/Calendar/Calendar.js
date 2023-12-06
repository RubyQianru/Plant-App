import React, {useState, useEffect} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {getScheduledDates} from '../Helpers/Helpers'
import CalendarButtons from './Button';

const CalendarTable = () => {
  const [selected, setSelected] = useState('');
  const [dates, setDates] = useState([])

  useEffect(()=>{
    async function getDates(){
        const address = "http://localhost:3000/schedule"
        try{
            const response = await fetch(address)
            const jsonData = await response.json()
            console.log(jsonData)
      
            const listOfDates = getScheduledDates(jsonData.data)
            console.log(listOfDates)
            setDates(listOfDates)
        }catch(err){
            console.error(err)
        }
    }
    getDates()
    
},[])

  const markedDates = {};
  dates.forEach((date) => {
    markedDates[date] = { marked: true };
  });

  return (
    
    <>
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {selected: true, disableTouchEvent: true},
          ...markedDates
        }}

        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#1976d2',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#1976d2',
          dayTextColor: '#2d4150',
          textMonthFontFamily: 'arial',
          textDayFontFamily: 'arial',
          textMonthFontFamily: 'arial'
        }}

          />
      <CalendarButtons/>

    
    </>
    
  );
};

export default CalendarTable;