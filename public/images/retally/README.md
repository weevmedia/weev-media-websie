# ReTally website screenshots

Commit the original ReTally app screenshots in this folder:

`public/images/retally/`

Keep these filenames so the website gallery can reference them consistently:

| File | Screen |
|---|---|
| IMG_2089.PNG | Splash screen |
| IMG_2090.PNG | Onboarding / product intro |
| IMG_2091.PNG | Sign-in and guest options |
| IMG_2092.PNG | Location permission |
| IMG_2093.PNG | Home / spending dashboard |
| IMG_2094.PNG | Receipt barcode / return view |
| IMG_2095.PNG | Receipt details |
| IMG_2096.PNG | Guest home / scan receipt |
| IMG_2097.PNG | Duplicate charge detection |
| IMG_2098.PNG | Monthly budget |
| IMG_2099.PNG | Smart list — initial state |
| IMG_2100.PNG | Food recall alerts |
| IMG_2101.PNG | Smart list — recommendations |
| IMG_2102.PNG | More / settings |

Please preserve the original 1320 × 2868 PNG screenshots. Do not commit them in the repository root or under `app/`; Next.js serves files from `public/` at the site root, so for example `public/images/retally/IMG_2093.PNG` is available to the page as `/images/retally/IMG_2093.PNG`.

After adding the images, commit the entire `public/images/retally/` directory on branch `feat/retally-product-page`.
