// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";

// const Intro = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   const counters = [
//     { id: 1, target: 68891, text: "Trees Planted", duration: 2 },
//     { id: 2, target: 9, text: "Green Public Spaces", duration: 1.5 },
//     { id: 3, target: 36, text: "Districts Covered", duration: 1.5 },
//     { id: 4, target: 55000, text: "Nationwide Volunteers", duration: 2.5 },
//   ];

//   // ✅ Enable both scroll in and scroll out
//   useEffect(() => {
//     const currentRef = ref.current;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting); // 👈 Tracks both in & out
//       },
//       { threshold: 0.4 }
//     );

//     if (currentRef) observer.observe(currentRef);

//     return () => {
//       if (currentRef) observer.unobserve(currentRef);
//     };
//   }, []);

//   return (
//     <div className="py-16 bg-gradient-to-r from-blue-50 to-white" ref={ref}>
//       <div className="container mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
//         >
//           Empowering Communities{" "}
//           <span className="text-blue-600">Through Sustainable Growth</span>
//         </motion.h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {counters.map((counter) => (
//             <motion.div
//               key={counter.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.5, delay: counter.id * 0.1 }}
//               className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-blue-100"
//             >
//               <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">
//                 {isVisible ? (
//                   <AutoIncrementCounter
//                     target={counter.target}
//                     duration={counter.duration}
//                   />
//                 ) : (
//                   <span>0</span>
//                 )}
//               </div>
//               <p className="text-gray-600 font-medium">{counter.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const AutoIncrementCounter = ({
//   target,
//   duration,
// }: {
//   target: number;
//   duration: number;
// }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const end = target;
//     const incrementTime = (duration * 1000) / end;

//     const timer = setInterval(() => {
//       start += Math.ceil(end / (duration * 30));
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(start);
//       }
//     }, incrementTime);

//     return () => clearInterval(timer);
//   }, [target, duration]);

//   return <span>{count.toLocaleString()}</span>;
// };

// export default Intro;

"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Enhanced parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const counters = [
    {
      id: 1,
      target: 68891,
      text: "Trees Planted",
      duration: 2,
      color: "from-blue-400 to-blue-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 2,
      target: 9,
      text: "Green Public Spaces",
      duration: 1.5,
      color: "from-blue-400 to-blue-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 3,
      target: 36,
      text: "Districts Covered",
      duration: 1.5,
      color: "from-blue-400 to-blue-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 4,
      target: 55000,
      text: "Nationwide Volunteers",
      duration: 2.5,
      color: "from-blue-400 to-blue-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-amber-50"
    >
      {/* Subtle background elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-0 w-full h-full opacity-10"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxLjUiIGZpbGw9IiMxZTQwYTYiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjEwIiByPSIxLjUiIGZpbGw9IiMxZTQwYTYiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiByPSIxLjUiIGZpbGw9IiMxZTQwYTYiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMxZTQwYTYiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMxZTQwYTYiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMxZTQwYTYiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjUwIiByPSIxLjUiIGZpbGw9IiMxZTQwYTYiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjUwIiByPSIxLjUiIGZpbGw9IiMxZTQwYTYiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxLjUiIGZpbGw9IiMxZTQwYTYiLz48L3N2Zz4=')]"></div>
      </motion.div>

      {/* Floating blue accents */}
      <motion.div
        style={{ y: y2 }}
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-100 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-blue-100 blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-12 md:mb-20 lg:mb-24"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-blue-900 leading-tight"
            whileInView={{ opacity: 1, y: 0 }}
          >
            Empowering Communities
          </motion.h2>
          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          >
            Through Sustainable Growth
          </motion.h3>
        </motion.div>

        {/* Counters grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {counters.map((counter) => (
            <motion.div
              key={counter.id}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={
                isVisible
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 60, scale: 0.8 }
              }
              transition={{
                duration: 0.6,
                delay: counter.id * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${counter.color} rounded-2xl opacity-70 blur-lg group-hover:opacity-90 transition-all duration-500`}
              ></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center border border-blue-100 hover:border-blue-300 transition-all duration-500 overflow-hidden h-full flex flex-col justify-center shadow-sm hover:shadow-md">
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-br ${counter.color} text-white`}
                  >
                    {counter.icon}
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 md:mb-4 text-blue-900">
                  {isVisible ? (
                    <AutoIncrementCounter
                      target={counter.target}
                      duration={counter.duration}
                    />
                  ) : (
                    <span>0</span>
                  )}
                  {counter.id === 2 || counter.id === 3 ? "" : "+"}
                </div>
                <p className="text-lg md:text-xl font-medium text-blue-800">
                  {counter.text}
                </p>

                {/* Hover effects */}
                <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 group-hover:bg-blue-100/50 transition-all duration-700 scale-0 group-hover:scale-100"></div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center mt-16 md:mt-20 lg:mt-24"
        >
          <button className="relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center justify-center gap-2 text-lg md:text-xl">
              Join Our Movement
              <svg
                className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            {/* Button shine effect */}
            <span className="absolute top-0 left-0 w-10 h-full bg-white/30 -skew-x-12 -translate-x-16 group-hover:translate-x-64 transition-all duration-700"></span>
          </button>
          <p className="mt-4 text-blue-700 text-sm md:text-base">
            Be part of something bigger. Together we can make a difference.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const AutoIncrementCounter = ({
  target,
  duration,
}: {
  target: number;
  duration: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target === 0) return;

    let start = 0;
    const increment = target / (duration * 60); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60); // 60fps

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
};

export default Intro;
