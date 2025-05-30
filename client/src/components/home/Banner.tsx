"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const images = [
  "https://i.postimg.cc/YScMpF1W/ph-54368-211995.jpg",
  "https://i.postimg.cc/nrPjvxsQ/bangladesh-school-computer-aid03-3.jpg",
  "https://i.postimg.cc/3NCQJfF4/education.jpg",
];

const sliderHeight = 570;

 


const MaterialYouSlider = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setSliderWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full mx-auto relative overflow-hidden shadow-2xl"
      style={{ height: sliderHeight }}
    >
      {/* Sliding container */}
      <motion.div
        animate={{ x: -current * sliderWidth }}
        transition={{ type: "tween", duration: 0.7, ease: "easeInOut" }}
        style={{
          display: "flex",
          width: sliderWidth * images.length,
          height: sliderHeight,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              width: sliderWidth,
              height: sliderHeight,
              flexShrink: 0,
            }}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              sizes="120vw"
              style={{
                objectFit: "cover",
                userSelect: "none",
                pointerEvents: "none",
                filter: "brightness(0.75)",
              }}
              draggable={false}
              priority={index === 0}
            />
          </div>
        ))}
      </motion.div>

      {/* Content overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Welcome to{" "}
          <span className="text-blue-400">
            <Typewriter
              words={["Bondi Patshala Foundation"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl font-medium text-white/90 drop-shadow">
          Empowering the next generation with free, quality education and
          digital tools. Join us in building a brighter future.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-blue-300 text-gray-800 font-semibold rounded-full shadow-md hover:bg-blue-300 transition"
        >
          Learn More
        </motion.button>
      </motion.div>

      {/* Dot indicator bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              current === i ? "bg-blue-200 shadow-lg" : "bg-white/60"
            }`}
            style={{
              border: "2px solid white",
              boxShadow: current === i ? "0 0 6px #facc15" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MaterialYouSlider;
