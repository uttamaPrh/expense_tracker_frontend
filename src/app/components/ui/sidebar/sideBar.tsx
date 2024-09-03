import Image from "next/image";
import React from "react";
import Line from "./line/line";
import { siderbaritems } from "@/api/sidebar";

const SideBar = () => {
  return (
    // <div className="bg-light rounded-lg px-8 pt-[40px] pb-6 flex flex-col items-center gap-[40px]">
    //   <div className="flex flex-col items-center">
    //     <div className="w-[64px] h-[64px] ">
    //       <Image
    //         src="/profile/pp.png"
    //         width={100}
    //         height={100}
    //         className="h-full w-full rounded-xl object-cover"
    //         alt="profilePicture"
    //       />
    //     </div>
    //     <div className="text-white text-md text-center  ">Your Name</div>
    //   </div>
    //   <Line />
    //   <div>Profile</div>
    //   <div>Profile</div>
    //   <div>Profile</div>
    // </div>

    <div className="">
      <section className="flex gap-5 flex-col items-center">
        <div>
          <Image
            src="/profile/pp.png"
            width={100}
            height={100}
            alt="Main Image"
          />
        </div>

        <p className="text-white "> Hi, Mary</p>
      </section>

        <div className="py-6">
          <Line />
        </div>

      <section className="text-white">
       
       {
        siderbaritems.map ((sidebarheading,index) => {
          return (
            <div>
            
              {sidebarheading.heading}

              {
                sidebarheading.sidebaritems.map((sidebaritems,index) => (
                  <div>
                    {sidebaritems.label}
                  </div>
                )
              )
              }
            </div>
          )
        }
      )
       }

        
      </section>
    </div>
  );
};

export default SideBar;
