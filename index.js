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

router.post('/', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.create(req.body));
  } catch (err) {
    console.error(`Error while creating plant`, err.message);
    next(err);
  }
});

app.use("/plants", plantsRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});