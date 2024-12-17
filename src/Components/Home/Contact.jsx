import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-[#0a0f24] text-[#f5f3f0] flex items-center justify-center p-8"
    >
      {/* Main Container */}
      <div className="flex flex-col md:flex-row bg-[#1b2238] rounded-lg shadow-lg overflow-hidden w-full max-w-5xl">
        {/* Left Side - Contact Info */}
        <motion.div
          className="p-8 bg-[#0f172a] md:w-1/2 flex flex-col justify-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-[#e2bf65]">Get In Touch</h2>
          <p className="text-[#d1c4a9] mb-4 leading-relaxed">
            Have questions or need assistance? Feel free to reach out to us for any inquiries or
            opportunities. We're happy to connect with you and help you explore the services offered by <span className="font-bold italic">GrowSphere</span>.
          </p>
          <div className="mt-4">
            <p className="flex items-center mb-2">
              <span className="font-semibold text-[#e2bf65] w-24">Email:</span>
              <span className="text-[#d1c4a9]">sanketkedare200@gmail.com</span>
            </p>
            <p className="flex items-center mb-2">
              <span className="font-semibold text-[#e2bf65] w-24">Phone:</span>
              <span className="text-[#d1c4a9]">+91 8624851910</span>
            </p>
            <p className="flex items-center mb-2">
              <span className="font-semibold text-[#e2bf65] w-24">Location:</span>
              <span className="text-[#d1c4a9]">Pune, Maharashtra, India</span>
            </p>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className="p-8 bg-[#1b2238] md:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-[#e2bf65] mb-6 text-center">Send Us A Message</h3>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-semibold mb-1 text-[#d1c4a9]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full p-3 rounded-md text-[#0a0f24] focus:outline-none focus:ring-2 focus:ring-[#e2bf65]"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-semibold mb-1 text-[#d1c4a9]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full p-3 rounded-md text-[#0a0f24] focus:outline-none focus:ring-2 focus:ring-[#e2bf65]"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-semibold mb-1 text-[#d1c4a9]">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your contact number"
                  className="w-full p-3 rounded-md text-[#0a0f24] focus:outline-none focus:ring-2 focus:ring-[#e2bf65]"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-semibold mb-1 text-[#d1c4a9]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full p-3 rounded-md text-[#0a0f24] focus:outline-none focus:ring-2 focus:ring-[#e2bf65]"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  type="submit"
                  className="px-6 py-3 rounded-md bg-[#e2bf65] text-[#0a0f24] font-bold uppercase hover:bg-[#d1c4a9] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          ) : (
            <div className="text-center text-lg font-semibold text-[#e2bf65]">
              Thank you! We will get back to you soon.
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
