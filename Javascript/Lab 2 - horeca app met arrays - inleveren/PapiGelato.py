import time
from function import *
from data import *
#maak_bestelling =""
bestellingen_lijst = []

som = 0
aantal_hoorntjes = 0
aantal_bakjes = 0

time.sleep(0.5)
print('''         _
       ,' `,.
       >-.(__)
      (_,-' |
        `.  |
          `.|
            `''')


typemachine_print('🍦Welkom bij Papi Gelato je mag alle smaken kiezen zo lang het maar vanille ijs is🍦\n')


while True:
    bestelde_items = get_bestelling()
    bestellingen_lijst.append(bestelde_items)
    print(bestellingen_lijst)
    print('\n')
    typemachine_print(f"Uw bestelling is toegevoegd: een {bestelde_items['bakje/hoorntje']} met {bestelde_items['ijsje']} bolletjes\n")
    print('\n')
    
    typemachine_print(f"Wilt u nog iets bestellen?\n")
    nog_iets_bestellen = input("")
    if nog_iets_bestellen in ('N','n','NEE','nee','Nee'):
        
        break


#--> check hoeveel er van ieder is <--#
for x in bestellingen_lijst:
    som += x['ijsje']
    if x['bakje/hoorntje'] == "bakje":
        aantal_bakjes += 1
    elif x['bakje/hoorntje'] == "hoorntje":
        aantal_hoorntjes +=1

#--> de som <--#
prijs_per_bolletje = som * PRIJS_PER_BOLLETJES 
prijs_per_bakje = aantal_bakjes * BAKJES
prijs_per_hoorntje = aantal_hoorntjes * HOORNTJE
totaal = prijs_per_hoorntje + prijs_per_bakje + prijs_per_bolletje


#--> bonnetje <--#

print('--------["Papi Gelato"]------------')

print(f"Bolletjes        {som} x {PRIJS_PER_BOLLETJES}  = €  {round(prijs_per_bolletje)}0 ")
for x in bestellingen_lijst:
    if x['bakje/hoorntje'] == "bakje":
        print(f"Bakje            {aantal_bakjes} x {BAKJES} = €  {round(prijs_per_bakje ,2 )}")

    if x['bakje/hoorntje'] == 'hoorntje':
        print(f"hoorntje         {aantal_hoorntjes} x {HOORNTJE} = €  {round(prijs_per_hoorntje ,2 )}")
print('                       ------------ +')
print(f'totaal                    = €  {round(totaal,2)}')
print(f"🍦{BEDANKT_EN_TOT_ZIENS}🍦\n")
#print(maak_bestelling) #for debugging 