let zufallszahl = Math.floor(Math.random() * 10) + 1;

let randomZahl = null
do {
    randomZahl = Number(prompt("Wählen Sie eine Zahl zwischen 1 und 10"));
    console.log(randomZahl);

} while (randomZahl < 1 || randomZahl > 10);



while (randomZahl !== zufallszahl) {
    if (randomZahl > zufallszahl) {
        randomZahl = Number(prompt("Zu hoch! Versuche es mit einer kleineren Zahl: "));
    } else if (randomZahl < zufallszahl) {
        randomZahl = Number(prompt("Zu klein! Versuche es mit einer größeren Zahl:"));
    }
}
if (randomZahl === zufallszahl) {
    alert("Glückwunsch! Sie haben die richtige Zahl erraten: " + zufallszahl);
}

alert(`Zufallszahl: ${zufallszahl}`);