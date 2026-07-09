# Smile by Simran — Dental Clinic Booking Website

A fully responsive, frontend-only dental clinic website built with **React (JSX)** and **plain CSS**. Patients can view clinic info, browse dentists and services, and book an appointment online — the appointment form emails the clinic directly via **EmailJS**, no backend required.

---

## 1. Project Structure

```
dental-clinic-booking/
├── public/
│   └── index.html
├── src/
│   ├── assets/                  # put real photos/logo here
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   ├── PageHero.jsx / .css
│   │   ├── Cards.jsx / .css      # ServiceCard, DentistCard, TestimonialCard
│   │   ├── FAQ.jsx / .css
│   │   ├── ConfirmationModal.jsx / .css
│   │   ├── ScrollToTop.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── FloatingButtons.css
│   │   └── Icons.jsx             # all inline SVG icons
│   ├── data/                     # <-- EDIT THESE TO UPDATE CONTENT
│   │   ├── clinicData.json       # name, contact, hours, EmailJS keys
│   │   ├── dentists.json
│   │   ├── services.json
│   │   └── testimonials.json
│   ├── pages/
│   │   ├── Home.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Services.jsx / .css
│   │   ├── Dentists.jsx / .css
│   │   ├── Appointment.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── NotFound.jsx
│   ├── App.jsx                   # routes + layout
│   ├── index.js
│   └── index.css                 # design tokens (colors, type, spacing)
├── package.json
└── README.md
```

No Node server, Express, database, or backend code is included or required — this is a static site once built.

---

## 2. Content Management (no code changes needed)

All clinic content lives in `src/data/*.json`. To update the site, just edit these files:

| File | Controls |
|---|---|
| `clinicData.json` | Clinic name, phone, WhatsApp, email, address, map embed URL, hours, social links, homepage stats, **EmailJS credentials** |
| `dentists.json` | Every dentist card on the Dentists page and appointment dropdown |
| `services.json` | Every service card on Home + Services page and the treatment dropdown |
| `testimonials.json` | Reviews shown in the Testimonials section |

**Currently using placeholder values you should replace before launch:**
- `phone`, `whatsapp`, `email` in `clinicData.json`
- The second entry in `dentists.json` (placeholder dentist — edit or delete the object)
- `emailjs.serviceId`, `templateId`, `publicKey` in `clinicData.json`
- Clinic closing time / Sunday hours (confirm exact hours)
- Real dentist photos: add image files to `src/assets/`, then set each dentist's `"photo"` field to the imported path (otherwise a circle with initials is shown automatically)
- Clinic logo: currently a tooth icon + text; swap the `<ToothIcon />` in `Navbar.jsx`/`Footer.jsx` for an `<img>` tag if you have a logo file

---

## 3. Installation

Requires [Node.js](https://nodejs.org/) 16+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm start
```

The site runs at `http://localhost:3000`.

```bash
# Build a production-ready static bundle into /build
npm run build
```

---

## 4. EmailJS Setup (appointment form → clinic inbox)

The booking form uses [EmailJS](https://www.emailjs.com/) to send appointment details straight to the clinic's email — entirely from the browser, no backend needed.

1. Create a free account at https://www.emailjs.com/
2. **Add an Email Service** (e.g. Gmail) under *Email Services* → note the **Service ID**.
3. **Create an Email Template** under *Email Templates*. Use these variable names in your template body so they match the form (all sent by `Appointment.jsx`):
   - `{{to_email}}`, `{{clinic_name}}`, `{{patient_name}}`, `{{patient_phone}}`, `{{patient_email}}`, `{{patient_age}}`, `{{patient_gender}}`, `{{appointment_date}}`, `{{appointment_time}}`, `{{treatment_type}}`, `{{preferred_dentist}}`, `{{message}}`
   - Note the **Template ID**.
4. Go to *Account* → *General* and copy your **Public Key**.
5. Paste all three values into `src/data/clinicData.json`:
   ```json
   "emailjs": {
     "serviceId": "service_xxxxxxx",
     "templateId": "template_xxxxxxx",
     "publicKey": "xxxxxxxxxxxxxxxx"
   }
   ```
6. Restart the dev server. Submitting the appointment form will now:
   - Show a **loading state** on the button ("Sending your request…")
   - Show a **success popup** (confirmation modal) on success
   - Show a **red error message** if sending fails, with a fallback to call/WhatsApp

EmailJS's free tier includes a limited number of emails/month — check current limits on their pricing page before launch.

---

## 5. Deployment

### Deploy to Netlify
1. Push this project to a GitHub/GitLab repository.
2. In Netlify: **Add new site → Import an existing project** → select the repo.
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
4. Deploy. Netlify will give you a live URL; add a custom domain under **Domain settings** if needed.

*(Or drag-and-drop the `build` folder directly onto Netlify's "Deploys" page for a quick manual deploy.)*

### Deploy to Vercel
1. Push this project to a GitHub/GitLab repository.
2. In Vercel: **Add New → Project** → import the repo.
3. Framework preset: **Create React App** (auto-detected).
   - Build command: `npm run build`
   - Output directory: `build`
4. Deploy. Vercel provides a live URL and automatic deploys on every push.

Since there's no backend, both platforms only need static hosting — no environment variables are required unless you choose to move the EmailJS keys into `.env` (optional; they are safe to expose client-side, that's how EmailJS is designed to work).

---

## 6. Features Checklist

- ✅ Home, About, Services, Dentists, Appointment, Contact pages (React Router)
- ✅ Sticky navbar with mobile hamburger menu
- ✅ Hero, clinic intro, why-choose-us, featured services, testimonials, CTA, footer
- ✅ Appointment form: name, phone, email, age, gender, date, time, treatment, notes
- ✅ EmailJS integration with loading / success / error states
- ✅ Appointment confirmation popup
- ✅ FAQ accordion
- ✅ Google Maps embed
- ✅ WhatsApp floating button + Scroll-to-top button
- ✅ Content-managed via JSON (no component edits needed for text updates)
- ✅ Fully responsive (mobile / tablet / desktop)
- ✅ SEO-friendly semantic HTML + meta description in `public/index.html`

---

## 7. Notes on the source data used

Clinic name, address, hours, and star rating were sourced from the clinic's public Google Maps listing. Sample dentist and service entries are included as realistic placeholders — replace the second dentist profile and confirm exact opening/closing hours before launch.
