"use strict";
window.addEventListener("load", function () {
    var afr08 = 1028;
    var afr18 = 1235.5;
    var sa08 = 1132.6;
    var sa18 = 1261.5;
    var eur08 = 4965.7;
    var eur18 = 4209.3;
    var na08 = 6600.4;
    var na18 = 16274.1;
    var asia08 = 12954.7;
    var asia18 = 16274.1;
    var au08 = 1993;
    var au18 = 2100.5;
    var gesamt18 = afr18 + sa18 + eur18 + na18 + asia18 + au18;
    //prozent
    var afr18ge = (afr18 / gesamt18) * 100;
    var sa18ge = (sa18 / gesamt18) * 100;
    var eur18ge = (eur18 / gesamt18) * 100;
    var na18ge = (na18 / gesamt18) * 100;
    var asia18ge = (asia18 / gesamt18) * 100;
    var au18ge = (au18 / gesamt18) * 100;
    //kg co2
    var afr1808 = afr18 - afr08;
    var sa1808 = sa18 - sa08;
    var eur1808 = eur18 - eur08;
    var na1808 = na18 - na08;
    var asia1808 = asia18 - asia08;
    var au1808 = au18 - au08;
    var afrp = (1235.5 - 1028) / 1028 * 100;
    var sap = (1261.5 - 1132.6) / 1132.6 * 100;
    var eurp = (4209.3 - 4965.7) / 4965.7 * 100;
    var nap = (16274.1 - 6600.4) / 6600.4 * 100;
    var asiap = (16274.1 - 12954.7) / 12954.7 * 100;
    var aup = (2100.5 - 1993) / 1993 * 100;
    console.log("Die Emission von Europa ist: " + eur18 + "kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + eur18ge + "%");
    console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + eurp + "verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + eur1808 + "kg CO2");
    console.log("Die Emission von Nord Amerika ist: " + na18 + "kg CO2");
    console.log("Relativ zur gesamtemission der Welt verursacht Nord Amerika damit " + na18ge + "%");
    console.log("Für Nord Amerika hat sich 2018 im vergleich zu 2008 die Emission um " + nap + "verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + na1808 + "kg CO2");
    console.log("Die Emissionen von Asien sind: " + asia18 + " kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + asia18ge + "%");
    console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + asiap + "verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + asia1808 + "kg CO2");
    console.log("Die Emission von Süd Amerika ist: " + sa18 + "kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht Süd Amerika damit " + sa18ge + "%");
    console.log("Für Süd Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + sap + "verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + sa1808 + "kg CO2");
    console.log("Die Emission von Australien sind: " + au18 + "kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + au18ge + "%");
    console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + aup + "verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + au1808 + "kg CO2");
    function eurfunction() {
        document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in Europe";
        document.getElementById("eur1").innerHTML = "4209.3";
        document.getElementById("eur2").innerHTML = "14%";
        document.getElementById("eur3").innerHTML = "-15%";
        document.getElementById("eur4").innerHTML = "-756kg";
        document.querySelector(".chartwrapper .chart").setAttribute("style", "height: 14%");
    }
    function nafunction() {
        document.getElementById("heading").innerHTML = "Carbon Dioxide Emission in North America";
        document.getElementById("eur1").innerHTML = "16274.1";
        document.getElementById("eur2").innerHTML = "19%";
        document.getElementById("eur3").innerHTML = "147%";
        document.getElementById("eur4").innerHTML = "9673.7kg";
        document.querySelector(".chartwrapper .chart").setAttribute("style", "height: 19%");
    }
    function safunction() {
        document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in South America";
        document.getElementById("eur1").innerHTML = "1261.5";
        document.getElementById("eur2").innerHTML = "4%";
        document.getElementById("eur3").innerHTML = "129%";
        document.getElementById("eur4").innerHTML = "11.38kg";
        document.querySelector(".chartwrapper .chart").setAttribute("style", "height: 4%");
    }
    function afrfunction() {
        document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in Africa";
        document.getElementById("eur1").innerHTML = "1235.5";
        document.getElementById("eur2").innerHTML = "4%";
        document.getElementById("eur3").innerHTML = "0.2%";
        document.getElementById("eur4").innerHTML = "207.5kg";
        document.querySelector(".chartwrapper .chart").setAttribute("style", "height: 4%");
    }
    function asiafunction() {
        document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in Asia";
        document.getElementById("eur1").innerHTML = "16274.1";
        document.getElementById("eur2").innerHTML = "50%";
        document.getElementById("eur3").innerHTML = "0.26%";
        document.getElementById("eur4").innerHTML = "3319kg";
        document.querySelector(".chartwrapper .chart").setAttribute("style", "height: 50%");
    }
    function ausfunction() {
        document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in Australia";
        document.getElementById("eur1").innerHTML = "2100.5";
        document.getElementById("eur2").innerHTML = "7%";
        document.getElementById("eur3").innerHTML = "5.39%";
        document.getElementById("eur4").innerHTML = "107.5kg";
        document.querySelector(".chartwrapper .chart").setAttribute("style", "height: 7%");
    }
    document.querySelector(".europe").addEventListener("click", eurfunction);
    document.querySelector(".northamerica").addEventListener("click", nafunction);
    document.querySelector(".southamerica").addEventListener("click", safunction);
    document.querySelector(".africa").addEventListener("click", afrfunction);
    document.querySelector(".asia").addEventListener("click", asiafunction);
    document.querySelector(".australia").addEventListener("click", ausfunction);
});
//# sourceMappingURL=script.js.map