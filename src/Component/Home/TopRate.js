import React from "react";
import {
  BsBookmarkStarFill,
  BsCaretLeftFill,
  BsCaretRightFill,
} from "react-icons/bs";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IfCourseLiked, likeCourse } from "../../Context/Functionalties";
import { Empty } from "../Notifications/Emty";
import Loader from "../Notifications/Loader";
import Title from "../Title";
import { Rating } from "./Rating";

const SwiperTop = (course) => {
  const { isLoading } = useSelector((state) => state.likeCourse);
  const dispatch = useDispatch();
  const { useInfo } = useSelector((state) => state.userLogin);

  const isLiked = (item) => {
    return IfCourseLiked(item);
  };
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={40}
      autoplay={true}
      speed={1000}
      loop={true}
      modules={[Navigation, Autoplay]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1208: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      {[1, 2, 3, 4, 6, 5].map((item, index) => (
        <SwiperSlide key={index}>
          <div className="p-4 h-rate hovered border-border bg-dry rounded-lg overflow-hidden">
            <img
              src="https://200lab-blog.imgix.net/2021/07/1_h5UGPzaL1E4dIy_JWDrsAw.png"
              alt="react"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="px-4 gap-6 hoveres text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
              <button
                onClick={likeCourse(item, dispatch, useInfo)}
                disabled={isLoading}
                className={`${
                  isLiked(item) ? "bg-subMain" : "bg-white bg-opacity-30"
                } w-12 h-12 flex-colo transition hover:bg-subMain rounded-full
                  text-white`}
              >
                <FaHeart />
              </button>
              <Link className="font-semibold text-xl trancuted line" to={"/"}>
                Khoa Hoc Reactjs
              </Link>
              <Rating rate={4} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
function TopRate({ course, isLoading }) {
  const classNames =
    "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white";
  return (
    <div className="my-16">
      <Title title={"Những khóa học phổ biến"} Icon={BsBookmarkStarFill} />
      <div className="mt-10">
        <SwiperTop course={course} />
        <div className="w-full px-1 flex-rows gap-6 pt-12">
          <button className={`${classNames} swiper-button-prev`}>
            <BsCaretLeftFill />
          </button>
          <button className={`${classNames} swiper-button-next`}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopRate;
