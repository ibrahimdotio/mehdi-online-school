# Méhdi’s Online School

A Japanese-first, bilingual tutoring website preview, hosted on GitHub Pages.

## Included

- Clear maths/science-in-English positioning and a prominent ¥1,000 trial.
- Teacher introduction before the learning example, plus a link to first-party teaching notes.
- Interactive fraction exercise, FAQ disclosures, responsive layout and mobile navigation.
- On-page enquiry preparation with validation, editable details and copy-to-clipboard.
- Custom multi-resolution `.ico`, SVG favicon and Apple touch icon.
- Local functional checks and GitHub Pages publishing from `main` / `docs`.

## Enquiry delivery: temporary setup

`docs/config.js` contains `hello@mehdionlineschool.example`, a reserved placeholder that does not receive email. The preview never sends form data to a server and never says a message was sent. Visitors can prepare and copy a draft.

Once the school supplies its real enquiry address, replace the placeholder. The page will then offer an **Open email app** action: visitors review and send the message using their own email application. This does not provide server-side delivery or guarantee receipt. A hosted form service can be connected separately if required.

## Content and trust

School information and prices are based on the school's supplied screenshots. The ¥64,000 illustration is eight two-hour lessons at ¥4,000/hour; monthly and cancellation terms still need the owner's confirmation. No testimonials, reviews, credentials, results or partnerships have been invented.

The teacher's existing portrait is displayed from the supplied school screenshot. Replace it with the original portrait for better image quality. `mathematical-world.webp` is generated illustrative artwork, not a photograph of a school facility.

To complete the trust content, obtain: a clean portrait; a short teaching demonstration; specific, verified qualifications; two parent comments with permission and context. These assets are proposals and have not been presented as existing evidence.

## Running and publishing

Serve `docs/` with any static HTTP server. There is no production build. All asset paths are relative, supporting a GitHub Pages project subdirectory.

For development checks: `npm ci --ignore-scripts && npm test`.

GitHub Settings → Pages → Source: **Deploy from a branch**; branch: **main**; folder: **/docs**. No secret is needed for the placeholder enquiry mode. Run the local checks before pushing updates.

## Privacy

No analytics or advertising trackers are included. Form text remains in browser memory until a visitor explicitly copies it or chooses their email app after a real recipient is configured. Local storage remembers only the chosen language. Google Fonts is loaded externally.
