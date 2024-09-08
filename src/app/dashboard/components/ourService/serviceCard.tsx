import React from "react";
import { ServiceCardComponent } from "../serviceCardComponent";
import Heading from "@/app/components/ui/heading";

const DashboardServiceCard = () => {
  return (
    <div className="bg-white/2 flex flex-col gap-10 mt-10 mx-6  ">
      <Heading heading="Our Services" />

      <div className="grid gap-3 lg:grid-cols-6 md:grid-cols-2 grid-cols-1">
        {ServiceCardComponent.map((ServiceCardComponent, index) => {
          const isEven = index % 2 === 0;
          const cardBg = isEven ? "bg-white" : "bg-light";
          const textColor = isEven ? "text-dark" : "text-white";
          return (
            <button
              key={index}
              className={`${cardBg} rounded-xl h-[180px] w-full hover:bg-green  transition duration-300`}
            >
              <div className={`flex items-center flex-col gap-7 px-9 `}>
                <div
                  className={`h-10 w-10 bg-black text-white flex items-center justify-center rounded-full`}
                >
                  {ServiceCardComponent.icon}
                </div>
                <div className={`text-[15px] font-medium ${textColor} `}>
                  {ServiceCardComponent.service}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardServiceCard;
