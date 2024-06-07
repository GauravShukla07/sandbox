import express from "express";
import path from "path";
import hbs from "hbs";
import { fileURLToPath } from "url";
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
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