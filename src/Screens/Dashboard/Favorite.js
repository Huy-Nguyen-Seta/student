import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Empty } from "../../Component/Notifications/Emty";
import Loader from "../../Component/Notifications/Loader";
import Table from "../../Component/Table";
import {
  deleteFavoriteCourseAction,
  getFavoriteCourseAction,
} from "../../Redux/Actions/userActions";
import { USER_GET_FAVORITE_RESET } from "../../Redux/Constants/userConstant";
import SlideBar from "./SlideBar";

function Favorite() {
  const dispatch = useDispatch();

  const { isLoading, isError, likeCourse } = useSelector(
    (state) => state.getFavorite
  );
  const {
    isLoading: deleteLoading,
    isError: deleteError,
    isSuccess,
  } = useSelector((state) => state.deleteFavorite);
  const handleRemoveAllLikeCourse = () => {
    window.confirm("Bạn có chắc muốn xóa tất cả khóa học yêu thích") &&
      dispatch(deleteFavoriteCourseAction());
  };
  useEffect(() => {
    dispatch(getFavoriteCourseAction());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Xóa tất cả yêu thích thành công");
      dispatch({ type: USER_GET_FAVORITE_RESET });
    }
    if (deleteError) {
      toast.error(deleteError);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(isError);
      dispatch({ type: USER_GET_FAVORITE_RESET });
    }
  }, [dispatch, isError]);

  return (
    <SlideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-6">
          <h2 className="text-xl font-bold">Bài viết yêu thích</h2>
          <button
            disabled={deleteLoading || likeCourse?.length === 0}
            onClick={handleRemoveAllLikeCourse}
            className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded"
          >
            {deleteLoading ? "Đang xóa ... " : "Xóa tất cả"}
          </button>
        </div>
        {isLoading ? (
          <Loader />
        ) : likeCourse?.length > 0 ? (
          <Table />
        ) : (
          <Empty />
        )}
      </div>
    </SlideBar>
  );
}

export default Favorite;
