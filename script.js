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

    /*MAA*/
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
    /*MAA*/
    var parostomb = [];
    var parosDb = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 === 0) {
            parostomb[parosDb] = tomb[i];
            parosDb++;
        }
    }
    var parosElemek = id("prselemek");
    parosElemek.innerHTML = "A tömbben lévő páros számok: " + parostomb.join("; ");
}

function reszfeladat3() {
    /*Írjuk ki a tömbelemeket fordított sorrendben új bekezdésben!*/
    /*MAA*/
    var fordTomb = [];
    index = 0;

    for (var i = tomb.length - 1; i >= 0; i--) {
        fordTomb[index] = tomb[i];
        index++;
    }
    var forditott = id("forditott");
    forditott.innerHTML = "A tömb elemei visszafele: " + fordTomb.join("; ");
}

function reszfeladat4() {
    /*Hány 5-tel osztható szám van a számok között?*/
    /*MAA*/
    var ottelOszthato = 0;
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i] % 5 === 0)
        ottelOszthato++;
    }
    var ottel = id("ottel");
    ottel.innerHTML = "Öttel osztható számok: " + ottelOszthato + " db."
}

function reszfeladat5() {
    /*Mekkora a legnagyobb szám?*/
    /*MAA*/
    var MAX = tomb[0];
    for (var i = 1; i < tomb.length; i++) {
        if(tomb[i] > MAX) {
            MAX = tomb[i];
        }
    }
    var maxi = id("max");
    maxi.innerHTML = "A tömb legnagyobb eleme: " + MAX;
}

function dolgozz() {
    feltolt();
    osszegez();
    reszfeladat2();
    reszfeladat3();
    reszfeladat4();
    reszfeladat5();
};