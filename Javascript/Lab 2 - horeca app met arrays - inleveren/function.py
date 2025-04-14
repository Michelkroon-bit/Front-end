from data import *
import sys
import time


#--> vraag om hoeveelheid bolletjes <--#
def vraag_hoeveel_bolletjes ():
    while True:
        try:
            typemachine_print('hoeveel bolletjes ijs wilt u hebben? \n')
            hoeveel_bolletjes = int(input())
            if hoeveel_bolletjes >= 1 and hoeveel_bolletjes <= 8:
                return hoeveel_bolletjes
            
            elif hoeveel_bolletjes < 1:
                typemachine_print(f"{U_MOET_WEL_EEN_GETAL_BOVEN_DE_0_INVOEREN}\n")
                
            else:
                typemachine_print(f"{SORRY_ZULKE_GROOTTE_BAKJES_VERKOPEN_WIJ_NIET}\n")
        except ValueError:
            typemachine_print('Je moet wel een getal invullen\n')


#--> check of je moet vragen om een bakje of hoorntje of als je een bakje moet geven <--#
def get_hoorntje_of_bakje(hoeveel_bolletjes):
    if hoeveel_bolletjes >=1 and hoeveel_bolletjes <=3:
        typemachine_print(f"Wilt u deze {hoeveel_bolletjes} bolletje(s) in een hoorntje of een bakje?\n")
        keuze = input()
        
        if keuze.lower() in ("hoorntje" , "bakje"):

            return keuze.lower() 
                
        else:
            typemachine_print(f"{SORRY_IK_BEGRIJP_HET_NIET}\n")
    

    elif hoeveel_bolletjes >=4 and hoeveel_bolletjes <=8:
        return 'bakje'


# -->voeg alle values uit de functies hierboven toe als dict aan de lijst <--#
def get_bestelling ():
    hoeveel_bolletjes = vraag_hoeveel_bolletjes()
    get_hoorntje = get_hoorntje_of_bakje(hoeveel_bolletjes)
    bestelde_items = {
    "ijsje": hoeveel_bolletjes ,
    "bakje/hoorntje": get_hoorntje
    
    }
    return bestelde_items
