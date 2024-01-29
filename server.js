
const express = require("express");
const app = express();
app.listen(3000, () => console.log("listening from 3000 okay....."));
app.use(express.static("public"))
