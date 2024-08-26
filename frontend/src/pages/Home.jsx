import React from "react";
import Link from "../assets/Link.svg";
import Profile from "../assets/Profile.svg";
import Plus from "../assets/Plus.svg";
import Images from "../assets/Images.svg";
import TagSection from "../components/TagSection";

function Home() {
  return (
    <div className="pt-4 px-4">
      <div className="flex justify-end items-center gap-4">
        <button className="bg-[#9471F8] flex text-white gap-2 px-6 py-3 rounded-md">
          Connect Wallet{" "}
          <span>
            <img src={Link} />
          </span>
        </button>
        <img src={Profile} />
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-[32px] font-extrabold">Featured Todos</h1>
          <div className="p-4 rounded-full bg-[#D9D9D9]">
            <img src={Plus} />
          </div>
        </div>
        <TagSection />
        <div className="mt-4">
          <div className="bg-[#E4B975] rounded-2xl p-[20px]">
            <div className="flex justify-between items-center ">
              <p className="text-[#67461B] font-semibold text-[24px]">
                Workout for 1 hour:
                <br /> Pull day
              </p>
              <img src={Images} className="w-[55px]" />
            </div>
            <div className="h-[22px] flex mt-2 gap-2 items-center">
              <p className="bg-[#E4B975] text-[#67461B] rounded-full text-[10px] border-2 border-[#67461B] px-[16px]">
                fitness
              </p>
              <p className="bg-[#E4B975] text-[#67461B] rounded-full text-[10px] border-2 border-[#67461B] px-[16px]">
                fitness
              </p>
              <p className="bg-[#E4B975] text-[#67461B] rounded-full text-[10px] border-2 border-[#67461B] px-[16px]">
                fitness
              </p>
            </div>
            <p className="mt-4 w-full flex justify-end items-center">
              I did this
            </p>
          </div>

          <div className="bg-[#BBB3CC] rounded-2xl p-[20px] mt-2">
            <div className="flex justify-between items-center ">
              <p className="text-[#463B63] font-semibold text-[24px]">
                Workout for 1 hour:
                <br /> Pull day
              </p>
              <img src={Images} className="w-[55px]" />
            </div>
            <div className="h-[22px] flex mt-2 gap-2 items-center">
              <p className="bg-[#463B63] text-white rounded-full text-[10px] px-[16px] py-1">
                fitness
              </p>
              <p className="bg-[#463B63] text-white rounded-full text-[10px] px-[16px] py-1">
                fitness
              </p>
              <p className="bg-[#463B63] text-white rounded-full text-[10px] px-[16px] py-1">
                fitness
              </p>
            </div>
            <p className="mt-4 w-full flex justify-end items-center">
              I did this
            </p>
          </div>

          <div className="bg-[#BBB3CC] rounded-2xl p-[20px] mt-2">
            <div className="flex justify-between items-center ">
              <p className="text-[#463B63] font-semibold text-[24px]">
                Workout for 1 hour:
                <br /> Pull day
              </p>
              <img src={Images} className="w-[55px]" />
            </div>
            <div className="h-[22px] flex mt-2 gap-2 items-center">
              <p className="bg-[#463B63] text-white rounded-full text-[10px] px-[16px] py-1">
                fitness
              </p>
              <p className="bg-[#463B63] text-white rounded-full text-[10px] px-[16px] py-1">
                fitness
              </p>
              <p className="bg-[#463B63] text-white rounded-full text-[10px] px-[16px] py-1">
                fitness
              </p>
            </div>
            <p className="mt-4 w-full flex justify-end items-center">
              I did this
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
