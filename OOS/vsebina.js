// vsebina.js — Korak 1
const uvodnoBesedilo = `Knjižnica Martina Krpana je odprla svoja vrata leta 1978 in danes velja za eno najpomembnejših
kulturnih ustanov v mestu. Naša zbirka obsega več kot 85.000 knjižničnih enot — od klasične leposlovne literature in sodobnih
romanov do strokovnih del, referenčnih priročnikov in bogatega fonda otroških knjig. Posebno ponosni smo na zbirko
slovenskega leposlovja, ki šteje več kot 12.000 naslovov, ter na bogat arhiv lokalnih časopisov in revij, ki sega vse do leta
1920. Vsako leto naša zbirka zraste za približno 3.000 novih enot, ki jih skrbno izbirajo naši bibliotekarji glede na
povpraševanje bralcev in aktualne literarne trende.

Vsakemu obiskovalcu želimo ponuditi prostor, kjer se znanje sreča z domišljijo. Poleg izposoje knjig organiziramo literarne
večere, bralne krožke za odrasle in otroke, delavnice kreativnega pisanja ter predavanja uveljavljenih avtorjev. Naša otroška
knjižnica je opremljena z interaktivnimi kotički za branje, kjer vsako sredo potekajo pravljične ure za najmlajše. Za mladostnike
pripravljamo mesečne debate o aktualnih knjigah in filmskih priredbah, ki so postale ena najbolj obiskanih prireditev v mestu.
Posebej smo ponosni na program Branje brez meja, ki brezplačno dostavo knjig zagotavlja starejšim in gibalno oviranim
občanom.

Naša digitalna čitalnica je dostopna 24 ur na dan, 7 dni v tednu — iz udobja vašega doma. Prek sistema COBISS+ lahko
rezervirate knjige, podaljšate izposojo in dostopate do več kot 5.000 e-knjig ter 2.000 avdioknjig. Prepričani smo, da je vsaka
knjiga novo okno v svet, vsaka zgodba pa priložnost za rast in odkrivanje. Vabimo vas, da postanete del naše skupnosti
bralcev — skupaj gradimo kulturo znanja, ki bo živela še za mnoge generacije.`;

const uvodniElement = document.getElementById("uvod");
uvodniElement.textContent = uvodnoBesedilo;

uvodniElement.innerHTML = "";
const odstavki = uvodnoBesedilo.split("\n\n");

odstavki.forEach(function(odstavek) {
    const p = document.createElement("p");
    p.textContent = odstavek.trim();
    uvodniElement.appendChild(p);
});
const sekcija = document.querySelector(".header");
sekcija.style.borderLeft = "6px solid #1D1D1B";
sekcija.style.paddingLeft = "24px";
sekcija.style.fontFamily = "'Georgia', serif";
sekcija.style.lineHeight = "1.9";
sekcija.style.letterSpacing = "0.02em";

const prviOdstavek = uvodniElement.querySelector("p:first-child");
prviOdstavek.style.fontSize = "16px";
prviOdstavek.style.fontWeight = "normal"; // eksplicitno ponastavimo — prepiše morebitne CSS razrede
prviOdstavek.style.color = "#1D1D1B";
prviOdstavek.style.borderBottom = "1px solid #EFEFEF";
prviOdstavek.style.paddingBottom = "12px";
prviOdstavek.style.marginBottom = "16px";

const vsiOdstavki = uvodniElement.querySelectorAll("p");
vsiOdstavki.forEach(function(p, index) {
    if (index > 0) {
        p.style.color = "#444";
        p.style.fontSize = "16px";
    }
});

// ── KORAK 4 — Dodajanje Google Fonts pisave ─────────────────
function naloziFonts(imePisave) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family="
    + imePisave.replace(/ /g, "+")
    + ":wght@400;700&display=swap";
    document.head.appendChild(link);
}
naloziFonts("Merriweather");
setTimeout(function() {
    document.body.style.fontFamily = "'Merriweather', Georgia, serif";
    console.log("Pisava Merriweather uspešno aplicirana.");
}, 500);

