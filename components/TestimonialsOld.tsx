/* =========================
components/Testimonials.tsx
========================= */
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <blockquote className="border-l-4 border-red-600 pl-4">
          “CrownBridge delivered clarity and results within weeks.” — UK
          Manufacturing Client
        </blockquote>
        <blockquote className="border-l-4 border-red-600 pl-4">
          “A trusted partner during a critical growth phase.” — London FinTech
          Founder
        </blockquote>
      </div>
    </section>
  );
}
