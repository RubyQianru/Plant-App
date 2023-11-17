const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const plants = require('../services/plants');


async function setupSerialPort() {
  const ports = await SerialPort.list();
  console.log('Available serial ports:', ports);

  if (ports.length > 0) {
    const serialport = new SerialPort({
      path: 'COM7',
      baudRate: 9600,
    });
    const parser = serialport.pipe(new ReadlineParser({ delimiter: '\r\n' }));

    parser.on('data', async (data) => {
      console.log('Arduino data:', data);

      try {
        const result = await plants.create(data);
        console.log('Posted data:', data);
      } catch (error) {
        console.error(error);
      }
    });
  } else {
    console.log('No serial ports available. Exiting...');
  }
}

module.exports = { setupSerialPort };
