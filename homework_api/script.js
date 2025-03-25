
const image = document.getElementById("imgid");
const randomImg = document.getElementById("randomImg");
const randombtn = document.getElementById("randomImg")
const catsaysHallo = document.getElementById("catsayhello")
function randomCat() {
    fetch("https://cataas.com/cat")
        .then(res => res.json())

    const url = "https://cataas.com/cat"
    const imgTag = document.createElement('img')
    imgTag.src = url
    imgTag.style.width = "400px";
    image.innerHTML = ''
    image.appendChild(imgTag)



}
randombtn.addEventListener("click", randomCat)

function helloWorldCat() {
    fetch("https://cataas.com/cat")
        .then(res => res.json())

    const url = "https://cataas.com/cat/says/Hello%20World?position=center&width=400&height=400&fontSize=50&fontColor=%23fff"
    const imgTag = document.createElement('img')
    imgTag.src = url
    image.innerHTML = ''
    image.appendChild(imgTag)



}

catsaysHallo.addEventListener("click", helloWorldCat)
//--------------wttr.in---------------*/

const btnTemp = document.getElementById("temperaturId")
function getTemperatur() {

    const location = document.getElementById("location").value;

    const tempC = document.getElementById("seeTemp")
    fetch(`https://wttr.in/${location}?format=j1`)
        .then(res => res.json())
        .then(data => {
            const temp = data.current_condition[0].temp_C
            const name = data.nearest_area[0].areaName[0].value;
            const descriptionTemp = data.current_condition[0].weatherDesc[0].value
            const content = document.createElement('p')
            content.innerText = `${name} temperature: ${temp} °C // Weather description: ${descriptionTemp}`
            tempC.appendChild(content)
            console.log(name)
        })
}

btnTemp.addEventListener("click", getTemperatur)
