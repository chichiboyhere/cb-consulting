/* =========================
components/Contact.tsx (Corrected)
========================= */
export default function Contact() {
  return (
    <section id="contact" className="bg-slate-100 py-20 px-4 text-black">
      <div className="max-w-xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form
          action="https://formspree.io/f/mzdeweao"
          method="POST"
          className="space-y-4"
        >
          <input
            name="full_name" // Added name
            className="w-full p-3 border rounded"
            placeholder="Full Name"
            type="text"
            required
          />
          <input
            name="company" // Added name
            className="w-full p-3 border rounded"
            placeholder="Company"
          />
          <input
            name="phone" // Added name
            className="w-full p-3 border rounded"
            placeholder="Telephone"
            type="tel" // Bonus: changed to "tel" for better mobile keyboard
            required
          />
          <input
            name="email" // Added name
            className="w-full p-3 border rounded"
            placeholder="Email"
            type="email"
            required // Usually good to make this required
          />
          <textarea
            name="message" // Added name
            className="w-full p-3 border rounded"
            placeholder="What would you like to discuss?"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold w-full"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
