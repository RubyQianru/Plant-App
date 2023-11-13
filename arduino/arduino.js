const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

 SerialPort.list().then (
  ports => ports.forEach(port =>console.log(port.path)),
  err => console.log(err)
)

const port = new SerialPort({
    path: 'COM4',
    baudRate: 9600,
  })

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
const jsonParser = parser.json()
console.log(jsonParser)
// parser.on('data', console.log) //format into create function 

module.exports = {
  jsonParser
}