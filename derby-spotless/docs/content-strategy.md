# Content & Blog Strategy — Derby Spotless

## Purpose

The blog exists to do three jobs at once: capture top-of-funnel local search traffic that the service pages can't (long-tail, question-based, comparison queries), build the topical authority and linkable assets that the off-page strategy depends on, and pre-sell visitors on the brand's positioning (premium, accountable, local) before they ever reach a service page.

## Content pillars

1. **Pricing & transparency** — demystify cleaning costs in Derby. This is the single highest-intent, highest-search-volume topic for the category, and transparency is a core brand differentiator versus competitors who hide pricing.
   - *Already published*: "How Much Does Cleaning Cost in Derby? A Transparent 2026 Pricing Guide"
2. **Checklists & how-to guides** — practical, save-and-share content tied directly to specific services and life events (moving out, renovation finishing, becoming a landlord).
   - *Already published*: End of Tenancy Cleaning Checklist, Landlord Cleaning Checklist
3. **Audience-specific guides** — content written for a named segment (tenants, landlords, Airbnb hosts, elderly residents/their families, busy professionals) rather than generic "cleaning tips," matching the segmented service range.
4. **Local & seasonal** — content tied to Derby specifically and to the calendar (student turnover in June/September, spring cleaning, pre-Christmas deep cleans, Airbnb peak-season prep for events at Pride Park/Derbion).

## Existing posts (baseline)

| Slug | Pillar | Related service |
|---|---|---|
| `cleaning-prices-in-derby` | Pricing & transparency | Regular Domestic Cleaning |
| `end-of-tenancy-cleaning-checklist` | Checklists | End of Tenancy Cleaning |
| `landlord-cleaning-checklist` | Audience-specific | Landlord & Property Cleaning |

(Plus 2 further published posts in `src/data/blog.ts` rounding out the initial 5-post baseline.)

## Forward content calendar (next 6 posts)

1. **"Airbnb Turnover Cleaning in Derby: The Host's Checklist Between Every Guest"** — pillar: audience-specific + checklists. Targets Airbnb/holiday let hosts near Pride Park and Derbion; links to Airbnb & Holiday Let Cleaning service.
2. **"How Often Should You Really Get Your Office Cleaned?"** — pillar: audience-specific. Targets small business owners/office managers; links to Office & Commercial Cleaning.
3. **"After Builders Cleaning: What's Actually Included (and What Isn't)"** — pillar: pricing & transparency + checklists. Directly mirrors the included/notIncluded structure already used on service pages; links to After Builders Cleaning.
4. **"Spring Cleaning in Derby: A Room-by-Room Guide"** — pillar: local & seasonal. Timed for March publication; soft-links to Deep Cleaning.
5. **"Supporting Elderly Parents at Home: A Gentle Guide to Cleaning Help That Respects Independence"** — pillar: audience-specific. Sensitive, trust-first tone matching the Elderly & Support Cleaning service's positioning; high potential for local press/community pickup.
6. **"Carpet Stains 101: What a Professional Clean Can (and Can't) Fix"** — pillar: pricing & transparency. Manages expectations honestly (reinforces trust) while linking to Carpet & Upholstery Cleaning.

Cadence: 1 new post every 2–3 weeks — frequent enough to build topical depth and keep the GBP/Google Posts cross-promotion fed, infrequent enough to maintain the quality bar (no thin, templated posts).

## Structure & SEO mechanics for every post

- One clear primary keyword/question per post, reflected in the title and `metaDescription`.
- `relatedServiceSlug` always set where a natural service tie-in exists, surfacing the related-service callout component already built into `blog/[slug]/page.tsx`.
- `articleSchema` JSON-LD already auto-applied per post — no manual schema work needed when adding new posts.
- Internal links: every post should link to at least one service page and, where relevant, one area page (e.g., the Airbnb post linking to the Derby area page given its city-centre/Pride Park focus).
- Checklists use the `ul` block type (rendered with check-icon bullets) to stay visually consistent and scannable — matches the brand's "calm confidence" tone rather than walls of text.

## Distribution (per post)

1. Publish on `/blog`.
2. Cross-post a summary as a Google Post on GBP with a link back.
3. Share to Facebook/Instagram (existing `site.social` links) with a Derby-specific image/quote pulled from the post.
4. For checklist/guide content, run the local link-earning outreach described in `off-page-seo-strategy.md` (forums, Facebook groups, relocation/landlord blogs).
5. Add to the relevant service page's "related" content only where it doesn't disrupt that page's primary conversion path — service pages stay focused on converting, the blog is supporting content surfaced contextually, not the reverse.

## What we deliberately won't do

- No AI-sounding generic "10 tips for a clean home" listicles with no Derby specificity or service tie-in — every post must serve either a content pillar with genuine local/audience relevance or it doesn't get published.
- No keyword-stuffed area+service combinatorial pages disguised as blog posts (e.g., "Cleaning in Mickleover," "Cleaning in Littleover" as separate thin posts) — that job is already done properly by the dedicated area pages with real local content; duplicating it as blog spam would dilute both.
