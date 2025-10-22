import express from "express";
const app = express();

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({extended : true}));

import morgan from "morgan";
app.use(morgan(':method :url :status :date[clf]'));

const port = 3000;
var userIdCorrect = false;



app.get("/", (req, res) => {
    res.render("index.ejs");
})


// Form POST
app.post("/submit", (req, res) => {
    const fname = req.body["fname"];
    const lname = req.body["lname"];    
    if (fname && lname){
        res.render("submit.ejs", {fname: fname, lname: lname});
    } else {
        res.render("index.ejs", {retry_message: "İsim girmediniz"});
    }
       
})

// Correct answer html
app.get("/next", (req, res) => {
    res.sendFile(__dirname + "/public/result.html");
})

app.listen(port, () => {
    console.log(`Server is running on the port: ${port}.`)
})




