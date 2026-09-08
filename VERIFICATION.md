# Initial publication verification

Date: 2026-09-08
Repository: `Amitfree-git/FamilyReadingRoom`
Publishing source prepared: `main` / `docs`

## Source integrity

The four modular website files were compared with the original generated source using Git blob SHA-1 hashes. All four matched after restoring two transcription errors introduced during upload. No lessons were regenerated or shortened.

| File | Bytes | Git blob SHA-1 |
| --- | ---: | --- |
| docs/index.html | 3179 | 8798b73ccc7598abaa9d29c1d089ec290cbcb57e |
| docs/styles.css | 33891 | c26a0e84dbaa2a955dbd302c356f30e09c7268fb |
| docs/app.js | 47851 | 1758c4f5256726260a0eca380234d2b98e43a3e8 |
| docs/content.js | 69962 | e60f4a7b69044eff29f2fce8d6ecb8a3f4d8b1c9 |

`node --check` passed for `app.js` and `content.js`.

The source-integrity restoration workflow completed successfully. It was a one-time operation and was removed after completion, so it cannot overwrite future curriculum edits. Its run remains in repository history: https://github.com/Amitfree-git/FamilyReadingRoom/actions/runs/34186605981

## Browser regression checks

The original source package's Playwright/Chromium suite was rerun against the original bundled application, whose constituent files match the published modular sources above. All 16 groups passed:

1. First lesson, 30-lesson loading and initial empty progress.
2. Family/child explanation switching, pronunciation, word expansion and favorites.
3. Note serialization, incorrect/correct quiz retry, progress controls, completion deduplication and text escaping.
4. Full state serialization and restoration of notes, answers, favorites and learning dates.
5. Print styling, latest notes, expanded definitions and sources, and state restoration after print.
6. Library, keyword search, empty results, book filtering and favorite removal.
7. Member creation, switching and separate records.
8. Calendar navigation, preview tracking on the actual study date and same-day deduplication.
9. Font size, night mode and start-date adjustment without deleting existing records.
10. Date validation, leap years, 30-day rotation and invalid backup rejection.
11. Export payloads, import confirmation/restoration, invalid-file rejection and lesson text export.
12. Complete rendering of all 30 lessons, stories, references and quizzes.
13. No horizontal overflow at 320, 375, 390, 768, 1024 and 1440 pixel viewport widths on the tested pages.
14. Daily lesson rollover across midnight in the Asia/Tokyo timezone.
15. Visible warning and usable temporary records when storage is unavailable.
16. No uncaught JavaScript errors or third-party network requests during the isolated application checks.

## Limits of this verification

The build environment blocks URL navigation, including localhost. Browser tests therefore used the suite's isolated in-memory Storage fixture rather than real `file://` or HTTPS persistence. This checks application serialization and interaction logic, not every browser's native storage policy. The modular hosted page itself has not yet been tested end-to-end over public HTTPS.

Actual device speech voices/pronunciation, operating-system print dialogs and download permissions were not verified. Responsive tests used simulated viewport widths, not physical iPhones or iPads.

At the repository status check, `has_pages` was `false`. Code is committed, but initial GitHub Pages activation remains a repository administrator action. These tests do not certify that the public website is live. Follow the Pages setup in README and verify the deployment before sharing the site address as live.
