# WB Development Basics

Podrobna dokumentacija za učni projekt v mapi `wbSample00`.

## Pregled projekta

`wbSample00` je front-end učni primer, ki prikazuje osnove spletnega razvoja z uporabo čistega HTML, CSS in JavaScript (brez ogrodij in brez build postopka).

Stran predstavlja knjižnico in vključuje:

- semantično strukturo vsebine
- odziven prikaz na različnih velikostih zaslona
- spustni meni za navigacijo
- iskanje in poudarjanje zadetkov
- tabelarični prikaz COBISS podatkov
- razvrščanje tabele po stolpcih
- naključno priporočilo knjige
- TOP 10 kartice najbolj izposojanih knjig
- TOP 15 horizontalni graf izposoj
- validacijo kontaktnega obrazca
- visokokontrastni način z zapomnitvijo nastavitve
- gumb za skok na vrh strani

Projekt je namenjen učenju:

- semantičnega HTML označevanja
- CSS postavitve in komponentnega stiliranja
- dela z DOM API-jem
- obdelave dogodkov (click, submit, scroll)
- renderiranja podatkov iz JavaScript seznama
- osnov UX in dostopnosti

## Struktura projekta

```text
Wb-development-basics/
├─ README.md
├─ referencni_prirocnik.pdf
└─ wbSample00/
   ├─ index.html
   ├─ styles.css
   ├─ script.js
   ├─ cobiss.js
   └─ knjiznica.js
```

## Razlaga datotek

### `wbSample00/index.html`

Glavna stran in semantična osnova aplikacije.

Vsebuje:

- navigacijo z menijem (`Meni ▼`)
- iskalno vrstico (`#searchInput`) in gumb `Išči`
- gumb `Visok kontrast`
- vsebinske sekcije (kategorije, povezave, pravila, kontakt)
- COBISS tabelo (`#cobissTable` z `#cobissBody`)
- gumb `Priporoči knjigo` in izpis priporočila
- vsebnik za TOP 10 kartice (`#top10Container`)
- vsebnik za TOP 15 graf (`#grafikon`)
- kontaktni obrazec
- gumb `↑ Na vrh`

Na dnu datoteke je tudi inline skripta za odpiranje in zapiranje spustnega menija.

### `wbSample00/styles.css`

Datoteka definira videz celotne strani:

- tipografijo in osnovne razmake
- kartični izgled sekcij (`.section`)
- videz tabele in zebra vrstice
- stil navigacije in menija
- stile obrazca in gumbov
- stil označenih iskalnih zadetkov (`.highlight`)
- stil visokokontrastnega načina (`.high-contrast`)
- stil gumba `Na vrh` (`#topBtn`)
- postavitev TOP 10 kartic
- izgled horizontalnega TOP 15 grafa
- vizualne oznake za razvrščanje stolpcev (`.sortable`, `.sort-asc`, `.sort-desc`)

### `wbSample00/cobiss.js`

Vsebuje podatkovni vir:

- globalni seznam `cobissData`
- vsak element je objekt oblike `{ descr, author, totalCount }`

Podatki predstavljajo najbolj izposojane knjige.

### `wbSample00/script.js`

Glavna interaktivnost strani.

Implementira:

- iskanje po strani s klikom na `#searchButton`
- funkcijo `removeHighlights()` za čiščenje starih zadetkov
- funkcijo `highlightText(searchTerm)` za novo označevanje
- samodejni skok do prvega zadetka
- osnovno priporočilo knjige iz `cobissData`
- validacijo kontaktnega obrazca
- prikaz/skritje gumba `Na vrh` glede na scroll
- gladek skok na vrh (`window.scrollTo`)
- preklop visokega kontrasta
- shranjevanje in obnovo nastavitve prek `localStorage`

### `wbSample00/knjiznica.js`

Skripta za renderiranje COBISS vsebin po nalaganju DOM-a.

Vključuje:

- izris tabele iz `cobissData`
- primerjalno funkcijo za razvrščanje
- klike na glave stolpcev za menjavo smeri (ASC/DESC)
- prikaz puščic smeri razvrščanja
- generiranje TOP 10 kartic
- generiranje TOP 15 horizontalnega grafa
- dodatni (bogatejši) prikaz priporočene knjige

Opomba: priporočilo je vezano tako v `script.js` kot tudi v `knjiznica.js`, zato skripta v `knjiznica.js` prepiše prikaz z bolj podrobno vsebino.

## Kako zagnati projekt

Namestitev ni potrebna.

### Možnost 1: Hiter zagon

