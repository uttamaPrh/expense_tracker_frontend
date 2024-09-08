import React from "react";
import { ServiceCardComponent } from "../serviceCardComponent";

const DashboardServiceCard = () => {
  return (
    <div className="bg-white/2 flex flex-col gap-10 mt-10 mx-6  ">
      <div>
        <p className="text-white">Our Services</p>
      </div>

      <div className="grid xxl:grid-cols-6 gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {ServiceCardComponent.map((ServiceCardComponent, index) => {
          return (
            <button key={index}
              className={`${ServiceCardComponent.bg}  rounded-xl h-[180px] w-full hover:bg-blue-600`}
            >
              <div className="text-white flex items-center flex-col gap-7 px-9 ">
                <div className="h-10 w-10 bg-black flex items-center justify-center rounded-full">
                  {ServiceCardComponent.icon}
                </div>
                <div className="text-[15px] font-medium">
                  {" "}
                  {ServiceCardComponent.service}{" "}
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
