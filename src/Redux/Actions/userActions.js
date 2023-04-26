import * as userConstants from "../Constants/userConstant";
import * as userApi from "../API/userService";
// import toast from "react-hot-toast";
import { ErrorActions } from "../Protection";
import { toast } from "react-hot-toast";
import * as courseConstants from "../Constants/courseConstant";
import * as categoriesConstants from "../Constants/categoriesConstant";

const loginAction = (datas) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_LOGIN_REQUEST });
    const response = await userApi.loginService(datas);
    dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
  } catch (error) {
    ErrorActions(error, dispatch, userConstants.USER_LOGIN_FAIL);
    //toast.error(error);
  }
};

const registerAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });
    const response = await userApi.registerService(data);
    dispatch({ type: userConstants.USER_REGISTER_SUCCESS, payload: response });
    dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
  } catch (error) {
    ErrorActions(error, dispatch, userConstants.USER_REGISTER_FAIL);
    //toast.error(error);
  }
};

const logoutAction = () => (dispatch) => {
  userApi.logoutService();
  dispatch({ type: userConstants.USER_LOGOUT });
  dispatch({ type: userConstants.USER_LOGIN_RESET });
  dispatch({ type: userConstants.USER_REGISTER_RESET });
  dispatch({ type: userConstants.DELETE_FAVORITE_RESET });
  dispatch({ type: userConstants.USER_PROFILE_RESET });
  dispatch({ type: userConstants.DELETE_USER_RESET });
  dispatch({ type: userConstants.USER_CHANGE_PASSWORD_RESET });
  dispatch({ type: userConstants.GET_ALL_USER_RESET });
  dispatch({ type: userConstants.LIKED_COURSE_RESET });

  dispatch({ type: courseConstants.COURSE_DETAILS_RESET });
  dispatch({ type: courseConstants.CREATE_REVIEW_RESET });
  dispatch({ type: courseConstants.CREATE_COURSE_RESET });

  dispatch({ type: categoriesConstants.CREATE_CATEGORIES_RESET });
  dispatch({ type: categoriesConstants.UPDATE_CATEGORIES_RESET });
  dispatch({ type: categoriesConstants.DELETE_CATEGORIES_RESET });

};

const updateProfileAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_PROFILE_REQUEST });
    const response = await userApi.updateProfileService(user);
    dispatch({
      type: userConstants.USER_PROFILE_SUCCESS,
      payload: response,
    });
    toast.success("Cập nhât thông tin thành công");
    dispatch({
      type: userConstants.USER_LOGIN_SUCCESS,
      payload: response,
    });
  } catch (error) {
    ErrorActions(error, dispatch, userConstants.USER_PROFILE_FAIL);
  }
};

const changePasswordAction = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: userConstants.USER_CHANGE_PASSWORD_REQUEST });
    const response = await userApi.changePasswordService(data);
    dispatch({
      type: userConstants.USER_CHANGE_PASSWORD_SUCCESS,
      payload: response,
    });
  } catch (err) {
    ErrorActions(err, dispatch, userConstants.USER_CHANGE_PASSWORD_FAIL);
  }
};
const getFavoriteCourseAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_GET_FAVORITE_REQUEST });
    const response = await userApi.getFavoriteCourse(id);
    dispatch({
      type: userConstants.USER_GET_FAVORITE_SUCCESS,
      payload: response,
    });
  } catch (err) {
    ErrorActions(err, dispatch, userConstants.USER_GET_FAVORITE_FAIL);
  }
};
const deleteFavoriteCourseAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: userConstants.USER_GET_FAVORITE_REQUEST });
    const response = await userApi.deleteFavoriteCourse(id);
    dispatch({
      type: userConstants.DELETE_FAVORITE_SUCCESS,
      payload: response,
    });
  } catch (err) {
    ErrorActions(err, dispatch, userConstants.DELETE_FAVORITE_FAIL);
  }
};

const getUsers = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: userConstants.GET_ALL_USER_REQUEST });
    const response = await userApi.getAllUserService(id);
    dispatch({
      type: userConstants.GET_ALL_USER_SUCCESS,
      payload: response,
    });
  } catch (err) {
    ErrorActions(err, dispatch, userConstants.GET_ALL_USER_FAIL);
  }
};
const deleteUsers = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: userConstants.DELETE_USER_REQUEST });
    const response = await userApi.deleteUserService(id);
    dispatch({
      type: userConstants.DELETE_USER_SUCCESS,
      payload: response,
    });
    dispatch(userApi.getAllUserService());
  } catch (err) {
    ErrorActions(err, dispatch, userConstants.DELETE_USER_FAIL);
  }
};

const userLikeCourseActions = (courseId, userId) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.LIKED_COURSE_REQUEST });
    const response = await userApi.likeCourseService(courseId, userId);
    dispatch({
      type: userConstants.LIKED_COURSE_SUCCESS,
      payload: response,
    });
    toast.success("Bài viết đã được thêm vào danh sách yêu thích");
    dispatch(getFavoriteCourseAction());
  } catch (err) {
    ErrorActions(err, dispatch, userConstants.LIKED_COURSE_FAIL);
  }
};

export {
  loginAction,
  registerAction,
  logoutAction,
  updateProfileAction,
  changePasswordAction,
  getFavoriteCourseAction,
  deleteFavoriteCourseAction,
  getUsers,
  deleteUsers,
  userLikeCourseActions,
};
