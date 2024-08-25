import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import useStore from "../store/store";

const Option = ({ data, handleChange }) => {
  const [localVisibility, setLocalVisibility] = useState({});
  const handleChecboxChange = (idx) => {
    setLocalVisibility((prev) => {
      const newVisibility = {
        ...prev,
        [idx]: !prev[idx],
      };

      handleChange(newVisibility);
      return newVisibility;
    });
  };
  useEffect(() => {
    const initialVisibility = {};
    data?.forEach((item, idx) => {
      initialVisibility[idx] = item.isVisible;
    });
    setLocalVisibility(initialVisibility);
    handleChange(initialVisibility);
  }, [data]);

  return (
    <div className="flex flex-col gap-4 ">
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            className="border-2 px-2 py-1 rounded-md flex items-center "
          >
            <input
              type="checkbox"
              id={`checkbox-${idx}`}
              className="mr-2 bg-[#0d0d50] cursor-pointer w-4 h-4"
              checked={localVisibility[idx] || false}
              onChange={() => handleChecboxChange(idx)}
            />
            <label
              htmlFor={`checkbox-${idx}`}
              className="font-semibold text-[#0d0d50]"
            >
              {item.title}
            </label>
          </div>
        );
      })}
    </div>
  );
};

const AddWidget = () => {
  const [localVisibility, setLocalVisibility] = useState({});
  const isActive = useStore((state) => state.isActive);
  const changeIsActive = useStore((state) => state.changeIsActive);
  const data = useStore((state) => state.categories);
  const toggleWidget = useStore((state) => state.widgetMenu);
  const toggleisVisble = useStore((state) => state.toggleisVisble);
  const toggleWidgetMenu = useStore((state) => state.toggleWidgetMenu);

  const handleLocalVisibilityChange = (updatedVisibility) => {
    setLocalVisibility(updatedVisibility);
  };
  const onConfirmClick = () => {
    data?.[isActive].forEach((item, idx) => {
      if (localVisibility[idx] !== item.isVisible) {
        toggleisVisble(isActive, item.id);
      }
    });
    toggleWidgetMenu();
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white ${
        toggleWidget ? "md:w-1/2 w-full" : "w-0"
      } transition-all duration-300 overflow-hidden`}
    >
      <div className="flex flex-col h-full">
        <header className="flex items-center p-2 bg-[#15157d] text-white z-50">
          <p>Add Widget</p>
          <IoIosClose
            className="ml-auto cursor-pointer"
            size={28}
            onClick={toggleWidgetMenu}
          />
        </header>

        <p className="px-2 mt-2">
          Personalise your dashboard by adding the following widget
        </p>
        <div className="mt-2 px-4 flex flex-row items-center gap-10 font-semibold">
          <button
            onClick={() => changeIsActive("cspm")}
            className={` ${
              isActive === "cspm"
                ? "border-b-2 border-[#0d0d50] text-[#0d0d50] transition-colors duration-300 ease-in-out"
                : ""
            }`}
          >
            CSPM
          </button>
          <button
            onClick={() => changeIsActive("cwpp")}
            className={` ${
              isActive === "cwpp"
                ? "border-b-2 border-[#0d0d50] text-[#0d0d50] transition-colors duration-300 ease-in-out"
                : ""
            }`}
          >
            CWPP
          </button>
          <button
            onClick={() => changeIsActive("registry")}
            className={` ${
              isActive === "registry"
                ? "border-b-2 border-[#0d0d50] text-[#0d0d50] transition-colors duration-300 ease-in-out"
                : ""
            }`}
          >
            Image
          </button>
          <button
            onClick={() => changeIsActive("ticket")}
            className={` ${
              isActive === "ticket"
                ? "border-b-2 border-[#0d0d50] text-[#0d0d50] transition-colors duration-300 ease-in-out"
                : ""
            }`}
          >
            Ticket
          </button>
        </div>

        <div className="px-4 mt-5 flex-grow">
          {isActive === "cspm" && (
            <Option
              data={data.cspm}
              handleChange={handleLocalVisibilityChange}
            />
          )}
          {isActive === "cwpp" && (
            <Option
              data={data.cwpp}
              handleChange={handleLocalVisibilityChange}
            />
          )}
          {isActive === "registry" && (
            <Option
              data={data.registry}
              handleChange={handleLocalVisibilityChange}
            />
          )}
          {isActive === "ticket" && (
            <div>
              <p>No data found</p>
            </div>
          )}
        </div>

        <div className="p-4  flex justify-end gap-2 text-[#0d0d50] font-semibold ">
          <button
            className="border-2 border-[#0d0d50] hover:bg-[#0d0d50] hover:text-white transition-colors duration-300 ease-in-out  px-2  py-1 rounded-md"
            onClick={toggleWidgetMenu}
          >
            Cancel
          </button>
          <button
            onClick={onConfirmClick}
            className="border-2 border-[#0d0d50] hover:bg-[#0d0d50] hover:text-white transition-colors duration-300 ease-in-out px-2  py-1 rounded-md"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidget;
