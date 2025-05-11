import { bestellingen_lijst, waardelijst, zinnen_lijst } from "./data.js";
import { vraag_hoeveel_bolletjes ,  get_hoorntje_of_bakje} from "./function.js";

var order_button = document.createElement("button");
order_button.appendChild(document.createTextNode("Bestel Hier!"));
var page = document.getElementById("btn");
page.appendChild(order_button);
order_button.addEventListener("click", function(){
    let aantalBolletjes  = vraag_hoeveel_bolletjes();
    
    if (aantalBolletjes !== null) {
        bestellingen_lijst["Aantal_bolletjes"] = aantalBolletjes;  
        document.getElementById("Bestelling").innerHTML = "Bestelling"
        document.getElementById("Aantal_bolletjes").innerHTML = "Aantal bolletjes: " +aantalBolletjes;

        let hoorntje_of_bakje = get_hoorntje_of_bakje(aantalBolletjes);
        if(hoorntje_of_bakje !== null){
            bestellingen_lijst["Hoorntje_of_bakje"] = hoorntje_of_bakje;  
            document.getElementById("Hoorntje_of_bakje").innerHTML = `Hoorntje of Bakje: ${bestellingen_lijst["Hoorntje_of_bakje"]}`;
        }
        
        let Totaal_prijs_bolletjes = bestellingen_lijst["Aantal_bolletjes"] * waardelijst["PRIJS_PER_BOLLETJES"];
        let totaal_prijs_bakjes = bestellingen_lijst["Aantal_bolletjes"] * waardelijst["BAKJES"].toFixed(2)
        let totaal_prijs_hoorntje = bestellingen_lijst["Aantal_bolletjes"] * waardelijst["BAKJES"].toFixed(2)
        
        document.getElementById("Bonnetje").innerHTML = "Bonnetje"
        document.getElementById("Totaal_prijs_bolletje").innerHTML = `Totaal prijs voor de bolletje(s): ${bestellingen_lijst["Aantal_bolletjes"]} X ${waardelijst["PRIJS_PER_BOLLETJES"].toFixed(2)}`;
        if(bestellingen_lijst["Hoorntje_of_bakje"].toLowerCase().includes("bakje")){
            document.getElementById("Totaal_prijs_bakjes/hoorntjes").innerHTML = `Totaal prijs ${bestellingen_lijst["Hoorntje_of_bakje"]}(s): ${bestellingen_lijst["Aantal_bolletjes"]} X ${waardelijst["BAKJES"].toFixed(2)} = ${totaal_prijs_bakjes}`;
            let totaal_prijs = Totaal_prijs_bolletjes + totaal_prijs_bakjes

            
        }else if(bestellingen_lijst["Hoorntje_of_bakje"].toLowerCase().includes("hoorntje")){
            document.getElementById("Totaal_prijs_bakjes/hoorntjes").innerHTML = `Totaal prijs ${bestellingen_lijst["Hoorntje_of_bakje"]}(s): ${bestellingen_lijst["Aantal_bolletjes"]} X ${waardelijst["HOORNTJE"].toFixed(2)} = ${totaal_prijs_bakjes}`;
        }   let totaal_prijs = Totaal_prijs_bolletjes + totaal_prijs_hoorntje
        document.getElementById("Totaal_prijs_bolletje").innerHTML = `Totaal prijs voor de bolletjes: ${bestellingen_lijst["Aantal_bolletjes"]} X ${waardelijst["PRIJS_PER_BOLLETJES"].toFixed(2)}`;
        document.getElementById("Totaal_prijs").innerHTML = `Totaal prijs: €${totaal_prijs.toFixed(2)}`;
    }
});



