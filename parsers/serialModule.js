const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const plants = require('../services/plants');

let serialport; 

async function setupSerialPort() {
  setInterval(async () => {
    const ports = await SerialPort.list();
    // console.log('Available serial ports:', ports);

    if (ports.length > 0) {
      if (!serialport) {
        serialport = new SerialPort({
          path: 'COM7', 
          baudRate: 9600,
        });
        const parser = serialport.pipe(new ReadlineParser({ delimiter: '\r\n' }));

        parser.on('data', async (data) => {
          console.log('Arduino data:', data)
        
        const dataArr = data.split(',')
        
          try {
            await plants.create("garlic", dataArr[0])
            await plants.create("onion", dataArr[1])
            console.log('Posted data:', data)
          } catch (error) {
            console.error(error);
          }
        });
      }
    } else {
      console.log('No serial ports available.');
      if (serialport) {
        serialport.close();
        serialport = null; 
      }
    }
  }, 5000); // Check every 5 seconds (adjust as needed)
}

module.exports = { setupSerialPort };
