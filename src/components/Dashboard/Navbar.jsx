import React from "react";
import { TfiReload } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaClock, FaPlus } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import useStore from "../../store/store";
const Navbar = () => {
  const toggleWidgetMenu = useStore((state) => state.toggleWidgetMenu);
  return (
    <div className="flex flex-row items-center ">
      <p className="font-bold md:text-xl text-lg tracking-wide ">
        CNAPP Dashboard
      </p>
      <div className="flex  gap-4 ml-auto">
        <div
          onClick={toggleWidgetMenu}
          className=" border-2 border-gray-300 py-1 px-3 rounded-md flex gap-2 items-center cursor-pointer"
        >
          <p className="hidden sm:flex font-semibold">Add Widget</p>
          <FaPlus size={14} />
        </div>
        <div className="border-2 border-gray-300 py-1 px-2  rounded-md flex items-center cursor-pointer">
          <TfiReload />
        </div>
        <div className="hidden border-2 border-gray-300 py-1 px-2 rounded-md sm:flex items-center cursor-pointer">
          <BsThreeDotsVertical />
        </div>
        <div className="hidden md:flex items-center gap-2 border-2 py-1 px-2 text-blue-900 font-bold border-blue-900 rounded-md cursor-pointer">
          <FaClock size={20} className="border-r  border-r-blue-900 pr-1" />
          <p className="">Last 2 days</p>
          <MdOutlineKeyboardArrowDown size={18} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
