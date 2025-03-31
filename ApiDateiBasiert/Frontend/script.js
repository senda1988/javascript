const form = document.getElementById("form");

const result = document.getElementById("result")
const btnSubmit = document.getElementById("submitId")
const filter = document.getElementById("filterKaffe")
const resultFilter = document.getElementById("resultFilter")

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const nameInput = document.getElementById("produktname").value;
    const preisInput = document.getElementById("produktpreis").value;
    const farbeInput = document.getElementById("produktfarbe").value;
    fetch("http://localhost:5005/produkte", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nameInput, preis: preisInput, farbe: farbeInput })
    })
        .then(res => res.json())
        .then(data => {
            const para = document.createElement("p")
            result.appendChild(para)
            para.innerText = JSON.stringify(data)
            console.log(data)

        })
})


filter.addEventListener("click", (event) => {
    event.preventDefault();
    const nameInput = document.getElementById("produktnameFilter").value.trim();

    fetch(`http://localhost:5005/produkte/search?name=${nameInput}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(res => res.json())
        .then(data => {
            resultFilter.innerHTML = "";

            data.forEach(item => {
                const para2 = document.createElement("p");
                para2.innerHTML = `<b>Produkt name:</b> ${item.name} | <b>Produkt Preis:</b> ${item.preis} | <b>Produkt Farbe:</b> ${item.farbe} | <b>Wie viele Produkte auf Lager:</b> ${item.numberprodukte}`;
                resultFilter.appendChild(para2);
            })

        })
})

window.onload = () => {
    fetch("http://localhost:5005/produkte")
        .then(res => res.json())
        .then(data => {
            result.innerHTML = `<h2>Alle produkte: </h2>`;

            data.forEach(item => {
                const para = document.createElement("p");
                para.innerHTML = `<b>Produkt name:</b> ${item.name} | <b>Produkt Preis:</b> ${item.preis} | <b>Produkt Farbe:</b> ${item.farbe} | <b>Wie viele Produkte auf Lager:</b> ${item.numberprodukte}`;
                result.appendChild(para);
            })
        })

};