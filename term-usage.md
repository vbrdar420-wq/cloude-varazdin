# term-usage.md — gdje se koji naziv pojavljuje

Svrha: ako klijent naknadno promijeni neki naziv iz tablice za potvrdu, ovo je popis SVIH mjesta koja treba dirati, da se ništa ne preskoči. Ažurira se usporedno s prijevodom, serija po serija.

Status: pokriva **Seriju 1** (naslovnica + 5 stranica proizvoda, `/en/` verzija). HR i DE verzije te Serije 2/3 još nisu prevedene — bit će dodane kad se prevedu.

Format po nazivu: **gdje živi** (vlastita stranica) → **gdje se spominje** (svugdje drugdje na sajtu).

---

## Wall Panels (Obloge zida)
- **Vlastita stranica**: `en/wall-panels.html` — `<title>`, `<meta name="description">`, `<link rel="canonical">` (preko i18n-map), `<h1>`, 16× `data-subtitle` atribut na product-card karticama, 16× vidljivi `<p>` podnaslov ispod svake kartice, `#modal-subtitle` u quick-view modalu
- **i18n-map.json**: ključ `zidne-obloge.html` → `en: "wall-panels.html"`
- **products-data.js** (en/products-data.js): `title: 'Wall Panels'`, `slug: 'wall-panels'` — koristi se za karticu na naslovnici
- **Spominje se na svih 6 stranica Serije 1** (index.html + 5 proizvod-stranica): footer, stupac "Products", link tekst

## Room Dividers (Pregrade prostora)
- **Vlastita stranica**: `en/room-dividers.html` — isto kao gore (title, meta, canonical, h1, 8× data-subtitle, 8× vidljivi podnaslov, modal)
- **i18n-map.json**: `pregrade-prostora.html` → `en: "room-dividers.html"`
- **products-data.js**: `title: 'Room Dividers'`, `slug: 'room-dividers'`
- **Spominje se**: footer na svih 6 stranica

## Ceiling Baffles (Stropni baflesi/apsorberi)
- **Vlastita stranica**: `en/ceiling-baffles.html` — title, meta, canonical, h1, 6× data-subtitle, 6× vidljivi podnaslov, modal
- **i18n-map.json**: `stropni-baflesi.html` → `en: "ceiling-baffles.html"`
- **products-data.js**: `title: 'Ceiling Baffles'`, `slug: 'ceiling-baffles'`
- **Spominje se**: footer na svih 6 stranica
- **[POTVRDITI]**: DE naziv proizvoda (Deckensegel vs Deckenbaffeln) još čeka klijenta — kad dođe DE serija, ista lista mjesta vrijedi za `de/`.

## Acoustic Lighting (Rasvjeta)
- **Vlastita stranica**: `en/lighting.html` — title, meta, canonical, h1, 6× data-subtitle, 6× vidljivi podnaslov, modal
- **i18n-map.json**: `lampe.html` → `en: "lighting.html"`
- **products-data.js**: `title: 'Acoustic Lighting'`, `slug: 'lighting'`
- **Spominje se**: footer na svih 6 stranica

## PET Felt Furniture Elements (PET felt elementi u namještaju) — [DVOJBA, vidi napomenu]
- **Vlastita stranica**: `en/custom-made.html` — title, meta, canonical, h1, 4× data-subtitle, 4× vidljivi podnaslov, modal. Napisano NEUTRALNO — tijelo teksta (meta description, uvodni paragraf) ne ovisi o nazivu, samo H1/title/nav-labeli bi trebalo mijenjati ako klijent odabere "Custom-Made" umjesto "Furniture Elements".
- **i18n-map.json**: `custom-made.html` → `en: "custom-made.html"` (naziv datoteke se NE mijenja bez obzira na ishod dvojbe)
- **products-data.js**: `title: 'PET Felt Furniture Elements'`, `slug: 'custom-made'`
- **Spominje se**: footer na svih 6 stranica Serije 1
- **Ako klijent odabere "Custom-Made" umjesto "Furniture Elements"**: mijenja se SAMO `<title>`, H1, `data-subtitle`/vidljivi podnaslovi na karticama, `products-data.js` title, i 6× footer link tekst. Tijelo teksta (meta description, uvodni paragraf, opisi 4 proizvoda) ostaje nepromijenjeno jer je pisano neutralno.

