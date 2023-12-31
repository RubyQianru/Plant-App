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
                    backgroundColor: '#2E7D32',
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
                    text: '#2E7D32',
                    borderRadius: 10,
                }}
                theme={{
                    colors: {
                      primary: '#2E7D32'
                    },
                  }}
                >
                Delete Watering Plan
            </Button>
    
        </>
    )
}



export default CalendarButtons;