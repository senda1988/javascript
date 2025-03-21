const drmode = document.getElementById("bodyStyle")
const hlmode = document.getElementById("hellMode")
function ClikDarkMode() {

    drmode.style.backgroundColor = "black"
    drmode.style.backgroundImage = "linear-gradient(rgba(44, 42, 42, 0.68), rgba(0, 0, 0, 0.26)), url('./background/background1.jpg')"
    drmode.style.backgroundSize = "cover";
    drmode.style.backgroundRepeat = "no-repeat";
    drmode.style.color = "white"
    hlmode.innerHTML = "Light Mode"

}
function ClikhellMode() {
    drmode.style.backgroundImage = "none";
    drmode.style.backgroundColor = "white"
    drmode.style.color = "#0E3843"

}

function meineGeschichteStart() {
    const ratioJaNein = document.getElementsByName("janein");
    let selectedValue = "";

    for (let i = 0; i < ratioJaNein.length; i++) {
        if (ratioJaNein[i].checked) {
            selectedValue = ratioJaNein[i].value;
            break;
        }
    }


    if (selectedValue === "ja") {

        Jaclick()
        const imgDoor = document.getElementById("geschichte")
        imgDoor.innerHTML = '<img src="open-door.png" width=500px>'
    }
    else if (selectedValue === "nein") {
        const imgDoor = document.getElementById("geschichte")
        imgDoor.innerHTML = '<h2 style="text-align:center; justify-content:center">Auf Wiedersehen !</h2>'
        const weiterInfoId = document.getElementById("nameStadt")
        weiterInfoId.style.visibility = "hidden"

    }

}
function Jaclick() {
    // let infoStartcl = document.getElementsByClassName("infoStart")
    document.querySelectorAll(".infoStart").forEach(element => {
        element.style.visibility = "visible";
    });


}
function showGeshishte() {
    const paragraphGeschichte = document.getElementById("geschichte")
    const nameStadt = document.getElementById("nameStadtId").value
    const name = document.getElementById("nameId").value
    document.querySelectorAll(".infoStart").forEach(element => {
        element.style.visibility = "hidden";
    });
    const divEin = document.getElementById("inhalSidebar")
    const weiterbtn = document.getElementById("weiter")
    divEin.style.visibility = "hidden"
    weiterbtn.style.visibility = "visible"

    paragraphGeschichte.innerHTML = `Es war einmal in ${nameStadt} ein Superheld namens Super ${name}. Super ${name} war ein Mann in einem blau-roten Kostüm mit einem glitzernden Umhang und einer glänzenden Maske. Er war für seine unglaubliche Stärke und seine Fähigkeit bekannt, wie ein majestätischer Vogel durch den Himmel zu fliegen.`;

}
function gehWeiter() {
    const instructionId = document.getElementById("instruction")
    const montershow = document.getElementById("monster")
    const weiterbtn = document.getElementById("weiter")
    montershow.style.visibility = "visible"
    instructionId.style.visibility = "visible"
    weiterbtn.style.visibility = "hidden"
}
function bigImg(img) {


    img.style.transform = "scale(1.5)"
    img.style.transition = "transform 2s ease"


}
function smallImg(img) {
    img.style.transform = "scale(1)"
}
function drache() {

    const name = document.getElementById("nameId").value
    const instChoiceId = document.getElementById("instructionChoice")
    instChoiceId.innerHTML = `Eines Tages hörte Super ${name} von einem großen goblin, der die Stadt zerstören wollte. Was wirst du tun? Willst du den goblin bekämpfen oder weglaufen? (Antwort: 'bekämpfen' oder 'weglaufen')`
    const waelenId = document.getElementById("waelen")
    waelenId.style.visibility = "visible"
    const montershow = document.getElementById("monster")
    montershow.style.visibility = "hidden"
    const instructionId = document.getElementById("instruction")
    instructionId.style.visibility = "hidden"
}
function ork() {

    const name = document.getElementById("nameId").value
    const instChoiceId = document.getElementById("instructionChoice")
    instChoiceId.innerHTML = `Eines Tages hörte Super ${name} von einem großen goblin, der die Stadt zerstören wollte. Was wirst du tun? Willst du den goblin bekämpfen oder weglaufen? (Antwort: 'bekämpfen' oder 'weglaufen')`
    const waelenId = document.getElementById("waelen")
    waelenId.style.visibility = "visible"
    const montershow = document.getElementById("monster")
    montershow.style.visibility = "hidden"
    const instructionId = document.getElementById("instruction")
    instructionId.style.visibility = "hidden"
}
function goblin() {

    const name = document.getElementById("nameId").value
    const instChoiceId = document.getElementById("instructionChoice")
    instChoiceId.innerHTML = `Eines Tages hörte Super ${name} von einem großen goblin, der die Stadt zerstören wollte. Was wirst du tun? Willst du den goblin bekämpfen oder weglaufen? (Antwort: 'bekämpfen' oder 'weglaufen')`
    const waelenId = document.getElementById("waelen")
    waelenId.style.visibility = "visible"
    const montershow = document.getElementById("monster")
    montershow.style.visibility = "hidden"
    const instructionId = document.getElementById("instruction")
    instructionId.style.visibility = "hidden"

}
function bkaempfen() {
    const msgBekamfenId = document.getElementById("msgBekampfen")
    const imgBekampfenId = document.getElementById("imgbekampfenWeglaufen")
    imgBekampfenId.innerHTML = '<img src="bekampfen.webp"  width="200px">'
    msgBekamfenId.innerHTML = `Du hast dich entschieden, den Feind zu bekämpfen! Mutig gehst du auf ihn zu. Der Feind ist sehr groß und gefährlich! Willst du ihm einen Schlag auf den Kopf geben oder eine andere Strategie verwenden? (Antwort: 'schlag' oder 'warten')`
    const schlagfct = document.getElementById("schlagDiv")
    schlagfct.style.visibility = "visible"

}

function weglaufen() {
    const msgBekamfenId = document.getElementById("msgBekampfen")
    msgBekamfenId.innerHTML = `Du entscheidest dich, vor dem Feind wegzulaufen. Die Stadt ist in Gefahr, aber du bleibst sicher.`
    const schlagfct = document.getElementById("schlagDiv")
    schlagfct.style.visibility = "hidden"
    const weglaufenImg = document.getElementById("imgbekampfenWeglaufen")
    weglaufenImg.innerHTML = '<img src="weglaufen.webp" width="200px">'
}
function schlag() {
    const msgSchlagId = document.getElementById("msgSchlag")
    msgSchlagId.innerHTML = `Du schlägst dem Feind auf den Kopf! Der Feind fällt zu Boden. Du hast gewonnen!`
    const weglaufenImg = document.getElementById("imgbekampfenWeglaufen")
    weglaufenImg.innerHTML = '<img src="winner.png" width="200px">'
}
function warten() {
    const msgSchlagId = document.getElementById("msgSchlag")
    msgSchlagId.innerHTML = `Du wartest und beobachtest den Feind. In einem günstigen Moment greifst du an und besiegst ihn!`
}