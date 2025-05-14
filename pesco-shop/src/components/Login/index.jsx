import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { data, useNavigate } from "react-router-dom";
import useAuth from "../../store/useAuth";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const schema = yup.object({
  username: yup.string().required("لطفا نام کاربری خود را وارد نمایید."),
  email: yup
    .string()
    .email("ایمیل نامعتبر است.")
    .required("لطفا ایمیل خود را وارد نمایید."),
  password: yup
    .string()
    .required("لطفا رمز عبور خود را وارد نمایید.")
    .min(8, "رمز عبور شما کوتاه است."),
});

export default function Login() {
  const navigate = useNavigate();
  const login = useAuth((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const fakeToken = "12345-fake";
    const { username, email, password } = data;

    login({ username, email, password }, fakeToken);
    navigate("/profile");
  };

  return (
    <>
      <div className="max-w-4xl mx-auto py-2 px-4">
        <div className="mb-6">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{
              "& .MuiBreadcrumbs-li": {
                display: "flex",
                alignItems: "center",
                fontSize: "1rem",
              },
            }}
          >
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <HomeIcon sx={{ fontSize: 20 }} />
              خانه
            </Link>
            <Typography
              color="primary"
              sx={{ display: "flex", alignItems: "center", fontWeight: 500 }}
            >
              صفحه ورود
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center min-h-full w-full h-screen">
        <div className="flex flex-col justify-center items-center max-w-[400px] w-full border-1 border-gray-200 rounded-xl p-10 gap-10 bg-white shadow-md container-primary">
          <img src="\images\logo-main.png" alt="" className="h-12" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-center items-center flex-col gap-6 w-full"
          >
            <div className="flex flex-col gap-2 w-full">
              <label className="mb-1 text-sm font-bold text-gray-700">
                نام کاربری:
              </label>
              <input
                type="text"
                {...register("username")}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-red-500 text-xs mt-1">
                {errors.username?.message}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="mb-1 text-sm font-bold text-gray-700">
                رمزعبور:
              </label>
              <input
                type="password"
                {...register("password")}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-red-500 text-xs mt-1">
                {errors.password?.message}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="mb-1 text-sm font-bold text-gray-700">
                ایمیل:
              </label>
              <input
                type="email"
                {...register("email")}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-red-500 text-xs mt-1">
                {errors.email?.message}
              </p>
            </div>
            <button
              className="text-sm text-white bg-red-500 hover:bg-black px-4 py-1 rounded-md transition cursor-pointer duration-200 max-w-30 w-full"
              type="submit"
            >
              Login
            </button>
            <p
              className="text-sm underline cursor-pointer mt-2"
              onClick={() => navigate("/signin")}
            >
              حساب کاربری ندارید؟
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
