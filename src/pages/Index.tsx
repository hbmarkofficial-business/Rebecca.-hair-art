import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Friseur Augsburg | Rebecca Hair & Art</title>
        <meta
          name="description"
          content="Besuche unseren Premium Salon Rebecca Hair & Art in Augsburg für erstklassige Haarschnitte, Pflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Friseur, Haarschnitt, Styling, Coloration, Augsburg"
        />
        <link rel="canonical" href="https://rebeccahairart.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Rebecca Hair & Art | Premium Friseur Augsburg" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Styling für Ihren Look bei Rebecca Hair & Art in Augsburg."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rebeccahairart.de" />
        <meta property="og:image" content="https://rebeccahairart.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rebecca Hair & Art | Premium Friseur Augsburg" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und professionelles Styling."
        />
        <meta name="twitter:image" content="https://rebeccahairart.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalons",
            "name": "Rebecca Hair & Art",
            "image": "https://rebeccahairart.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Alte G. 1",
              "addressLocality": "Augsburg",
              "postalCode": "86152",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.3717",
              "longitude": "10.8983"
            },
            "url": "https://rebeccahairart.de",
            "telephone": "+49 151 56065111",
            "openingHours": "Mo 09:00-13:00, Di-Fr 09:00-18:00",
            "priceRange": "€€",
            "sameAs": [
              "https://www.facebook.com/rebeccahairart",
              "https://www.instagram.com/rebeccahairart"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

