"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {  motion } from "framer-motion";

const LandingPage = () => {
  return (
    <motion.div
      initial={{
        opacity: 1,
        scale: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      className="relative h-screen rounded-3xl overflow-hidden flex md:flex-row w-full bg-[#e0d7f7] "
    >
      <div className="absolute items-center justify-center">
        <Image
          src={"/emotion-list-bg-right.png"}
          alt="app store link"
          width={500}
          height={500}
          className="animate-spin-slow"
        />
      </div>
      <div className="relative gap-x-6 m-auto w-2/4 p-12 tracking-tighter animate-pulse ease-in-out flex flex-col justify-around">
        <h6 className="text-lg font-medium mb-4 ml-1">Ahead app</h6>
        <p className="text-[70px] leading-[4.5rem] font-bold mb-10">
          Master your life by mastering emotions
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
      </div>
      <div className="relative w-2/4 overflow-hidden max-w-[50vw]">
        <Image src={"/bgLandingPage.png"} alt="app store link" fill />
      </div>
    </motion.div>
  );
};

export default LandingPage;
