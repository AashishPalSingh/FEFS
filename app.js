const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world new");
});
app.listen(port, () => console.log("App is started on port ${port}"));
