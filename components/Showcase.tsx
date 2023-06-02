"use client"
import React from "react";
import { motion } from 'framer-motion'

interface IShowcase {
  title: string;
  descriptions: string[];
}

const Showcase: React.FC<IShowcase> = ({ title, descriptions }) => {
  return (
    <div className="flex antialiased md:flex-row p-12 my-12 justify-around">
      <motion.div
        initial={{
          x: -100,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1.5
          }
        }}
        className="w-1/3 flex-start px-6">
        <h3 className="font-semibold text-4xl tracking-tight leading-loose">
          {title}
        </h3>
      </motion.div>
      {descriptions.map((description, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
          key={index} className="w-1/3 px-4">
          <p className="font-normal leading-relaxed text-2xl text-gray-700">{description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Showcase;
