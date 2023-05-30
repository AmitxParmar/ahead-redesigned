import Image from "next/image";
import React from "react";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="relative h-screen rounded-3xl overflow-hidden flex md:flex-row w-full bg-[#e0d7f7] ">
      <div className="absolute h-full duration-300 w-full ease-in-out bg-repeat animate-spin bg-[url('/emotion-list-bg-right.png')]"></div>
      <div className="relative gap-x-6 m-auto w-2/4 p-12 tracking-tighter animate-pulse ease-in-out  flex flex-col justify-around">
        <h6 className="text-lg font-medium mb-4">Ahead app</h6>
        <p className="text-[70px] leading-[4.5rem] font-bold mb-10">
          Master your life by mastering emotions
        </p>
        <div className="relative flex flex-row">
          <Image
            src={"/app-store.svg"}
            alt="app store link"
            width={150}
            height={100}
          />
          <Image
            src={"/app-store.svg"}
            alt="app store link"
            width={150}
            height={100}
          />
        </div>
      </div>
      <div className="relative w-2/4 overflow-hidden max-w-[50vw]">
        <Image src={"/bgLandingPage.png"} alt="app store link" fill />
      </div>
    </div>
  );
};

export default LandingPage;
