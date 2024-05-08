const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
app.set("view engine", "hbs");
app.set("views", __dirname + "/src/templates/views");
app.get("/", (req,res) => {
res.render("index", {
    author:"GauSh"
});
});
app.listen(3000, () => {console.log("Express Listener running at port 3000")});