import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div
      className={`relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]`}
    >
      <Image
        sizes="h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px"
        priority={true}
        className="object-cover"
        fill
        src="https://links.papareact.com/0fm"
        alt="Banner_Image"
      />
      <div className="absolute w-full top-1/2 text-center">
        <p className="text-sm sm:text-lg">Not sure where to go ? Perfect.</p>
        <button className="my-3 text-purple-500 bg-white py-4 px-10 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
