# Baseline Notes

- Capture date: 2026-03-30
- Source URLs: https://www.ladysmithdays.com and route variants
- Desktop viewport: width 1440 (full-page captures)
- Mobile viewport: 390x844 (full-page captures)
- Baseline set: 6 routes x (desktop default + mobile default + mobile nav-open) = 18 captures

## Routes
- /
- /volunteer
- /sponsor
- /vendor
- /citizen-of-the-year
- /privacy

## Asset Provenance
- Live asset provenance manifest: manifests/live-asset-provenance.json
- Local project assets used for parity: /public/backgrounds, /public/assets/fonts, /app/assets
- Known production issue observed during capture: /backgrounds/header-sponsor.jpg occasionally returns HTTP 500

## Figma Frame Naming
- Desktop / Home / Default
- Mobile / Sponsor / Default
- Mobile / Home / Nav Open

## Suggested Figma Page Sections
- Desktop Baselines
- Mobile Baselines
- Mobile Interactive States

## Verification Checklist
- [ ] 6 desktop frames imported and named
- [ ] 6 mobile frames imported and named
- [ ] 6 mobile nav-open frames imported and named
- [ ] Baseline Notes block added to canvas
- [ ] Home, Sponsor, Volunteer spot-checked against production
