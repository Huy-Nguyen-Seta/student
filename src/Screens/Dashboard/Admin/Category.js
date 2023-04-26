import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { HiPlusCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import CategoryModal from "../../../Component/Modal/CategoryModal";
import { Empty } from "../../../Component/Notifications/Emty";
import Loader from "../../../Component/Notifications/Loader";
import Table2 from "../../../Component/Table2";
import {
  deleteCategoriesAction,
  getAllCategoriesAction,
} from "../../../Redux/Actions/categoriesActions";
import { DELETE_CATEGORIES_RESET } from "../../../Redux/Constants/categoriesConstant";
import SlideBar from "../SlideBar";

function Categories() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState();
  const { categories, isLoading } = useSelector((state) => state.getCategories);
  const { isSuccess, isError } = useSelector((state) => state.deleteCategories);
  const handleEdit = (id) => {
    setCategory(id);
    setModalOpen((pre) => !pre);
  };
  const handleDeleteCategory = (id) => {
    window.confirm("Bạn có chắc muốn xóa thể loại này không ?") &&
      dispatch(deleteCategoriesAction(id));
  };
  useEffect(() => {
    dispatch(getAllCategoriesAction());
    if (!modalOpen) {
      setCategory();
    }
    if (isError) {
      toast.error(isError);
      dispatch({ type: DELETE_CATEGORIES_RESET });
    }
    if (isSuccess) {
      dispatch({ type: DELETE_CATEGORIES_RESET });
    }
  }, [modalOpen, dispatch, isError, isSuccess]);

  return (
    <SlideBar>
      <CategoryModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        category={category}
      />
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Thể loại</h2>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-subMain font-medium flex-rows gap-4 transitions hover:bg-main border border-subMain py-2 px-4 text-white  rounded"
          >
            <HiPlusCircle />
            Thêm mới
          </button>
        </div>
        {isLoading ? (
          <Loader />
        ) : categories?.length > 0 ? (
          <Table2 onDeleteItem={handleDeleteCategory} />
        ) : (
          <Empty />
        )}
      </div>
    </SlideBar>
  );
}

export default Categories;
