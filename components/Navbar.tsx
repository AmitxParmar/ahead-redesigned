"use client"
import React from "react";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
const pop = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const navItems = [
  "Emotions",
  "Manifesto",
  "Self-awareness test",
  "Work with us",
];
const Navbar = () => (
  <header className={`bg-white border z-10 fixed w-full antialiased h-24`}>
    <nav className="flex font-semibold justify-around items-center sm:justify-evenly flex-row h-full">
      <div className="p-2 m-1 rounded-md object-contain object-center overflow-hidden">
        <Image
          src="/logoCropped.jpg"
          className="block rounded-md"
          width={50}
          height={50}
          alt="brand logo"
        />
      </div>

      <div className="text-black items-center px-10">
        <motion.ul
          
          className="w-full cursor-pointer gap-x-2 font-medium hidden md:flex md:flex-row md:justify-around text-lg items-center">
          {navItems.map((item, index) => (
            <motion.li
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
              key={index}
              className="hover:bg-[rgb(234,218,247)] hover:shadow-lg max-h-[50px] items-center justify-center px-10 py-2 rounded-full"
            >
              <p className="align-middle items-center justify-center">{item}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="rounded-full overflow-hidden bg-black text-white  hover:bg-black/50 hover:shadow-lg border">
        <button className="px-6 py-4 tracking-wide">
          <p className="font-semibold items-center my-auto">Download app</p>
        </button>
      </div>
    </nav>
  </header>
);

export default Navbar;
