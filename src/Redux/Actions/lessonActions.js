import { getLessonByCourseIdService, getLessonById } from "../API/lessonSerivce";
import * as lessonConstants from "../Constants/lessonConstant";
import { ErrorActions } from "../Protection";

export const getDetailsLessonAction = (id) => async (dispatch) => {
    try {
      dispatch({ type: lessonConstants.LESSON_LIST_BY_ID_REQUEST });
      const response = await getLessonById(id)
      dispatch({
        type: lessonConstants.LESSON_LIST_BY_ID_SUCCESS,
        payload: response,
      });
    } catch (err) {
      ErrorActions(err, dispatch, lessonConstants.LESSON_LIST_BY_ID_FAIL);
    }
  };

  export const getLessonByCourseIdActions = (id) => async (dispatch) => {
    try {
      dispatch({ type: lessonConstants.LESSON_LIST_BY_COURSE_ID_REQUEST });
      const response = await getLessonByCourseIdService(id)
      dispatch({
        type: lessonConstants.LESSON_LIST_BY_COURSE_ID_SUCCESS,
        payload: response,
      });
    } catch (err) {
      ErrorActions(err, dispatch, lessonConstants.LESSON_LIST_BY_COURSE_ID_FAIL);
    }
  };
  