## Products / Projects / Manufacturing / Certificates / Send Inquiry (nav stavke)
- **Pojavljuju se identično na svih 6 stranica Serije 1**: desktop nav (`<div class="hidden xl:flex...">`), mobile nav (`#mobile-menu`)
- Nisu dio URL-a (osim "Projects" koje je i naziv stranice `projects.html` — ta stranica još nije prevedena, dolazi u Seriji 2)

## Acoustic Calculator (Kalkulator) — Serija 2
- **Vlastita stranica**: `en/acoustic-calculator.html` — title, meta, canonical, h1, intro, svi form labeli i opcije, JS `I18N.en` rječnik (uključujući `errDims` poruku o grešci), rezultatske oznake (Wall panels/Divider panels/Ceiling baffles), bilješke ispod rezultata, CTA sekcija.
- **i18n-map.json**: `kalkulator.html` → `en: "acoustic-calculator.html"`
- **Strukturna odluka (ne samo prijevod)**: stranica je imala ugrađen mini HR/EN prekidač jezika UNUTAR kalkulatora (neovisan o novoj arhitekturi jezika po URL-u, ostatak iz razdoblja prije ovog i18n projekta). Na `/en/` stranici je taj prekidač uklonjen (HTML gumbi, pripadajući CSS, JS listeneri) jer bi bio suvišan i zbunjujuć uz pravi jezični switcher koji dolazi na razini cijelog sajta (HR/EN/DE), a ionako ne podržava DE. Zadano/jedino stanje kalkulatora na `/en/` je sad trajno engleski (`applyLanguage("en")` na učitavanju). Mrtvi `I18N.hr` rječnik (nedostupan bez gumba) je obrisan iz koda. **Isto treba primijeniti i na `/de/` kad dođe na red (ukloniti prekidač, zadano DE).** `/hr/` i root kopije nisu dirane.
- **Spominje se**: footer na svim Serija 1 + 2 stranicama (link "Acoustic Calculator" u koloni Products, i nav "Calculator")

---

**Napomena o skoli:** /en/ je sada u potpunosti preveden (Serija 1+2+3). Sljedeći krug je /de/, istim redoslijedom serija.

---

# Serija 3 — 27 pojedinačnih project-*.html stranica (/en/)

- **Svih 27 stranica**: title, meta description, eyebrow (regija/grad), h1, intro paragraf, alt tekstovi (uključujući 3 posebna opisna alt teksta na `project-hotel-panorama-prelog.html`, ostali su bare-name), "Svi projekti" → "All Projects", prev/next navigacija između susjednih projekata, footer "Colors"→"Colours"
- **Pravilo primijenjeno dosljedno**: toponimi i nazivi tvrtki/objekata NETAKNUTI (Zagreb, Sračinec, Trešnjevka, Središće, Bakačeva, Heidelberg, Stuttgart, Prelog, Varaždin, Skytoll, Matrix Office Park, City Island, Lola Acoustix Showroom); nazivi zemalja prevedeni (Njemačka→Germany, Hrvatska→Croatia, Bosna i Hercegovina→Bosnia and Herzegovina); generički opisni dijelovi naziva prevedeni (npr. "Poslovni uredi"→"Business Offices", "Ostali poslovni prostori"→"Other Business Spaces", "Privatna kuća"→"Private Residence", "Salon za masažu"→"Massage Salon")
- **Dosljednost naziva provjerena skriptno**: uspoređen h3 na `projects.html` sa h1 na svakoj od 27 stranica — svih 27 identično, 0 razlika
- **i18n-map.json**: 27 zasebnih ključeva, filename se NE mijenja (ostaje `project-*.html` u sve tri jezične mape)
- Puni popis 27 stranica i njihovih EN naziva:
  | Datoteka | EN naziv |
  |---|---|
  | project-zagreb.html | Zagreb |
  | project-bakaceva-zagreb.html | Bakačeva, Zagreb |
  | project-city-island-zagreb.html | City Island, Zagreb |
  | project-city-island-zagreb-2.html | City Island, Zagreb — II |
  | project-commercial-spaces-zagreb.html | Other Business Spaces, Zagreb |
  | project-matrix-office-park-zagreb.html | Matrix Office Park, Zagreb |
  | project-offices-zagreb.html | Business Offices, Zagreb |
  | project-private-residence-zagreb.html | Private Residence, Zagreb |
  | project-skytoll-zagreb.html | Skytoll, Zagreb |
  | project-sredisce-zagreb.html | Središće, Zagreb |
  | project-massage-salon-tresnjevka-zagreb.html | Massage Salon, Trešnjevka |
  | project-mursko-sredisce.html | Mursko Središće |
  | project-private-residence-sracinec.html | Private Residence, Sračinec |
  | project-hotel-panorama-prelog.html | Hotel Panorama, Prelog |
  | project-lola-acoustix-showroom.html | Lola Acoustix Showroom |
  | project-sarajevo-bih.html | Sarajevo, Bosnia and Herzegovina |
  | project-offices-germany.html | Business Offices, Germany |
  | project-darmstadt.html | Darmstadt, Germany |
  | project-dusseldorf.html | Düsseldorf, Germany |
  | project-frankfurt.html | Frankfurt, Germany |
  | project-mannheim.html | Mannheim, Germany |
  | project-stuttgart.html | Stuttgart, Germany |
  | project-stuttgart-2.html | Stuttgart 2, Germany |
  | project-stuttgart-3.html | Stuttgart 3, Germany |
  | project-weiden-1.html | Weiden 1, Germany |
  | project-weiden-2.html | Weiden 2, Germany |
  | project-home-music-studio-heidelberg.html | Private Home Music Studio, Heidelberg |

