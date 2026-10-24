import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaUser, 
  FaPhone, 
  FaPaperPlane, 
  FaBuilding, 
  FaChevronDown 
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Your message has been sent successfully.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Banner Section */}
        <section className="relative isolate flex min-h-[150px] items-center overflow-hidden bg-[#064b49] px-5 py-5 text-white sm:px-8">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2200&q=85"
            alt="Contact Us Banner"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#062f2d]/95 via-[#063c3b]/75 to-[#073a36]/40" />
          <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="mb-1.5 text-[10px] font-semibold text-emerald-100 sm:text-[11px]">
                <span>Home</span>
                <span className="mx-2">›</span>
                <span>Contact</span>
              </p>
              <h1 className="mb-1.5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Contact Us
              </h1>
              <p className="max-w-lg text-[11px] leading-relaxed text-emerald-100 sm:text-xs">
                We'd love to hear from you! Get in touch with us for any inquiries, support, or feedback about Wollo Tourism.
              </p>
            </div>
            
            <div className="hidden shrink-0 -rotate-6 text-right lg:block">
              <span className="block font-serif text-2xl italic text-white">Let's Plan</span>
              <span className="block text-3xl font-black italic leading-none text-amber-400">Your Next Adventure</span>
            </div>
          </div>
        </section>

        {/* Contact Content Grid (3 Columns) */}
        <section className="mx-auto w-full max-w-7xl px-5 py-3 sm:px-8 sm:py-4">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
            
            {/* Column 1: Get in Touch (3 Cols) */}
            <div className="flex flex-col justify-between rounded-2xl border border-emerald-100/80 bg-emerald-50/70 p-4 shadow-sm lg:col-span-3">
              <div>
                <h2 className="mb-1 text-base font-extrabold text-[#075b47]">Get in Touch</h2>
                <p className="mb-3 text-[10px] leading-snug text-slate-600">
                  Whether you have a question, suggestion, or need assistance, our team is here to help. Reach out to us through any of the following channels.
                </p>

                <div className="space-y-3">
                  {/* Location */}
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#087353] text-[11px] text-white shadow-sm">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="text-[11px] font-bold text-slate-900">Our Location</h3>
                      <p className="mt-0.5 text-[9px] leading-tight text-slate-600">Wollo Tourism Office</p>
                      <p className="text-[9px] leading-tight text-slate-600">Dessie, South Wollo, Amhara Region</p>
                      <p className="text-[9px] leading-tight text-slate-600">Ethiopia</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#087353] text-[11px] text-white shadow-sm">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">Phone</h3>
                      <p className="mt-0.5 text-[9px] leading-tight text-slate-600">+251 912 345 678</p>
                      <p className="text-[9px] leading-tight text-slate-600">+251 911 987 654</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#087353] text-[11px] text-white shadow-sm">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">Email</h3>
                      <p className="mt-0.5 text-[9px] leading-tight text-slate-600">info@wollotourism.gov.et</p>
                      <p className="text-[9px] leading-tight text-slate-600">support@wollotourism.gov.et</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#087353] text-[11px] text-white shadow-sm">
                      <FaClock />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">Working Hours</h3>
                      <p className="mt-0.5 text-[9px] leading-tight text-slate-600">Monday – Friday: 8:30 AM – 5:30 PM</p>
                      <p className="text-[9px] leading-tight text-slate-600">Saturday – Sunday: 9:00 AM – 3:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tagline Graphic */}
              <div className="mt-3 border-t border-emerald-100/80 pt-3">
                <p className="font-serif text-xs font-bold italic text-emerald-800">
                  Your Journey <br />
                  <span className="text-[#1a5d38]">Our Priority</span>
                </p>
              </div>
            </div>

            {/* Column 2: Send Us a Message Form (5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="mb-5">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FaPaperPlane className="text-[#1a5d38] text-sm" /> Send Us a Message
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-9 pr-3 text-xs outline-none focus:border-[#1a5d38] focus:bg-white focus:ring-1 focus:ring-[#1a5d38]"
                    />
                  </div>

                  <div className="relative">
                    <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-9 pr-3 text-xs outline-none focus:border-[#1a5d38] focus:bg-white focus:ring-1 focus:ring-[#1a5d38]"
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <FaPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-9 pr-3 text-xs outline-none focus:border-[#1a5d38] focus:bg-white focus:ring-1 focus:ring-[#1a5d38]"
                  />
                </div>

                {/* Subject Dropdown */}
                <div className="relative">
                  <FaBuilding className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 pointer-events-none" />
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-9 pr-8 text-xs text-slate-700 outline-none focus:border-[#1a5d38] focus:bg-white focus:ring-1 focus:ring-[#1a5d38]"
                  >
                    <option value="" disabled>Select a subject *</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Tour Booking">Tour Package Booking</option>
                    <option value="Destination Information">Destination Information</option>
                    <option value="Feedback / Suggestion">Feedback & Suggestions</option>
                  </select>
                  <FaChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 pointer-events-none" />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Type your message here... *"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs outline-none focus:border-[#1a5d38] focus:bg-white focus:ring-1 focus:ring-[#1a5d38] resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#0d3d23] hover:bg-emerald-900 text-white font-bold py-3 px-4 text-xs flex items-center justify-center gap-2 transition shadow-md"
                >
                  <FaPaperPlane className="text-xs" /> Send Message
                </button>
              </form>
            </div>

            {/* Column 3: Find Us on Map & Office Info (4 Cols) */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Map Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                <h2 className="text-xs font-bold text-slate-900 mb-3 flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-[#1a5d38]" /> Find Us on Map
                </h2>

                {/* Embedded Map Container */}
                <div className="relative h-56 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <iframe
                    title="Wollo Tourism Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62734.20458620703!2d39.6000!3d11.1333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16479fdf1e411b59%3A0x8e820cb794f31c2c!2sDessie!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Office Details Card */}
              <div className="bg-emerald-50/60 border border-emerald-100/80 rounded-2xl p-4 text-slate-800">
                <h3 className="font-bold text-xs text-slate-900 mb-3 flex items-center gap-1.5 pb-2 border-b border-emerald-100">
                  <FaBuilding className="text-[#1a5d38]" /> Wollo Tourism Office
                </h3>
                <div className="space-y-2 text-[11px] text-slate-600">
                  <p className="flex items-start gap-2">
                    <FaMapMarkerAlt className="text-[#1a5d38] shrink-0 mt-0.5" />
                    <span>Dessie, South Wollo, Amhara Region, Ethiopia</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaPhoneAlt className="text-[#1a5d38] shrink-0" />
                    <span>+251 912 345 678</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="text-[#1a5d38] shrink-0" />
                    <span>info@wollotourism.gov.et</span>
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}