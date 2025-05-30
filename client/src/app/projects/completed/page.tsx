// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useActivities } from "../../../components/context/ActivitiesContext";
// import Link from "next/link";
// import SkeletonCard from "@/components/SkeletonCard/SkeletonCard";

// interface Activity {
//   id: number;
//   type: string;
//   date: string;
//   title: string;
//   imageUrl: string;
// }

// export default function CompletedProjectsPage() {
//   const { activities, loading } = useActivities();

//   return (
//     <main className="min-h-screen bg-white text-gray-900 flex flex-col">
//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center py-16 px-4 text-center bg-gradient-to-r from-blue-50 to-white">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//           Completed <span className="text-blue-600 ">Projects</span>
//         </h1>
//         <p className="max-w-xl text-gray-600">
//           Explore our latest projects and recent activities that highlight our
//           progress and innovations.
//         </p>
//       </section>

//       {/* Recent Activities Cards */}
//       <motion.div
//         initial="hidden"
//         className="container mx-auto px-4 py-16 max-w-7xl"
//       >
//         {loading ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {Array.from({ length: 6 }).map((_, index) => (
//               <SkeletonCard key={index} />
//             ))}
//           </div>
//         ) : (
//           <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {activities
//               .filter((activity: Activity) => activity.type === "STORIES")
//               .map((activity: Activity) => (
//                 <Link
//                   key={activity.id}
//                   href={`/activities/${activity.id}`}
//                   passHref
//                 >
//                   <motion.div
//                     key={activity.id}
//                     whileHover={{ y: -5, scale: 1.02 }}
//                     transition={{ duration: 0.15, ease: "easeInOut" }}
//                     className="bg-white h-[480px]  rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 border border-gray-100"
//                   >
//                     <div className="relative h-64 w-full overflow-hidden">
//                       <div className="h-full w-full relative transform transition-transform duration-500 ease-in-out group-hover:scale-110 ">
//                         <Image
//                           src={activity.imageUrl}
//                           alt={activity.title}
//                           fill
//                           className="object-cover"
//                           sizes="(max-width: 768px) 100vw, 33vw"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//                         <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
//                           <h3 className="text-xl font-bold drop-shadow-md">
//                             {activity.title}
//                           </h3>
//                           <p className="text-sm opacity-90">{activity.date}</p>
//                         </div>
//                       </div>

//                       <motion.div
//                         initial={{ opacity: 0 }}
//                         whileHover={{ opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                         className="absolute inset-0 bg-black/30 flex items-center justify-center"
//                       >
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium shadow-lg hover:bg-blue-50 transition-all"
//                         >
//                           View Details
//                         </motion.button>
//                       </motion.div>

//                       <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm z-10">
//                         <span
//                           className={`text-xs font-semibold ${
//                             activity.type === "STORIES"
//                               ? "text-blue-600"
//                               : "text-green-600"
//                           }`}
//                         >
//                           {activity.type}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="p-5">
//                       <div className="flex justify-between items-end">
//                         <div>
//                           <p className="text-sm text-gray-500 mb-1">
//                             {activity.date}
//                           </p>
//                           <motion.h3
//                             className="text-lg font-semibold text-gray-800 line-clamp-2 relative inline-block"
//                             whileHover={{ color: "#2563eb" }}
//                           >
//                             {activity.title}
//                             <motion.span
//                               className="absolute left-0 bottom-0 h-0.5 bg-blue-400"
//                               initial={{ width: 0 }}
//                               whileHover={{ width: "100%" }}
//                               transition={{ duration: 0.3 }}
//                             />
//                           </motion.h3>
//                         </div>
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-100 transition w-full"
//                         >
//                           Read More →
//                         </motion.button>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </Link>
//               ))}
//           </motion.div>
//         )}
//       </motion.div>

//       {/* Collaboration Section */}
//       <section className="bg-blue-50 py-12 px-6 text-center rounded-lg mx-4 md:mx-auto w-full mt-12 shadow-md">
//         <h2 className="text-3xl font-semibold text-blue-700 mb-4">
//           Want to Collaborate?
//         </h2>
//         <p className="text-blue-800 mb-6 max-w-xl mx-auto">
//           Interested in working together or learning more about my projects?
//           Feel free to get in touch!
//         </p>
//         <a
//           href="mailto:your.email@example.com"
//           className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition"
//         >
//           Contact Us
//         </a>
//       </section>

//       {/* Back to Top Button */}
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
//         aria-label="Back to top"
//       >
//         ↑
//       </button>
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useActivities } from "../../../components/context/ActivitiesContext";
import Link from "next/link";
import SkeletonCard from "@/components/SkeletonCard/SkeletonCard";
// import "./c.css";

interface Activity {
  id: number;
  type: string;
  date: string;
  title: string;
  imageUrl: string;
}

export default function CurrentProjectsPage() {
  const { activities, loading } = useActivities();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen py-32 px-4 text-center bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        </div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-blue-400/30 to-indigo-400/30 
        ${i % 3 === 0 ? "w-3 h-3" : i % 2 === 0 ? "w-2 h-2" : "w-1 h-1"}
        animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-blue-200/30 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-indigo-200/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-200/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-6 leading-tight">
              Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-[0_0_8px_rgba(124,58,237,0.6)]">
                Projects
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed"
          >
            Explore our{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
              latest innovations
            </span>{" "}
            and groundbreaking work thats shaping the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="#contact"
                className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <span>Contact Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="animate-bounce w-8 h-14 rounded-full border-2 border-gray-400 flex justify-center p-1">
            <div className="w-2 h-2 rounded-full bg-gray-600 mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Recent Activities Cards */}
      <section id="projects" className="container mx-auto px-4 py-16 max-w-7xl">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activities
              .filter((activity: Activity) => activity.type === "STORIES")
              .map((activity: Activity) => (
                <motion.div
                  key={activity.id}
                  variants={item}
                  className="h-full"
                >
                  <Link href={`/activities/${activity.id}`} passHref>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="bg-white h-full rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                    >
                      <div className="relative h-64 w-full overflow-hidden">
                        <motion.div
                          className="h-full w-full relative"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Image
                            src={activity.imageUrl}
                            alt={activity.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority={false}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h3 className="text-xl font-bold drop-shadow-lg">
                              {activity.title}
                            </h3>
                            <p className="text-sm opacity-90">
                              {activity.date}
                            </p>
                          </div>
                        </motion.div>

                        <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm z-10">
                          <span className="text-xs font-semibold text-blue-600">
                            {activity.type}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex-grow">
                          <p className="text-sm text-gray-500 mb-2">
                            {activity.date}
                          </p>
                          <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                            {activity.title}
                          </h3>
                        </div>
                        <motion.div
                          whileHover={{ x: 4 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                          className="mt-auto"
                        >
                          <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                            Read more
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
          </motion.div>
        )}
      </section>

      {/* Collaboration Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Want to Collaborate?
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Interested in working together or learning more about our
                projects? We had love to hear from you!
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <a
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all"
        aria-label="Back to top"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </main>
  );
}
