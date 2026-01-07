/* =========================
components/Hero.tsx
========================= */
export default function Hero() {
  return (
    <section className="bg-blue-950 text-white pt-32 pb-8 text-center h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Strategic Insight. Measurable Growth.
      </h1>
      <p className="max-w-2xl mx-auto mb-8 text-lg">
        CrownBridge Consulting partners with ambitious organisations across the
        UK to unlock sustainable performance.
      </p>
      <button className="bg-red-600 hover:bg-red-700 text-white px-8 pt-3 pb-2 rounded-4xl font-semibold">
        <a href="#contact">Book a Consultation</a>
      </button>
    </section>
  );
}
