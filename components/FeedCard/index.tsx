import Image from "next/image";
import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { FaRegHeart, FaRetweet } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-l-0 border-r-0 border-b-0 border-gray-800 p-4 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/69757237?v=4"
            alt="profile-pic"
            width={50}
            height={50}
          />
        </div>
        <div className="col-span-11 ">
          <h5>Kunal G</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quibusdam suscipit voluptate aut minus, est velit sit placeat.
            Eligendi minus odio obcaecati sapiente, et magnam itaque enim
            reprehenderit at vero.
          </p>
          <div className="flex justify-between mt-5 text-xl items-center p-2 ">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <FaRegHeart />
            </div>
            <div>
              <MdOutlineFileUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
