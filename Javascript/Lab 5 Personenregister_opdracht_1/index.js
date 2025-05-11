fetch("opdracht_1.json")
    .then(Response => Response.json())
    .then(data => {
        let container = document.getElementById("persoon-info");

        container.innerHTML = `
            <p><strong>Voornaam:</strong> ${data.voornaam}</p>
            <p><strong>Achternaam:</strong> ${data.achternaam}</p>
            <p><strong>Nationaliteit:</strong> ${data.nationaliteit}</p>
            <p><strong>Leeftijd:</strong> ${data.leeftijd}</p>
            <p><strong>Gewicht:</strong> ${data.gewicht} kg</p>
        `;
    })