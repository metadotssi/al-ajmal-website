# Al Ajmal Auto Maintenance — Next.js demo

## Run locally
Install Node.js 20.9 or newer, then run in this folder:

```sh
npm install
npm run dev
```

Open http://localhost:3000

## Build
```sh
npm run build
```
The `out` folder contains the deployable export. Upload its contents to static hosting, or deploy this Next.js project through a compatible provider.

## Included
Six pages: home, services, workshop, gallery, contact, booking.
Generated concept images in public/images. Responsive styles and animations, service filters, gallery lightbox, and a two-step visit planner.

## Demo limitations
Booking requests are stored in the visitor's browser only. The email button opens a draft; no email is automatically sent. No booking backend or admin system is included. Photos illustrate the design and are not actual workshop photographs. Confirm services and contact details with the business before launching. Search indexing is disabled in app/layout.jsx for the demo.

## Editing
app/site.jsx: page content and interactions
app/globals.css: styling and animations
app/layout.jsx: metadata
public/images: imagery
