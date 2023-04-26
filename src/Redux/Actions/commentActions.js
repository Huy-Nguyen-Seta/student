import { toast } from "react-hot-toast";
import { getCommentByCourseService } from "../API/commentService";
import * as commentConstants from "../Constants/commentConstant";
import { ErrorActions } from "../Protection";

export const getCommentByCourseIdAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: commentConstants.GET_COMMENT_BY_COURSE_ID_REQUEST });
    const response = await getCommentByCourseService(id);
    dispatch({
      type: commentConstants.GET_COMMENT_BY_COURSE_ID_SUCCESS,
      payload: response,
    });
  } catch (err) {
    ErrorActions(err, dispatch, commentConstants.GET_COMMENT_BY_COURSE_ID_FAIL);
  }
};

export const postCommentByCourseIdAction = (id, data) => async (dispatch) => {
  try {
    dispatch({ type: commentConstants.CREATE_COMMENT_REQUEST });
    const response = await getCommentByCourseService({ data });
    dispatch({
      type: commentConstants.CREATE_COMMENT_SUCCESS,
      payload: response,
    });
    toast.success("Đánh giá thành công!")
    dispatch({type: commentConstants.CREATE_COMMENT_RESET})
    dispatch(getCommentByCourseIdAction(id))
  } catch (err) {
    ErrorActions(err, dispatch, commentConstants.CREATE_COMMENT_FAIL);
  }
};
