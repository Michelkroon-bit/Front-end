// from data import *
import { bestellingen_lijst, zinnen_lijst} from "./data.js";


// #--> vraag om hoeveelheid bolletjes <--#
export function vraag_hoeveel_bolletjes(){
    while (true){
        var hoeveel_bolletjes = prompt('hoeveel bolletjes ijs wilt u hebben? \n')
        if (hoeveel_bolletjes === null){
            alert("Bestelling geannuleerd")
            return "None"
        }
        hoeveel_bolletjes = parseInt(hoeveel_bolletjes);
            if (!isNaN(hoeveel_bolletjes)) {
                if( hoeveel_bolletjes >= 1 && hoeveel_bolletjes <= 8){
                    return hoeveel_bolletjes
                }else if(hoeveel_bolletjes < 1){
                    alert(zinnen_lijst[2])
                }else if(hoeveel_bolletjes > 8){
                    alert(zinnen_lijst[3])
            }else{
                alert(zinnen_lijst[1])
            };
        }
    }
}
// #--> check of je moet vragen om een bakje of hoorntje of als je een bakje moet geven <--#
export function get_hoorntje_of_bakje(hoeveel_bolletjes){
    let hoorntje_of_bakje_output = "";

    if (hoeveel_bolletjes >= 1 && hoeveel_bolletjes <= 3) {
        let hoorntje_of_bakje = prompt(`Wilt u ${hoeveel_bolletjes} bolletje(s) in een hoorntje of een bakje?`);

        if (hoorntje_of_bakje !== null) {
            hoorntje_of_bakje_output = hoorntje_of_bakje.toLowerCase();

            if (!["hoorntje", "bakje"].includes(hoorntje_of_bakje_output)) {
                alert(zinnen_lijst[1]); // Alert for invalid input
                return "None";
            }
        } else {
            alert("Bestelling geannuleerd.");
            return "None";
        }
    } else if (hoeveel_bolletjes >= 4 && hoeveel_bolletjes <= 8) {
        hoorntje_of_bakje_output = "bakje"; // Automatically assign "bakje" for 4+ scoops
    }

    bestellingen_lijst["Hoorntje_of_bakje"] = hoorntje_of_bakje_output;
    return hoorntje_of_bakje_output;
}
