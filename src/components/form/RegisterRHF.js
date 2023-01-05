import React from "react";
import { useForm } from "react-hook-form";
import CheckboxRHF from "../checkbox/CheckboxRHF";
import DropdownRHF from "../dropdown/DropdownRHF";
import InputRHF from "../input/InputRHF";
import RadioRHF from "../radio/RadioRHF";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// const schema = yup
//   .object({
//     username: yup.string().required("Please enter your username"),
//     email: yup
//       .string()
//       .email("Please enter valid email address")
//       .required("Please enter your email address"),
//     password: yup
//       .string()
//       .min(8, "Your password must have at least 8 characters")
//       .matches(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//         {
//           message:
//             "Your password must have at least 8 characters, 1 uppercase, 1 lowercase, 1 special characters ",
//         }
//       )

//       .required("Please enter your password"),
//     gender: yup
//       .string()
//       .required("Please select your gender")
//       .oneOf(["male", "female"], "You can only select male or female"),
//     job: yup
//       .string()
//       .required("Please select your job")
//       .oneOf(["teacher", "developer", "doctor", "freelancer"]),
//     terms: yup
//       .boolean()
//       .required("Please check accept the terms and condition"),
//   })
//   .required();

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
const RegisterRHF = () => {
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    setValue,
    reset,
    watch,
  } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      gender: "male",
    },
  });
  console.log("errors:", errors);
  const onSubmitHandler = (values) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
        reset({
          username: "",
          email: "",
          password: "",
          gender: "male",
          job: "",
          terms: false,
        });
      }, 5000);
    });
  };
  let watchGender = watch("gender");
  console.log("watchGender", watchGender);
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[400px] mx-auto my-10 w-[400px]"
    >
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputRHF
          name="username"
          type="text"
          id="username"
          placeholder="Enter your username"
          control={control}
        ></InputRHF>
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="cursor-pointer">
          Email address
        </label>
        <InputRHF
          name="email"
          type="email"
          id="email"
          placeholder="Enter your emailaddress"
          control={control}
        ></InputRHF>
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputRHF
          name="password"
          type="password"
          id="password"
          placeholder="Enter your password"
          control={control}
        ></InputRHF>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioRHF
              control={control}
              name="gender"
              value="male"
              checked={watchGender === "male"}
            ></RadioRHF>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioRHF
              control={control}
              name="gender"
              value="female"
              checked={watchGender === "female"}
            ></RadioRHF>
            <span>Female</span>
          </div>
        </div>
        {errors.gender && (
          <p className="text-sm text-red-500">{errors.gender.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="username" className="cursor-pointer">
          Are you
        </label>
        <DropdownRHF
          control={control}
          setValue={setValue}
          name="job"
          data={dataDropdown}
          labelDropdown="Please select your job:"
        ></DropdownRHF>
        {errors.job && (
          <p className="text-sm text-red-500">{errors.job.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <CheckboxRHF
          control={control}
          text="I accept the terms and conditions"
          name="terms"
        ></CheckboxRHF>
        {errors.terms && (
          <p className="text-sm text-red-500">{errors.terms.message}</p>
        )}
      </div>
      <button
        className={`w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold ${
          isSubmitting ? "opacity-50" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 rounded-full border-2 border-t-2 border-white border-t-transparent mx-auto animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};
export default RegisterRHF;
