"use client"
import React from "react";
import Card from "./Card";
import Image from "next/image";
import {
  motion,
} from "framer-motion";

const GetFamiliar = () => {

  return (
    <div className="w-screen">
      <div className="px-12 mb-7">
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
          className="text-[60px] h-auto w-auto font-bold flex "
        >
          Does this sound familiar...
          <span className="ml-6">
            <Image
              src="/cheers.png"
              alt="cheering emote"
              width={90}
              height={90}
              className="animate-spin"
            />
          </span>
        </motion.h1>
      </div>
      <div
        className="max-w-full h-auto whitespace-nowrap overflow-x-scroll overflow-y-clip scrollbar-none">
        <motion.div
          initial={{ x: "80vw", opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: "-10vw",
            transition: {
              duration: 2
            }
          }}

          className="overflow-visible scrollbar-none whitespace-nowrap flex flex-row px-26 h-[400px] items-center justify-center"
        >
          <Card
            title="You argue with a colleague"
            description="People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships. They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year."
            emoji="😄"
          />
          <Card
            title="You argue with a colleague"
            description="People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships. They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year."
            emoji="😄"
          />
          <Card
            title="You argue with a colleague"
            description="People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
    They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year."
            emoji="😄"
          />
          <Card
            title="You argue with a colleague"
            description="People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
    They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year."
            emoji="😄"
          />
          <Card
            title="You argue with a colleague"
            description="People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
    They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year."
            emoji="😄"
          />
          <Card
            title="You argue with a colleague"
            description="People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
    They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year."
            emoji="😄"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default GetFamiliar;
