import Image from "next/image";
import React from "react";
import Line from "./line/line";

const SideBar = () => {
  return (
    <div className="bg-light rounded-lg px-8 pt-[40px] pb-6 flex flex-col items-center gap-[40px]">
      <div className="flex flex-col items-center">
        <div className="w-[64px] h-[64px] ">
          <Image
            src="/profile/pp.png"
            width={100}
            height={100}
            className="h-full w-full rounded-xl object-cover"
            alt="profilePicture"
          />
        </div>
        <div className="text-white text-md text-center  ">Your Name</div>
      </div>
      <Line />
      <div>Profile</div>
      <div>Profile</div>
    </div>
  );
};

export default SideBar;
