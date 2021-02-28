const express = require("express");
const app = express();

const hbs = require("hbs");
const path = require("path");


const codePath = path.join(__dirname, "../code/views");
// console.log(path.join(__dirname, "../code"));

const partialPath =  path.join(__dirname, "../code/partials");

app.set("view engine", "hbs");
app.set("views", codePath);

hbs.registerPartials(partialPath);

app.get("/", (req, res)=>{
    res.render("home");
});

app.get("/about", (req, res)=>{
    res.render("about");
});

app.get("/contact", (req, res)=>{
    res.render("contact");
});

app.get("/help", (req, res)=>{
    res.render("help");
});

app.get("/buy", (req, res)=>{
    res.render("buy");
});


app.listen(3000, ()=>{
    console.log("listening to server");
});