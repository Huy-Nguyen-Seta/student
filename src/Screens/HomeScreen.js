import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../Component/Home/Banner";
import PopularCourse from "../Component/Home/PopularCourse";
import Promos from "../Component/Home/Promos";
import TopRate from "../Component/Home/TopRate";
import Layout from "../Layout/Layout";
import {
  getAllCourseActions,
  getRandomCourseAction,
  getTopRatedCourseAction,
} from "../Redux/Actions/courseAction";

function HomeScreen() {
  const dispatch = useDispatch();
  const {
    isLoading: randomLoading,
    isError: randomError,
    course: randomCourse,
  } = useSelector((state) => state.getRandomCourse);
  const {
    isLoading: topLoading,
    isError: topError,
    course: topCourse,
  } = useSelector((state) => state.getTopRatedCourse);
  const { isLoading, isError, course } = useSelector(
    (state) => state.listCourse
  );
  useEffect(() => {
    dispatch(getRandomCourseAction());
    dispatch(getAllCourseActions());
    dispatch(getTopRatedCourseAction());
  }, []);

  useEffect(() => {
    if (isError || randomError || topError) {
      toast.error("Đã có lỗi xảy ra !");
    }
  }, [dispatch, isError, randomError, topError]);

  return (
    <>
      <Layout>
        <div className="container mx-auto min-h-screen px-2 mb-6">
          <Banner course={course} isLoading={isLoading} />
          <PopularCourse course={topCourse} isLoading={topLoading} />
          <Promos course={randomCourse} isLoading={randomLoading} />
          <TopRate />
        </div>
      </Layout>
    </>
  );
}

export default HomeScreen;
