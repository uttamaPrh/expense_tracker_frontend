"use client";
import Image from "next/image";
import React from "react";
import Line from "./line/line";
import { siderbaritems } from "@/api/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathName = usePathname();
  return (
    <div className=" bg-white/5 px-10 rounded-xl py-7">
      <section className="flex gap-5 flex-col items-center">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/profile/pp.png"
            width={100}
            height={100}
            alt="Main Image"
          />
        </div>

        <p className="text-white "> Hi, Mary</p>
      </section>

      <div className="py-5">
        <Line />
      </div>

      <section className="text-white">
        {siderbaritems.map((sidebarheading, index) => {
          return (
            <div key={index}>
              <div className="pb-2"> {sidebarheading.heading} </div>
              {sidebarheading.sidebaritems.map((sidebaritems, index) => (
                <Link href={sidebaritems.link} key={index}>
                  {" "}
                  <div
                    className={`flex items-center gap-3 text-sm ${
                      pathName == sidebaritems.link
                        ? "bg-white text-black"
                        : " "
                    }  hover:bg-white hover:text-dark cursor-pointer p-3 rounded-lg `}
                  >
                    {sidebaritems.icon}
                    {sidebaritems.label}
                  </div>{" "}
                </Link>
              ))}
            </div>
          );
        })}
      </section>

      <button className="bg-cream rounded-full px-5 py-2 mt-5">Sign Out</button>
    </div>
  );
};

export default SideBar;
