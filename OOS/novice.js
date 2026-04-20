var karuselNovice = [
 // Rešitev za 1. novico (vzorec):
 {
    datum: "15. junij 2026",
    kategorija: "Digitalizacija",
    naslov: "Knjižnica Martina Krpana digitalizira 5.000 starih rokopisov",
    besedilo: "Knjižnica Martina Krpana je sprožila ambiciozen projekt digitalizacije, v sklopu katerega bo do konca leta 2026 digitiziranih več kot 5.000 zgodovinskih rokopisov in starih tiskov. Gradivo bo brezplačno dostopno prek portala dLib.si."
 },
{
    datum: "3. junij 2026",
    kategorija: "Dogodki",
    naslov: "Rekordna udeležba na Festivalu branja 2026",
    besedilo: "Letošnji festival branja v oragnizaciji Zveze bibliotekarskih društev Slovenije je pritegnil rekordnih 12.400 obiskovalcev. Med odmevnimi gosti je bila tudi pisateljica Bronja Žakelj."
},
{
    datum: "22. maj 2026",
    kategorija: "Izobraževanje",
    naslov: "Nov program digitalnih veščin za upokojence",
    besedilo: "Mestna knjižnica Ljubljana je zagnala brezplačni tečaj digitalnih veščin. Program obsega 8 delavnic o iskanju po COBISS+, branju e-knjig in varnem gibanju po spletu."
},
{
    datum: "10. maj 2026",
    kategorija: "Statistika",
    naslov: "COBISS: izposoja knjig v Sloveniji dosegla zgodovinski rekord",
    besedilo: "Po podatkih sistema COBISS je bila izposoja knjig v letu 2025 rekordna — skupaj 18,7 milijona izposoj. Najbolj brana zvrst je bila otroška literatura."
},
{
    datum: "28. april 2026",
    kategorija: "Infrastruktura",
    naslov: "Maribor odpira novo Knjižnico prihodnjosti",
    besedilo: "V Mariboru so po triletni prenovi odprli prenovljeno Splošno knjižnico z 2.400 m² novih prostorov, makerspacelab z 3D-tiskalniki in interaktivno otroško cono."
},
{
    datum: "14. april 2026",
    kategorija: "Skupnost",
    naslov: "Branje brez meja: dostava knjig gibalno oviranim razširjena po vsej Slovenij",
    besedilo: "Program Branje brez meja se je razširil na 47 krajev po vsej Sloveniji. Prostovoljci tedensko dostavijo knjige starejšim in gibalno oviranim bralcem."
}
];
document.addEventListener("DOMContentLoaded", function() {
    var seznam = document.getElementById("karuselSeznam");
    if (!seznam) return;

karuselNovice.forEach(function(novica, i) {
    var li = document.createElement("li");
    li.className = "karusel-diapozitiv";
    li.setAttribute("role", "tabpanel");
    li.setAttribute("aria-label",
        "Novica " + (i + 1) + ": " + novica.naslov);

li.innerHTML =
"<span class='novica-datum'>" + novica.datum + "</span>" +
"<span class='novica-kategorija'>" + novica.kategorija + "</span>" +
"<h3>" + novica.naslov + "</h3>" +
"<p>" + novica.besedilo + "</p>";

seznam.appendChild(li);
});

// Zaženi karusel (logika iz KR3 / script.js)
if (typeof window.karuselInit === "function") {
    window.karuselInit();
}
});