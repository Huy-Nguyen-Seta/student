import { toast } from "react-hot-toast";
import {
  getAllCoursePagingService,
  getAllCourseService,
  getRandomCourseService,
  getCourseByIdService,
  getTopRatedCourseService
} from "../API/courseService";
import * as courseConstants from "../Constants/courseConstant";
import { ErrorActions } from "../Protection";

export const getAllCourseActions =
  (category, rate, search, pageNumber) => async (dispatch) => {
    try {
      dispatch({ type: courseConstants.COURSE_LIST_REQUEST });
      const response = await getAllCourseService(
        category,
        rate,
        search,
        pageNumber
      );
      dispatch({
        type: courseConstants.COURSE_LIST_SUCCESS,
        payload: response,
      });
    } catch (err) {
      ErrorActions(err, dispatch, courseConstants.COURSE_LIST_FAIL);
    }
  };

export const getPagingCourseActions =
  (page = 1, limit = 5) =>
  async (dispatch) => {
    try {
      dispatch({ type: courseConstants.COURSE_LIST_PAGING_REQUEST });
      const response = await getAllCoursePagingService({
        page,
        limit,
      });
      dispatch({
        type: courseConstants.COURSE_LIST_PAGING_SUCCESS,
        payload: response,
      });
    } catch (err) {
      ErrorActions(err, dispatch, courseConstants.COURSE_LIST_PAGING_FAIL);
    }
  };

export const getRandomCourseAction = () => async (dispatch) => {
  try {
    dispatch({ type: courseConstants.COURSE_RANDOM_REQUEST });
    const response = await getRandomCourseService();
    dispatch({
      type: courseConstants.COURSE_RANDOM_SUCCESS,
      payload: response,
    });
  } catch (err) {
    ErrorActions(err, dispatch, courseConstants.COURSE_RANDOM_FAIL);
  }
};

export const getDetailsCourseAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: courseConstants.COURSE_DETAILS_REQUEST });
    const response = await getCourseByIdService(id)
    dispatch({
      type: courseConstants.COURSE_DETAILS_SUCCESS,
      payload: response,
    });
  } catch (err) {
    ErrorActions(err, dispatch, courseConstants.COURSE_DETAILS_FAIL);
  }
};

export const getTopRatedCourseAction = () => async (dispatch) => {
  try {
    dispatch({ type: courseConstants.COURSE_TOP_RATED_REQUEST });
    const response = await getTopRatedCourseService();
    dispatch({
      type: courseConstants.COURSE_TOP_RATED_SUCCESS,
      payload: response,
    });
  } catch (err) {
    ErrorActions(err, dispatch, courseConstants.COURSE_TOP_RATED_FAIL);
  }
};

export const postCourseAction = () => async (dispatch) => {
  try {
    dispatch({ type: courseConstants.CREATE_COURSE_REQUEST });
    const response = await postCourseAction();
    dispatch({
      type: courseConstants.CREATE_COURSE_SUCCESS,
      payload: response,
    });
    toast.success("Thêm mới bài viết hành công")
  } catch (err) {
    ErrorActions(err, dispatch, courseConstants.CREATE_COURSE_FAIL);
  }
};