"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {  motion } from "framer-motion";


const AppIntro = () => {
  return (
    <div
      className="relative h-screen rounded-3xl overflow-hidden flex md:flex-row w-full bg-[#f7e6da] ">
      {/* <div className="absolute items-center justify-start bg-[url('/emotion-list-bg-left.png')] flex flex-row bg-repeat-x bg-center bg-cover">
        <Image
          src={"/emotion-list-bg-right.png"}
          alt="app store link"
          width={250}
          height={250}
        />
        <Image
          src={"/emotion-list-bg-right.png"}
          alt="app store link"
          width={250}
          height={250}
        />
        <Image
          src={"/emotion-list-bg-right.png"}
          alt="app store link"
          width={250}
          height={250}
        />
      </div> */}
      <motion.div
        initial={{
          x: -50,
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          y: 0,
          transition: { duration: 1.5 }
        }}

        className="relative items-start justify-start bg-[url('/emotion-list-bg-left.png')] mt-20 w-2/4 p-12 tracking-tighter bg-contain bg-no-repeat bg-center flex flex-col"
      >
        <h6 className="text-lg font-medium mb-4">Built out of frustration</h6>
        <p className="text-[70px] leading-[4.5rem] font-bold mb-10">
          Meet the ahead app
        </p>
        <div className="relative flex justify-start gap-x-5 flex-row">
          <Link href={"https://play.google.com/store/apps"}>
            <Image
              src={"/app-store.svg"}
              alt="app store link"
              width={150}
              height={100}
            />
          </Link>
          <Link href={"https://play.google.com/store/apps"}>
            <Image
              src={"/app-store.svg"}
              alt="app store link"
              width={150}
              height={100}
            />
          </Link>
        </div>
      </motion.div>

      <div className="relative mt-20 w-2/4 p-12 tracking-tighter  bg-contain bg-no-repeat items-center justify-center ease-in-out flex flex-col">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: { duration: 1.5 },
          }}
          className="text-gray-700 px-6 text-2xl leading-relaxed">
          <p className="mb-6">
            A personalized pocket coach that provides bitesized, science driven
            tools to boost emotional intelligence.
          </p>

          <p className="">
            A personalized pocket coach that provides bitesized, science driven
            tools to boost emotional intelligence.
          </p>
        </motion.div>
      </div>
    </div >
  );
};

export default AppIntro;
