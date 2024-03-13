import Image from "next/image";
import { BsSlashSquare, BsTwitterX } from "react-icons/bs";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { GrNotification } from "react-icons/gr";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import FeedCard from "@/components/FeedCard";

interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <GoHomeFill />,
  },
  {
    title: "Explore",
    icon: <FiSearch />,
  },
  {
    title: "Notification",
    icon: <GrNotification />,
  },
  {
    title: "Messages",
    icon: <FaRegEnvelope />,
  },
  {
    title: "Grok",
    icon: <BsSlashSquare />,
  },
  {
    title: "Premium",
    icon: <BsTwitterX />,
  },
  {
    title: "Profile",
    icon: <FaRegUser />,
  },
  {
    title: "More",
    icon: <CgMoreO />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-36 cursor-pointer">
        <div className="col-span-3 pt-2 px-4">
          <div className="text-2xl hover:bg-gray-800 rounded-full p-2 h-fit w-fit">
            <BsTwitterX />
          </div>
          <div className="mt-4 text-xl pr-4">
            <ul>
              {sideBarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center hover:bg-gray-800 rounded-full px-4 py-2 w-fit gap-4"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className=" mt-5 px-2">
              <button className="bg-[#1A8CD8] p-4 rounded-full w-full mt-4 text-lg font-semibold">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-l-[1px] border-r-[1px] border border-gray-800">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
