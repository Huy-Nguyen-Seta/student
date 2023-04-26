import React from "react";
import { FaRegListAlt, FaUser } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import Table from "../../../Component/Table";
import SlideBar from "../SlideBar";

function Dashboard() {
  const Dashboard = [
    {
      bg: "bg-orange-600",
      icon: FaRegListAlt,
      title: "Tổng số bài viết",
      total: 90,
    },
    {
      bg: "bg-blue-700",
      icon: HiViewGridAdd,
      title: "Tổng số bài đăng",
      total: 90,
    },
    {
      bg: "bg-green-600",
      icon: FaUser,
      title: "Tổng số người dùng",
      total: 90,
    },
  ];
  return (
    <SlideBar>
      <h2 className="text-xl font-bold">Quản trị </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {Dashboard.map((data, index) => (
          <div
            key={index}
            className="p-4 rounded bg-main border-border grid grid-cols-4 gap-2"
          >
            <div
              className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}
            >
              <data.icon />
            </div>
            <div className="col-span-3">
              <h2>{data.title}</h2>
              <p className="mt-2 font-bold">{data.total}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-md font-medium my-6 text-border">Bai viet gan day</h3>
      <Table data={[1, 2, 3, 4]} />
    </SlideBar>
  );
}

export default Dashboard;
