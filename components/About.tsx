/* =========================
components/About.tsx
========================= */
"use client";
import { useState } from "react";
import Image from "next/image";

const team = [
  {
    name: "Andrew Vince Sanger ",
    role: "Managing Director, Business Consultant & Overseas Coordinator",
    bio: "With 10 years experience in supporting international business operations, providing strategic advisory services, and facilitating cross-border collaborations for clients engaged in infrastructure and trade-related projects.",
    image: "/managers/andrewSanger.jpg",
    skills: "Corporate Strategy, M&A, Leadership",
  },
  {
    name: "Amelia Wright",
    role: "Director of Operations",
    bio: "Operational excellence specialist with a background in logistics. She's adept at streamlining processes and ensuring efficient resource allocation. She's a certified practitioner in change management and performance coaching. A passionate leader and expert in process optimisation and change management.",
    image: "/managers/ameliaWright.jpg",
    skills: "Process Optimisation, Change Management",
  },
  {
    name: "Abraham Mine Bollinger",
    role: "Manager, Overseas Coordination",
    bio: "Business Consultant with over 12 years of experience. Specializes in facilitating international business operations, structuring cross-border partnerships, and driving high-impact business development initiatives that deliver sustainable growth and measurable value for organizations.",
    image: "/managers/abrahamBollinger.jpg",
    skills: "Financial Modelling, Risk, Compliance",
  },
  {
    name: "Priya Shah",
    role: "Client Engagement Lead",
    bio: "Ensures lasting partnerships and successful project delivery. She's a certified practitioner in stakeholder management and delivery. A passionate leader and expert in stakeholder management and delivery. With over 10 years of experience in the consulting industry, she's a seasoned expert in stakeholder management and delivery.",
    image: "/managers/priyaShah.jpg",
    skills: "Stakeholder Management, Delivery",
  },
  // {
  //   name: "Benjamin Dim Farina",
  //   role: "",
  //   bio: "",
  //   image: "",
  //   skills: ""
  // }
];

export default function About() {
  const [active, setActive] = useState<any>(null);

  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
      <p
        className="mb-10  font-medium text-lg"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Based in London, CrownBridge Consulting supports organisations
        navigating growth, transformation, and complexity. Our team of
        experienced consultants provides strategic insights, operational
        excellence, and financial advisory services to help you unlock
        sustainable performance. We work with ambitious organisations across the
        UK and beyond to unlock sustainable performance.
      </p>
      <div className="grid md:grid-cols-4 gap-6">
        {team.map((member) => (
          <div
            key={member.name}
            onClick={() => setActive(member)}
            className="cursor-pointer rounded-xl p-4 hover:shadow-lg shadow-black  shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className="rounded-full mx-auto mb-2"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <h3 className="font-bold">{member.name}</h3>
            <p className="text-sm">{member.role}</p>
          </div>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white  w-full p-6 rounded-xl flex flex-col sm:flex-row gap-6">
            <Image
              src={active.image}
              alt={active.name}
              width={350}
              height={350}
              className="rounded-lg self-start"
            />
            <div className="text-black max-h-75 overflow-y-auto">
              <h3 className="text-xl font-bold mb-2">{active.name}</h3>
              <p className="italic mb-2">{active.role}</p>
              <p className="mb-2">{active.bio}</p>
              <p className="text-sm text-slate-600">Skills: {active.skills}</p>
              <button
                onClick={() => setActive(null)}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
