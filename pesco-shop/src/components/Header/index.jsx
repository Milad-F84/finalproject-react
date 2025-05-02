import DehazeIcon from "@mui/icons-material/Dehaze";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Header() {
  return (
    <>
      <div className="bg-[#feeb9d] h-15 md:bg-[#ffffff]">
        <div className="flex justify-between items-center container-primary">
          <div className="mt-1.5">
            <img src="/images/logo-main.png" alt="" />
          </div>
          <div className="flex justify-between items-center gap-1 md:hidden">
            <div>
              <ShoppingCartIcon />
            </div>
            <div>
              <DehazeIcon />
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
          <div>
            <a href="#" className="hover:text-red-500 duration-200">خانه</a>
            <KeyboardArrowDownIcon />
          </div>
          <div>
            <a href="#" className="hover:text-red-500 duration-200">خرید</a>
            <KeyboardArrowDownIcon />
          </div>
          <div>
            <a href="#" className="hover:text-red-500 duration-200">وبلاگ</a>
            <KeyboardArrowDownIcon />
          </div>
          <div>
            <a href="#" className="hover:text-red-500 duration-200">صفحات</a>
            <KeyboardArrowDownIcon />
          </div>
          <div>
            <a href="#" className="hover:text-red-500 duration-200">تماس</a>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="flex justify-between items-center gap-1">
          <FavoriteBorderIcon />
          <ShoppingCartIcon />
        </div>
      </div>
    </>
  );
}
