let leeftijd_input = document.createElement("input")
leeftijd_input.type = "number"
leeftijd_input.id = "leeftijd-input"
leeftijd_input.placeholder = "minimale-leeftijd"
let minLeeftijd = ""

let filter_knop = document.createElement("button");
filter_knop.id = "filter-knop";
filter_knop.textContent = "Filter";

document.body.appendChild(leeftijd_input)
document.body.appendChild(filter_knop)

filter_knop.addEventListener("click", () => {
    let min_leeftijd = parseInt(leeftijd_input.value);
    console.log("Minimale leeftijd ingevuld:", min_leeftijd);

    let container = document.getElementById("persoon-info") || document.createElement("div");
    container.id = "persoon-info";
    document.body.appendChild(container);
    container.innerHTML = "";

    fetch("opdracht_2.json")
        .then(response => response.json())
        .then(data => { 
            console.log("Ophaalde data:", data);
            
            let gefilterde_persoon = data.filter(persoon => persoon.leeftijd >= min_leeftijd);
            console.log("Gefilterde personen:", gefilterde_persoon);
            
            gefilterde_persoon.forEach(persoon => {
                let persoonDiv = document.createElement("div")
                persoonDiv.innerHTML = `
                    <p><strong>Voornaam:</strong> ${persoon.voornaam}</p>
                    <p><strong>Achternaam:</strong> ${persoon.achternaam}</p>
                    <p><strong>Nationaliteit:</strong> ${persoon.nationaliteit}</p>
                    <p><strong>Leeftijd:</strong> ${persoon.leeftijd}</p>
                    <p><strong>Gewicht:</strong> ${persoon.gewicht} kg</p>
                    <br><br>
                `;
                container.appendChild(persoonDiv);
            });
        });
    })  
