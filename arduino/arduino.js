const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const initializeParser = () => {
  const port = new SerialPort({
    path: 'COM7', 
    baudRate: 9600,
  });
  const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));
  parser.on("data", (data)=>{
    console.log("Arduino data: "+data)
  })
  return parser;
};

module.exports = {
  initializeParser,
};
