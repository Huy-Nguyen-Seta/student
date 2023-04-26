import * as courseConstants from "../Constants/courseConstant";

export const getCourseReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case courseConstants.COURSE_LIST_REQUEST:
      return { isLoading: true };
    case courseConstants.COURSE_LIST_SUCCESS:
      return {
        isLoading: false,
        courses: action.payload,
        pages: action?.payload?.pages,
        page: action?.payload?.page,
        totalCourse: action?.payload?.totalCourse,
      };
    case courseConstants.COURSE_LIST_FAIL:
      return { isLoading: false, isError: action.payload };
    // case courseConstants.COURSE_LIST_RESET:
    //   return { courses: [] };
    default:
      return state;
  }
};

export const getCoursePagingReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case courseConstants.COURSE_LIST_PAGING_REQUEST:
      return { isLoading: true };
    case courseConstants.COURSE_LIST_PAGING_SUCCESS:
      return {
        isLoading: false,
        courses: action.payload,
        pages: action?.payload?.pages,
        page: action?.payload?.page,
        totalCourse: action?.payload?.totalCourse,
      };
    case courseConstants.COURSE_LIST_PAGING_FAIL:
      return { isLoading: false, isError: action.payload };
    // case courseConstants.COURSE_LIST_RESET:
    //   return { courses: [] };
    default:
      return state;
  }
};

export const getCourseRandomReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case courseConstants.COURSE_RANDOM_REQUEST:
      return { isLoading: true };
    case courseConstants.COURSE_RANDOM_SUCCESS:
      return {
        isLoading: false,
        courses: action.payload,
      };
    case courseConstants.COURSE_RANDOM_FAIL:
      return { isLoading: false, isError: action.payload };
    // case courseConstants.COURSE_LIST_RESET:
    //   return { courses: [] };
    default:
      return state;
  }
};

export const getCourseDetailsReducer = (state = { courses: {} }, action) => {
  switch (action.type) {
    case courseConstants.COURSE_DETAILS_REQUEST:
      return { isLoading: true };
    case courseConstants.COURSE_DETAILS_SUCCESS:
      return {
        isLoading: false,
        courses: action.payload,
      };
    case courseConstants.COURSE_DETAILS_FAIL:
      return { isLoading: false, isError: action.payload };
    // case courseConstants.COURSE_LIST_RESET:
    //   return { courses: [] };
    default:
      return state;
  }
};

export const getCourseTopRateReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case courseConstants.COURSE_TOP_RATED_REQUEST:
      return { isLoading: true };
    case courseConstants.COURSE_TOP_RATED_SUCCESS:
      return {
        isLoading: false,
        courses: action.payload,
      };
    case courseConstants.COURSE_TOP_RATED_FAIL:
      return { isLoading: false, isError: action.payload };
    // case courseConstants.COURSE_LIST_RESET:
    //   return { courses: [] };
    default:
      return state;
  }
};


export const createCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case courseConstants.CREATE_COURSE_REQUEST:
      return { isLoading: true };
    case courseConstants.CREATE_COURSE_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
      };
    case courseConstants.CREATE_COURSE_FAIL:
      return { isLoading: false, isError: action.payload };
    case courseConstants.CREATE_COURSE_RESET:
      return {};
    default:
      return state;
  }
};