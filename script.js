window.addEventListener("load", init);


function id(nev) {
    return document.getElementById(nev);
}
;

function init() {
    //var gomb=document.getElementById("gomb");
    var gomb = id("gomb");
    gomb.addEventListener("click", dolgozz, false);
}

var megszamol = 0;

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
    var felso = Number(f.value);

    /*tömbök*/
    /*véletlen számok 1 és 10 között*/
    for (var i = 0; i < ertek; i++) {


        tomb[i] = Math.floor(Math.random() * 10 + 1);


        tomb[i] = Math.floor(Math.random() * (felso - also + 1) + also);


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
function oszthato5() {
    var megszamol = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 5 === 0) {
            megszamol += 1;
        }
        var oszthatotxt = id("osszeg");
        oszthatotxt.innerHTML = "<br>Az 5-el osztható elemek száma: " + megszamol;
    }
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
    parosElemek.innerHTML = "<h2>Írjuk ki a páros számokat egy új bekezdésbe!</h2>A tömbben lévő páros számok: " + parostomb.join("; ");
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
    forditott.innerHTML = "<h2>Írjuk ki a tömbelemeket fordított sorrendben új bekezdésben!</h2>A tömb elemei visszafele: " + fordTomb.join("; ");
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
    ottel.innerHTML = "<h2>Hány 5-tel osztható szám van a számok között?</h2>Öttel osztható számok: " + ottelOszthato + " db.";
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
    maxi.innerHTML = "<h2>Mekkora a legnagyobb szám?</h2>A tömb legnagyobb eleme: " + MAX;
};


function reszfeladat6() {
    /*Van-e olyan szám, ami 2-vel is és 3-mal is osztható?*/
    /*a) megoldás*/
    var tombKetHar = [];
    var ketHarDb = 0;
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i] % 2 === 0 && tomb[i] % 3 === 0) {
            tombKetHar[ketHarDb] = tomb[i];
            ketHarDb++;
        }
    }
    var kettoEsHarom = id("kettoharom");
    kettoEsHarom.innerHTML = "<h2>Van-e olyan szám, ami 2-vel is és 3-mal is osztható?</h2>"
    if(tombKetHar.length == 0) {
        kettoEsHarom.innerHTML += "a) Nincs olyan szám, ami 2-vel és 3-mal is osztható lenne.";
    }
    else {
        kettoEsHarom.innerHTML += "a) " + ketHarDb + " db 2-vel és 3-mal osztható szám van, ezek: " + tombKetHar.join("; ");
    }

    /*b) megoldás*/
    var i = 0;
    do {
        i++;
    }while(i < tomb.length && !(tomb[i]%2 == 0 && tomb[i]%3 == 0));
    if(i <= tomb.length) {
        kettoEsHarom.innerHTML += "<br>b) Van 2-vel és 3-mal osztható szám.";
    }
    else {
        kettoEsHarom.innerHTML += "<br>b) Nincs olyan szám, ami 2-vel és 3-mal is osztható lenne.";
    }
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
    parosElemek.innerHTML = "<h2>Írjuk ki a páros számokat egy új bekezdésbe!</h2>A tömbben lévő páros számok: " + parostomb.join("; ");
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
    forditott.innerHTML = "<h2>Írjuk ki a tömbelemeket fordított sorrendben új bekezdésben!</h2>A tömb elemei visszafele: " + fordTomb.join("; ");
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
    ottel.innerHTML = "<h2>Hány 5-tel osztható szám van a számok között?</h2>Öttel osztható számok: " + ottelOszthato + " db.";
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
    maxi.innerHTML = "<h2>Mekkora a legnagyobb szám?</h2>A tömb legnagyobb eleme: " + MAX;
};


function reszfeladat6() {
    /*Van-e olyan szám, ami 2-vel is és 3-mal is osztható?*/
    /*a) megoldás*/
    var tombKetHar = [];
    var ketHarDb = 0;
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i] % 2 === 0 && tomb[i] % 3 === 0) {
            tombKetHar[ketHarDb] = tomb[i];
            ketHarDb++;
        }
    }
    var kettoEsHarom = id("kettoharom");
    kettoEsHarom.innerHTML = "<h2>Van-e olyan szám, ami 2-vel is és 3-mal is osztható?</h2>"
    if(tombKetHar.length == 0) {
        kettoEsHarom.innerHTML += "a) Nincs olyan szám, ami 2-vel és 3-mal is osztható lenne.";
    }
    else {
        kettoEsHarom.innerHTML += "a) " + ketHarDb + " db 2-vel és 3-mal osztható szám van, ezek: " + tombKetHar.join("; ");
    }

    /*b) megoldás*/
    var i = 0;
    do {
        i++;
    }while(i < tomb.length && !(tomb[i]%2 == 0 && tomb[i]%3 == 0));
    if(i <= tomb.length) {
        kettoEsHarom.innerHTML += "<br>b) Van 2-vel és 3-mal osztható szám.";
    }
    else {
        kettoEsHarom.innerHTML += "<br>b) Nincs olyan szám, ami 2-vel és 3-mal is osztható lenne.";
    }
}


function dolgozz() {
    feltolt();
    osszegez();

    oszthato5();

    reszfeladat2();
    reszfeladat3();
    reszfeladat4();
    reszfeladat5();
    reszfeladat6();


}


