import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 text-white">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        className="rounded-3xl h-[70vh]  flex flex-col w-[98%] mx-auto p-4 items-baseline justify-end pb-28 gap-4 pl-14"
        style={{
          backgroundImage: `url(/example.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
          className="max-w-prose text leading-relaxed text-white/80    font-bold pb-12 "
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          quis architecto, accusantium tempore impedit optio doloribus. Et
          perspiciatis quos nisi possimus obcaecati exercitationem blanditiis a
          earum, optio distinctio aut facilis!
        </motion.p>
        <motion.h1
          initial={{ x: -10, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.9 }}
          className="text-6xl font-bold pb-4"
        >
          The best way to predict
          <br /> the future is to invent it
        </motion.h1>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
        >
          <Link
            href={"/"}
            className="bg-white p-4 rounded-4xl text-black hover:scale-105 hover:font-bold transition-all duration-75"
          >
            Find More
          </Link>
        </motion.div>
      </motion.div>

      <div className="w-11/12 mx-auto pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((_, i) => {
            return (
              <motion.div
                key={i}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 1 + i * 0.5,
                }}
                className="bg-slate-300 rounded-2xl p-4 flex-1"
              >
                <h1 className="text-6xl pb-4">10 K</h1>
                <p className="opacity-80">Lorem ipsum dolor sit amet !</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
