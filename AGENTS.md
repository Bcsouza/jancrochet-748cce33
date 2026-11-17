# Architecture
- Keep landing-page section order in `src/pages/Index.tsx` so campaign changes do not duplicate offers.
- Scope seasonal styling through a page theme and semantic CSS tokens so the underlying brand theme remains reusable.
- Keep looping campaign motion pausable and provide a static reduced-motion alternative for accessible browsing.
- Define the complete-course comparison price and savings in `src/lib/course-offer.ts` and cover concrete price rules with its adjacent Bun tests to prevent inconsistent offer calculations.