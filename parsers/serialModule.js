const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const plants = require('../services/plants');

let serialport; // Declare the serialport variable outside the function

async function setupSerialPort() {
  setInterval(async () => {
    const ports = await SerialPort.list();
    // console.log('Available serial ports:', ports);

    if (ports.length > 0) {
      if (!serialport) {
        // Only create a new serial port if it doesn't exist
        serialport = new SerialPort({
          path: 'COM7', // Adjust this to the correct port
          baudRate: 9600,
        });
        const parser = serialport.pipe(new ReadlineParser({ delimiter: '\r\n' }));

        parser.on('data', async (data) => {
          console.log('Arduino data:', data);

          try {
            const result = await plants.create("garlic", data);
            console.log('Posted data:', data);
          } catch (error) {
            console.error(error);
          }
        });
      }
    } else {
      console.log('No serial ports available.');
      if (serialport) {
        // Close the serial port if it exists and there are no available ports
        serialport.close();
        serialport = null; // Reset the serialport variable
      }
    }
  }, 5000); // Check every 5 seconds (adjust as needed)
}

module.exports = { setupSerialPort };
