"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
const SelfImprovementTour = () => (
  <div className="relative my-28 h-full mx-12 px-12">
    <div className="px-12 mb-7 w-full h-full">
      <motion.h1
        initial={{
          opacity: 0,
          x: "-50%"
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 2,
            damping: 100,
            stiffness: 100
          }
        }}

        className="text-[60px] items-center align-middle h-auto w-auto font-bold flex "
      >
        Self-improvement. Ugh 
        <span className="ml-6">
          <Image
            src="/sad.png"
            alt="cheering emote"
            width={50}
            height={50}
            
          />
        </span>
      </motion.h1>
    </div>

    <div className="h-[100px] overflow-hidden w-full  relative">
      <svg className='relative left-5 z-50 h-[100px] rotate-90' viewBox="0 0 900 100" fill="#000000" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
          fill="#f22000"
        />
        <mask
          id="mask0_0_1"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="900"
          height="10"
        >
          <path
            d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
            fill="#000000"
          />
        </mask>
        <g className='bg-black' mask="url(#mask0_0_1)">
          <rect className="mask" y="-49" height="99" fill="black" />
        </g>
      </svg>
    </div>

  </div>


);

export default SelfImprovementTour;
