import React, { useEffect, useState } from "react";
import Title from "../Title";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { Message, Select } from "../UserComment";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ReviewValidation } from "../Validation/CourseValidation";
import { toast } from "react-hot-toast";
import { CREATE_REVIEW_RESET } from "../../Redux/Constants/courseConstant";
import { Rating } from "../Home/Rating";
import { InlineError } from "../Notifications/Error";
import { Link } from "react-router-dom";
const Ratings = [
  {
    title: "0-Nội dung không hữu ích",
    value: 0,
  },
  {
    title: "1-Nội dung bình thường",
    value: 1,
  },
  {
    title: "2-Nội dung hữu ích",
    value: 2,
  },
  {
    title: "3-Nội dung rất hữu ích",
    value: 3,
  },
  {
    title: "4-Nội dung rất thú vị và hữu ích",
    value: 4,
  },
  {
    title: "5-Nội dung tuyệt vời",
    value: 5,
  },
];
function CourseRate() {
  const { isLoading, isError } = useSelector((state) => state.reviewCourse);
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ReviewValidation),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    //dispatch(loginAction(data));
    console.log("data", data);
  };

  useEffect(() => {
    if (isError) {
      toast.error(isError);
      dispatch({ type: CREATE_REVIEW_RESET });
    }
  }, [dispatch, isError]);
  console.log("errors", errors, watch("comment"));
  return (
    <div className="my-12">
      <Title title="Đánh giá" Icon={BsFillBookmarkStarFill} />
      <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="xl:col-span-2 w-full flex flex-col gap-8"
        >
          <h3 className="text-xl text-text font-semibold">
            Đánh giá về : "Reactjs"
          </h3>
          <p className="text-sm leading-7 font-medium text-border">
            Lựa chọn đánh giá của bạn về bài viết này. Lượt đánh giá của bạn sẽ
            được lưu lại giúp chúng tôi sẽ lựa chọn nhưng bài viết bổ ích nhất
          </p>
          <div className="text-sm w-full">
            <Select
              label="Lựa chọn đánh giá"
              options={Ratings}
              name="rating"
              register={{ ...register("rating") }}
            />
            <div className="mt-3">
              <Rating rate={watch("rating")} />
            </div>
            {errors?.rating && <InlineError text={errors?.rating?.message} />}
          </div>
          <div className="w-full ">
            <Message
              label="Bình luận"
              placeholder="Nhập bình luận của bạn vào đây..."
              name="comment"
              register={{ ...register("comment") }}
            />
            {errors?.comment && <InlineError text={errors?.comment?.message} />}
          </div>
          {userInfo ? (
            <button
              disabled={isLoading}
              type="submit"
              className="bg-subMain text-white py-4 w-full flex-colo rounded"
            >
              {isLoading ? "Đang gửi..." : "Gửi đánh giá"}
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-main border border-dashed border-border text-subMain py-4 w-full flex-colo rounded"
            >
              Đăng nhập để có thể đánh giá
            </Link>
          )}
        </form>
        <div className="col-span-3 w-full flex flex-col gap-6">
          <h3 className="text-xl text-text font-semibold">
            Lượt đánh giá (56)
          </h3>
          <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll">
            {[1, 2, 3, 4].map((item, i) => (
              <div className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg">
                <div className="col-span-2 bg-main hidden md:block">
                  <img
                    src={item?.userImage || `/logonuce.png`}
                    alt="user"
                    className="w-full h-24 rounded-lg object-cover"
                  />
                </div>
                <div className="col-span-7 flex flex-col gap-2">
                  <h2>{item?.fullName || "Người dùng chia sẻ"}</h2>
                  <p className="text-xs leading-6 font-medium text-text">
                    {item?.message ||
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}
                  </p>
                </div>
                <div className="col-span-3 flex-rows border-l border-border text-xs gap-1 text-star">
                  {Array.apply(0, Array(Number(5))).map(function (value, i) {
                    if (i < 4) {
                      return (
                        <span>
                          <FaStar />
                        </span>
                      );
                    } else {
                      return (
                        <span>
                          <FaRegStar />
                        </span>
                      );
                    }
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseRate;
