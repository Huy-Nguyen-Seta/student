import React from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IfCourseLiked, likeCourse } from "../Context/Functionalties";

function Course({ course }) {
  const { isLoading } = useSelector((state) => state.likeCourse);
  const dispatch = useDispatch();
  const { useInfo } = useSelector((state) => state.userLogin);

  const isLiked = IfCourseLiked(course);

  return (
    <div className="border border-border p-1 hover:scale-110 transition relative rounded overflow-hidden">
      <Link to={`/courses/1`} className="w-full">
        <img
          src="https://i0.wp.com/dotnetcrunch.in/wp-content/uploads/2020/06/Learn-React-JS-for-Free.png"
          alt="course"
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
        <h3 className="font-semibold truncate">{course?.name}</h3>
        <button
          onClick={likeCourse(course, dispatch, useInfo)}
          disabled={isLoading}
          className={`   ${
            isLiked ? "bg-subMain" : "bg-transparent"
          } border-subMain h-9 w-9 text-sm flex-colo transition hover:bg-transparent  rounded-md  text-white`}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
}

export default Course;
