import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Empty } from "../../../Component/Notifications/Emty";
import Loader from "../../../Component/Notifications/Loader";
import Table2 from "../../../Component/Table2";
import { deleteUsers, getUsers } from "../../../Redux/Actions/userActions";
import {
  DELETE_USER_RESET,
  GET_ALL_USER_RESET
} from "../../../Redux/Constants/userConstant";
import SlideBar from "../SlideBar";
function Users() {
  const dispatch = useDispatch();

  const { isLoading, isError, users } = useSelector((state) => state.getUsers);
  const {
    isError: deleteError,
    isSuccess,
  } = useSelector((state) => state.deleteUsers);
  const handleRemoveUser = (id) => {
    window.confirm("Bạn có chắc muốn xóa người dùng này") &&
      dispatch(deleteUsers(id));
  };
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Xóa tất cả yêu thích thành công");
      dispatch({ type: DELETE_USER_RESET });
    }
    if (deleteError) {
      toast.error(deleteError);
    }
  }, [isSuccess, dispatch, deleteError]);

  useEffect(() => {
    if (isError) {
      toast.error(isError);
      dispatch({ type: GET_ALL_USER_RESET });
    }
  }, [dispatch, isError]);
  return (
    <SlideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Người dùng</h2>

        {isLoading ? <Loader /> : users?.length > 0 ? <Table2 onDeleteItem={handleRemoveUser}/> : <Empty />}
      </div>
    </SlideBar>
  );
}

export default Users;
