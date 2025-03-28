const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

function readFile() {
    const data = fs.readFileSync("daten.json", "utf-8");
    return JSON.parse(data);
}

function writeFile(data) {
    fs.writeFileSync("daten.json", JSON.stringify(data, null, 2));
}

app.get("/produkte", (req, res) => {
    const allProdukte = readFile();
    res.json(allProdukte)
});




app.post("/produkte", (req, res) => {

    const produkte = readFile();
    if (!Array.isArray(produkte)) {
        return res.status(500).json({ message: "Fehler: daten.json ist beschädigt." });
    }
    const { name, preis, farbe } = req.body;


    if (name && preis && farbe) {
        if (typeof (preis) == "number") {
            const newProdukt = {
                id: produkte.length + 1,
                name: name,
                preis: preis,
                farbe: farbe

            }
            produkte.push(newProdukt)
            writeFile(produkte);
            res.json(produkte)
        } else {
            res.send("preis muss ein number sein")
        }
    } else {
        res.send("Bitte geben Sie alle Daten ein.")
    }
});

app.put("/produkte/:id", (req, res) => {
    const id = req.params.id;
    const produkte = readFile();
    const farbe = req.body.farbe;
    const preis = req.body.preis;
    const foundProdukt = produkte.find(produkt => produkt.id == id);
    foundProdukt.farbe = farbe;
    if (typeof (preis) == "number") {
        foundProdukt.preis = preis
    } else {
        res.send("preis muss ein number sein")
    }

    res.json(foundProdukt)
    writeFile(produkte)

});

app.delete("/produkte/:id", (req, res) => {
    const produktAll = readFile();
    const id = req.params.id;
    const foundProduktindex = produktAll.findIndex(produkt => produkt.id == id);
    produktAll.splice(foundProduktindex, 1)
    res.send(`produkt mit Id= ${foundProduktindex + 1} gelöscht`)
    writeFile(produktAll)
})

app.get("/produkte/search", (req, res) => {
    const allProdukte = readFile();
    const name = req.query.name;
    const foundProdukt = allProdukte.find(produkt => produkt.name == name)
    if (foundProdukt) {
        res.json(foundProdukt)
    } else {
        res.send("kein produkt mit diesem name")
    }
})






app.listen(5005)