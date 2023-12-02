import * as React from 'react';
import { Button } from 'react-native-paper';

function CalendarButtons(){
    return (
        <>
            <Button 
                icon="plus" 
                mode="contained" 
                onPress={() => console.log('Pressed')}
                style={{
                    marginTop: 10,
                    backgroundColor: '#1976d2',
                    borderRadius: 10
                }}>
                Add Watering Plan
            </Button>
            <Button 
                icon="delete" 
                mode="text" 
                onPress={() => console.log('Pressed')}
                style={{
                    marginTop: 10,
                    text: '#1976d2',
                    borderRadius: 10,
                }}
                labelStyle={{
                    color: '#1976d2',
                }}
                >
                Delete Watering Plan
            </Button>
    
        </>
    )
}



export default CalendarButtons;