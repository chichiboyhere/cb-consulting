/* =========================
components/Contact.tsx
========================= */
export default function Contact() {
  return (
    <section id="contact" className="bg-slate-100 py-20 px-4">
      <div className="max-w-xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form className="space-y-4">
          <input
            className="w-full p-3 border rounded"
            placeholder="Full Name"
          />
          <input className="w-full p-3 border rounded" placeholder="Company" />
          <input
            className="w-full p-3 border rounded"
            placeholder="Telephone"
          />
          <input className="w-full p-3 border rounded" placeholder="Email" />
          <textarea
            className="w-full p-3 border rounded"
            placeholder="What would you like to discuss?"
            rows={4}
          />
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold w-full">
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
