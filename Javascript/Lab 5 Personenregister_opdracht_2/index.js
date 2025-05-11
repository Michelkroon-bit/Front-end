fetch("opdracht_2.json") // haalt alle info op uit de json files
    .then(Response => Response.json()) // zet de zojuist opgehaalde info om in javascript objecten
    .then(data => {
        let container = document.getElementById("persoon-info");

        data.forEach(persoon => {
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
        
    })