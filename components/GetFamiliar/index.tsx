import React from "react";
import Card from "./Card";
import Image from "next/image";

const GetFamiliar = () => {
  console.error(typeof "😄");
  return (
    <div className="w-screen">
      <div className="px-12 mb-28">
        <h1 className="text-[60px] h-auto w-auto font-bold flex ">
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
        </h1>
      </div>
      <div className="h-fit oveflow-scroll">
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
       
        </div>
      </div>
    </div>
  );
};

export default GetFamiliar;