---

# Serija 2 — pokriva /en/: acoustic-calculator.html, manufacturing.html, pet-felt.html, projects.html, downloads.html, news.html, showroom-opening.html, privacy-policy.html, cookie-policy.html, imprint.html

## PET Felt (materijal, ne proizvod)
- **Vlastita stranica**: `en/pet-felt.html` — title ("PET Felt — Lola Acoustix"), meta, h1, sve podnaslove, 12× ikona svojstava materijala (alt + vidljivi label)
- **i18n-map.json**: `pet-felt.html` → `en: "pet-felt.html"` (naziv datoteke nepromijenjen)
- **Spominje se**: footer "Company" stupac na svim prevedenim stranicama ("PET Felt" link)

## Manufacturing (Naša proizvodnja)
- **Vlastita stranica**: `en/manufacturing.html` — title ("Manufacturing — Lola Acoustix", promijenjen separator iz "|" u "—" radi dosljednosti s ostatkom sajta), meta, h1, eyebrow "How We Work", 7 procesnih sekcija, stats blok, video heading, CTA
- **i18n-map.json**: `nasa-proizvodnja.html` → `en: "manufacturing.html"`
- **Spominje se**: footer "Company" stupac + nav "Manufacturing" na svim stranicama

## Acoustic Calculator
- Vidi zapis gore (prije Serija-2 bloka) — dopuna: sada je i sam **naziv naslova stranice preveden** ("Akustički kalkulator — Lola Acoustix" → "Acoustic Calculator — Lola Acoustix"), meta description prevedena, cijeli JS `I18N` objekt sada sadrži SAMO `en` (hr rječnik i cijeli mini jezični prekidač unutar widgeta su uklonjeni — vidi napomenu o strukturnoj odluci gore).

## Completed Projects (Završeni projekti) — indeks stranica
- **Vlastita stranica**: `en/projects.html` — title ("Completed Projects"), meta, h1, intro, 27× kartica (h3 naziv + alt + kategorija ispod)
- **Pravilo primijenjeno**: nazivi zemalja prevedeni (Njemačka→Germany, BiH→Bosnia and Herzegovina), toponimi/vlastita imena NErodijena (Zagreb, Sračinec, Trešnjevka, Bakačeva, Heidelberg, Stuttgart, Središće...), generički opisni nazivi kartica prevedeni (npr. "Poslovni uredi"→"Business Offices", "Privatna kuća"→"Private Residence")
- **Napomena**: 27 pojedinačnih project-*.html stranica (Serija 3) NISU prevedene — linkovi s ove stranice trenutno vode na hrvatske verzije tih stranica dok Serija 3 ne bude gotova
- **i18n-map.json**: `projekti.html` → `en: "projects.html"`

## Downloads
- **Vlastita stranica**: `en/downloads.html` — title, meta, h1, intro, 7× naziv datoteke za preuzimanje
- **Napomena**: same PDF/ZIP datoteke (hrefovi) dijele se između sva tri jezika, nisu prevedene niti preimenovane — samo vidljivi naziv linka je preveden (npr. "Katalog Lola Acoustix 2025" → "Lola Acoustix Catalogue 2025")
- **i18n-map.json**: `preuzimanja.html` → `en: "downloads.html"`

