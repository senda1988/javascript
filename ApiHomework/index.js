const express = require("express");
const app = express();
const cheerio = require("cheerio");



let person = [{ id: 1, name: "Senda", Adress: "Regensbur" },
{ id: 2, name: "Test", Adress: "TestAdress" }
]

app.get("/", (req, res) => {
    res.send("Willkommen bei meiner eigenen API!");
});

app.get("/data", (req, res) => {
    res.json([
        { id: 1, name: "Max" },
        { id: 2, name: "Lena" }
    ]);
});

app.get("/randomname", (req, res) => {
    const generateName = require("sillyname");
    const sillyName = generateName();
    res.send(sillyName)
});


app.get("/person", (req, res) => {
    res.send(person)
});


app.get("/date", (req, res) => {
    res.send("date Heute: " + Date())
});


app.get("/division", (req, res) => {
    const zahl1 = 10;
    const zahl2 = 2;
    const div = zahl1 / zahl2;
    res.send("result: " + div)

});

app.get("/cheerio", (req, res) => {
    const html = '<ul id="fruits"><li>Apfel</li><li>Banane</li></ul>';
    const $ = cheerio.load(html);

    const firstItem = $("#fruits li").first().text(); // "Apfel"

    res.send("Erstes Element der Liste: " + firstItem);
});

app.listen(3060, () => {
    console.log("Server läuft auf http://localhost:3000");
});