1. Odpri mapo repozitorija v VS Code.
2. Odpri `wbSample00/index.html` v brskalniku.

### Možnost 2: Priporočeno za razvoj

Za bolj stabilen razvojni potek uporabi statični strežnik (npr. VS Code Live Server).

## Funkcionalni sprehod

### 1. Navigacija

- Klik na `Meni ▼` odpre povezave.
- Klik izven menija ali na povezavo meni zapre.

### 2. Iskanje in poudarjanje

- Vnesi iskani niz v polje.
- Klikni `Išči`.
- Ujemanja se označijo z razredom `.highlight`.
- Stran se premakne do prvega zadetka.

### 3. Visok kontrast

- Klik na `Visok kontrast` preklopi razred `.high-contrast` na `body`.
- Nastavitev se shrani v `localStorage` in se ob osvežitvi povrne.

### 4. COBISS tabela

- Telo tabele je v HTML prazno.
- `knjiznica.js` ga napolni iz `cobissData`.
- Klik na naslov stolpca razvrsti podatke.

### 5. Priporočilo knjige

- Klik na `Priporoči knjigo` izbere naključno knjigo.
- V `knjiznica.js` se izpiše naslov, avtor in število izposoj.

### 6. TOP 10 in TOP 15

- TOP 10 se izriše kot mreža barvnih kartic.
- TOP 15 se izriše kot horizontalni trakovni graf.

### 7. Kontaktni obrazec

Ob oddaji obrazca se preveri:

- ime mora imeti vsaj 3 znake
- email ne sme biti prazen
- sporočilo mora imeti vsaj 10 znakov

Če pogoj ni izpolnjen, se oddaja prekine z `preventDefault()`.

### 8. Gumb Na vrh

- Gumb se pokaže po pomiku strani navzdol.
- Klik sproži gladek skok na vrh.

## Vrstni red nalaganja skript

V `index.html` so skripte naložene v tem vrstnem redu:

1. inline skripta za meni
2. `script.js`
3. `cobiss.js`
4. `knjiznica.js`

Zakaj je to pomembno:

- `cobiss.js` definira globalni seznam `cobissData`
- `knjiznica.js` se naloži kasneje in lahko varno uporablja te podatke

## Uporabljene tehnologije

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Browser API-ji:
  - DOM API
  - `localStorage`
  - `scrollIntoView`
  - `window.scrollTo`

## Učni cilji

Po predelavi projekta razumeš, kako:

- povezati več JavaScript datotek na eni strani
- prikazati podatke iz seznama v dinamični tabeli
- implementirati razvrščanje brez zunanjih knjižnic
- validirati uporabniški vnos pred oddajo obrazca
- uporabiti `localStorage` za trajne nastavitve
- zgraditi odzivno interaktivno stran brez frameworkov

## Razlaga po poglavjih

### Poglavje 1: HTML

HTML definira strukturo in sidrišča za JavaScript.

- `nav`, `ul`, `li`, `a`: navigacija in povezave
- `input`, `button`: iskalnik, kontrast, priporočilo
- `table`, `thead`, `tbody`: ogrodje tabele za dinamični izris
- `form`, `label`, `textarea`: kontaktni obrazec
- `id` atributi (`searchButton`, `cobissBody`, `topBtn`, ...): stabilni cilji za DOM selektorje

### Poglavje 2: JavaScript

Ključne funkcije in handlerji:

- `removeHighlights()` v `script.js`: odstrani stare označene zadetke
- `highlightText(searchTerm)` v `script.js`: označi nova ujemanja
- click handler `#searchButton`: zažene iskanje
- submit handler obrazca: validira vnos in po potrebi prekine oddajo
- click handler `#contrastBtn`: preklopi visok kontrast in shrani stanje
- scroll/click handler `#topBtn`: upravlja gumb Na vrh
- izris in razvrščanje tabele v `knjiznica.js`
- izris TOP 10 kartic in TOP 15 grafa v `knjiznica.js`

### Poglavje 3: CSS

CSS je razdeljen na funkcionalne sklope stiliranja:

- globalni layout (`body`, `h1`, `h2`, `p`)
- komponente (`.section`, `button`, `input`, `textarea`, `footer`)
- tabela (`table`, `#cobissTable`, zebra/hover)
- meni (`.dropdown-menu`, `.dropdown-content`)
- iskanje (`.search-container`, `.highlight`)
- dostopnost (`.high-contrast`)
- dodatni vizualni bloki (`#top10Container`, `#grafikon`)

## Opombe

- Besedilo strani je v slovenščini.
- Projekt je primeren za začetnike in srednje napredne vaje.
