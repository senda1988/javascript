const express = require("express");
const app = express();

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



app.listen(3000, () => {
    console.log("Server läuft auf http://localhost:3000");
});