const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        removeHighlights();
        highlightText(searchTerm);
    }
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
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (name.length < 3) {
        alert("Ime mora imeti vsaj 3 znake.");
        e.preventDefault(); // ustavi oddajo obrazca
        return;
}
if (email === "") {
    alert("Vnesite email.");
    e.preventDefault();
    return;
}
if (message.length < 10) {
    alert("Sporočilo mora imeti vsaj 10 znakov.");
    e.preventDefault();
    return;
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