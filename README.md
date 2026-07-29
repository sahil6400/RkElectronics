# RK Electronics — Website

A Next.js (App Router) website for RK Electronics: a WhatsApp-first electronics
catalog with SEO-optimized product, blog and policy pages.

## What's included

- **Home, Products (with category filters), Product detail pages** — earpods,
  portable juicer mug, charging cables, mixer grinder, spice grinder
- **WhatsApp ordering** — every product has an "Enquire on WhatsApp" button
  that opens a chat with the product name pre-filled. There's also a floating
  WhatsApp button site-wide.
- **Blog** — 3 starter articles, easy to add more in `data/blogs.ts`
- **Legal pages** — Privacy Policy, Terms & Conditions, Shipping Policy,
  Refund & Return Policy
- **SEO** — per-page metadata, Open Graph tags, JSON-LD structured data
  (Organization, Product, BlogPosting), auto-generated `sitemap.xml` and
  `robots.txt`
- **Design** — dark navy + copper premium theme, Framer Motion animations,
  responsive down to mobile

## 1. Set your WhatsApp number and site URL

Copy the example env file and edit it:

```bash
cp .env.local.example .env.local
```

Open `.env.local` and set:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX   # your number, country code, no + or spaces
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com
```

You can also edit business details (name, email, address, social links) in
`data/site.ts`.

## 2. Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## 3. Edit your catalog

- Products live in `data/products.ts` — edit existing ones or add new objects
  to the `products` array. Each product needs a unique `slug`.
- Product images currently use placeholder graphics from placehold.co so the
  site works out of the box. Replace `image` fields with real product photos
  (upload them to `/public` and reference as `/your-image.jpg`, or use a URL).
- Blog posts live in `data/blogs.ts`.

## 4. Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. In **Environment Variables**, add:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_SITE_URL` (your final domain, e.g. `https://www.rkelectronics.in`)
4. Click **Deploy**. Vercel will detect Next.js automatically — no extra config needed.
5. Once deployed, add your custom domain under **Project → Settings → Domains**.

That's it — the sitemap, robots.txt and all SEO metadata will use the
`NEXT_PUBLIC_SITE_URL` you set automatically.

## Notes

- This site does not use a shopping cart or payment gateway on purpose —
  every "order" is a WhatsApp conversation, as requested. If you later want
  online payments, that would need to be added separately (e.g. Razorpay/Stripe
  checkout flow).
- Product images are placeholders — swap them for real photography before
  going live for the best impression and SEO image results.
- Consider adding Google Search Console + Google Analytics once live (can be
  added inside `app/layout.tsx`).
