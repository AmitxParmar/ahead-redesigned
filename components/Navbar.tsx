import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const pop = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});


const Navbar = () => {
  return (
    <header className={`bg-white border z-10 fixed w-full antialiased h-28`}>
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
          <ul className="w-full cursor-pointer gap-x-2 font-medium hidden md:flex md:flex-row md:justify-around text-lg items-center">
            <li className="hover:bg-[rgb(234,218,247)] ease-in-out duration-300 border max-h-[50px] px-10 py-2 rounded-full">
              Emotions
            </li>
            <li className="hover:bg-[rgb(234,218,247)] ease-in-out duration-300 border max-h-[50px] px-10 py-2 rounded-full">
              Menifesto
            </li>
            <li className="hover:bg-[rgb(234,218,247)] ease-in-out duration-300 border max-h-[50px] px-10 py-2 rounded-full">
              Self-awareness test
            </li>
            <li className="hover:bg-[rgb(234,218,247)] ease-in-out duration-300 border max-h-[50px] px-10 py-2 rounded-full">
              Work with us
            </li>
          </ul>
        </div>

        <div className="rounded-full overflow-hidden bg-black text-white  hover:bg-white hover:text-black hover:border-black border">
          <button className="px-6 py-4 tracking-wide">
            <p className="font-semibold items-center my-auto">Download app</p>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
