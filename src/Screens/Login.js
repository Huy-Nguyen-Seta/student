import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Component/UserComment";
import Layout from "../Layout/Layout";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../Component/Validation/UserValidation";
import { InlineError } from "../Component/Notifications/Error";
import { loginAction } from "../Redux/Actions/userActions";
import  toast  from "react-hot-toast";
import { USER_LOGIN_RESET } from "../Redux/Constants/userConstant";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, userInfo, isSuccess } = useSelector(
    (state) => state.userLogin
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    dispatch(loginAction(data));
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
      dispatch({ type: USER_LOGIN_RESET });
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
            {" "}
            <Input
              label="Email"
              placeholder="nguyenquanghuy06102000@gmail.com"
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
              label="Mật Khẩu"
              placeholder="******"
              type="password"
              name="password"
              register={register("password")}
              bg={true}
            />
            {errors?.password && (
              <InlineError text={errors?.password?.message} />
            )}
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                {" "}
                <FiLogIn /> Đăng Nhập
              </>
            )}
          </button>
          <p className="text-center text-border">
            Nếu chưa có tài khoản hãy tạo 1 chiếc{" "}
            <Link
              to="/register"
              className="text-dryGray font-semibold ml-2 underline"
            >
              Tài khoản mới
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
