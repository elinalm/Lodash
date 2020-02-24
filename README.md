# Lodash 

I det här exemplet har jag visat varför Lodash är bra att använda i jämförelse med Javascript.
Exemplena är likadana fast gjorda i Javascript och Lodash. 

function shufflehand() och function shuffleLodash() slänger om värden i en lista. shuffleHand() gör det med 
hjälp av en foor-loop och shuffleLodash() gör det genom att skicka in funktionen _.shuffle() till listan och slänger sedan ut 
värdena blandade i en ny array. 

function dogs() och function dogsLodash() hittar de hundarna som är bruna och 6 år från en lista av hundar. Function dogs() gör det 
genom att iterera värdena i en forEach-loop medan function dogsLodash() gör det genom att endast skicka in _.filter() vilket plockar ut de värdena som matchar och lägger in det i en ny array. 
