import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Empty } from "../../../Component/Notifications/Emty";
import Loader from "../../../Component/Notifications/Loader";
import Table from "../../../Component/Table";
import {
  getPagingCourseActions,
} from "../../../Redux/Actions/courseAction";
import SlideBar from "../SlideBar";

function ListCourse() {
  const sameClass =
    "text-white p-2 rounded font-semibold border-2 border-subMain hover:bg-subMain hover:border-subMain";
  const dispatch = useDispatch();
  const { isLoading, isError, course, pages, page } = useSelector(
    (state) => state.listCoursePaging
  );
  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
  }, [isError]);
  useEffect(() => {
    dispatch(getPagingCourseActions());
  }, [dispatch]);

  const nextPage = () => {
    dispatch(
      getPagingCourseActions({
        pageNumber: page + 1,
      })
    );
  };
  const prePage = () => {
    dispatch(
      getPagingCourseActions({
        pageNumber: page - 1,
      })
    );
  };
  return (
    <SlideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-6">
          <h2 className="text-xl font-bold">Bài viết</h2>
          <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded">
            Xóa tất cả
          </button>
        </div>
        {isLoading ? (
          <Loader />
        ) : course?.length > 0 ? (
          <>
            <Table />
            <div className="w-full flex-rows gap-6  my-5">
              <button
                onClick={prePage}
                disabled={page === 1}
                className={sameClass}
              >
                <TbPlayerTrackPrev className="text-xl" />
              </button>
              <button
                onClick={nextPage}
                disabled={page === pages}
                className={sameClass}
              >
                <TbPlayerTrackNext className="text-xl" />
              </button>
            </div>
          </>
        ) : (
          <Empty />
        )}
      </div>
    </SlideBar>
  );
}

export default ListCourse;
