import React from "react";
import { BsCollectionFill } from "react-icons/bs";
import Course from "../Course";
import { Empty } from "../Notifications/Emty";
import Loader from "../Notifications/Loader";
import Title from "../Title";

function PopularCourse({ course, isLoading }) {
  return (
    <div className="my-16">
      <Title title={"Khóa học phổ biến"} Icon={BsCollectionFill} />
      {isLoading ? (
        <Loader />
      ) : course?.length > 0 ? (
        <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {[1, 2, 3, 4, 5, 6, 1, 1].map((course, index) => (
            <Course key={index} course={{ name: "REACTJS" }} />
          ))}
        </div>
      ) : (
        <div className="mt-6">
          <Empty />
        </div>
      )}
    </div>
  );
}

export default PopularCourse;
