const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname,"public")));
// The below app.use would also work given a public folder exists in cuurent directory
// and there is the specified html file (index.html by default)
// app.use(express.static("public"));
app.listen(3000, () => {console.log('Lister active at port 3000.')});