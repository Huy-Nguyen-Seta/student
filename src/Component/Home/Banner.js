import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import FlexItem from "../FlexItem";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Loader from "../Notifications/Loader";
import { CgFileDocument } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { IfCourseLiked, likeCourse } from "../../Context/Functionalties";
const SwiperComponent = ({ sameClass, course }) => {
  const { isLoading } = useSelector((state) => state.likeCourse);
  const dispatch = useDispatch();
  const { useInfo } = useSelector((state) => state.userLogin);

  const isLiked = (course) => {
    return IfCourseLiked(course);
  };
  return (
    <Swiper
      direction="vertical"
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      speed={1000}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      modules={[Autoplay]}
      className={sameClass}
    >
      {[1, 2, 3, 4].map((movie, index) => (
        <SwiperSlide key={index} className="relative rounded overflow-hidden">
          <img
            src="react.png"
            alt="slide"
            className="w-full h-full object-cover"
          />
          <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
            <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
              Reactjs
            </h1>
            <div className="flex gap-5 items-center text-dryGray">
              <FlexItem
                course={{
                  title: "reactjs",
                  creatDate: "06-10-2000",
                  quantity: "20",
                }}
              />
            </div>
            <div className="flex gap-5 items-center">
              <Link
                to={`/course/${1}`}
                className="bg-subMain hover:text-main transition text-white px-8 py-3 rounded font-medium sm:text-sm text-xs"
              >
                Học Ngay
              </Link>
              <button
                onClick={likeCourse(course, dispatch, useInfo)}
                disabled={isLoading}
                className={`bg-white
                ${isLiked(course) ? "text-subMain" : "text-white"}
                 hover:text-subMain transition  px-4 py-3 rounded text-sm bg-opacity-30`}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
function Banner(course, isLoading) {
  const sameClass = "w-full flex-colo xl:h-96 bg-dry lg:h-64 h-48";
  return (
    <div className="relative w-full">
      {isLoading ? (
        <div className={sameClass}>
          <Loader />
        </div>
      ) : !course?.length > 0 ? (
        <SwiperComponent sameClass={sameClass} course={course} />
      ) : (
        <div className={sameClass}>
          <div className="flex-colo w-24 mb-4 h-23 p-5 rounded-full bg-dry text-subMain text-4xl">
            <CgFileDocument />
          </div>
          <p className="text-border text-sm">Danh sách trống</p>
        </div>
      )}
    </div>
  );
}

export default Banner;
