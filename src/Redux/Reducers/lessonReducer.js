import * as lessonConstants from "../Constants/lessonConstant";

export const getLessonByIdReducer = (state = { lesson: {} }, action) => {
    switch (action.type) {
      case lessonConstants.LESSON_LIST_BY_ID_REQUEST:
        return { isLoading: true };
      case lessonConstants.LESSON_LIST_BY_ID_SUCCESS:
        return { isLoading: false, lesson: action.payload };
      case lessonConstants.LESSON_LIST_BY_ID_FAIL:
        return { isLoading: false, isError: action.payload };
      case lessonConstants.LESSON_LIST_BY_ID_RESET:
        return { lesson: {} };
      default:
        return state;
    }
  };
  export const getLessonByCourseIdReducer = (state = { lesson: [] }, action) => {
    switch (action.type) {
      case lessonConstants.LESSON_LIST_BY_COURSE_ID_REQUEST:
        return { isLoading: true };
      case lessonConstants.LESSON_LIST_BY_COURSE_ID_SUCCESS:
        return { isLoading: false, lesson: action.payload };
      case lessonConstants.LESSON_LIST_BY_COURSE_ID_FAIL:
        return { isLoading: false, isError: action.payload };
      case lessonConstants.LESSON_LIST_BY_COURSE_ID_RESET:
        return { lesson: [] };
      default:
        return state;
    }
  };