import * as yup from "yup";

const loginValidation = yup.object().shape({
  userName: yup.string().required("Phải nhập email").trim(),
  password: yup
    .string()
    .required("Phải nhập mật khẩu")
    .min(6, "Mật khẩu ít nhất phải 6 ký tự"),
});

const registerValidation = yup.object().shape({
  userName: yup.string().required("Phải nhập tài khoản").trim(),
  password: yup
    .string()
    .required("Phải nhập mật khẩu")
    .min(6, "Mật khẩu ít nhất phải 6 ký tự"),
  fullName: yup
    .string()
    .required("Phải nhập tên người dùng")
    .max(20, "Tên người dùng tối đa 20 ký tự"),
});
const profileValidation = yup.object().shape({
  fullName: yup
    .string()
    .required("Phải nhập tên người dùng")
    .max(20, "Tên người dùng tối đa 20 ký tự"),
});
const passwordValidation = yup.object().shape({
  password: yup.string().required("Phải nhập mật khẩu"),
  newPassword: yup.string().required("Trường bắt buộc nhập"),
  reNewPassword: yup
    .string()
    .required("Trường bắt buộc nhập")
    .oneOf([yup.ref("newPassword"), null], "Phải khớp với mật khẩu mới"),
});
export { loginValidation, registerValidation, profileValidation, passwordValidation };
