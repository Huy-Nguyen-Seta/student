import { async } from "@firebase/util";
import Axios from "./axios";

export const getAllCourseService = async ({
  category,
  time,
  rate,
  search,
  page,
  limit,
}) => {
  const { data } = await Axios.get(`/course?category=${category}`);
  return data;
};

export const getAllCoursePagingService = async ({ page, limit }) => {
  const { data } = await Axios.get(`/course?page=${page}&limit=${limit}`);
  return data;
};

export const getRandomCourseService = async () => {
  const { data } = await Axios.get(`/course/random/all`);
  return data;
};
export const getCourseByIdService = async (id) => {
  const { data } = await Axios.get(`/course/{id}`);
  return data;
};

export const getTopRatedCourseService = async () => {
  const { data } = await Axios.get(`/course/top-rate`);
  return data;
};

export const postCourseService = async (payload) => {
  const { data } = await Axios.post(`/course/top-rate`, payload);
  return data;
};
