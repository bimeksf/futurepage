import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" , delay:1},
  },
};

const AboutSection = () => {
  return (
    <motion.section
      className="min-h-screen pt-24 w-[98%] flex mx-auto gap-16 flex-col sm:flex-row"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* left */}
      <div
        className="flex flex-1 flex-col pb-16 pl-5 pr-5 gap-4"
        style={{ minHeight: 400 }}
      >
        <motion.div
          initial={{ scale: 1, height: 500 }}
          whileInView={{ scale: 1, height: 144 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
          className="relative w-full overflow-hidden rounded-4xl pb-4"
        >
          <Image
            src={"/img-3.jpg"}
            alt={"t"}
            fill
            className="rounded-4xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative flex-1 w-full overflow-hidden rounded-4xl"
        >
          <Image
            src={"/img-4.jpg"}
            alt={"t"}
            fill
            className="rounded-4xl object-cover"
          />
        </motion.div>
      </div>

      {/* right */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row gap-4 pb-8 p-4 sm:p-0 sm:pb-8">
          <div className="relative w-full sm:basis-1/3 overflow-hidden h-36 sm:h-96">
            <Image
              src="/img-1.jpg"
              alt="3D grafika"
              fill
              className="object-cover rounded-4xl"
            />
          </div>

          <div className="relative w-full sm:basis-2/3 h-36 sm:h-96 overflow-hidden">
            <Image
              src="/img-2.jpg"
              alt="Notebook"
              fill
              className="object-cover rounded-4xl"
            />
          </div>
        </div>

        <div className="p-4 sm:p-0">
          <h2 className="text-xl font-bold pb-4">About</h2>
          <div className="flex flex-col sm:flex-row gap-8 pb-16">
            <p className="max-w-prose leading-relaxed text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              nemo, ex voluptates soluta modi deserunt quis deleniti ullam saepe
              dolor autem provident hic officiis quod architecto voluptatibus
              esse id porro?
            </p>
            <p className="max-w-prose leading-relaxed text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              nemo, ex voluptates soluta modi deserunt quis deleniti ullam saepe
              dolor autem provident hic officiis quod architecto voluptatibus
              esse id porro?
            </p>
          </div>
        </div>

        <motion.h1
          variants={textVariants}
          className="text-xl sm:text-3xl font-bold leading-tight tracking-wide p-4 sm:p-0"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          adipisci esse, rerum dolor dolores laborum excepturi sunt ducimus
          sequi hic nisi cum harum exercitationem possimus error consequuntur
          distinctio molestiae blanditiis.
        </motion.h1>
      </div>
    </motion.section>
  );
};

export default AboutSection;
