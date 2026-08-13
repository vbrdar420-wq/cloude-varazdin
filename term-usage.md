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

**Napomena o skoli:** ovaj popis će narasti kad se prevede Serija 3 (27 projekt-stranica) — svaka nova serija dodaje nove retke, postojeći ostaju.

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
- Retroaktivno provjerena i ispravljena Serija 1 (lighting.html "centerpiece"→"centrepiece", "smaller offices and homes"→"smaller office and residential spaces"; svih 6 Serija-1 stranica: footer "Colors"→"Colours"; index.html "PET Felt Color Range"→"Colour Range", "Pigeon Gray"→"Pigeon Grey", "fiber"→"fibre")
