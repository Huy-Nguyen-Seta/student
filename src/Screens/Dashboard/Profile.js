import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { ImageReview } from "../../Component/ImageReview";
import { InlineError } from "../../Component/Notifications/Error";
import Upload from "../../Component/Upload";
import { Input } from "../../Component/UserComment";
import { profileValidation } from "../../Component/Validation/UserValidation";
import { updateProfileAction } from "../../Redux/Actions/userActions";
import { USER_PROFILE_RESET } from "../../Redux/Constants/userConstant";
import SlideBar from "./SlideBar";

function Profile() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const [imageUrl, setImageUrl] = useState(userInfo?.image || "");
  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.userProfile
  );
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileValidation),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    dispatch(updateProfileAction({ ...data, image: imageUrl }));
  };

  useEffect(() => {
    if (userInfo) {
      setValue("fullName", userInfo?.fullName);
      setValue("email", userInfo?.email);
    }
    if (isSuccess) {
      dispatch({ type: USER_PROFILE_RESET });
    }
    if (isError) {
      toast.error(isError);
    }
  }, [userInfo, setValue, isSuccess, isError, dispatch]);

  return (
    <SlideBar>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Thông tin người dùng</h2>
        <div className="w-full grid lg:grid-cols-12 gap-6">
          <div className="col-span-10">
            <Upload setImageUrl={setImageUrl} />
          </div>
          <div className="col-span-2">
            <ImageReview
              image={imageUrl}
              name={userInfo?.fullName || "Người dùng"}
            />
          </div>
        </div>

        <div className="w-full">
          <Input
            label="Họ và tên"
            placeholder="Nguyễn Quang Huy"
            name="fullName"
            register={register("fullName")}
            bg={true}
          />
          {errors?.fullName && <InlineError text={errors?.fullName?.message} />}
        </div>
        <div className="w-full">
          <Input
            label="Email"
            placeholder="nguyenquanghuy06102000@gmail.com"
            type="email"
            name="email"
            register={register("email")}
            bg={true}
          />

          {errors?.fullName && <InlineError text={errors?.fullName?.message} />}
        </div>
        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          <button className="bg-subMain transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Xóa tài khoản
          </button>
          <button
            type="submit"
            className="bg-main transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto"
          >
            {isLoading ? "Đang cập nhật..." : "Cập nhật tài khoản"}
          </button>
        </div>
      </form>
    </SlideBar>
  );
}

export default Profile;
