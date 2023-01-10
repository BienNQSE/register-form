import React from "react";
import InputFormik from "../input/InputFormik";
import { Formik } from "formik";
import * as yup from "yup";
import RadioFormik from "../radio/RadioFormik";
import CheckboxFormik from "../checkbox/CheckboxFormik";
import DropdownFormik from "../dropdown/DropdownFormik";

const dataDropdown = [
  {
    id: 1,
    text: "Teacher",
    value: "teacher",
  },
  {
    id: 2,
    text: "Developer",
    value: "developer",
  },
  {
    id: 3,
    text: "Doctor",
    value: "doctor",
  },
  {
    id: 4,
    text: "Freelancer",
    value: "freelancer",
  },
];
const RegisterFormik = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        gender: "male",
        job: "",
        terms: false,
      }}
      validationSchema={yup.object({
        username: yup.string().required("Please enter your username"),
        email: yup
          .string()
          .email("Please enter valid email address")
          .required("Please enter your email address"),
        password: yup
          .string()
          .min(8, "Your password must have at least 8 characters")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            {
              message:
                "Your password must have at least 8 characters, 1 uppercase, 1 lowercase, 1 special characters ",
            }
          )

          .required("Please enter your password"),
        gender: yup
          .string()
          .required("Please select your gender")
          .oneOf(["male", "female"], "You can only select male or female"),
        job: yup
          .string()
          .required("Please select your job")
          .oneOf(["teacher", "developer", "doctor", "freelancer"]),
        terms: yup
          .boolean()
          .oneOf([true], "Please check the terms and conditions"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 5000);
      }}
    >
      {(formik) => {
        const watchGender = formik.values.gender;
        console.log("formik", formik);
        return (
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-[400px] mx-auto my-10 w-[400px]"
            autoComplete="off"
          >
            <InputFormik
              name="username"
              type="text"
              id="username"
              label="Username"
              placeholder="Enter your username"
            ></InputFormik>
            <InputFormik
              name="email"
              type="email"
              id="email"
              label="Email address"
              placeholder="Enter your email address"
            ></InputFormik>
            <InputFormik
              name="password"
              type="password"
              id="password"
              label="Password"
              placeholder="Enter your password"
            ></InputFormik>
            <div className="flex flex-col gap-3 mb-5">
              <label className="cursor-pointer">Gender</label>
              <div className="flex items-center gap-5">
                <RadioFormik
                  name="gender"
                  values="male"
                  checked={watchGender === "male"}
                  label="Male"
                ></RadioFormik>

                <RadioFormik
                  name="gender"
                  values="female"
                  checked={watchGender === "female"}
                  label="Female"
                ></RadioFormik>
              </div>
            </div>
            <DropdownFormik
              name="job"
              labelText="You are"
              data={dataDropdown}
              setValue={formik.setFieldValue}
            ></DropdownFormik>

            <CheckboxFormik
              name="terms"
              text="I accept the terms and conditions"
            ></CheckboxFormik>

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold"
            >
              {formik.isSubmitting ? (
                <div className="w-5 h-5 rounded-full border-2 border-t-2 border-white border-t-transparent mx-auto animate-spin"></div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterFormik;
