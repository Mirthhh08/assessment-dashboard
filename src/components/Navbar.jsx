import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import useStore from "../store/store";

const SearchBar = ({ handleChange }) => {
  const [query, setQuery] = useState("");
  const searchWidgets = useStore((state) => state.searchWidgets);
  const navigate = useNavigate();

  const handleSearchInput = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="fixed top-2 bg-white w-full  z-30">
      <div className="border-2 w-[90%] mx-auto text-[#7e9aa8] border-blue-200 flex items-center gap-2 p-1 text-sm bg-[#f2f5fa] rounded-lg ">
        <IoIosSearch
          onClick={() => setSearchBarActive((prev) => !prev)}
          className="cursor-pointer sm:text-xl text-lg"
        />
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter" && query.trim() !== "") {
              searchWidgets(query.trim());
              handleChange();
              navigate(`/search-result/${query}`);
            }
          }}
          onChange={handleSearchInput}
          placeholder="Search anything..."
          className="flex border-none w-full bg-[#f2f5fa] outline-none text-black"
        />
        <IoCloseCircleOutline
          size={28}
          onClick={handleChange}
          className=" cursor-pointer"
        />
      </div>
    </div>
  );
};

const DropDownMenu = ({ setMenuActive }) => {
  return (
    <div className="absolute top-12 right-4 bg-white border border-blue-200  rounded-md shadow-lg p-4 z-50 sm:hidden">
      <div className="flex flex-col gap-4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setMenuActive(false)}
        >
          <MdOutlineKeyboardArrowDown size={22} className="text-[#7e9aa8]" />
          <span className="text-sm text-gray-700">More Options</span>

          <button
            className=" text-gray-500 hover:text-gray-800 ml-8"
            onClick={() => setMenuActive(false)}
          >
            <IoCloseCircleOutline />
          </button>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setMenuActive(false)}
        >
          <MdOutlineNotificationsActive size={22} className="text-[#7e9aa8]" />
          <span className="text-sm text-gray-700">Notifications</span>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setMenuActive(false)}
        >
          <FaCircleUser size={22} className="text-[#7e9aa8]" />
          <span className="text-sm text-gray-700">Profile</span>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();
  const handleChange = () => {
    setSearchBarActive((prev) => !prev);
  };

  return (
    <div className="flex md:px-10 px-4 py-2">
      {searchBarActive && <SearchBar handleChange={handleChange} />}
      <div className="flex items-center gap-1 font-bold text-gray-600">
        <p className="opacity-65">Home</p>
        <MdOutlineKeyboardArrowRight size={18} className="opacity-65" />
        <p
          className="text-blue-950 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Dashboard V2
        </p>
      </div>
      <div className="ml-auto flex gap-4 items-center">
        <div
          onClick={handleChange}
          className="border-2 text-[#7e9aa8] cursor-pointer border-blue-200 md:flex items-center gap-2 p-1 text-sm bg-[#f2f5fa] rounded-lg "
        >
          <IoIosSearch className=" sm:text-xl text-lg" />
          <div className="hidden md:flex w-[300px]">
            <p>Search Something...</p>
          </div>
        </div>
        <div className="hidden sm:flex gap-4 items-center">
          <MdOutlineKeyboardArrowDown
            size={22}
            className="opacity-70 cursor-pointer"
          />
          <MdOutlineNotificationsActive
            className="text-[#7e9aa8] cursor-pointer"
            size={22}
          />
          <FaCircleUser className="text-[#7e9aa8] cursor-pointer" size={22} />
        </div>
        <div
          onClick={() => {
            setMenuActive((prev) => !prev);
          }}
          className="flex sm:hidden border-2 text-[#7e9aa8] border-blue-200 p-1 bg-gray-100 rounded-lg cursor-pointer"
        >
          <RxHamburgerMenu />
        </div>
      </div>
      {menuActive && <DropDownMenu setMenuActive={setMenuActive} />}
    </div>
  );
};

export default Navbar;
