import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found flex-col flex items-center justify-center bg-main h-screen">
    <img
      style={{ width: 1200, marginTop: 100 }}
      src="/nf4.png"
      alt="not-found"
    />
    <Link
      to="/"
      className="link-home border 
      text-lg text-white border-blue-900 rounded-lg h-14 w-48 flex items-center gap-3 justify-center
       bg-blue-900 text-center hover:bg-blue-500 hover:border-blue-500 "
    >
      <FiHome />
      Về lại trang chủ
    </Link>
  </div>
);

export default NotFound;
