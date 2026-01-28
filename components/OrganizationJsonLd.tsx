// export default function OrganizationJsonLd() {
//   const data = {
//     "@context": "https://schema.org",
//     "@type": "ConsultingBusiness",
//     "@id": "https://crownbridgeconsult.com/#organization",
//     name: "CrownBridge Consulting",
//     url: "https://crownbridgeconsult.com",
//     logo: "https://crownbridgeconsult.com/logo.png",
//     description:
//       "CrownBridge Consulting is a strategy and management consulting firm helping organisations achieve measurable growth.",
//     foundingDate: "2015",
//     address: {
//       "@type": "PostalAddress",
//       addressCountry: "UK",
//     },
//     // "sameAs": [
//     //   "https://www.linkedin.com/company/your-linkedin",
//     //   "https://twitter.com/your-twitter"
//     // ]
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
//     />
//   );
// }

// components/OrganizationJsonLd.tsx
export default function OrganizationJsonLd({
  teamMembers,
}: {
  teamMembers: any[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://crownbridgeconsult.com/#organization",
    name: "CrownBridge Consulting",
    url: "https://crownbridgeconsult.com",
    logo: "https://crownbridgeconsult.com/logo.png", // Update with your actual logo path
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "UK",
    },
    employee: teamMembers.map((member) => ({
      "@type": "Person",
      "@id": `https://crownbridgeconsult.com/#${member.name.toLowerCase().replace(/\s+/g, "-")}`,
      name: member.name,
      jobTitle: member.role,
      image: `https://crownbridgeconsult.com${member.image}`,
      description: member.bio,
      url: "https://crownbridgeconsult.com/#about",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
