var afr08: number = 1028;
var afr18: number = 1235.5;
var sa08: number = 1132.6;
var sa18: number = 1261.5;
var eur08: number = 4965.7;
var eur18: number = 4209.3;
var na08: number = 6600.4;
var na18: number = 16274.1;
var asia08: number = 12954.7;
var asia18: number = 16274.1;
var au08: number = 1993;
var au18: number = 2100.5;

var gesamt18: number = afr18 + sa18 + eur18 + na18 + asia18 + au18;

//prozent
var afr18ge: number = (afr18 / gesamt18) * 100;
var sa18ge: number = (sa18 / gesamt18) * 100;
var eur18ge: number = (eur18 / gesamt18) * 100;
var na18ge: number = (na18 / gesamt18) * 100;
var asia18ge: number = (asia18 / gesamt18) * 100;
var au18ge: number = (au18 / gesamt18) * 100;


//kg co2
var afr1808: number = afr18 - afr08;
var sa1808: number = sa18 - sa08;
var eur1808: number = eur18 - eur08;
var na1808: number = na18 - na08;
var asia1808: number = asia18 - asia08;
var au1808: number = au18 - au08;


var afrp: number = (1235.5 - 1028) / 1028 * 100;
var sap: number = (1261.5 - 1132.6) / 1132.6 * 100;
var eurp: number = (4209.3 - 4965.7) / 4965.7 * 100;
var nap: number = (16274.1 - 6600.4) / 6600.4 * 100;
var asiap: number = (16274.1 - 12954.7) / 12954.7 * 100;
var aup: number = (2100.5 - 1993) / 1993 * 100;


console.log("Die Emission von Europa ist: " + eur18 + "kg CO2");
console.log ("Relativ zur Gesamtemission der Welt verursacht Europa damit " + eur18ge + "%");
console.log ("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + eurp + "verändert");
console.log ("2018 im Vergleich zu 2008 sind das " + eur1808 + "kg CO2");

console.log ("Die Emission von Nord Amerika ist: " + na18 + "kg CO2");
console.log ("Relativ zur gesamtemission der Welt verursacht Nord Amerika damit " + na18ge + "%");
console.log ("Für Nord Amerika hat sich 2018 im vergleich zu 2008 die Emission um " + nap + "verändert");
console.log ("2018 im Vergleich zu 2008 sind das " + na1808 + "kg CO2");

console.log ("Die Emissionen von Asien sind: " + asia18 + " kg CO2");
console.log ("Relativ zur Gesamtemission der Welt verursacht Asien damit " + asia18ge + "%");
console.log ("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + asiap + "verändert");
console.log ("2018 im Vergleich zu 2008 sind das " + asia1808 + "kg CO2");

console.log("Die Emission von Süd Amerika ist: " + sa18 + "kg CO2");
console.log ("Relativ zur Gesamtemission der Welt verursacht Süd Amerika damit " + sa18ge + "%");
console.log ("Für Süd Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + sap + "verändert");
console.log ("2018 im Vergleich zu 2008 sind das " + sa1808 + "kg CO2");

console.log("Die Emission von Australien sind: " + au18 + "kg CO2");
console.log ("Relativ zur Gesamtemission der Welt verursacht Australien damit " + au18ge + "%");
console.log ("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + aup + "verändert");
console.log ("2018 im Vergleich zu 2008 sind das " + au1808 + "kg CO2");
