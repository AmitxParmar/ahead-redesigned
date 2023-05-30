import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const pop = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  return (
    <header
      className={`bg-white antialiased flex items-center justify-around flex-row h-[15vh] sticky shadow-xl ${pop.className}`}
    >
      <div className="p-2 h-[10vh] rounded-md w-[10vh] object-contain object-center overflow-hidden">
        <Image
          src="/ahead/logoCropped.jpg"
          className="block rounded-md"
          width={150}
          height={150}
          alt="brand logo"
        />
      </div>

      <div className="text-black items-center">
        <ul className="w-full cursor-pointer gap-x-5 font-medium hidden md:flex md:flex-row md:justify-around text-lg items-center">
          <li className="hover:bg-[rgb(234,218,247)] px-3 py-2 rounded-full">
            Emotions
          </li>
          <li className="hover:bg-[rgb(234,218,247)] px-3 py-2 rounded-full">
            Menifesto
          </li>
          <li className="hover:bg-[rgb(234,218,247)] px-3 py-2 rounded-full">
            Self-awareness test
          </li>
          <li className="hover:bg-[rgb(234,218,247)] px-3 py-2 rounded-full">
            Work with us
          </li>
        </ul>
      </div>

      <div className="rounded-full overflow-hidden bg-black text-white  hover:bg-white hover:text-black">
        <button className="px-6 py-4 tracking-wide">
          <p className="font-semibold">Download app</p>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
