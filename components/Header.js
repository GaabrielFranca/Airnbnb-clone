import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
const Header = () => {
  return (
    <header className="grid grid-cols-3 p-5 bg-white  shadow-md sticky  top-0 z-10 md:px-10">
      <div className="cursor-pointer my-auto relative flex h-10">
        <Image
          alt="logo"
          className=" object-contain object-left"
          src="/images/logoAirbnb.png"
          fill
        />
      </div>

      <div className="md:shadow-sm flex md:border-2 rounded-full py-2 items-center">
        <input
          className="placeholder-gray-400 text-sm text-gray-600 flex-grow pl-5 outline-none bg-transparent"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon className="md:mx-2 hidden md:inline-flex h-8 text-white bg-red-400 rounded-full p-2 cursor-pointer" />
      </div>

      <div className="flex text-gray-500 justify-end items-center space-x-4">
        <p className="hidden md:inline cursor-pointer"> Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
