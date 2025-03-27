const express = require("express")
const app = express()
const fse = require('fs-extra')


const tiere = [
    { id: 1, name: "Bello", art: "Hund", alter: 3 },
    { id: 2, name: "Mieze", art: "Katze", alter: 5 },
    { id: 3, name: "BOBO", art: "Hund", alter: 3 }
];


app.get("/tiere", (req, res) => {
    res.json(tiere)
})

app.get("/tiere/search", (req, res) => {
    const tiereArt = tiere.filter((tiere) => req.query.art == tiere.art)
    if (tiereArt.length != 0) {
        res.json(tiereArt)
    } else {
        res.status(404).send("Tier not found for art:" + req.query.art);
    }

})




app.use(express.json())
app.post("/tiere/alltier", (req, res) => {

    res.json(tiere)
    fse.writeFile('fileTiere.txt', JSON.stringify(tiere, null, 2), (err) => {
        if (err) {
            console.log(Error);
        } else {

            console.log("File written successfully\n");
        }
    })
})

app.post("/tiere/newtier", (req, res) => {
    const { name, art, alter } = req.body
    const newTier = {
        id: tiere.length + 1,
        name: name,
        art: art,
        alter: alter,
    }
    tiere.push(newTier)
    res.json(tiere)
    fse.writeFile('fileTiere.txt', JSON.stringify(tiere, null, 2), (err) => {
        if (err) {
            console.log(Error);
        } else {

            console.log("File written successfully\n");
        }
    })
})






app.get("tiere/tierFile", (req, res) => {
    fse.readFile("fileTiere.txt", 'utf8', (err, data) => {
        if (err) {
            console.error("Error1 :", err);
        }

        const tiereFromFile = JSON.parse(data);
        res.json(tiereFromFile);

    })

})


app.get("/tiere/:id", (req, res) => {
    const id = req.params.id
    const tierId = tiere.find((tiere) => tiere.id == id)
    if (tierId) {
        res.json(tierId)
    } else {
        res.send("Error")
    }

})
app.listen(5000)