import React from "react";
import useStore from "../../store/store.js";
import { FaPlus } from "react-icons/fa6";
const Cspm = ({ title, data, Chart, str }) => {
  const toggleWidgetMenu = useStore((state) => state.toggleWidgetMenu);
  const handleClick = () => {
    toggleWidgetMenu(str);
  };
  return (
    <div className="mt-4">
      <p className="font-bold md:text-lg ">{title}</p>
      <div className="flex items-center  justify-center gap-10 flex-wrap mt-2">
        {data
          ?.filter((item) => item.isVisible === true)
          .map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-white md:px-4 px-2 md:py-2 py-1 rounded-lg flex flex-col "
              >
                <p className="font-semibold">{item.title}</p>
                <Chart data={item} />
              </div>
            );
          })}
        <div className="bg-white w-[300px] h-[200px] flex items-center justify-center">
          <div
            onClick={handleClick}
            className=" border-2 border-gray-300 py-1 px-3 rounded-md flex gap-2 items-center cursor-pointer"
          >
            <FaPlus size={14} />
            <p className=" font-semibold">Add Widget</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cspm;
