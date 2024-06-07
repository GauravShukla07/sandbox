import express from "express";
import path from "path";
import {fileURLToPath} from "url";

const app = express();
app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)),"/src/public")));
// The below app.use would also work given a public folder exists in cuurent directory
// and there is the specified html file (index.html by default)
// app.use(express.static("public"));
app.listen(3000, () => {console.log('Lister active at port 3000.')});