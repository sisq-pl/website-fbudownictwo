# Fbudownictwo by Fierek — strona www

Statyczna strona typu one-page (czysty HTML/CSS/JS, bez frameworka i bez build stepu)
dla firmy budowlanej Fbudownictwo by Fierek.

## Uruchomienie lokalne

Wystarczy otworzyć `index.html` w przeglądarce, albo odpalić dowolny prosty serwer, np.:

```bash
python3 -m http.server 8000
```

i wejść na `http://localhost:8000`.

## Struktura

- `index.html` — cała treść strony, meta tagi SEO, dane strukturalne (JSON-LD)
- `assets/css/styles.css` — style (zmienne kolorów marki, typografia, layout, RWD)
- `assets/js/main.js` — nawigacja mobilna, sticky header, animacje przy scrollu
- `assets/img/` — grafiki (logo, zdjęcie hero, realizacje, obraz OG)
- `robots.txt`, `sitemap.xml` — konfiguracja pod wyszukiwarki

## Publikacja (GitHub Pages)

1. Wypchnij zmiany na branch `main`.
2. W ustawieniach repo na GitHubie: **Settings → Pages → Build and deployment**.
3. Source: **Deploy from a branch**, branch: `main`, folder: `/ (root)`.
4. Strona pojawi się pod adresem `https://sisq-pl.github.io/website-fbudownictwo/`.

Dane kontaktowe i grafiki pochodzą z fanpage'a firmy:
https://www.facebook.com/fbudownictwo
