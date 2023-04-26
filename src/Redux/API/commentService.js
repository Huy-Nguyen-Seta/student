import Axios from "./axios";

const getCommentByCourseService = async (id) => {
  const { data } = await Axios.get(`/comment/course/${id}`);
  return data;
};
const postCommentById = async ({payload, courseId}) => {
  const { data } = await Axios.post(`/comment/${courseId}`, payload);
  return data;
};
export { getCommentByCourseService, postCommentById };
