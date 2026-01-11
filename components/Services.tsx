/* =========================
components/Services.tsx
========================= */

import { services } from "@/data/servicesData";
import { Target, Trophy, Landmark } from "lucide-react";

const iconMap = {
  strategyConsulting: Target,
  operationalExcellence: Trophy,
  financialAdvisory: Landmark,
};
type IconKeys = keyof typeof iconMap;

const Services = () => {
  return (
    <section id="services" className="bg-slate-50 py-20 px-4 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ title, desc, icon }) => {
            const Icon = iconMap[icon as IconKeys];
            return (
              <div
                key={icon}
                className="rounded-xl  hover:shadow-lg shadow-black  shadow-[0px_2px_4px_rgba(0,0,0,0.1)] p-6"
                data-aos="fade-up"
              >
                <div className="flex justify-between">
                  <h3 className="font-bold mb-2">{title}</h3>
                  {Icon && <Icon size={26} color="black" />}
                </div>

                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
