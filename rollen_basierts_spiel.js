let entscheid = prompt("Heute werden wir zusammen eine kleine Geschichte schreiben und du wirst der Held dieser Geschichte sein, bist du einverstanden? JA/NEIN")
if (entscheid == "JA") {
    let name = prompt("Wie heißt du, tapferer Held?");
    alert("Freut mich, dich kennenzulernen, " + name + "!");
    let nameStadt = prompt("Was ist Ihre Lieblingsstadt?");
    let geschichte = `Es war einmal in ${nameStadt} ein Superheld namens Super ${name}. Super ${name} war ein Mann in einem blau-roten Kostüm mit einem glitzernden Umhang und einer glänzenden Maske. Er war für seine unglaubliche Stärke und seine Fähigkeit bekannt, wie ein majestätischer Vogel durch den Himmel zu fliegen.`

    alert(geschichte)


    let waehlen = prompt("Eines Tages hörte Super " + name + " von einem großen Drachen, der die Stadt zerstören wollte. Was wirst du tun? Willst du den Drachen bekämpfen oder weglaufen? (Antwort: 'bekämpfen' oder 'weglaufen')");

    if (waehlen == "bekämpfen") {
        alert("Du hast entschieden, den Drachen zu bekämpfen! Du gehst mutig auf ihn zu.");

        let dracheBesiegen = prompt("Der Drache ist sehr groß und er speit Feuer! Willst du ihm einen Schlag auf den Kopf geben oder etwas anderes tun? (Antwort: 'schlag' oder 'warten')");

        if (dracheBesiegen == "schlag") {
            alert("Du schlägst dem Drachen auf den Kopf! Der Drache fällt !");
        } else if (dracheBesiegen == "warten") {
            alert("Du wartest und schaust, wie der Drache sich bewegt. Dann greifst du an, und du besiegst den Drachen!");
        }
    } else if (waehlen == "weglaufen") {
        alert("Du entscheidest dich, vor dem Drachen wegzulaufen. Die Stadt ist in Gefahr, aber du bleibst sicher.");
    } else {
        alert("Ich verstehe deine Antwort nicht. Die Geschichte endet hier.");
    }

} else {
    alert("Auf Wiedersehen!");

}