import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { data } from "react-router-dom";

const schema = yup.object({
  username: yup.string().required("لطفا نام کاربری خود را وارد نمایید."),
  email: yup.string().email("ایمیل نامعتبر است.").required("لطفا ایمیل خود را وارد نمایید."),
  password: yup
    .string()
    .required("لطفا رمز عبور خود را وارد نمایید.")
    .min(8, "رمز عبور شما کوتاه است."),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return(
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="h-screen flex justify-center items-center flex-col gap-6">
        <div>
            <label>نام کاربری:</label>
            <input {...register("username")} />
            <p>{errors.username?.message}</p>
        </div>
                <div>
            <label>رمزعبور:</label>
            <input {...register("password")} />
            <p>{errors.password?.message}</p>
        </div>
                <div>
            <label>ایمیل:</label>
            <input {...register("email")} />
            <p>{errors.email?.message}</p>
        </div>
        <button type="submit">Login</button>
    </form>
    </>
  )
}
