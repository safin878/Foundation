"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

interface Activity {
  id: string;
  type: string;
  date: string;
  title: string;
  imageUrl: string;
  slug: string;
}

const RecentActivities = ({ activities }: { activities: Activity[] }) => {
  const controls = useAnimation();
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="container mx-auto px-4 py-16"
    >
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Recent <span className="text-blue-500">Work & Project</span>
          <motion.span
            className="block h-1 mt-3 mx-auto max-w-[450px] rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 shadow-md shadow-blue-300"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ transformOrigin: "left" }}
          />
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {activities.map((activity) => (
          <Link key={activity.id} href={`/activities/${activity.id}`} passHref>
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.01, ease: "easeInOut" }}
              className="bg-white h-full rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div className="h-full w-full relative transform transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src={activity.imageUrl}
                    alt={activity.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold drop-shadow-md">
                      {activity.title}
                    </h3>
                    <p className="text-sm opacity-90">{activity.date}</p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/30 flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium shadow-lg hover:bg-blue-50 transition-all"
                  >
                    View Details
                  </motion.button>
                </motion.div>

                <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm z-10">
                  <span
                    className={`text-xs font-semibold ${
                      activity.type === "STORIES"
                        ? "text-blue-600"
                        : "text-green-600"
                    }`}
                  >
                    {activity.type}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {activity.date}
                    </p>
                    <motion.h3
                      className="text-lg font-semibold text-gray-800 line-clamp-2 relative inline-block"
                      whileHover={{ color: "#3b82f6" }}
                    >
                      {activity.title}
                      <motion.span
                        className="absolute left-0 bottom-0 h-0.5 bg-blue-400"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.h3>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-100 transition w-full"
                  >
                    Read More →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default RecentActivities;
