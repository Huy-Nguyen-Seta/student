import React from "react";
import { toast } from "react-hot-toast";
import { BsFillGridFill } from "react-icons/bs";
import { FaHeart, FaListAlt, FaUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { HiViewGridAdd } from "react-icons/hi";
import {
  RiLockPasswordLine,
  RiLogoutCircleLine,
  RiMovie2Fill,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { logoutAction } from "../../Redux/Actions/userActions";

function SlideBar({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);
  const logOut = () => {
    dispatch(logoutAction());
    navigate("/login");
    toast.success("Đăng xuất thành công");
  };
  const SideLinks = userInfo?.isAdmin
    ? [
        {
          name: "Trang chủ",
          link: "/dashbroad",
          icon: BsFillGridFill,
        },
        {
          name: "Danh sách bài viết",
          link: "/course",
          icon: FaListAlt,
        },
        {
          name: "Thêm bài viết",
          link: "/addCourse",
          icon: RiMovie2Fill,
        },
        {
          name: "Thể loại",
          link: "/categories",
          icon: HiViewGridAdd,
        },
        {
          name: "Người dùng",
          link: "/user",
          icon: FaUser,
        },
        {
          name: "Thông tin cá nhân",
          link: "/profile",
          icon: FiSettings,
        },
        {
          name: "Yêu thích",
          link: "/favorites",
          icon: FaHeart,
        },
        {
          name: "Đổi mật khẩu",
          link: "/password",
          icon: RiLockPasswordLine,
        },
      ]
    : userInfo
    ? [
        {
          name: "Thông tin cá nhân",
          link: "/profile",
          icon: FiSettings,
        },
        {
          name: "Yêu thích",
          link: "/favorites",
          icon: FaHeart,
        },
        {
          name: "Đổi mật khẩu",
          link: "/password",
          icon: RiLockPasswordLine,
        },
      ]
    : [];
  const active = "bg-dryGray text-subMain";
  const hover = "hover:text-white hover:bg-main";
  const inActive =
    "rounded font-medium text-sm transitions flex gap-3 items-center p-4";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive}  ${hover}`;
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2">
        <div className="xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6">
          <div className="col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5">
            {SideLinks.map((link, index) => (
              <NavLink to={link?.link} key={index} className={Hover}>
                <link.icon /> <p>{link?.name}</p>
              </NavLink>
            ))}
            <button onClick={logOut} className={`${inActive} ${hover} w-full `}>
              <RiLogoutCircleLine />
              Đăng xuất
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="10"
            data-aos-offset="200"
            className="col-span-6 rounded-md bg-dry border border-gray-800 p-6"
          >
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SlideBar;
