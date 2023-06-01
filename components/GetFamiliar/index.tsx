import React from "react";
import Card from "./Card";
import Image from "next/image";
import { motion } from "framer-motion";
const GetFamiliar = () => {
  return (
    <div className="w-screen">
      <div className="px-12 mb-28">
        <motion.h1
          initial={{
            x: -100,
            opacity: 0,
          }}
          viewport={{ once: true }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ delay: 1.5 }}
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
      <motion.div className="h-fit oveflow-scroll">
        <div className="min-w-full flex flex-row scrollbar-thumb-black scrollbar-track-slate-900 h-fit">
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
        </div>
      </motion.div>
    </div>
  );
};

export default GetFamiliar;
