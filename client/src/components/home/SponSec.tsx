"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const SponSec = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false, // important: allows repeated triggers
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 60,
          damping: 15,
        },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 80,
        transition: {
          duration: 0.3,
          ease: "easeIn",
        },
      });
    }
  }, [controls, inView]);

  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Floating background pattern */}

      {/* Floating dotted pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjEwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjUwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjUwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')]"></div>
      </div>

      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 80 }}
          animate={controls}
          className="relative rounded-xl overflow-hidden shadow-2xl bg-white"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-5"></div>

          <div className="relative flex flex-col md:flex-row">
            {/* Left Image */}
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="https://i.postimg.cc/pXWYg9fv/sm.jpg"
                alt="Volunteers helping community"
                fill
                className="rounded-l-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-blue-800/10"></div>
              <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                Since 2005
              </div>
            </div>

            {/* Right Content */}
            <div className="md:w-3/5 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                SPONSOR A CHILD EDUCATION
              </h2>
              <p className="text-gray-700 mb-4">
                For 17 years, we have been transforming lives through education.
                Join us in breaking the cycle of poverty by sponsoring a child
                education today.
              </p>

              <div className="flex flex-wrap gap-6 my-6">
                {[
                  ["5,000+", "Children Educated"],
                  ["64", "Districts Covered"],
                  ["17", "Years of Impact"],
                ].map(([count, label]) => (
                  <div
                    key={label}
                    className="text-center bg-blue-50 px-4 py-3 rounded-lg"
                  >
                    <p className="text-2xl font-bold text-blue-800">{count}</p>
                    <p className="text-sm text-gray-600">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6 p-4 bg-blue-100 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-800">
                  For just{" "}
                  <span className="font-bold text-blue-800">
                    BDT 2,500/month
                  </span>
                  , you can cover:
                </p>
                <ul className="mt-2 space-y-1 text-gray-700">
                  {[
                    "School tuition fees",
                    "Books and supplies",
                    "Uniform and meals",
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="text-blue-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <button className="relative w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center">
                  <span className="relative z-10 inline-flex items-center">
                    SPONSOR A CHILD NOW
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponSec;
