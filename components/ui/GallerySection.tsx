"use client"
import React from 'react'
import { motion } from "framer-motion";

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3 , 
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const GallerySection = () => {
  return (
    <motion.section
      initial={{ y: 100, clipPath: "circle(0% at 50% 100%)", backgroundColor: "#ffffff", borderRadius: "2rem" }}
      whileInView={{ y: 0, clipPath: "circle(150% at 50% 100%)", backgroundColor: "#2c2d31", borderRadius: "0rem" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      className="h-screen flex justify-end items-end"
      style={{ overflow: 'hidden' }}
    >
      <div className="max-w-6xl w-full mx-auto pb-48 ">
        <h1 className="text-2xl font-bold uppercase text-white pb-16">
          What we do
        </h1>

        <ul className="flex flex-wrap gap-4">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <motion.li
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={listItemVariants}
              className="relative uppercase text-6xl text-white hover:text-gray-700 cursor-pointer group flex gap-2"
            >
              <div
                className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 h-32 bg-cover bg-center rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ backgroundImage: `url('/img-${i + 1}.jpg')` }}
              ></div>
              URBAN design{" "}
              {<span className="text-sm self-start">{`0${i + 1}`}</span>} /
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}

export default GallerySection