// ── KORAK 5 — Vstavljanje slike knjižnice ────────────────
const slika = document.createElement("img");
slika.src = "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200";
slika.alt = "Notranjost elegantne javne knjižnice";
slika.title = "Naša knjižnica — prostor znanja in domišljije";
slika.style.width = "100%";
slika.style.maxHeight = "400px";
slika.style.objectFit = "cover";
slika.style.borderRadius = "10px";
slika.style.marginBottom = "24px";
slika.style.boxShadow = "0 4px 16px rgba(0,0,0,0.18)";
slika.style.display = "block";

uvodniElement.parentElement.insertBefore(slika, uvodniElement);
console.log("Slika knjižnice uspešno vstavljena.");

// vsebina.js — Korak 6 (poenostavljena različica)
function toggleBesedilo() {
    var div = document.getElementById("razsiritevBesedila");
    var gumb = document.getElementById("gumbRazsiri");

const jeOdprto = !div.hasAttribute("hidden"); 
if (jeOdprto) {
    div.setAttribute("hidden", "");              

    gumb.setAttribute("aria-expanded", "false");
    gumb.textContent = "Preberi več ▼";
} else {
    div.removeAttribute("hidden");               

        gumb.setAttribute("aria-expanded", "true");
        gumb.textContent = "Skrij besedilo ▲";
    }
}


// vsebina.js — Korak 7
// Seznam ključnih besed za označitev
const kljucneBesede = [
"knjižnica", "zbirka", "izposoje", "digitalna",
"literarne", "bralne", "COBISS"
];
// Funkcija za označevanje besed v besedilu
function oznaciBesede(element, besede) {
const odstavkiEl = element.querySelectorAll("p");
odstavkiEl.forEach(function(p) {
let html = p.innerHTML;
besede.forEach(function(beseda) {
// Regularni izraz: iskanje besede (case-insensitive)
const regex = new RegExp("(" + beseda + ")", "gi");
// Zamenjamo ujemanja z označeno verzijo
html = html.replace(regex, function(ujemanje) {
return '<span style="font-weight: bold;">'
+ ujemanje
+ '</span>';
});
});
p.innerHTML = html;
});
}
oznaciBesede(uvodniElement, kljucneBesede);
console.log("Ključne besede označene.");

// KORAK 8
// Preštejemo besede v uvodnem besedilu in jih izpišemo v konzolo.
// Gumb skrijemo samo, če je besedilo ZELO kratko (manj kot 10 besed).
const stevilobesed = uvodnoBesedilo.trim().split(/\s+/).length;
console.log("Število besed v uvodu: " + stevilobesed);
// Gumb skrijemo samo če je besedilo ZELO kratko (manj kot 10 besed):
const gumb = document.getElementById("gumbRazsiri");
if (stevilobesed < 10) {
gumb.style.display = "none";
}
// VAJA M2: Canvas grafikon kategorij
const canvas = document.getElementById("kategorijeCanvas");
if (canvas) {
    const ctx = canvas.getContext("2d");
    const kategorije = [
        { ime: "Roman", stevilo: 24000 },
        { ime: "Znanstvena lit.", stevilo: 18000 },
        { ime: "Otroške knjige", stevilo: 15000 },
        { ime: "Biografije", stevilo: 9000 }
];
const max = 30000;
const barW = 80;
const gap = 30;
const baseY = 220;
const barva = "#2E6DA4";
kategorije.forEach(function(k, i) {
    const x = 40 + i * (barW + gap);
    const visina = (k.stevilo / max) * 180;
    ctx.fillStyle = barva;
    ctx.fillRect(x, baseY - visina, barW, visina);
    ctx.fillStyle = "#333";
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(k.ime, x + barW/2, baseY + 18);
    ctx.fillText(k.stevilo.toLocaleString("sl"),
    x + barW/2, baseY - visina - 6);
});
// Os X// 
ctx.strokeStyle = "#333";
ctx.beginPath();
ctx.moveTo(20, baseY);
ctx.lineTo(canvas.width - 20, baseY);
ctx.stroke();
console.log("Canvas grafikon uspešno narisan.");
}
