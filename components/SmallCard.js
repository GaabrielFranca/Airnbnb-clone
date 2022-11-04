import React from "react";
import Image from "next/image";
const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="cursor-pointer rounded-xl flex space-x-4 mt-5 items-center hover:bg-gray-100 hover:scale-105 transtion transform duration-200 ease-in">
      <div className="relative h-16 w-16">
        <Image className="rounded-md" fill src={img} alt={location} />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
