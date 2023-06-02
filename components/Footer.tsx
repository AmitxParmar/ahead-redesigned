"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";


const Footer = () => {
  return (
    <div className="h-full border-t flex flex-col border-[#ccc] w-screen items-center justify-around">
      <div className="mx-auto w-full mt-12 flex flex-col flex-wrap">
        <div className="p-2 mx-auto m-1 rounded-md object-contain object-center overflow-hidden">
          <Image
            src="/logoCropped.jpg"
            className="block rounded-md"
            width={90}
            height={90}
            alt="brand logo"
          />
        </div>
        <span className="mx-auto text-[#5c1bf5] text-4xl font-bold">Ahead</span>
      </div>
      <div className="mx-auto mt-12">
        <ul className="flex flex-row gap-x-10">
          <li className="flex flex-row gap-x-5">
            <span className="bg-[#68dde1] flex justify-center items-center h-7 w-7 rounded-full overflow-hidden">
              <IoLocationSharp className="" fontSize={20}/>
            </span>
            <p>Augustrabe 26, 11134 Berlin</p>
          </li>
          
          <li className="flex flex-row gap-x-5">
            <span className="bg-[#68dde1] flex justify-center items-center h-7 w-7 rounded-full overflow-hidden">
              <IoLocationSharp className="" fontSize={20}/>
            </span>
            <p>Augustrabe 26, 11134 Berlin</p>
          </li>
          
        </ul>
      </div>
      <div className="mx-auto mt-12">
        <Link href={"https://play.google.com/store/apps"}>
          <Image
            src={"/app-store.svg"}
            alt="app store link"
            width={150}
            height={100}
            className="mx-auto"
          />
        </Link>
      </div>
      <div className="relative flex justify-center my-12">
        <small className="">&copy; Amit Parmar. All rights reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
