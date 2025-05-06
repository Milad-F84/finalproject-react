import DehazeIcon from "@mui/icons-material/Dehaze";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <>
      <div className="bg-[#feeb9d] h-15 md:bg-[#ffffff]">
        <div className="flex justify-between items-center container-primary">
          <div className="mt-1.5">
            <img src="/images/logo-main.png" alt="" />
          </div>
          <div className="flex justify-between items-center gap-5 md:hidden">
            <div>
              <ShoppingCartIcon className="cursor-pointer" />
            </div>
            <div>
              <button
                onClick={() => setOpen(true)}
                className="md:hidden p-2 cursor-pointer"
              >
                <DehazeIcon />
              </button>

              {/* منوی باز شده */}
              {open && (
                <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-4 z-50">
                  {/* دکمه بستن */}
                  <div className="flex justify-end">
                    <button
                      onClick={() => setOpen(false)}
                      className="cursor-pointer"
                    >
                      <CloseIcon />
                    </button>
                  </div>

                  {/* جستجو */}
                  <div className="border p-2 mt-4 flex items-center justify-between">
                    <input
                      type="text"
                      placeholder="اینجا جستجو کنید"
                      className="outline-none text-right flex-1"
                    />
                    <SearchIcon />
                  </div>

                  <div className="flex justify-between my-4 gap-2">
                    <button className="border px-4 py-1 rounded-md cursor-pointer">
                      منو
                    </button>
                    <button className="border px-4 py-1 rounded-md cursor-pointer">
                      دسته
                    </button>
                  </div>

                  <ul className="text-right space-y-3">
                    {["خانه", "خرید", "وبلاگ", "صفحات"].map((item) => (
                      <li key={item}>
                        <div
                          className="flex justify-between items-center cursor-pointer border-b pb-1"
                          onClick={() => toggleSubmenu(item)}
                        >
                          <span>{item}</span>
                          <KeyboardArrowDownIcon fontSize="small" />
                        </div>
                        {openSubmenu === item && (
                          <ul className="pr-4 text-sm text-gray-600 mt-1 space-y-1">
                            <li>زیرمنوی ۱</li>
                            <li>زیرمنوی ۲</li>
                          </ul>
                        )}
                      </li>
                    ))}
                    <li className="cursor-pointer">تماس</li>
                  </ul>

                  <div className="border rounded-xl p-2 mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">پشتیبانی ۲۴/۷</p>
                      <p className="font-bold">+۹۴۰ ۱۲۳ ۴۵۶۷ ۸۹۴</p>
                    </div>
                    <SupportAgentIcon />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:gap-1 md:border-2 md:rounded-2xl">
            <SearchIcon />
            <input
              className="bg-white border-0 p-1"
              type="text"
              placeholder="جست و جو"
            />
          </div>

          <div className="hidden md:flex md:items-center">
            <SupportAgentIcon />
            <p>+94 123 4567 894</p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:justify-between md:items-center md:bg-[#feeb9d] md:h-17 p-4">
        <div className="flex items-center gap-2 bg-white p-3 rounded-xl">
          <DehazeIcon />
          <p>دسته محصولات</p>
          <KeyboardArrowDownIcon />
        </div>
        <div className="flex items-center gap-5">
          <div className="relative group">
            <a href="#" className="hover:text-red-500 duration-200">
              خانه
              <KeyboardArrowDownIcon />
            </a>
            <div className="absolute top-full right-0 hidden group-hover:block bg-white rounded shadow-lg w-40 z-50">
              <a
                href="#"
                className="block px-4 py-2 hover:text-red-500 duration-200 text-center"
              >
                صفحه اصلی 01
              </a>
              <hr className="w-1/2 mx-auto border-t-2 border-gray-300 " />
              <a
                href="#"
                className="block px-4 py-2 hover:text-red-500 duration-200 text-center"
              >
                صفحه اصلی 02
              </a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="hover:text-red-500 duration-200">
              خرید
              <KeyboardArrowDownIcon />
            </a>
            <div className="absolute right-0 top-full hidden group-hover:block bg-white rounded shadow-lg w-40 z-50">
              <a
                href="#"
                className="block px-4 py-2 hover:text-red-500 duration-200 text-center"
              >
                فروشگاه
              </a>
              <hr className="w-1/2 mx-auto border-t-2 border-gray-300 " />
              <a
                href="#"
                className="block px-4 py-2 hover:text-red-500 duration-200 text-center"
              >
                سبد خرید
              </a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="hover:text-red-500 duration-200">
              وبلاگ
              <KeyboardArrowDownIcon />
            </a>
            <div className="absolute right-0 top-full hidden group-hover:block bg-white rounded shadow-lg w-40 z-50">
              <a
                href="#"
                className="block px-4 py-2 hover:text-red-500 duration-200 text-center"
              >
                وبلاگ ما
              </a>
              <hr className="w-1/2 mx-auto border-t-2 border-gray-300 " />
              <a
                href="#"
                className="block px-4 py-2 hover:text-red-500 duration-200 text-center"
              >
                صفحه وبلاگ
              </a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="hover:text-red-500 duration-200">
              صفحات
              <KeyboardArrowDownIcon />
            </a>
            <div className="absolute right-0 top-full hidden group-hover:block bg-white rounded shadow-lg w-40 z-50">
              <a
                href="#"
                className="block px-4 py-2 hover:text-red-500 duration-200 text-center"
              >
                درباره ما
              </a>
              <hr className="w-1/2 mx-auto border-t-2 border-gray-300 " />
              <a
                href="#"
                className="block px-4 py-2 hover:text-red-500 duration-200 text-center"
              >
                پرسش ها
              </a>
            </div>
          </div>
          <div>
            <a href="#" className="hover:text-red-500 duration-200">
              تماس{" "}
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5">
          <FavoriteBorderIcon className="cursor-pointer" />
          <ShoppingCartIcon className="cursor-pointer" />
        </div>
      </div>
    </>
  );
}
