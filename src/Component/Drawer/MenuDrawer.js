import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import MainDrawer from "./MainDrawer";

function MenuDrawer({ drawerOpen, toggleDrawer }) {
  return (
    <MainDrawer drawerOpen={drawerOpen} closeDrawer={toggleDrawer}>
      <div className="flex flex-col w-full h-full justify-between items-center bg-main text-white rounded">
        <div className="w-full flex-btn h-16 px-6 py-4 bg-dry">
          <Link onClick={toggleDrawer} to="/">
            <img
              src="react.png"
              alt="logo"
              className="w-28 h-28 object-contain"
            />
          </Link>
          <button
            onClick={toggleDrawer}
            type="button"
            className="transitions  w-10 h-10  flex-colo px-4 py-2 text-base font-medium transitions text-subMain bg-white rounded-full hover:bg-subMain hover:text-white"
          >
            <IoClose />
          </button>
        </div>
      </div>
    </MainDrawer>
  );
}

export default MenuDrawer;
