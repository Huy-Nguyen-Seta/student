import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FiLogIn } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { InlineError } from "../Component/Notifications/Error";
import { Input } from "../Component/UserComment";
import { registerValidation } from "../Component/Validation/UserValidation";
import Layout from "../Layout/Layout";
import { registerAction } from "../Redux/Actions/userActions";
import { USER_REGISTER_RESET } from "../Redux/Constants/userConstant";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidation),
    mode: "onChange",
  });
  const { isLoading, isError, userInfo, isSuccess } = useSelector(
    (state) => state.userRegister
  );
  console.log('isError', isError)
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(registerAction(data));
  };
  useEffect(() => {
    if (userInfo?.isAdmin) {
      navigate("/dashboard");
    } else if (userInfo) {
      navigate("/profile");
    }
    if (isSuccess) {
      toast.success(`Chào mừng ${userInfo.fullName}`);
    }
    if (isError) {
      toast.error(isError);
      dispatch({ type: USER_REGISTER_RESET });
    }
  }, [userInfo, isSuccess, isError, navigate, dispatch]);
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border"
        >
          <div className="scale-150 mr-14">
            <div className="scale-150">
              <img
                src="share.png"
                alt="logo"
                className="w-full h-20 scale-150 object-contain "
              />
            </div>
          </div>
          <div className="w-full">
            <Input
              label="Họ và tên"
              placeholder="Nhập họ tên"
              name="fullName"
              register={register("fullName")}
              bg={true}
            />
            {errors?.fullName && (
              <InlineError text={errors?.fullName?.message} />
            )}
          </div>
          <div className="w-full">
            <Input
              label="Tên tài khoản"
              placeholder="Nhập tên tài khoản"
              name="userName"
              register={register("userName")}
              bg={true}
            />
            {errors?.userName && (
              <InlineError text={errors?.userName?.message} />
            )}
          </div>
          <div className="w-full">
            <Input
              label="Mật khẩu đăng nhập"
              placeholder="Nhập mật khẩu"
              name="password"
              register={register("password")}
              bg={true}
            />
            {errors?.password && (
              <InlineError text={errors?.password?.message} />
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                {" "}
                <FiLogIn /> Đăng Ký
              </>
            )}
          </button>
          <p className="text-center text-border">
            Bạn đã có tài khoản{" "}
            <Link
              to="/login"
              className="text-dryGray font-semibold ml-2 underline"
            >
              Đăng Nhập
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}

export default Register;
