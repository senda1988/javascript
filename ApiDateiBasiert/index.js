const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors({ origin: ["http://localhost:5500", "http://127.0.0.1:5500"] }));


function readFile() {
    const data = fs.readFileSync("daten.json", "utf-8");
    return JSON.parse(data);
}

function writeFile(data) {
    fs.writeFileSync("daten.json", JSON.stringify(data, null, 2));
}

app.get("/produkte", (req, res) => {
    try {
        const allProdukte = readFile();
        res.json(allProdukte)
    } catch (err) {
        res.status(500).json({ Error: `Internal Server Error: ${err}` })
    }

});




app.post("/produkte", (req, res) => {
    try {
        const produkte = readFile();

        const { name, preis, farbe } = req.body;
        if (!(name && preis && farbe)) {
            return res.status(400).json({ Error: `Bitte füllen Sie alle 3 Felder aus: Name, Preis und Farbe` })
        }
        if (isNaN(preis)) {
            return res.status(400).json({ Error: `ID und preis müssen Zahlen sein!` })
        }
        const produktExist = produkte.find(produkt => produkt.name === name && produkt.farbe === farbe && produkt.preis === preis)


        if (produktExist) {
            produktExist.numberprodukte += 1;
        } else {
            const newProdukt = {
                id: produkte.length + 1,
                name: name,
                preis: preis,
                farbe: farbe,
                numberprodukte: 1

            }
            produkte.push(newProdukt)
        }
        writeFile(produkte);
        res.json(produkte)


    } catch (err) {
        res.status(500).json({ Error: `Internal Server Error: ${err}` })
    }
});

app.put("/produkte/:id", (req, res) => {
    try {
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
    } catch (err) {
        res.status(500).res.json({ Error: `Internal Server Error: ${err}` })
    }

});

app.delete("/produkte/:id", (req, res) => {
    try {
        const produktAll = readFile();
        const id = req.params.id;
        const foundProduktindex = produktAll.findIndex(produkt => produkt.id == id);
        produktAll.splice(foundProduktindex, 1)
        res.send(`produkt mit Id= ${foundProduktindex + 1} gelöscht`)
        writeFile(produktAll)
    } catch (err) {
        res.status(500).res.json({ Error: `Internal Server Error: ${err}` })
    }
})

app.get("/produkte/search", (req, res) => {
    try {
        const allProdukte = readFile();
        const name = req.query.name;
        const preis = req.query.preis;
        const foundProdukt = allProdukte.filter(produkt => produkt.name.includes(name))
        const foundProduktPreis = allProdukte.filter(produkt => produkt.preis <= preis)
        if (foundProduktPreis) {
            res.json(foundProduktPreis)
        }


        if (foundProdukt) {
            res.json(foundProdukt)
        } else {
            res.send("kein produkt mit diesem name")
        }
    } catch (err) {
        res.status(500).res.json({ Error: `Internal Server Error: ${err}` })
    }
})






app.listen(5005)