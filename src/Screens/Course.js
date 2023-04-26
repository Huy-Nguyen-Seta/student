import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { CgFileDocument } from "react-icons/cg";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Course from "../Component/Course";
import FIlter from "../Component/FIlter";
import Loader from "../Component/Notifications/Loader";
import Layout from "../Layout/Layout";
import { getAllCourseActions } from "../Redux/Actions/courseAction";
function CoursePage() {
  const {search} = useParams()

  const dispatch = useDispatch();
  const sameClass =
    "text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain hover:border-subMain";
  const { isLoading, isError, course, pages, page } = useSelector(
    (state) => state.listCourse
  );
  const { categories } = useSelector((state) => state.getCategories);
  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
  }, [dispatch, isError]);

  const nextPage = () => {
    dispatch(
      getAllCourseActions({
        page: page + 1,
      })
    );
  };
  const prePage = () => {
    dispatch(
      getAllCourseActions({
        page: page - 1,
      })
    );
  };
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <FIlter categories={categories} />
        <p className="text-lg font-medium my-6">
          Tổng số{" "}
          <span className="font-bold text-subMain">{course?.length || 0}</span>
          {""} bài viết {search && " được tìm thấy cho : " + search}
        </p>
        {isLoading ? (
          <div className="w-full gap-6 flex-colo min-h-screen">
            <Loader />
          </div>
        ) : !course?.length > 0 ? (
          <>
            {" "}
            <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1]
                .slice(0, page)
                ?.map((item, index) => (
                  <Course
                    key={index}
                    course={{ name: "Tổng quan về Reactjs" }}
                  />
                ))}
            </div>
            <div className="w-full flex-rows gap-6 md:my-20 my-10">
              <button onClick={prePage} disabled={page === 1} className={sameClass}>
                <TbPlayerTrackPrev className="text-xl" />
              </button>
              <button onClick={nextPage} disabled={page === pages} className={sameClass}>
                <TbPlayerTrackNext className="text-xl" />
              </button>
            </div>
          </>
        ) : (
          <div className="w-full gap-6 flex-colo min-h-screen">
            <div className="w-24 h-24 p-5 rounded-full mb-4 bg-dry text-subMain text-4xl flex-colo">
              <CgFileDocument size={120} />
            </div>
            <p className="text-border text-lg">Không tìm thấy khóa học nào</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default CoursePage;
