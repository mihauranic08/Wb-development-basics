//1.
const uvodnoBesedilo = `Knjižnica Martina Krpana je odprla svoja vrata leta 1978 in danes velja za eno najpomembnejših kulturnih ustanov v mestu. 
Naša zbirka obsega več kot 85.000 knjižničnih enot —od klasične leposlovne literature in sodobnih romanov do strokovnih del, referenčnih priročnikov in bogatega fonda otroških knjig. 
Posebno ponosni smo na zbirko slovenskega leposlovja, ki šteje več kot 12.000 naslovov, ter na bogat arhiv lokalnih časopisov in revij, ki sega vse do leta1920. 
Vsako leto naša zbirka zraste za približno 3.000 novih enot, ki jih skrbno izbirajo naši bibliotekarji glede na povpraševanje bralcev in aktualne literarne trende. 
Vsakemu obiskovalcu želimo ponuditi prostor, kjer se znanje sreča z domišljijo. 
Poleg izposoje knjig organiziramo literarne večere, bralne krožke za odrasle in otroke, delavnice kreativnega pisanja ter predavanja uveljavljenih avtorjev. 
Naša otroškaknjižnica je opremljena z interaktivnimi kotički za branje, kjer vsako sredo potekajo pravljične ure za najmlajše. 
Za mladostnike pripravljamo mesečne debate o aktualnih knjigah in filmskih priredbah, ki so postale ena najbolj obiskanih prireditev v mestu. 
Posebej smo ponosni na program Branje brez meja, ki brezplačno dostavo knjig zagotavlja starejšim in gibalno oviranim občanom. 
Naša digitalna čitalnica je dostopna 24 ur na dan, 7 dni v tednu —iz udobja vašega doma. Prek sistema COBISS+ lahko rezervirate knjige, podaljšate izposojo in dostopate do več kot 5.000 e-knjig ter 2.000 avdioknjig. 
Prepričani smo, da je vsaka knjiga novo okno v svet, vsaka zgodba pa priložnost za rast in odkrivanje. 
Vabimo vas, da postanete del naše skupnosti bralcev —skupaj gradimo kulturo znanja, ki bo živela še za mnoge generacije.`;

const uvodniElement = document.getElementById("uvod");
uvodniElement.textContent = uvodnoBesedilo;

//2.
uvodniElement.innerHTML="";
const odstavki = uvodnoBesedilo.split(/n/n)

odstavki.forEach(function(odstavek) {
    const p = document.createElement("p")
    p.textContent = odstavek.trim()
    uvodniElement.appendChild(p)

});