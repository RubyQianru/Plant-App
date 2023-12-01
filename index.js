
const express = require("express");
const app = express();
const port = 3000;
const plantsRouter = require("./routes/plants");
const guidesRouter = require("./routes/guides")
const { setupSerialPort } = require('./parsers/serialModule');
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

setupSerialPort()

app.use("/plants", plantsRouter)
app.use("/guides", guidesRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
}); 

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:19006');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});