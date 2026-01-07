/* =========================
components/Services.tsx
========================= */

import { services } from "@/data/servicesData";
export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.icon}
              className=" rounded-xl  hover:shadow-lg shadow-black  shadow-[0px_2px_4px_rgba(0,0,0,0.1)] p-6"
            >
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
