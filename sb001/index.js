import express from "express";
const app = express();
app.get("/", (req, res) => {
res.send("Hi There!");
});
app.listen(3000, () => {console.log('Listening at port 3000')});