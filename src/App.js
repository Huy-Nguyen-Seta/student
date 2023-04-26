import { Route, Routes } from "react-router-dom";
import CoursePage from "./Screens/Course";
import AboutUs from "./Screens/AboutUs";
import ContactUs from "./Screens/ContactUs";
import HomeScreen from "./Screens/HomeScreen";
import NotFound from "./Screens/NotFound";
import SingleCourse from "./Screens/SingleCourse";
import WatchPage from "./Screens/WatchPage";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Dashboard/Profile";
import Aos from "aos";
import Password from "./Screens/Dashboard/Password";
import Favorite from "./Screens/Dashboard/Favorite";
import ListCourse from "./Screens/Dashboard/Admin/ListCourse";
import Dashboard from "./Screens/Dashboard/Admin/Dashboard";
import Categories from "./Screens/Dashboard/Admin/Category";
import Users from "./Screens/Dashboard/Admin/User";
import AddCourse from "./Screens/Dashboard/AddCourse";
import ScrollOnTop from "./ScrollOnTop";
import SidebarContext from "./Context/DrawerContext";
import ToastContainer from "./Component/Notifications/ToastComtainer";
import { AdminProtectedRouter, PrivateProtectedRouter } from "./ProtectRouter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategoriesAction } from "./Redux/Actions/categoriesActions";
import { getFavoriteCourseAction } from "./Redux/Actions/userActions";
import { toast } from "react-hot-toast";
import { USER_GET_FAVORITE_RESET } from "./Redux/Constants/userConstant";
import { getAllCourseActions } from "./Redux/Actions/courseAction";
import AddLesson from "./Screens/Dashboard/AddLesson";

export default function App() {
  Aos.init();
  const dispatch = useDispatch();
  const { useInfo } = useSelector((state) => state.userLogin);

  const { isError, isSuccess } = useSelector((state) => state.getFavorite);
  const { isError: catError } = useSelector((state) => state.getCategories);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
    dispatch(getAllCourseActions());
  }, []);

  useEffect(() => {
    //dispatch(getAllCategoriesAction());
    //dispatch(getAllCourseActions());
    if (useInfo) {
      dispatch(getFavoriteCourseAction());
    }
    if (isError || catError) {
      toast.error("Đã có lỗi xảy ra, vui lòng thử lại");
      dispatch({ type: USER_GET_FAVORITE_RESET });
    }
    if (isSuccess) {
      dispatch({ type: USER_GET_FAVORITE_RESET });
    }
  }, [dispatch, useInfo, isError, catError, isSuccess]);

  return (
    <>
      <ToastContainer />
      <SidebarContext>
        <ScrollOnTop>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/course/:search" element={<CoursePage />} />
            <Route path="/courses/:id" element={<SingleCourse />} />
            <Route
              path="/course/:id/lesson/:lessonId"
              element={<WatchPage />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/addcourse" element={<AddCourse />} />
            <Route path="/addlesson" element={<AddLesson />} />

            <Route element={<PrivateProtectedRouter />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/password" element={<Password />} />
              <Route path="/favorites" element={<Favorite />} />

              <Route element={<AdminProtectedRouter />}>
                <Route path="/user" element={<Users />} />
                <Route path="/dashbroad" element={<Dashboard />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/listCourse" element={<ListCourse />} />
              </Route>
            </Route>
          </Routes>
        </ScrollOnTop>
      </SidebarContext>
    </>
  );
}
