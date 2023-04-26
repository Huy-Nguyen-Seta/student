import React from "react";
import { FaPlay, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import FlexItem from "../FlexItem";
import { FiLogIn } from "react-icons/fi";
import { Rating } from "../Home/Rating";
function CourseInfo({ setModalOpen }) {
  return (
    <div className="w-full xl:h-screen relative text-white">
      <img
        src="https://i0.wp.com/dotnetcrunch.in/wp-content/uploads/2020/06/Learn-React-JS-for-Free.png"
        alt="course"
        className="w-full hidden xl:inline-block h-full object-cover"
      />
      <div className="xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
        <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
          <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
            <img
              src="https://i0.wp.com/dotnetcrunch.in/wp-content/uploads/2020/06/Learn-React-JS-for-Free.png"
              alt="course"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
            <div className="col-span-3 flex flex-col gap-10">
              <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                React learn
              </h1>
              <div className="flex items-center gap-4 font-medium text-dryGray">
                <FlexItem
                  course={{
                    title: "Reactjs",
                    creatDate: "06/10/2000",
                    quantity: 50,
                  }}
                />
              </div>
              {/* description */}
              <p className="text-text text-sm leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in
              </p>
              <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border-gray-800 rounded-lg">
                <div className="col-span-1 flex-colo border-r border-border">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="h-10 w-10 flex-colo rounded-lg bg-white bg-opacity-20"
                  >
                    <FaShareAlt />
                  </button>
                </div>
                <div className="col-span-2 flex-colo font-medium text-sm">
                  <p>
                    Tác giả : <span className="ml-2 truncate"> Quang Huy </span>
                  </p>
                </div>
                <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm">
                  <Link
                    to=""
                    className="bg-dry py-4 hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3"
                  >
                    <FaPlay className="w-3 h-3" /> Xem ngay
                  </Link>
                </div>
              </div>
              <Rating rate={3}/>
            </div>
            <div className="col-span-2 md:mt-0 mt-2 flex justify-end">
              <button className="md:w-1/4 w-full relative flex-colo bg-subMain hover:bg-transparent border border-subMain transitions md:h-64 h-20 rounded font-medium">
                <div className="flex-rows gap-6 text-md uppercase tracking-widest absolute md:rotate-90">
                  <span>DOWLOAD</span> <FiLogIn className="w-6 h-6" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
