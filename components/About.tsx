/* =========================
components/About.tsx
========================= */
"use client";
import { useState } from "react";
import Image from "next/image";

const team = [
  {
    name: "Nicholas Harper",
    role: "Managing Director / CEO",
    bio: "12+ years advising FTSE 250 firms on strategy and transformation. He is a Certified Management Accountant. A passionate leader and expert in corporate strategy, M&A, and leadership.",
    image: "/managers/nicholas-harper.jpg",
    skills: "Corporate Strategy, M&A, Leadership",
  },
  {
    name: "Amelia Wright",
    role: "Director of Operations",
    bio: "Operational excellence specialist with a background in logistics. She's adept at streamlining processes and ensuring efficient resource allocation. She's a certified practitioner in change management and performance coaching. A passionate leader and expert in process optimisation and change management.",
    image: "/managers/amelia-wright.jpg",
    skills: "Process Optimisation, Change Management",
  },
  {
    name: "Daniel Brooks",
    role: "Head of Finance Advisory",
    bio: "Former Big Four consultant with deep financial modelling expertise. He's a certified practitioner in financial modelling, risk, and compliance. A passionate leader and expert in financial modelling, risk, and compliance. With over 10 years of experience in the financial services industry, he's a seasoned expert in financial modelling, risk, and compliance.",
    image: "/managers/daniel-brooks.jpg",
    skills: "Financial Modelling, Risk, Compliance",
  },
  {
    name: "Priya Shah",
    role: "Client Engagement Lead",
    bio: "Ensures lasting partnerships and successful project delivery. She's a certified practitioner in stakeholder management and delivery. A passionate leader and expert in stakeholder management and delivery. With over 10 years of experience in the consulting industry, she's a seasoned expert in stakeholder management and delivery.",
    image: "/managers/priya-shah.jpg",
    skills: "Stakeholder Management, Delivery",
  },
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
              data-aos-delay="400"
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
