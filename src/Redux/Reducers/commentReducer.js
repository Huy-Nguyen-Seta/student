import * as commentConstants from "../Constants/commentConstant";

export const getCommentByIdReducer = (state = { comment: [] }, action) => {
  switch (action.type) {
    case commentConstants.GET_COMMENT_BY_COURSE_ID_REQUEST:
      return { isLoading: true };
    case commentConstants.GET_COMMENT_BY_COURSE_ID_SUCCESS:
      return { isLoading: false, lesson: action.payload };
    case commentConstants.GET_COMMENT_BY_COURSE_ID_FAIL:
      return { isLoading: false, isError: action.payload };
    case commentConstants.GET_COMMENT_BY_COURSE_ID_RESET:
      return { comment: [] };
    default:
      return state;
  }
};

export const createCommentCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case commentConstants.CREATE_COMMENT_REQUEST:
      return { isLoading: true };
    case commentConstants.CREATE_COMMENT_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
      };
    case commentConstants.CREATE_COMMENT_FAIL:
      return { isLoading: false, isError: action.payload };
    case commentConstants.CREATE_COMMENT_RESET:
      return {};
    default:
      return state;
  }
};
