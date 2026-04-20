# Knjiznica Martina Krpana (OOS)

Podrobna dokumentacija za staticno spletno stran knjiznice.
Projekt je narejen z osnovnimi spletnimi tehnologijami (HTML, CSS, JavaScript) in je namenjen predstavitvi vsebin, novic, knjiznega seznama ter osnovnih interaktivnih funkcij.

## 1. Pregled projekta

Spletna stran prikazuje:
- uvodno predstavitev knjiznice,
- novice v obliki karusela,
- kategorije knjig in canvas grafikon,
- tabelo najbolj izposojenih knjig (COBISS podatki),
- nakljucno priporocilo knjige,
- TOP 10 kartice in TOP 15 graf,
- kontaktni obrazec,
- dodatne elemente dostopnosti (ARIA, focus, kontrast, statusna sporocila).

Projekt ne uporablja build sistema ali package managerja. Vse deluje neposredno v brskalniku.

## 2. Struktura datotek

- HTML.html
  Glavna stran aplikacije (navigacija, sekcije, tabela, kontakt, skripte).

- styles.css
  Vsi glavni vizualni slogi (layout, responsive, tabela, karusel, grafi, high-contrast).

- cobiss.js
  Podatki o knjigah (polje cobissData) za izpis tabele in statistik.

- knjiznica.js
  Logika za tabelo COBISS, sortiranje, random priporocilo, TOP 10 kartice, TOP 15 graf.

- novice.js
  Podatki novic in generiranje diapozitivov za karusel.

- script.js
  Iskanje po tabeli, status zadetkov za bralnike zaslona, validacija obrazca,
  gumb na vrh, high-contrast, osnovna karusel logika.

- vsebina.js
  Dinamicna priprava uvodnega besedila, tipografija, slika, razsirjeno besedilo,
  oznacevanje kljucnih besed, canvas grafikon kategorij.

## 3. Hitri zagon

### Moznost A: neposredno odpiranje
1. Odpri datoteko HTML.html v brskalniku.
2. Preveri, da so vse JS/CSS datoteke v isti mapi OOS.

### Moznost B: lokalni server (priporoceno)
V terminalu v mapi OOS:

```powershell
# Python 3
python -m http.server 5500
```

Nato odpri:
- http://localhost:5500/HTML.html

## 4. Funkcionalnosti po modulih

### 4.1 Navigacija in meni
- Spustni meni z gumbom Meni.
- Klik zunaj menija ga zapre.
- Podprt je aria-expanded na gumbu.

### 4.2 Iskanje po tabeli
- Iskanje uporablja vnos v searchInput in gumb searchButton.
- Filtrira vrstice v tabeli pod #seznam.
- Posodobi statusno sporocilo v searchStatus (aria-live="polite").

### 4.3 Priporocilo knjige
- Gumb recommendBtn izbere nakljucno knjigo iz cobissData.
- Rezultat se izpise v recommendation.
- recommendation je namenjen kot ziv status za boljso dostopnost.

### 4.4 COBISS tabela in sortiranje
- Dinamicni izpis podatkov v tbody #cobissBody.
- Sortiranje po stolpcih (naslov, avtor, stevilo izposoj).
- Posodobitev class sort-asc / sort-desc in aria-sort.

### 4.5 TOP 10 kartice in TOP 15 graf
- TOP 10 kartice prikazejo prvih 10 naslovov.
- TOP 15 graf prikaze relativno sirino traku glede na maksimum.

### 4.6 Novice in karusel
- novice.js pripravi diapozitive iz podatkov karuselNovice.
- script.js upravlja premikanje, pike, tipkovnico in autoplay.

### 4.7 Kontaktni obrazec
- JS validacija ob submit:
  - ime: vsaj 3 znaki,
  - email: ne sme biti prazno.
- Napake se prikazejo ob poljih, ne prek alert okna.
- Uporaba aria-invalid in fokus na prvo problematicno polje.

### 4.8 Dostopnost
- aria-live za status iskanja.
- aria-sort za stolpce tabele.
- focus-visible stil za tipkovnicno navigacijo.
- high-contrast nacin z lokalno hrambo (localStorage).

## 5. Uporabniski tok testiranja

Priporocen rocen test po spremembah:
1. Odpri stran in preveri, da se nalozijo vse sekcije.
2. Klikni Meni in preveri odpiranje/zapiranje.
3. Vnesi iskalni izraz in preveri filtriranje ter status zadetkov.
4. Razvrsti tabelo po Avtor in Stevilo izposoj.
5. Klikni Priporoci knjigo.
6. Preveri vrtenje karusela in delovanje puscic/pik.
7. Oddaj obrazec z napakami in nato pravilnimi podatki.
8. Aktiviraj Visok kontrast in osvezi stran (nastavitev mora ostati).
9. Pomakni se navzdol in klikni gumb Na vrh.

## 6. Znane omejitve

- Trenutna HTML datoteka lahko vsebuje podvojene bloke (npr. vec form elementov).
  Priporoceno je odstraniti podvojitve in ohraniti en sam vir resnice.

- V HEAD je smiselno imeti en sam title element.

- Del iskanja trenutno filtrira tabelo, del kode pa se vedno vsebuje tudi splosno
  highlight logiko. Priporocena je konsolidacija na en pristop.

## 7. Priporocila za izboljsave

- Dodaj semanticno strukturo main, section, article, header, footer.
- Dodaj enotne validacije za obrazec tudi za format email naslova.
- Premakni inline script iz HTML v locen JS modul.
- Dodaj lazy loading in fallbacke za zunanje vsebine.
- Dodaj osnovne avtomatske teste (npr. Playwright) za kljucne uporabniske poti.

## 8. Vrstni red skript

V HTML naj bo vrstni red skript smiseln zaradi odvisnosti podatkov:
1. novice.js
2. script.js
3. cobiss.js
4. knjiznica.js
5. vsebina.js

Opomba:
- knjiznica.js uporablja cobissData, zato mora biti cobiss.js nalozen pred njim.

## 9. Tehnicne opombe

- Projekt deluje brez transpilerja in brez bundlerja.
- Uporabljen je vanilla JavaScript.
- Stil je responsive z media query pravili.

## 10. Avtorstvo in namen

Projekt je primer ucnega/solskega dela za vaje iz spletnega razvoja, dostopnosti,
interaktivnosti in osnovne vizualizacije podatkov.

---

Ce zelis, lahko naslednji korak pripravimo tudi:
- cisto produkcijsko verzijo HTML (brez podvojitev),
- uskladitev script.js in knjiznica.js,
- kratek changelog z vsemi popravki.
