let entscheid = prompt("Heute werden wir zusammen eine kleine Geschichte schreiben und du wirst der Held dieser Geschichte sein. Bist du einverstanden? (JA/NEIN)");

if (entscheid === "ja") {
    let name = prompt("Wie heißt du, tapferer Held?");
    alert("Freut mich, dich kennenzulernen, " + name + "!");

    let nameStadt = prompt("Was ist deine Lieblingsstadt?");
    let geschichte = `Es war einmal in ${nameStadt} ein Superheld namens Super ${name}. Super ${name} war ein Mann in einem blau-roten Kostüm mit einem glitzernden Umhang und einer glänzenden Maske. Er war für seine unglaubliche Stärke und seine Fähigkeit bekannt, wie ein majestätischer Vogel durch den Himmel zu fliegen.`;
    alert(geschichte);


    let monster = prompt("Welches Monster willst du bekämpfen? (Drache, Ork, Goblin)");

    if (monster === "drache" || monster === "ork" || monster === "goblin") {
        let waehlen = prompt(`Eines Tages hörte Super ${name} von einem großen ${monster}, der die Stadt zerstören wollte. Was wirst du tun? Willst du den ${monster} bekämpfen oder weglaufen? (Antwort: 'bekämpfen' oder 'weglaufen')`).toLowerCase();

        if (waehlen === "bekämpfen") {
            alert(`Du hast entschieden, den ${monster} zu bekämpfen! Du gehst mutig auf ihn zu.`);

            let monsterBesiegen = prompt(`Der ${monster} ist sehr groß und gefährlich! Willst du ihm einen Schlag auf den Kopf geben oder eine andere Strategie verwenden? (Antwort: 'schlag' oder 'warten')`).toLowerCase();

            if (monsterBesiegen === "schlag") {
                alert(`Du schlägst dem ${monster} auf den Kopf! Der ${monster} fällt zu Boden. Du hast gewonnen! `);
            } else if (monsterBesiegen === "warten") {
                alert(`Du wartest und beobachtest den ${monster}. In einem günstigen Moment greifst du an und besiegst ihn!`);
            } else {
                alert("Du hast gezögert, und das Monster hat dich überrascht. Die Stadt ist in Gefahr!");
            }
        } else if (waehlen === "weglaufen") {
            alert(`Du entscheidest dich, vor dem ${monster} wegzulaufen. Die Stadt ist in Gefahr, aber du bleibst sicher.`);
        } else {
            alert("Ich verstehe deine Antwort nicht. Die Geschichte endet hier.");
        }
    } else {
        alert("Dieses Monster existiert nicht in unserer Geschichte. Versuch es nochmal.");
    }

} else {
    alert("Auf Wiedersehen!");
}
