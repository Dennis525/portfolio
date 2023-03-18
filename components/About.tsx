import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10
    justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
      md:rounded-lg md:w-64 md:h-95 xl:w=[500px] xl:h=[600px]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="/dennis.jpg"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a little background</h4>
        <p>
          I am a highly motivated ♨️ undergraduate Applied Computer Science
          Student who studies at Chuka University. Currently doing freelancing.
          I am equipped with skills as a computer science student that are
          useful in solving real-world problems by applying the knowledge of
          computer science
        </p>
      </div>
    </motion.div>
  );
}
