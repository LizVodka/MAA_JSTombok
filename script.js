window.addEventListener("load", init);


function id(nev) {
    return document.getElementById(nev);
};

function init() {
    //var gomb=document.getElementById("gomb");
    var gomb = id("gomb");
    gomb.addEventListener("click", dolgozz, false);
};

var tomb = [];
function feltolt() {
    tomb = [];
    var kiir = id("kiir");
    kiir.innerHTML = "Jó reggelt! ";
    var adat = id("adat");
    var ertek = Number(adat.value);
    /*tömbök*/
    /*véletlen számok 1 és 10 között*/
    for (var i = 0; i < ertek; i++) {
        tomb[i] = Math.floor(Math.random() * 10 + 1);
    }
    console.log(tomb);
    kiir.innerHTML += "<br>A tömb elemei: " + tomb.join("; ");
    kiir.innerHTML += "<br>A tömb elemeinek száma: " + ertek;
}

function osszegez() {
    /*tömb elemeinek összege*/
    var osszeg = 0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg += tomb[i];
    }
    var osszegTxt = id("osszeg");
    osszegTxt.innerHTML = "Összeg: " + osszeg;
}

function dolgozz() {
    feltolt();
    osszegez();
};