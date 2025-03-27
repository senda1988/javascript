const os = require('os')
console.log(os.version())
console.log(os.uptime())

const fs = require("fs")

fs.writeFile("message.txt", "Hallo ich komme aus index.js", (err) => {
    if (err) throw err;
    console.log("Die Datei wurde gespeichert")
})