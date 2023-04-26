import React, { useEffect, useState } from "react";
import Upload from "../../Component/Upload";
import { Input, Message, Select } from "../../Component/UserComment";
import SlideBar from "./SlideBar";
import { ImUpload } from "react-icons/im";
import { ImageReview } from "../../Component/ImageReview";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { CREATE_COURSE_RESET } from "../../Redux/Constants/courseConstant";
function AddCourse() {
  const { userInfo } = useSelector((state) => state.userLogin);
  const { categories } = useSelector((state) => state.getCategories);
  const [imageUrl, setImageUrl] = useState(userInfo?.image || "");
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.createCourse
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    //dispatch(loginAction(data));
  };
  useEffect(() => {
    if (isSuccess) {
      reset();
      setImageUrl("");
    }
    if (isError) {
      toast.error("Tạo bài viết thất bại");
      dispatch({ type: CREATE_COURSE_RESET });
    }
  }, [isSuccess, reset, isError]);

  return (
    <SlideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Tạo mới chủ đề</h2>
        <div className="w-full grid  gap-6">
          <Input
            name={"nameCourse"}
            register={register("nameCourse")}
            label="Tên bài viết"
            placeholder="Nhập tên bài viết"
            type="text"
            bg={true}
          />
        </div>

        <Message
          name={"note"}
          register={register("note")}
          label="Nội dung"
          placeholder="Nhập nội dung khóa học"
        />
        <div className="text-sm w-full">
          <Select
            name={"categories"}
            register={register("categories")}
            label="Thể loại bài viết"
            options={categories || []}
          />
        </div>

        <div className="w-full  gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">Hình ảnh mô tả</p>
            <Upload setImageUrl={setImageUrl} />
            <ImageReview
              image={imageUrl}
              name={userInfo?.fullName || "Người dùng"}
            />
          </div>
        </div>

        <button className="bg-subMain w-full flex-rows gap-6 font-medium text-white  py-4 rounded ">
          {isLoading ? (
            "Vui lòng đợi trong giây lát..."
          ) : (
            <>
              {" "}
              <ImUpload />
              Đăng bài
            </>
          )}
        </button>
      </div>
    </SlideBar>
  );
}

export default AddCourse;
