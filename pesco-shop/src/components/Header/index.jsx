import DehazeIcon from "@mui/icons-material/Dehaze";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
      <div className="hidden md:flex md:justify-between md:items-center md:bg-[#feeb9d] md:h-17">
        <div className="flex items-center gap-2">
        <DehazeIcon />
        <p>دسته محصولات</p>
        </div>
        <div className="flex items-center gap-5">
          <a href="#">خانه</a>
          <a href="#">خرید</a>
          <a href="#">وبلاگ</a>
          <a href="#">صفحات</a>
          <a href="#">تماس</a>
        </div>
        <div className="flex justify-between items-center gap-1">
          <FavoriteBorderIcon />
          <ShoppingCartIcon />
        </div>
      </div>
    </>
  );
}