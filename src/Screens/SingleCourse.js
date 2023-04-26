import React, { useEffect, useState } from "react";
import { BsCollectionFill } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Course from "../Component/Course";
import ShareModal from "../Component/Modal/ShareModal";
import Loader from "../Component/Notifications/Loader";
import CourseInfo from "../Component/Single/CourseInfo";
import CourseRate from "../Component/Single/CourseRate";
import ListLesson from "../Component/Single/ListLesson";
import Title from "../Component/Title";
import Layout from "../Layout/Layout";
import { getDetailsCourseAction } from "../Redux/Actions/courseAction";

function SingleCourse() {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const { isLoading, isError, course } = useSelector(
    (state) => state.getDetailsCourse
  );
  const sameClass = "w-full gap-6 flex-colo min-h-screen";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailsCourseAction(id));
  }, [dispatch, id]);

  return (
    <Layout>
      {false ? (
        <div className={sameClass}>
          <Loader />
        </div>
      ) : false ? (
        <div className={sameClass}>
          <div className={sameClass}>
            <div className="flex-colo w-24 mb-4 h-23 p-5 rounded-full bg-dry text-subMain text-4xl">
              <CgFileDocument />
            </div>
            <p className="text-border text-sm">Danh sách trống</p>
          </div>
        </div>
      ) : (
        <>
          <ShareModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            course={{ id: "1", name: "Reactjs" }}
          />
          <CourseInfo setModalOpen={setModalOpen} />
          <div className="container mx-auto min-h-screen px-2 my-6">
            <ListLesson />
            <CourseRate />
            <div className="my-16">
              <Title title="Bài viết liên quan" Icon={BsCollectionFill} />
              <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1]
                  .slice(0, 5)
                  ?.map((item, index) => (
                    <Course
                      key={index}
                      course={{ name: "Tổng quan về Reactjs" }}
                    />
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}

export default SingleCourse;
