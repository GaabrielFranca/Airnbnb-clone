import React from "react";
import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          className="object-cover rounded-2xl"
          src={img}
          fill
          alt="Banner Two"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h2 className="w-64 text-4xl mb-3">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <button className="transition ease-out  hover:shadow-lg active:scale-90 duration-150 text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
