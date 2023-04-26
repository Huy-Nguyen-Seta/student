import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InlineError } from "../../Component/Notifications/Error";
import { Input } from "../../Component/UserComment";
import { passwordValidation } from "../../Component/Validation/UserValidation";
import { changePasswordAction } from "../../Redux/Actions/userActions";
import { USER_CHANGE_PASSWORD_RESET } from "../../Redux/Constants/userConstant";
import SlideBar from "./SlideBar";
function Password() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.userPassword
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordValidation),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    dispatch(changePasswordAction(data));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch({ type: USER_CHANGE_PASSWORD_RESET });
    }
    if (isError) {
      toast.error(isError);
      dispatch({ type: USER_CHANGE_PASSWORD_RESET });
    }
    if (message) {
      toast.success(message);
      reset();
    }
  }, [isSuccess, isError, message, reset, dispatch]);

  return (
    <SlideBar>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Đổi mật khẩu</h2>
        <div className="w-full">
          <Input
            label="Nhập mật khẩu cũ"
            placeholder="*******"
            type="password"
            name="password"
            register={register("password")}
            bg={true}
          />
          {errors?.password && <InlineError text={errors?.password?.message} />}
        </div>
        <div className="w-full">
          <Input
            label="Nhập mật khẩu mới"
            placeholder="*******"
            type="password"
            name="newPassword"
            register={register("newPassword")}
            bg={true}
          />
          {errors?.newPassword && (
            <InlineError text={errors?.newPassword?.message} />
          )}
        </div>
        <div className="w-full">
          <Input
            label="Nhập lại mật khẩu mới"
            placeholder="*******"
            type="password"
            name="reNewPassword"
            register={register("reNewPassword")}
            bg={true}
          />
          {errors?.reNewPassword && (
            <InlineError text={errors?.reNewPassword?.message} />
          )}
        </div>
        <div className="flex justify-end items-center my-4">
          <button
            type="submit"
            className="bg-main transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto"
          >
            Thay đổi mật khẩu
          </button>
        </div>
      </form>
    </SlideBar>
  );
}

export default Password;
