
const plants = require('./services/plants');
const bodyParser = require('body-parser')

const express = require("express");
const app = express();
const port = 3000;
const plantsRouter = require("./routes/plants");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

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

app.use("/plants", plantsRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
}); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});