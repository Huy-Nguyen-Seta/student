import Axios from "./axios";

 const getCategoriesService = async () => {
  const { data } = await Axios.get("/cate");
  return data;
};
 const createCategoriesService = async (payload) => {
  const { data } = await Axios.post("/cate", payload);
  return data;
};
 const deleteCategoriesService = async (id) => {
  const { data } = await Axios.delete(`/cate/${id}`);
  return data;
};
 const updateCategoriesService = async (payload) => {
  const { data } = await Axios.put("/cate", payload);
  return data;
};

export {
  getCategoriesService,
  createCategoriesService,
  deleteCategoriesService,
  updateCategoriesService,
};
