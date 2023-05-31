import React from "react";

interface IShowcase {
  emoji: string;
  title: string;
  description: string;
}

const Card: React.FC<IShowcase> = ({ emoji, title, description }) => {
  return (
    <div className="relative hover:-rotate-12 flex-shrink-0 mx-4 flex justify-around bg-[#e3c7eb] duration-900  h-[300px] p-10 rounded-3xl w-[400px] text-black flex-col">
      <div className="text-4xl mb-6">{emoji}</div>
      <div className="font-bold text-xl mb-4">{title}</div>
      <div className="line-clamp-4 leading-relaxed tracking-tight text-gray-700">{description}</div>
    </div>
  );
};

export default Card;
