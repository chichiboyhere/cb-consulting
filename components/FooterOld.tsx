/* =========================
components/Footer.tsx
========================= */
export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-6 text-center">
      <p>
        © {new Date().getFullYear()} CrownBridge Consulting Ltd · London, UK
      </p>
    </footer>
  );
}
