# Méhdi’s Online School

A Japanese-first, bilingual tutoring website preview, hosted on GitHub Pages.

## Included

- Clear maths/science-in-English positioning and a prominent ¥1,000 trial.
- Teacher introduction before the learning example, plus a link to first-party teaching notes.
- Interactive fraction exercise, FAQ disclosures, responsive layout and mobile navigation.
- On-page enquiry preparation with validation, editable details and copy-to-clipboard.
- Custom multi-resolution `.ico`, SVG favicon and Apple touch icon.
- Local functional checks and GitHub Pages publishing from `main` / `docs`.

## Enquiry delivery

`docs/config.js` contains the school's confirmed address, `mehdi.onlineschool@outlook.com`. Visitors prepare a draft, then explicitly open their email app, review and send it. A copy option and the recipient address are provided for visitors using webmail.

This is not server-side form delivery and does not guarantee receipt. The site never reports a message as sent. A hosted form service can be connected separately if required. Confirm delivery with the school before launch; no test email has been sent automatically.

## Content and trust

School information and prices are based on the school's supplied screenshots. The ¥64,000 illustration is eight two-hour lessons at ¥4,000/hour; monthly and cancellation terms still need the owner's confirmation. No testimonials, reviews, credentials, results or partnerships have been invented.

The teacher's existing portrait is displayed from the supplied school screenshot. Replace it with the original portrait for better image quality. `mathematical-world.webp` is generated illustrative artwork, not a photograph of a school facility.

To complete the trust content, obtain: a clean portrait; a short teaching demonstration; specific, verified qualifications; two parent comments with permission and context. These assets are proposals and have not been presented as existing evidence.

## Running and publishing

Serve `docs/` with any static HTTP server. There is no production build. All asset paths are relative, supporting a GitHub Pages project subdirectory.

For development checks: `npm ci --ignore-scripts && npm test`.

GitHub Settings → Pages → Source: **Deploy from a branch**; branch: **main**; folder: **/docs**. Run the local checks before pushing updates. For GoDaddy Web Hosting (cPanel), upload the contents of `docs/` to the domain's document root. This static site is not a WordPress theme or a Websites + Marketing import package. Keep the GitHub URL as the review link; use the school's production hosting for the business launch.

## Privacy

No analytics or advertising trackers are included. Form text remains in browser memory until a visitor explicitly copies it or chooses their email app after a real recipient is configured. Local storage remembers only the chosen language. Google Fonts is loaded externally.
