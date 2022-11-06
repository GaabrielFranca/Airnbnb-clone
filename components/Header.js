import React from "react";
import Image from "next/image";
import { DateRangePicker } from "react-date-range";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Header = () => {
  const [searchInput, setSearchInput] = React.useState("");

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndtDate] = React.useState(new Date());
  const [guests, setGuests] = React.useState(1);

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndtDate(ranges.selection.endDate);
  }
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="grid grid-cols-3 p-5 bg-white  shadow-md sticky  top-0 z-10 md:px-10 ">
      <div className="cursor-pointer my-auto relative flex h-10">
        <Image
          priority={true}
          sizes="h-10"
          alt="logo"
          className=" object-contain object-left"
          src="/images/logoAirbnb.png"
          fill
        />
      </div>

      <div className="md:shadow-sm flex md:border-2 rounded-full py-2 items-center">
        <input
          value={searchInput}
          onChange={({ target }) => setSearchInput(target.value)}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            onChange={handleSelect}
            ranges={[selectionRange]}
            rangeColors={["#FD4B61"]}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="flex-grow text-2xl font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              min={1}
              onChange={({ target }) => setGuests(target.value)}
              value={guests}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-gray-500"
              onClick={() => {
                setSearchInput("");
              }}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