## News + TV Feature: Lola Acoustix Showroom
- **Vlastite stranice**: `en/news.html` (title, meta, OG/Twitter, JSON-LD, h1, intro, 1× vijest kartica) i `en/showroom-opening.html` (cijela stranica — prevedena unaprijed, izvan formalnog redoslijeda Serije 2/3, jer je jedini "news" članak i usko vezana uz news.html; inače bi ostala hrvatska dok se ne dođe do Serije 3)
- **i18n-map.json**: `novosti.html` → `en: "news.html"`, `otvorenje-showrooma.html` → `en: "showroom-opening.html"`
- Datumski format promijenjen na EN konvenciju: "30. srpnja 2026." → "30 July 2026"

## Pravne stranice — Imprint, Privacy Policy, Cookie Policy
- **Vlastite stranice**: `en/imprint.html`, `en/privacy-policy.html`, `en/cookie-policy.html` — prevedene doslovno/konzervativno po izričitom zahtjevu (točnost prije stila, bez preformuliranja)
- **Podaci o tvrtki NETAKNUTI**: naziv (Cloud d.o.o.), OIB, matični broj, sud, IBAN, SWIFT/BIC, adresa, ime direktora (Andrijana Mađarić), email, telefon — svi identični izvorniku
- **Jedina brojčana prilagodba**: "20.000,00 kn" → "20,000.00 kn" (samo format decimalnog zareza/točke prema EN konvenciji, iznos nepromijenjen)
- **Impressum → Imprint**: naslov stranice i H1 usklađeni s već odabranim EN nazivom (filename `imprint.html` postojao je već od strukturne faze)
- **Agencija za zaštitu osobnih podataka** prevedena kao "Croatian Personal Data Protection Agency" (njena adresa/telefon/email/web ostali nepromijenjeni, riječ je o stvarnom državnom tijelu — AZOP)
- **i18n-map.json**: `impressum.html`→`en: "imprint.html"`, `pravila-privatnosti.html`→`en: "privacy-policy.html"`, `kolacici.html`→`en: "cookie-policy.html"`
- **Spominje se**: footer bottom-bar na svim stranicama (Imprint / Privacy Policy / Cookie Policy linkovi + Cookie Settings gumb)

## Site-wide: British spelling standard (odluka donesena u ovoj seriji)
- Cijeli `/en/` sada dosljedno koristi **britanski pravopis**: colour/colours, fibre, organised, centre, -ise (ne -ize), grey — vidi glossary.md pravilo 7 za punu listu i iznimke (schema.org `Organization`, ARIA `dialog`, Tailwind `transition-colors` — kod, ne dira se)
- `og:locale` promijenjen s `en_US` na `en_GB` na sve 3 stranice koje ga imaju (index.html, news.html, showroom-opening.html)

---

# DE Serija 1 — pokriva /de/: index.html (naslovnica) + 5 stranica proizvoda (wandpaneele.html, raumteiler.html, deckenbaffeln.html, akustikleuchten.html, sonderanfertigung.html)

## Homepage (de/index.html)
- Cijela stranica prevedena: title/meta/OG/Twitter, JSON-LD `department[0].name`, nav + mobile nav, hero, marquee alt-tekst, brand-statement H1 (prepisan neliterarno po pravilu 9 iz glossaryja), premium-izjava sekcija, Naša-proizvodnja eyebrow, Product Categories (Naša ponuda→Unser Angebot), PET-felt eco sekcija (H2, intro, 3 stat kartice, CTA), Certifikati (NRC vrijednost zadržana kao stvarni certificirani podatak — vidi pravilo "tehnički podaci/norme/brojke se ne mijenjaju"; prevedene samo oznake), Boje sekcija (glossary exact match za eyebrow/heading, modal), Završeni projekti (5 kartica — toponimi/nazivi objekata NErodijena, samo "Njemačka"→"Deutschland"), Lokacije, News teaser, Kontakt (labeli forme, poruke uspjeha/greške, nazivi kontakt-osoba: "Direktor prodaje"→"Vertriebsleiter", "Project manager" zadržan kao engleska posuđenica po EN presedanu, "Uredska podrška"→"Büro-Service"), footer, cookie-banner
- **Skriveno polje forme** `value="LEAD-preko web stranice"` namjerno NEPROMIJENJENO (interni lead-tracking string, isto kao EN presedan)
- **Alt tekst "Lola Story" slike** namjerno NEPROMIJENJEN (već engleski u HR izvorniku, brand-voice element ostaje engleski na svim jezičnim verzijama — isti presedan kao hero tagline "…where design meets sound")
- **Dosljedno "Sie"** kroz cijelu stranicu (forma, CTA-ovi, poruke)
- Verificirano Playwrightom: 0 loših response-a, 0 console grešaka; screenshotovi potvrdili da nav i boje-sekcija ne pucaju (Rechner kratka oznaka radi dobro)

