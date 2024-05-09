const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
app.set("view engine", "hbs");
app.set("views", __dirname + "/src/templates/views");
hbs.registerPartials(path.join(__dirname, "/src/templates/partials"));
app.get("/", (req,res) => {
res.render("index", {
    title:"HBS Dynamic Template",
    author:"GauSh",
    msg:"This is dynamically fetched content."
});
});
app.get("/about", (req,res) => {
    res.render("index", {
        title:"HBS Dynamic Template",
        author:"GauSh",
        msg:"This is a dynamic abouts page."
});
});
app.listen(3000, () => {console.log("Express Listener running at port 3000")});