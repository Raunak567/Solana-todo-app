import React, { useState } from "react";
import Close from "../assets/close.svg";

const TagSection = () => {
  const [tags, setTags] = useState([
    { name: "Fitness", active: false },
    { name: "Productivity", active: false },
    { name: "Health", active: false },
    { name: "Wellness", active: false },
    { name: "Mindfulness", active: false },
  ]);

  const handleTagClick = (index) => {
    setTags((prevTags) =>
      prevTags.map((tag, i) =>
        i === index ? { ...tag, active: !tag.active } : tag
      )
    );
  };

  const handleTagRemove = (index) => {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-2">
      <div className="flex space-x-2 overflow-x-auto no-scrollbar">
        <p className="bg-black text-white font-semibold px-[20px] py-[10px] rounded-full inline-block mb-2">
          Tags
        </p>
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`flex items-center font-semibold px-[20px] rounded-full cursor-pointer max-h-[45px] ${
              tag.active ? "bg-black text-white" : "bg-gray-200 text-[#464646]"
            }`}
            onClick={() => handleTagClick(index)}
          >
            <span>{tag.name}</span>
            <span
              className="ml-2 cursor-pointer w-[24px]"
              onClick={(e) => {
                e.stopPropagation();
                handleTagRemove(index);
              }}
            >
              <img src={Close} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagSection;
