import * as categoriesConstants from "../Constants/categoriesConstant";

export const getCategoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
      case categoriesConstants.GET_CATEGORIES_REQUEST:
        return { isLoading: true };
      case categoriesConstants.GET_CATEGORIES_SUCCESS:
        return { isLoading: false, categories: action.payload };
      case categoriesConstants.GET_CATEGORIES_FAIL:
        return { isLoading: false, isError: action.payload };
      case categoriesConstants.GET_CATEGORIES_RESET:
        return { user: [] };
      default:
        return state;
    }
  };

  export const createCategoriesReducer = (state = { }, action) => {
    switch (action.type) {
      case categoriesConstants.CREATE_CATEGORIES_REQUEST:
        return { isLoading: true };
      case categoriesConstants.CREATE_CATEGORIES_SUCCESS:
        return { isLoading: false, isSuccess: true };
      case categoriesConstants.CREATE_CATEGORIES_FAIL:
        return { isLoading: false, isError: action.payload };
      case categoriesConstants.CREATE_CATEGORIES_RESET:
        return { };
      default:
        return state;
    }
  };

  export const updateCategoriesReducer = (state = { }, action) => {
    switch (action.type) {
      case categoriesConstants.UPDATE_CATEGORIES_REQUEST:
        return { isLoading: true };
      case categoriesConstants.UPDATE_CATEGORIES_SUCCESS:
        return { isLoading: false, isSuccess: true };
      case categoriesConstants.UPDATE_CATEGORIES_FAIL:
        return { isLoading: false, isError: action.payload };
      case categoriesConstants.UPDATE_CATEGORIES_RESET:
        return { };
      default:
        return state;
    }
  };

  export const deleteCategoriesReducer = (state = { }, action) => {
    switch (action.type) {
      case categoriesConstants.DELETE_CATEGORIES_REQUEST:
        return { isLoading: true };
      case categoriesConstants.DELETE_CATEGORIES_SUCCESS:
        return { isLoading: false, isSuccess: true };
      case categoriesConstants.DELETE_CATEGORIES_FAIL:
        return { isLoading: false, isError: action.payload };
      case categoriesConstants.DELETE_CATEGORIES_RESET:
        return { };
      default:
        return state;
    }
  };