"use client";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
      {/* Floating bubbles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.2, 0],
              y: [100, -100],
              x: Math.random() * 100 - 50
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute rounded-full bg-sky-200/30"
            style={{
              width: `${10 + Math.random() * 30}px`,
              height: `${10 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-4 px-6 py-2 bg-sky-100 rounded-full">
            <span className="text-sm font-medium text-sky-600 uppercase tracking-wider">
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-sky-700">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-sky-700 max-w-2xl mx-auto">
            We had love to hear from you! Reach out through any channel below.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-sky-100"
        >
          {/* Contact Information */}
          <motion.div 
            variants={fadeIn}
            className="lg:w-1/3 bg-gradient-to-b from-sky-500 to-sky-600 p-8 text-white"
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 flex items-center"
              variants={fadeIn}
            >
              <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
              Contact Information
            </motion.h3>

            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
            >
              <motion.div 
                variants={fadeIn}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-white/20 rounded-full">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-sky-100">
                    123 Education Avenue
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-white/20 rounded-full">
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-sky-100">+254 700 123 456</p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-white/20 rounded-full">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-sky-100">contact@bondipatsha.org</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="mt-10"
            >
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all"
                >
                  <FaLinkedin className="text-lg" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all"
                >
                  <FaGithub className="text-lg" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all"
                >
                  <FaTwitter className="text-lg" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={fadeIn}
            className="lg:w-2/3 p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sky-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full text-gray-700 px-4 py-3 rounded-lg border border-sky-200 focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sky-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full text-gray-700  px-4 py-3 rounded-lg border border-sky-200 focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition-all"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-sky-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full text-gray-700  px-4 py-3 rounded-lg border border-sky-200 focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition-all"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sky-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full text-gray-700  px-4 py-3 rounded-lg border border-sky-200 focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition-all"
                  placeholder="Your message"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;