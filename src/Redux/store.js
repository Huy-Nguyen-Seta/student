import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  createCategoriesReducer,
  deleteCategoriesReducer,
  getCategoriesReducer,
  updateCategoriesReducer,
} from "./Reducers/categoriesReducer";
import { createCommentCourseReducer } from "./Reducers/commentReducer";
import {
  createCourseReducer,
  getCourseDetailsReducer,
  getCoursePagingReducer,
  getCourseRandomReducer,
  getCourseReducer,
  getCourseTopRateReducer,
} from "./Reducers/courseReducer";
import {
  getLessonByCourseIdReducer,
  getLessonByIdReducer,
} from "./Reducers/lessonReducer";
import {
  deleteFavoriteReducer,
  deleteUserReducer,
  getUserReducer,
  userChangePasswordReducer,
  userGetFavoriteReducer,
  userLikeCourseReducer,
  userLoginReducer,
  userProfileReducer,
  userRegisterReducer,
} from "./Reducers/userReducer";

const rootReducer = combineReducers({
  //USER
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
  userPassword: userChangePasswordReducer,
  getFavorite: userGetFavoriteReducer,
  deleteFavorite: deleteFavoriteReducer,
  getUsers: getUserReducer,
  deleteUsers: deleteUserReducer,
  likeCourse: userLikeCourseReducer,
  //categories
  getCategories: getCategoriesReducer,
  createCategories: createCategoriesReducer,
  deleteCategories: deleteCategoriesReducer,
  updateCategories: updateCategoriesReducer,
  listCourse: getCourseReducer,
  listCoursePaging: getCoursePagingReducer,
  getRandomCourse: getCourseRandomReducer,
  getDetailsCourse: getCourseDetailsReducer,
  getTopRatedCourse: getCourseTopRateReducer,
  listLessonById: getLessonByIdReducer,
  listLessonByCourseId: getLessonByCourseIdReducer,
  reviewCourse: createCommentCourseReducer,
  createCourse: createCourseReducer
});

const getInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: getInfoFromStorage },
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
