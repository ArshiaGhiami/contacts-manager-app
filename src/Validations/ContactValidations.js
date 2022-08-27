import * as yup from "yup";

export const contactSchema = yup.object().shape({
  fullname: yup.string().required("نام و نام خانوادگی الزامی است"),
  photo: yup.string().url("آدرس معتبر نیست"),
  mobile: yup.number().required("داشتن شماره موبایل الزامی است"),
  email: yup.string().email("آدرس ایمیل معتبر نیست").required("داشتن ایمیل الزامی است"),
  job: yup.string(),
  group: yup.string().required("انتخاب گروه الزامی است"),
});
