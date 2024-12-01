const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hello All, It's Sunday !!</h2>");
  res.send("<h3>Welcome To The Party !!!</h3>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
