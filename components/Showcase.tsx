import React from "react";

interface IShowcase {
  title: string;
  descriptions: string[];
}

const Showcase: React.FC<IShowcase> = ({ title, descriptions }) => {
  return (
    <div className="flex antialiased md:flex-row p-12 my-12 justify-around">
      <div className="w-1/3 flex-start px-6">
        <h3 className="font-semibold text-4xl tracking-tight leading-loose">
          {title}
        </h3>
      </div>
      {descriptions.map((description, index) => (
        <div key={index} className="w-1/3 px-4">
              <p className="font-normal leading-relaxed text-2xl text-gray-700">{description}
              </p>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
