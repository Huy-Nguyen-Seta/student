import * as yup from "yup";

const ReviewValidation = yup.object().shape({
  comment: yup
    .string()
    .required("Cần phải nhập bình luận")
    .max(150, "Bình luận không thể vượt quá 150 ký tự"),
  rating: yup.number().required("Chọn đánh giá"),
});
export {
    ReviewValidation
}