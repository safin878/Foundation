"use client";
import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const partnerLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png",
    alt: "Google Logo",
    color: "#4285F4",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png",
    alt: "Microsoft Logo",
    color: "#7FBA00",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png",
    alt: "Amazon Logo",
    color: "#FF9900",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_(2019).png/320px-Facebook_Logo_(2019).png",
    alt: "Facebook Logo",
    color: "#1877F2",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/320px-Apple_logo_black.svg.png",
    alt: "Apple Logo",
    color: "#000000",
  },
];

const Onp: FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100 opacity-20"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Global Partners
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to drive innovation and create
            impact
          </p>
        </motion.div>

        {/* Enhanced logo carousel */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-20" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-20" />

          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...partnerLogos, ...partnerLogos].map(
              ({ src, alt, color }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 px-6 py-4 mx-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                  style={{
                    borderBottom: `4px solid ${color}`,
                    minWidth: "180px",
                  }}
                >
                  <div className="h-16 flex items-center justify-center">
                    <Image
                      src={src}
                      alt={alt}
                      width={120}
                      height={60}
                      className="object-contain h-full w-full transition duration-300 hover:scale-105"
                      priority={index < partnerLogos.length}
                    />
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>

        {/* Glowing call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Become a Partner
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Onp;
