import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20" id="experience">
      <h1 className="heading">
        Mi experiencia en <span className="text-purple">proyectos</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
            </div>
            <div className="lg:ms-5">
              <h1 className="text-start text-xl pt-4 font-bold sm:pt-8 sm:text-2xl">
                {card.title}
              </h1>
              <p className="text-start mt-3 font-semibold mb-4 text-white-100 sm:mb-8">
                {card.desc}
              </p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
