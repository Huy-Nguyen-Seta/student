import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { HiPlusCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategoriesAction,
  updateCategoriesAction,
} from "../../Redux/Actions/categoriesActions";
import {
  CREATE_CATEGORIES_RESET,
  UPDATE_CATEGORIES_RESET,
} from "../../Redux/Constants/categoriesConstant";
import { Input } from "../UserComment";
import MainModal from "./MainModal";

function CategoryModal({ modalOpen, setModalOpen, category }) {
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.createCategories
  );
  const {
    isLoading: upLoading,
    isError: upError,
    isSuccess: upSuccess,
  } = useSelector((state) => state.updateCategories);

  const submitHandler = (e) => {
    e.preventDefault();
    if (category) {
      dispatch(updateCategoriesAction());
    } else {
      dispatch(createCategoriesAction());
    }
  };
  useEffect(() => {
    if (upError || isError) {
      toast.error(upError || isError);
      dispatch({
        type: isError ? CREATE_CATEGORIES_RESET : UPDATE_CATEGORIES_RESET,
      });
    }
    if (isSuccess || upSuccess) {
      setModalOpen(false);
      toast.error(upError || isError);
      dispatch({
        type: isSuccess ? CREATE_CATEGORIES_RESET : UPDATE_CATEGORIES_RESET,
      });
    }
  }, [isError, upError, isSuccess, upSuccess, category, setModalOpen]);

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div
        className="inline-block 
      sm:w-4/5 border-border md:w-3/5 lg:w-2/5 
      w-full align-middle 
      p-10 overflow-y-auto h-full bg-main text-white rounded-2xl"
      >
        <h2 className="text-3xl font-bold">
          {category ? "Cập nhật" : "Thêm mới"}
        </h2>

        <form className="flex flex-col gap-6 text-left mt-6">
          <Input
            label="Tên thể loại"
            placeholder="Nhập tên thể loại"
            type="input"
            bg={false}
          />
          <button
            onClick={submitHandler}
            className="w-full text-lg py-3 gap-4 font-bold flex-rows  hover:bg-dry border-2 transitions  rounded bg-subMain text-white"
          >
            <HiPlusCircle />
            {isLoading || upLoading
              ? "Chờ trong giây lát..."
              : category
              ? "Cập nhật"
              : "Thêm mới"}
          </button>
        </form>
      </div>
    </MainModal>
  );
}

export default CategoryModal;
