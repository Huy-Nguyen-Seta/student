import { logoutAction } from "./Actions/userActions";

export const ErrorActions = (error, dispatch, action) => {
  const message = error?.response?.message
    ? error.response.data.message
    : error.message;
  if (message === "") {
    dispatch(logoutAction());
  }
  return dispatch({ type: action, payload: message });
};

export const tokenProtection = (getState) => {
   const {
    userLogin: {userInfo}
   } = getState();
   if(!userInfo?.token){
    return null;
   }else {
    return userInfo?.token
   }
}