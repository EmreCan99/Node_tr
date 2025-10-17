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

// function to check if the name correct
function check_name(req, res, next){
    if (req.body["ad"] === "Cndn"){
        userIdCorrect = true;
    };
    next();
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

// Form POST
app.post("/submit", check_name, (req, res) => {
    console.log(req.body);
    if (userIdCorrect){
        console.log("***Isim Doğru");
        res.redirect("/next");
    }
})

// Correct answer html
app.get("/next", (req, res) => {
    res.sendFile(__dirname + "/public/result.html");
})

app.listen(port, () => {
    console.log(`Server is running on the port: ${port}.`)
})




