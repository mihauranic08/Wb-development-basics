// Tabelo polni po nalaganju DOM-a in omogoca razvrscanje po stolpcih.
document.addEventListener("DOMContentLoaded", function () {
    if (!Array.isArray(cobissData)) {
        return;
    }

    var podatki = cobissData.slice();
    var smer = {};

    function prikaziTabelo(seznam) {
        var tbody = document.getElementById("cobissBody");
        if (!tbody) {
            return;
        }

        tbody.innerHTML = "";
        seznam.forEach(function (k, i) {
            var tr = document.createElement("tr");
            tr.innerHTML =
                "<td>" + (i + 1) + "</td>" +
                "<td>" + k.descr + "</td>" +
                "<td>" + k.author + "</td>" +
                "<td>" + k.totalCount + "</td>";
            tbody.appendChild(tr);
        });
    }

    function primerjaj(a, b, kljuc, asc) {
        var va = a[kljuc];
        var vb = b[kljuc];

        if (typeof va === "string") {
            va = va.toLowerCase();
            vb = vb.toLowerCase();
        }

        if (va < vb) {
            return asc ? -1 : 1;
        }
        if (va > vb) {
            return asc ? 1 : -1;
        }
        return 0;
    }

    function nastaviSortiranje() {
        var glave = document.querySelectorAll("#cobissTable th");
        var kljuci = [null, "descr", "author", "totalCount"];

        glave.forEach(function (th, idx) {
            if (!kljuci[idx]) {
                return;
            }

            th.classList.add("sortable");
            th.addEventListener("click", function () {
                var kljuc = kljuci[idx];
                var asc = !smer[kljuc];
                smer[kljuc] = asc;

                podatki.sort(function (a, b) {
                    return primerjaj(a, b, kljuc, asc);
                });
                prikaziTabelo(podatki);

                glave.forEach(function (h) {
                    h.classList.remove("sort-asc", "sort-desc");
                });
                th.classList.add(asc ? "sort-asc" : "sort-desc");
            });
        });
    }

    // Preveri v konzoli (F12), da je cobissData pravilno nalozen.
    console.log("Stevilo knjig v cobissData: " + cobissData.length);
    if (cobissData.length > 0) {
        console.log("Prva knjiga: " + cobissData[0].descr);
    }

    // Nakljucno priporocilo knjige izmed najbolj branih.
    var recommendBtnKnjiznica = document.getElementById("recommendBtn");
    var recommendationKnjiznica = document.getElementById("recommendation");

    if (recommendBtnKnjiznica && recommendationKnjiznica && cobissData.length > 0) {
        recommendBtnKnjiznica.addEventListener("click", function () {
            var i = Math.floor(Math.random() * cobissData.length);
            var knjiga = cobissData[i];

            recommendationKnjiznica.innerHTML =
                "<strong>" + knjiga.descr + "</strong><br>" +
                knjiga.author + "<br>" +
                "<small>Izposoj v feb. 2026: " + knjiga.totalCount + "</small>";
        });
    }

    // TOP 10 kartice.
    var top10 = cobissData.slice(0, 10);
    var vsebnikTop10 = document.getElementById("top10Container");
    if (vsebnikTop10) {
        vsebnikTop10.innerHTML = "";
        top10.forEach(function (k, i) {
            var barva = "hsl(" + (200 + i * 15) + ",70%,42%)";
            var kartica = document.createElement("div");
            kartica.className = "knjiga-kartica";
            kartica.style.backgroundColor = barva;
            kartica.innerHTML =
                "<div class='kartica-rang'>" + (i + 1) + "</div>" +
                "<div class='kartica-naslov'>" + k.descr + "</div>" +
                "<div class='kartica-avtor'>" + k.author + "</div>" +
                "<div class='kartica-stevilo'>Izposoj: " + k.totalCount + "</div>";
            vsebnikTop10.appendChild(kartica);
        });
    }

    // Grafikon TOP 15.
    var top15 = cobissData.slice(0, 15);
    var max = top15[0] ? top15[0].totalCount : 1;
    var vsebnikGraf = document.getElementById("grafikon");
    if (vsebnikGraf) {
        vsebnikGraf.innerHTML = "";
        top15.forEach(function (k, i) {
            var sirina = Math.round((k.totalCount / max) * 100);
            var vrstica = document.createElement("div");
            vrstica.className = "graf-vrstica";

            var naslov = k.descr.length > 25
                ? k.descr.substring(0, 25) + "..."
                : k.descr;

            vrstica.innerHTML =
                "<div class='graf-oznaka'>" + (i + 1) + ". " + naslov + "</div>" +
                "<div class='graf-trak-ozadje'>" +
                "<div class='graf-trak' style='width:" + sirina + "%'>" +
                k.totalCount +
                "</div></div>";
            vsebnikGraf.appendChild(vrstica);
        });
    }

    prikaziTabelo(podatki);
    nastaviSortiranje();
});