import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contact from "../Constants/contact";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus("");

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setLoading(false);
        setStatus("✅ Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        setLoading(false);
        setStatus("❌ Something went wrong. Please try again.");
        console.error(error);
        
      }
    );
};

    return (
  <section id="contact" className="bg-slate-950 text-white py-24">
    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          {contact.title}
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          {contact.description}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">

        {/* LEFT COLUMN */}

        <div className="space-y-8">

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500 text-xl" />

            <span>{contact.email}</span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-blue-500 text-xl" />

            <span>{contact.phone}</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />

            <span>{contact.location}</span>
          </div>

        </div>

        {/* RIGHT COLUMN */}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-slate-900 p-8 rounded-2xl space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-slate-800 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-slate-800 outline-none"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-lg bg-slate-800 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-lg font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center">
              {status}
            </p>
          )}

        </form>

      </div>

    </div>
  </section>
);
}
export default Contact;