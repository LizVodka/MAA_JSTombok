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
    var a = id("also");
    var also = Number(a.value);
    var f = id("felso");
    var felso = Number(f.value)

    /*tömbök*/
    /*véletlen számok 1 és 10 között*/
    for (var i = 0; i < ertek; i++) {
        tomb[i] = Math.floor(Math.random() * (felso - also + 1) + also);
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

function reszfeladat2() {
    /*Írjuk ki a páros számokat egy új bekezdésbe!*/
    var parostomb = [];
    var parosDb = 0;
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i] % 2 == 0) {
            parostomb[parosDb] = tomb[i];
            parosDb++;
        }
    }
    var parosElemek = id("prselemek");
    parosElemek.innerHTML = "A tömbben lévő páros számok: " + parostomb.join("; ");
}

function dolgozz() {
    feltolt();
    osszegez();
    reszfeladat2();
};