import Axios from "./axios";

const getLessonByCourseIdService = async (id) => {
  const { data } = await Axios.get(`/lesson/course/${id}`);
  return data;
};
const getLessonById = async (id) => {
  const { data } = await Axios.delete(`/lesson/${id}`);
  return data;
};
export { getLessonByCourseIdService, getLessonById };
