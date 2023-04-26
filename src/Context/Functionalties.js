import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { userLikeCourseActions } from "../Redux/Actions/userActions";

const IfCourseLiked = (course) => {
  const { likeCourse } = useSelector((state) => state.getFavorite);
  return likeCourse.find((item) => item?.id === course?.id);
};

const likeCourse = (course, dispatch, userInfo) => {
  return !userInfo
    ? () => toast.errors("Tính năng cần đang nhập")
    : dispatch(userLikeCourseActions(userInfo?.id, course?.id));
};
export { IfCourseLiked, likeCourse };
