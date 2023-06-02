import React from "react";
import { motion } from "framer-motion";
interface IShowcase {
  emoji: string;
  title: string;
  description: string;
}

const Card: React.FC<IShowcase> = ({ emoji, title, description }) => {
  return (
    <motion.div
      whileHover={{ rotate: -15 }}
      initial={{ translateX: 100, rotate: -45 }}
      transition={{ duration: 1.5 }}
      whileInView={{ translateX: 100, rotate: 0, animationDuration: "2s" }}
      className="relative shadow-md mx-4 flex justify-around bg-[#e3c7eb] duration-900 h-[250px] py-10 px-9 rounded-3xl w-1/4 text-black flex-col"
    >
      
      <div className="text-4xl mb-4">
        {emoji}
      </div>

      <div className="font-semibold tracking-tight text-xl mb-2">
        <h3>{title}</h3>
      </div>

      <div className="line-clamp-4 h-full text-base leading-relaxed tracking-tight font-medium text-black/50 flex-wrap">
        <p className="clear-both">{description}</p>
      </div>

    </motion.div>
  );
};

export default Card;