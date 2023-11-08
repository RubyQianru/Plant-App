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
parser.on('data', console.log)