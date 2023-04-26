import * as categoriesConstants from "../Constants/categoriesConstant";
import * as categoriesAPI from "../API/categoryService";
import { ErrorActions } from "../Protection";
import { toast } from "react-hot-toast";

export const getAllCategoriesAction = () => async (dispatch) => {
  try {
    dispatch({ type: categoriesConstants.GET_CATEGORIES_REQUEST });
    const data = await categoriesAPI.getCategoriesService();
    dispatch({
      type: categoriesConstants.GET_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (err) {
    ErrorActions(err, dispatch, categoriesConstants.GET_CATEGORIES_FAIL);
  }
};

export const createCategoriesAction = (payload) => async (dispatch) => {
  try {
    dispatch({ type: categoriesConstants.CREATE_CATEGORIES_REQUEST });
    await categoriesAPI.createCategoriesService(payload);
    dispatch({ type: categoriesConstants.CREATE_CATEGORIES_SUCCESS });
    toast.success("Taọ thể loại thành công");
    dispatch(getAllCategoriesAction());
  } catch (err) {
    ErrorActions(err, dispatch, categoriesConstants.CREATE_CATEGORIES_FAIL);
  }
};

export const updateCategoriesAction = (payload) => async (dispatch) => {
  try {
    dispatch({ type: categoriesConstants.UPDATE_CATEGORIES_REQUEST });
    await categoriesAPI.updateCategoriesService(payload);
    dispatch({ type: categoriesConstants.UPDATE_CATEGORIES_SUCCESS });
    toast.success("Chỉnh sửa thể loại thành công");
    dispatch(getAllCategoriesAction());
  } catch (err) {
    ErrorActions(err, dispatch, categoriesConstants.UPDATE_CATEGORIES_FAIL);
  }
};

export const deleteCategoriesAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: categoriesConstants.DELETE_CATEGORIES_REQUEST });
    await categoriesAPI.deleteCategoriesService(id);
    dispatch({ type: categoriesConstants.DELETE_CATEGORIES_SUCCESS });
    toast.success("Xóa thể loại thành công");
    dispatch(getAllCategoriesAction());
  } catch (err) {
    ErrorActions(err, dispatch, categoriesConstants.DELETE_CATEGORIES_FAIL);
  }
};
