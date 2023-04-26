import { async } from "@firebase/util";
import Axios from "./axios";

//register user
const registerService = async (user) => {
  const { data } = await Axios.post("/user/register", user);
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};

//logout
const logoutService = () => {
  localStorage.removeItem("userInfo");
  return null;
};

const loginService = async (user) => {
  const { data } = await Axios.post("/user/login", user);
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};
const updateProfileService = async (user) => {
  const { data } = await Axios.put("/user/profile", user);
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};
const changePasswordService = async (passwords, id) => {
  const { data } = await Axios.put("/users/pass");
  return data;
};
const getFavoriteCourse = async (id) => {
  const { data } = await Axios.put("/users/favorite");
  return data;
};
const deleteFavoriteCourse = async (id) => {
  const { data } = await Axios.delete(`/users/favorite/${id}`);
  return data;
};
const getAllUserService = async (id) => {
  const { data } = await Axios.get("/users");
  return data;
};
const deleteUserService = async (id) => {
  const { data } = await Axios.delete(`/users/${id}`);
  return data;
};
const likeCourseService = async(courseId, userId) => {
  const {data} = await Axios.post(`user/course/`)
  return data
}

export {
  registerService,
  loginService,
  logoutService,
  updateProfileService,
  changePasswordService,
  getFavoriteCourse,
  deleteFavoriteCourse,
  getAllUserService,
  deleteUserService,
  likeCourseService
};
