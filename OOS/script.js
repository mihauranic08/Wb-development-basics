const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", function() {
    const filter = searchInput.value.toLowerCase();
    let vidnih = 0; // NOVO
    const rows = document.querySelectorAll("#seznam table tr");

rows.forEach((row, index) => {
    if (index === 0) return;
    const text = row.textContent.toLowerCase();
    const ujema = text.includes(filter); // NOVO
    row.style.display = ujema ? "" : "none"; // NOVO
    if (ujema) vidnih++; // NOVO
});
// NOVO — obvestilo za bralnike zaslona:
    document.getElementById("searchStatus")
    .textContent =
    "Najdenih rezultatov: " + vidnih;
});

function removeHighlights() {
const highlights = document.querySelectorAll('.highlight');
highlights.forEach(function(highlight) {
    const parent = highlight.parentNode;
    parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
    parent.normalize();
});
}
function highlightText(searchTerm) {
const sections = document.querySelectorAll('.section, p, h1, h2, li, td');
sections.forEach(function(section) {
    const text = section.innerHTML;
    const regex = new RegExp('(' + searchTerm + ')', 'gi');
    const newText = text.replace(regex, '<span class="highlight">$1</span>');
    section.innerHTML = newText;
});
const firstHighlight = document.querySelector('.highlight');
if (firstHighlight) {
    firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
}
// Priporočilo knjige
const recommendBtn = document.getElementById("recommendBtn");
const recommendation = document.getElementById("recommendation");
recommendBtn.addEventListener("click", function() {
    const random = Math.floor(Math.random() * cobissData.length);
    const book = cobissData[random];
    recommendation.textContent = "Danes priporocamo: " + book.descr + " - " + book.author;
});
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let napake = false;

    const name = document.getElementById("name");
    const nameNapaka = document.getElementById("nameNapaka");
    const email = document.getElementById("email");
    const emailNapaka = document.getElementById("emailNapaka");

    // Preverjanje imena (bil: alert)
    if (name.value.length < 3) {
        nameNapaka.textContent = "Ime mora imeti vsaj 3 znake."; // NOVO
        name.setAttribute("aria-invalid", "true"); // NOVO
        name.focus();
        napake = true;
    } else {
        nameNapaka.textContent = ""; // NOVO
        name.removeAttribute("aria-invalid"); // NOVO
    }

    // Preverjanje emaila (bil: alert)
    if (email.value === "") {
        emailNapaka.textContent = "Vnesite email."; // NOVO
        email.setAttribute("aria-invalid", "true"); // NOVO
        if (!napake) email.focus();
        napake = true;
    } else {
        emailNapaka.textContent = ""; // NOVO
        email.removeAttribute("aria-invalid"); // NOVO
    }

    if (!napake) {
        // Pošljemo obrazec
        form.submit();
    }
});
/* NOVO: vaja 24 - Gumb Na vrh */
const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.addEventListener("scroll", function () {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
// VAJA 25: Visokokontrastni nacin
const contrastBtn = document.getElementById("contrastBtn");
contrastBtn.addEventListener("click", function() {
    document.body.classList.toggle("high-contrast");
    const isOn = document.body.classList.contains("high-contrast");
    localStorage.setItem("highContrast", isOn);
});
// Ob nalaganju strani - obnovi nastavitev
if (localStorage.getItem("highContrast") === "true") {
    document.body.classList.add("high-contrast");
}
(function() {
    var trenutni = 0;
    var skupaj = 0; // bo nastavljeno po gradnji
    var ZAMIK = 5000; // 5 sekund
    var seznam = document.getElementById("karuselSeznam");
    var gumbPrej = document.getElementById("karuselPrej");
    var gumbNasl = document.getElementById("karuselNasl");
    var pikeVsebnik = document.getElementById("karuselPike");
// Premakni karusel na določen indeks
function premakniNa(index) {
    skupaj = seznam.children.length;
    if (index < 0) index = skupaj - 1;
    if (index >= skupaj) index = 0;
    trenutni = index;
// Premik s CSS transform
seznam.style.transform =
"translateX(-" + (trenutni * 100) + "%)";
// Posodobimo pike
var pike = pikeVsebnik.querySelectorAll(".karusel-pika");
pike.forEach(function(pika, i) {
    pika.classList.toggle("aktivna", i === trenutni);
    pika.setAttribute("aria-selected",
        i === trenutni ? "true" : "false");
});
}
// Samodejno predvajanje
function zacniAutoPlay() {
    interval = setInterval(function() {
        premakniNa(trenutni + 1);
}, ZAMIK);
}
function ustavi() {
    clearInterval(interval);
}
// Gumba za ročno premikanje
gumbPrej.addEventListener("click", function() {
    ustavi();
    premakniNa(trenutni - 1);
    zacniAutoPlay();
});
gumbNasl.addEventListener("click", function() {
    ustavi();
    premakniNa(trenutni + 1);
    zacniAutoPlay();
});
// Tipkovnična navigacija (leva/desna puščica)
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") premakniNa(trenutni - 1);
    if (e.key === "ArrowRight") premakniNa(trenutni + 1);
});
// Inicializacija: zaženi po gradnji diapozitivov
// (klic iz vaje 4, potem ko so dodani diapozitivi)
window.karuselInit = function() {
    skupaj = seznam.children.length;
// Ustvari pike
pikeVsebnik.innerHTML = "";
for (var i = 0; i < skupaj; i++) {
    var pika = document.createElement("button");
    pika.className = "karusel-pika" +
    (i === 0 ? " aktivna" : "");
    pika.setAttribute("role", "tab");
    pika.setAttribute("aria-selected",
        i === 0 ? "true" : "false");
        pika.setAttribute("aria-label",
            "Novica " + (i + 1));
(function(idx) {
    pika.addEventListener("click", function() {
        ustavi();
        premakniNa(idx);
        zacniAutoPlay();
});
})(i);
pikeVsebnik.appendChild(pika);
}
premakniNa(0);
zacniAutoPlay();
};
})();