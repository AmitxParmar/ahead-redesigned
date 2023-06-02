import React, { useCallback, useRef, useLayoutEffect, useState } from "react";
import Card from "./Card";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";

const GetFamiliar = () => {

  const scrollRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);



  const { scrollYProgress } = useScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);


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
          ref={scrollRef}
          style={{ x: spring }}
          className="overflow-visible scrollbar-none whitespace-nowrap flex flex-row px-26 h-[400px] items-center justify-center"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default GetFamiliar;
