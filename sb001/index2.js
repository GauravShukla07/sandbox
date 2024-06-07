import express from "express";
import path from "path";
import hbs from "hbs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.set("view engine", "hbs");
// app.set("views", __dirname + "/src/templates/views");
app.set("views", __dirname + "/src/templates/views");
app.get("/", (req,res) => {
res.render("index1", {
    title:"HBS Dynamic Template",
    msg:"This is dynamically fetched content."
});
});
app.listen(3000, () => {console.log("Express Listener running at port 3000")});