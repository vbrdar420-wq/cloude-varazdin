# Placeholderi u pravnim dokumentima — status

Ova datoteka je interni radni dokument, nije dio javnog sajta.

**Status: svi placeholderi riješeni (22.8.2026.).** Ništa se više ne čeka. Ova datoteka se može obrisati kad ju pregledaš — ostavljena je kao trag odluka koje su donesene, za slučaj da se kasnije netko pita zašto tekst kaže ono što kaže.

---

## 1. `[[KONTAKT_GDPR]]` — RIJEŠENO

Popunjeno s `office@cloudpro.hr` u sve 4 politike privatnosti (i vidljivi tekst i `mailto:` href).

Dodatno: `madaric.andrijana@gmail.com` je zamijenjen s `office@cloudpro.hr` i u sve 4 verzije Impressuma, radi dosljednosti (to nije bio izvorni placeholder, ali si tražio da provjerim i uskladim ako se pojavljuje i tamo — javljeno niže koje su datoteke promijenjene).

**Datoteke koje su promijenjene:**
- `privacy.html`, `hr/privatnost.html`, `de/datenschutzerklaerung.html`, `en/privacy-policy.html` (KONTAKT_GDPR)
- `impressum.html`, `hr/impressum.html`, `de/impressum.html`, `en/imprint.html` (email u Impressumu, radi dosljednosti)

---

## 2. `[[EMAIL_PROVIDER]]` — RIJEŠENO (generički tekst)

Popunjeno generičkom, ali točnom formulacijom na sva 3 jezika:
- HR/root: "naš pružatelj usluge email hostinga sa sjedištem u Republici Hrvatskoj"
- EN: "our email hosting provider, established in Croatia"
- DE: "unser E-Mail-Hosting-Anbieter mit Sitz in Kroatien"

**NAPOMENA — nije potpuno gotovo:** ovo je generički opis, ne konkretan naziv tvrtke. Kad saznaš točan naziv pružatelja usluge email hostinga (npr. konkretna hrvatska hosting tvrtka), zamijeni gornju frazu punim nazivom tvrtke u sljedećim odjeljcima "Kome dijelimo vaše podatke" / "Who We Share Your Data With" / "An wen wir Ihre Daten weitergeben":
- `privacy.html` (odjeljak 4)
- `hr/privatnost.html` (odjeljak 4)
- `de/datenschutzerklaerung.html` (Punkt 4)
- `en/privacy-policy.html` (Section 4)

Svaka datoteka ima 2 mjesta gdje se fraza pojavljuje (jednom unutar rečenice o AWS/SES lancu isporuke, jednom kao zaseban primatelj) — oba treba zamijeniti istim nazivom kad ga imaš.

---

## 3. `[[ROK_CUVANJA_EMAIL]]` — RIJEŠENO

Popunjeno formulacijom "bez fiksnog roka, uz kriterij" u odjeljku "Koliko dugo čuvamo vaše podatke":
- HR/root: "Poruke čuvamo dok traje komunikacija u vezi s vašim upitom i eventualni poslovni odnos koji iz njega proizađe, a nakon toga do isteka primjenjivih zakonskih rokova čuvanja. Možete u svakom trenutku zatražiti brisanje svoje poruke."
- EN: "we keep it for as long as the conversation about your enquiry, and any business relationship arising from it, continues, and after that until applicable statutory retention periods expire. You may request deletion of your message at any time."
- DE: "Wir bewahren sie auf, solange die Kommunikation zu Ihrer Anfrage sowie eine sich daraus ergebende Geschäftsbeziehung andauert, danach bis zum Ablauf der geltenden gesetzlichen Aufbewahrungsfristen. Sie können die Löschung Ihrer Nachricht jederzeit verlangen."

Nema daljnje akcije potrebne, osim ako se interna politika čuvanja promijeni u budućnosti.

---

## 4. `[[EORI_BROJ]]` — RIJEŠENO (uklonjeno)

EORI polje je u potpunosti uklonjeno iz svih 4 verzija Impressuma (prije je postojalo samo u `de/impressum.html`, kao placeholder — u ostale 3 verzije uopće nije bilo zasebno uneseno, već je pogrešno bilo spojeno s PDV brojem pod jednu oznaku "EORI (VAT)"). Broj `HR92781041318` je zadržan, ali je label ispravno preimenovan u svim verzijama tako da jasno označava samo PDV broj:
- HR/root: "PDV identifikacijski broj"
- EN: "VAT identification number"
- DE: "Umsatzsteuer-Identifikationsnummer (USt-IdNr.)"

Ako tvrtka ikad zatraži EORI broj (npr. zbog carinskih deklaracija izvan EU-a), to je zaseban budući zadatak — trebalo bi dodati novo polje u Impressum, ne oživljavati ovo uklonjeno.

---

## Provjera jesu li svi placeholderi popunjeni

```bash
grep -rn "\[\[[A-Z_]*\]\]" --include="*.html" .
```

Prazan izlaz = nema više placeholdera u HTML datotekama sajta (potvrđeno 22.8.2026.).
