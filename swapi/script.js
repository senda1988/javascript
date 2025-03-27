
const output = document.getElementById("infoDiv")
const btnoutput = document.getElementById("informations")



fetch("https://swapi.dev/api/people/1/")
    .then(res => res.json())
    .then(data => {
        output.innerHTML = `<h2>${data.name}</h2><p>${data.height}cm</p>`
        const homeworld = data.homeworld

        fetch(homeworld)
            .then(res => res.json())
            .then(planet => {
                output.innerHTML += `<p>Homeworld: ${planet.name}</p>`
            })
    })