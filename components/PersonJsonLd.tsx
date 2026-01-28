type PersonJsonLdProps = {
  name: string;
  jobTitle: string;
  profileUrl: string;
  imageUrl?: string;
  sameAs?: string[];
};

export default function PersonJsonLd({
  name,
  jobTitle,
  profileUrl,
  imageUrl,
  sameAs = [],
}: PersonJsonLdProps) {
  // Inside PersonJsonLd.tsx
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    // Use a unique fragment for the ID
    "@id": `https://crownbridgeconsult.com/#${name.toLowerCase().replace(/\s+/g, "-")}`,
    name: name,
    jobTitle: jobTitle,
    image: imageUrl,
    url: profileUrl, // This points to the #about section
    worksFor: {
      "@type": "Organization",
      "@id": "https://crownbridgeconsult.com/#organization",
      name: "CrownBridge Consulting",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