## Wandpaneele (de/wandpaneele.html, ← zidne-obloge.html)
- title, meta, h1, intro, 16× naziv modela zadržan (Earth Lines, Lines, Lines 33, Geometric, Lola Lines, Harmony, Mosaic, Window, Stream Lines, Dragon, Fisherman's Net, Heidi, Quadris, Mars Crater, Bamboo, Parametric Wave), 16× data-description prevedena kao izvorni njemački B2B tekst (ne doslovan prijevod HR rečenica)
- Kategorija-podnaslov: "Obloge zida" → "Wandpaneele" (16× data-subtitle + 16× vidljivi `<p>` + modal-subtitle)

## Raumteiler (de/raumteiler.html, ← pregrade-prostora.html)
- title, meta, h1, intro, 8× model (Big X, Bubbles, Dark Wood, Nex, Stone, Rain, Triangle, Voronoi), sve data-description prevedene
- Kategorija-podnaslov: "Pregrade prostora" → "Raumteiler" (17× ukupno svih pojavljivanja)
- **Ispravka nakon revizije**: Bubbles opis prvotno koristio "aufsteigender Blasen" — zamijenjeno s "aufsteigender Wasserperlen" jer je "Blase(n)" dvoznačna riječ s neugodnim kolokvijalnim asocijacijama u njemačkom. Dodano kao pravilo 8 u glossary.md; provjereno da se "Blasen" ne pojavljuje nigdje drugdje u `/de/`

## Deckenbaffeln (de/deckenbaffeln.html, ← stropni-baflesi.html)
- title, meta, h1, intro, 6× model (Circle, Goliath, I Stripes, Orbis, Sunflower, Tree Crown), sve data-description prevedene
- **Normalizacija naziva**: HR izvornik koristi "Stropni apsorberi" (title/h1/subtitle) premda je filename `stropni-baflesi.html` — isto neslaganje kao kod EN Serije 1. Normalizirano na jedan dosljedan DE naziv "Deckenbaffeln" (usklađen s filenameom), isti pristup kao EN "Ceiling Baffles"

## Akustikleuchten (de/akustikleuchten.html, ← lampe.html)
- title, meta, h1, intro, 6× model (Basket, Avocado, Fig, Pear, Pumpkin, Samba), sve data-description prevedene
- Kategorija-podnaslov: "Rasvjeta" → "Akustikleuchten" (glossary exact match, red. 17 glossary.md)

## Sonderanfertigung (de/sonderanfertigung.html, ← custom-made.html)
- title, meta, h1, intro, 4× model (Desk Divider, Shell, Tool Box, Planter), sve data-description prevedene
- **Neutralni naziv za sporni "custom-made" proizvod**: "PET felt elementi u namještaju" → "PET-Filz-Möbelelemente" (isti pristup kao EN presedan na de/index.html footeru — izbjegnut doslovan "Sonderanfertigung", jer HR naziv opisuje namještajne elemente, ne narudžbu po mjeri)

## Strukturna ispravka: de/products-data.js (5. instanca "relative path breaks in subfolder" klase bugova)
- **Problem otkriven**: `de/index.html` je učitavao `/products-data.js` (apsolutni put na root), pa su kartice kategorija na DE naslovnici prikazivale HR nazive ("Obloge zida", "Pregrade prostora"...) i linkale na HR filename-ove (`zidne-obloge.html` itd.) umjesto na stvarne DE stranice — potpuno slomljena navigacija s naslovnice na DE proizvodne stranice
- **Ispravka**: kreiran `de/products-data.js` sa DE slug/title vrijednostima usklađenim sa stvarnim DE filename-ovima (wandpaneele, raumteiler, deckenbaffeln, akustikleuchten, sonderanfertigung); `de/index.html` script-src promijenjen s `/products-data.js` (apsolutni) na `products-data.js` (relativni), isti obrazac kao `en/index.html`
- Analogno prethodne 4 instance ove klase bugova (products-data.js image fields, data-images JSON-array, homepage COLORS img paths x4 jezika)

## Kalkulator jezični prekidač
- Uklanjanje mini prekidača jezika u `de/akustikrechner.html` planirano za DE Seriju 2 (isto kao EN), NIJE dio Serije 1

---

# DE Serija 3 — pokriva /de/: svih 27 pojedinačnih projekt-*.html stranica

## Otkriveno prije prevođenja
- Zajednički boilerplate (nav/mobile-menu/footer/cookie-banner) na svih 27 stranica bio je VEĆ preveden na njemački iz ranije faze projekta (vjerojatno kad je struktura kopirana) — provjereno diacritic-sweepom i grepom za HR fraze prije početka rada, 0 pogodaka. Serija 3 je stoga obuhvatila samo stranicama-jedinstveni sadržaj: title, meta, eyebrow (lokacija), h1, intro, alt-tekstovi slika, prev/next navigacijski linkovi.

## Prevedeno (svih 27 stranica)
- title + meta description (jedinstveni po projektu)
- eyebrow (lokacija): Njemačka→Deutschland, Bosna i Hercegovina→Bosnien und Herzegowina, Hrvatska→Kroatien; toponimi/gradovi (Zagreb, Prelog, Varaždin, Sračinec) NEPROMIJENJENI
- h1 — usklađen 1:1 s odgovarajućom karticom na `projekte.html` (verificirano skriptom: 27/27 podudaranja, 0 mismatcheva)
- intro paragraf — svaki prepisan kao prirodan njemački B2B tekst (ne doslovan prijevod HR rečenice)
- alt-tekstovi slika — generički (ponavljaju h1 naziv) automatski ažurirani na novi naziv na svih 27 stranica
- **Hotel Panorama, Prelog** — 3 posebna opisna alt-teksta (lounge sa zelenim zidnim oblogama / recepcija s PET felt lamelama / valoviti stropni paneli na ulazu) prevedena pojedinačno, ne generičkim replace-om
- prev/next navigacijski linkovi na dnu svake stranice — ažurirani da pokazuju preveden naziv susjednog projekta (usklađeno s href-om), umjesto dosadašnjeg hrvatskog/miješanog teksta

## Pravilo primijenjeno (isto kao EN Serija 3)
- Toponimi, nazivi tvrtki/zgrada/kompleksa (City Island, Matrix Office Park, Skytoll) NErodijena
- Samo opisni/generički dijelovi naziva prevedeni (npr. "Poslovni uredi, Njemačka"→"Büroräume, Deutschland", "Ostali poslovni prostori, Zagreb"→"Weitere Gewerberäume, Zagreb", "Privatna kuća"→"Privathaus", "Salon za masažu"→"Massagesalon", "Privatni kućni glazbeni studio"→"Privates Heim-Musikstudio")
- Dosljednost imena verificirana skriptom (usporedba `projekte.html` h3 kartica vs. h1 svake pojedinačne stranice) — 0 mismatcheva

---

# DE Serija 2 — pokriva /de/: akustikrechner.html, fertigung.html, pet-filz.html, projekte.html, downloads.html, aktuelles.html, showroom-eroeffnung.html, impressum.html, datenschutzerklaerung.html, cookie-richtlinie.html

## Akustikrechner (de/akustikrechner.html, ← kalkulator.html)
- Cijela stranica prevedena: title, meta, header, svi form-labeli i select-opcije, rezultatska sekcija, CTA
- **JS I18N objekt**: prije prevoda sadržavao `hr` i `en` ključeve (legacy stanje kopirano iz HR izvornika) — zamijenjeno jednim `de` ključem sa svim prijevodima (title/sub/length/width/height/roomType/glassArea/floorType/wallType/furniture/wallPanels/dividerPanels/ceilingPanels/improvement/details/note1/note2/errDims/options/steps)
- **Uklonjen mini jezični prekidač** (isto kao EN): HTML `.acalc-lang` gumbi (`<div class="acalc-lang" role="group">...HR/EN...</div>`), 3 CSS pravila (`.acalc-lang`, `.acalc-lang button`, `.acalc-lang button[aria-pressed="true"]`), uklonjen `.acalc-lang button:focus-visible` iz zajedničkog focus-visible selektora, JS listener-registracija za `.acalc-lang button` klik, `var lang = "hr"` → `"de"`, `applyLanguage("hr")` → `applyLanguage("de")`
- **dividerPanels label**: "Trennpaneele" (generički naziv, ne "Raumteiler" — isti pristup kao EN "Divider panels" koji namjerno ne ponavlja naziv kategorije "Room Dividers")
- **ceilingPanels/wallPanels label**: "Deckenbaffeln"/"Wandpaneele" — usklađeno s nazivima kategorija (isto kao EN "Ceiling baffles"/"Wall panels")
- Funkcionalno testirano Playwrightom (unos dimenzija/pod/zid/staklo/namještaj) — izračun radi identično, 0 console grešaka

## Fertigung (de/fertigung.html, ← nasa-proizvodnja.html)
- Cijela stranica prevedena: title (separator "|"→"—" radi dosljednosti, isto kao EN), meta, eyebrow "Kako radimo"→"So arbeiten wir", h1, intro, hero alt, svih 7 procesnih sekcija (H2+tekst), lista mogućnosti obrade, stats blok, video heading, CTA
- **Brojke "10.000+" i "52+" nepromijenjene** — HR format (točka kao tisućica) već odgovara njemačkoj konvenciji, za razliku od EN gdje je trebalo "10,000+"

## PET-Filz (de/pet-filz.html, ← pet-felt.html)
- Cijela stranica prevedena: title (skraćen na "PET-Filz — Lola Acoustix", isti obrazac kao EN), meta, eyebrow, h1 "PET felt"→"PET-Filz", intro, proces-slika alt+caption, 5 ključnih prednosti (strong+opis), stats blok, 12× ikona svojstava materijala (alt+label), CTA
- **Stat kartica ISPRAVLJENA nakon revizije**: vrijednost "0,9" ostaje, ali label "Geräuschreduzierungskoeffizient (NRC)" → "Schallabsorptionsgrad αw". Razlog: ovo je samostalna headline-brojka (uparena s "70% Recyclingmaterial"), a 0,9 odgovara istoj αw = 0,90 vrijednosti koja se na naslovnici navodi kao zaseban certificirani podatak — DE tržište koristi αw (EN ISO 11654), NRC je američka norma (ASTM C423). Klasa apsorpcije NIJE dodana ovdje (kartica ima format jedan-broj-jedna-oznaka, Klasa A već stoji na naslovnici)

## Site-wide: NRC vs. αw ispravka (nakon revizije, obje DE pojave)
- **de/index.html** (Certifikati kartica): "Geräuschreduzierungskoeffizient: NRC = 0,85" → "Schallabsorptionsgrad NRC (ASTM C423): 0,85" — brojka 0,85 nepromijenjena (stvarna, zasebna certificirana vrijednost, različita od αw = 0,90 u retku ispod), ali uklonjen izmišljeni njemački složeni prijevod termina NRC — sada je jasno označeno kao NRC (američka norma) bez prevođenja pojma u složenicu
- **de/pet-filz.html**: vidi gore
- **EN provjeren za dosljednost**: `en/index.html` i `en/pet-felt.html` koriste "Noise Reduction Coefficient (NRC)" — ovo NIJE analogna greška jer je to doslovno raspisana engleska kratica (NRC = Noise Reduction Coefficient je izvorni engleski/ASTM naziv termina, ne prijevod-izum kao njemački "Geräuschreduzierungskoeffizient"). EN ne treba izmjenu

## Abgeschlossene Projekte — indeks stranica (de/projekte.html, ← projekti.html)
- title, meta, h1, intro, 27× kartica (h3 naziv + alt + kategorija)
- Pravilo primijenjeno: nazivi zemalja prevedeni (Njemačka→Deutschland, BiH→Bosnien und Herzegowina), toponimi/vlastita imena NErodijena (Zagreb, Sračinec, Središće, Bakačeva, Trešnjevka, Heidelberg, Stuttgart, Matrix Office Park...), generički opisni nazivi kartica prevedeni (npr. "Poslovni uredi"→"Büroräume", "Privatna kuća"→"Privathaus")
- Kartica "Poslovni uredi, Njemačka"→"Büroräume, Deutschland" usklađena s hrefom `projekt-buero-deutschland.html` i s formulacijom već korištenom u de/index.html Completed-Projects sekciji
- **Napomena**: 27 pojedinačnih projekt-*.html stranica (DE Serija 3) NISU prevedene — verificirano skriptom (27 mismatcheva h1 vs. card, svi očekivani) — linkovi trenutno vode na hrvatske verzije tih stranica dok Serija 3 ne bude gotova

## Downloads (de/downloads.html)
- title (već "Downloads", nepromijenjen), meta, h1, intro, 7× naziv datoteke za preuzimanje
- Veličine datoteka (MB) formatirane s DE decimalnim zarezom (npr. "28.8 MB"→"28,8 MB") — isti princip kao NRC vrijednost, format konvertiran, iznos nepromijenjen
- Isti PDF/ZIP hrefovi dijele se između sva tri jezika, nisu preimenovani

## News + TV Beitrag: Lola Acoustix Showroom (de/aktuelles.html, ← novosti.html; de/showroom-eroeffnung.html, ← otvorenje-showrooma.html)
- Cijele stranice prevedene: title, meta, OG/Twitter (og:locale već `de_DE`), JSON-LD (name/description video objekta), h1, intro, video-kartica (eyebrow/naslov/opis/alt), datum
- Datumski format promijenjen na DE konvenciju: "30. srpnja 2026." → "30. Juli 2026" (glossary pravilo 5)

## Pravne stranice — Impressum, Datenschutzerklärung, Cookie-Richtlinie
- **Vlastite stranice**: `de/impressum.html`, `de/datenschutzerklaerung.html`, `de/cookie-richtlinie.html` — prevedene doslovno/konzervativno po izričitom zahtjevu (točnost prije stila, bez preformuliranja), boilerplate (nav/footer/cookie-banner) prethodno nije bio primijenjen na ove 3 stranice pa je prvo pušten `de_boilerplate.py`
- **Podaci o tvrtki NETAKNUTI**: naziv (Cloud d.o.o.), OIB (92781041318), matični broj (070119811), sud (Varaždin, Tt-14/3840-2), IBAN (HR7224840081135232733), SWIFT/BIC (RZBHHR2X), adresa, ime direktorice (Andrijana Mađarić — samo titula "direktor"→"Geschäftsführerin" prevedena), e-mail, telefon — svi identični izvorniku
- **Stammkapital provjeren na zahtjev korisnika**: "20.000,00 kn" — VEĆ u njemačkom formatu (točka tisućica, zarez decimalno), isti zapis kao HR izvornik, iznos i format nepromijenjeni (za razliku od EN gdje je format trebalo konvertirati u "20,000.00 kn")
- **Naslov stranice**: "Privacy Policy" (H1+title) → "Datenschutzerklärung" (za razliku od EN koji je zadržao "Privacy Policy" jer je već engleski u HR izvorniku — DE ima vlastiti ustaljeni pravni naziv pa je preveden, ovo NIJE brand-voice element nego pravni compliance tekst)
- **Impressum** naslov ostaje "Impressum" (već njemačka riječ u HR izvorniku, kao i za EN/HR)
- **Agencija za zaštitu osobnih podataka** — službeni hrvatski naziv i adresa/telefon/email/web zadržani NETAKNUTI u kontakt-bloku (stvarno državno tijelo — AZOP), u proznoj rečenici dodan njemački opisni prijevod u zagradi "(Agentur für den Schutz personenbezogener Daten)" radi razumljivosti, isti pristup kao EN "Croatian Personal Data Protection Agency"
- **i18n-map.json**: `impressum.html`→`de: "impressum.html"`, `privacy.html`→`de: "datenschutzerklaerung.html"`, `cookies.html`→`de: "cookie-richtlinie.html"` (provjeriti točan mapping key ako se razlikuje)
- **Spominje se**: footer bottom-bar na svim stranicama (Impressum / Datenschutz / Cookie-Richtlinie linkovi + Cookie-Einstellungen gumb)
- Retroaktivno provjerena i ispravljena Serija 1 (lighting.html "centerpiece"→"centrepiece", "smaller offices and homes"→"smaller office and residential spaces"; svih 6 Serija-1 stranica: footer "Colors"→"Colours"; index.html "PET Felt Color Range"→"Colour Range", "Pigeon Gray"→"Pigeon Grey", "fiber"→"fibre")
