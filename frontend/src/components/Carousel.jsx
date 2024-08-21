import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Onboard1 from "../assets/Onboard1.svg";
import Onboard2 from "../assets/Onboard2.svg";
import Onboard3 from "../assets/Onboard3.svg";
import Onboard4 from "../assets/Onboard4.svg";
import rightArrow from "../assets/Arrow.svg";
import leftArrow from "../assets/Union.svg";

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      image: Onboard1,
      text: "Collaborative approach towards todos",
      bgColor: "bg-[#CDE3F3]",
    },
    {
      image: Onboard2,
      text: "Find Todos from other users show up",
      bgColor: "bg-[#D4ECCD]",
    },
    {
      image: Onboard3,
      text: "Add you friends and challenge them",
      bgColor: "bg-[#F8EED4]",
    },
    {
      image: Onboard4,
      text: "Win Rewards on consistency",
      bgColor: "bg-[#E9EAEF]",
    },
  ];

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pages.length - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <>
      <div
        className={`flex flex-col justify-between relative rounded-[32px] h-full ${pages[currentPage].bgColor}`}
      >
        <AnimatePresence>
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-cover bg-center w-[371px] h-[342px] top-[270px] left-[42px] -z-5"
            style={{ backgroundImage: `url(${pages[currentPage].image})` }}
          />
        </AnimatePresence>

        <div className="p-8 text-black text-5xl font-bold z-10">
          {pages[currentPage].text}
        </div>

        <div className="flex justify-between items-center p-8 z-10 mt-[70%]">
          {currentPage > 0 && (
            <button
              onClick={handlePrev}
              className="bg-white text-black rounded-full p-5 mr-6"
            >
              <img src={leftArrow} />
            </button>
          )}
          {currentPage < pages.length - 1 ? (
            <button
              onClick={handleNext}
              className="bg-white text-black rounded-full p-4 mr-auto"
            >
              <img src={rightArrow} />
            </button>
          ) : null}
        </div>
        {currentPage === pages.length - 1 && (
          <div className="z-10 px-8">
            <Link to="/home">
              <button className="bg-black rounded-lg text-white font-bold mb-4 px-4 py-3 w-full z-10">
                Try for Free
              </button>
            </Link>
          </div>
        )}
        {/* Dots Indicator */}
        <div className="flex justify-center items-center space-x-2 mb-4 z-10">
          {pages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 flex items-center ${
                currentPage === index ? "w-3 h-3 bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
