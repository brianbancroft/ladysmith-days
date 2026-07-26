# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Ladysmith Days Remix application. PostHog is initialized in `app/entry.client.tsx` using Vite environment variables, with `capture_pageview: false` so that route changes are tracked manually via `useLocation` in the root `App` component. Four client-side events are captured across key conversion and engagement touchpoints: contact form submissions, vendor PDF downloads, community award nomination link clicks, and homepage "Get Involved" CTA clicks.

| Event name | Description | File |
|---|---|---|
| `contact_form_submitted` | Fired when a user submits the general contact form on any page (sponsor, vendor, homepage). Includes `page` property (the form's route). | `app/components/FormContactGeneral.tsx` |
| `vendor_form_downloaded` | Fired when a vendor clicks to download a PDF application form (food or merchandise). Includes `vendor_type` and `pdf_document` properties. | `app/components/LinkVendorDownload.tsx` |
| `community_award_nomination_clicked` | Fired when a user clicks either "Nominate someone now" button on the Community Impact Award page. | `app/routes/citizen-of-the-year.tsx` |
| `get_involved_cta_clicked` | Fired when a user clicks one of the "Get Involved" CTA cards on the homepage. Includes `cta_label` and `cta_destination` properties. | `app/components/SectionGetInvolved.tsx` |

## Next steps

We've built some insights and a dashboard to keep an eye on user behaviour, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/529401/dashboard/1908190)
- [Contact form submissions (wizard)](https://us.posthog.com/project/529401/insights/Wg4xkSwr)
- [Vendor form downloads (wizard)](https://us.posthog.com/project/529401/insights/J9xLCxhK)
- [Get Involved CTA clicks (wizard)](https://us.posthog.com/project/529401/insights/Etfe98JB)
- [Community award nomination clicks (wizard)](https://us.posthog.com/project/529401/insights/ZyPk1h7k)
- [Engagement to inquiry funnel (wizard)](https://us.posthog.com/project/529401/insights/XwEt2P0I)

## Verify before merging

- [ ] Run a full production build (`npm run build`) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `VITE_POSTHOG_KEY` and `VITE_POSTHOG_HOST` to `.env.example` and any deployment/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.
- [ ] This project uses **Resend** for email. Running `npx @posthog/wizard warehouse` will connect Resend (and any Supabase sources) to PostHog's data warehouse for richer analysis.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
