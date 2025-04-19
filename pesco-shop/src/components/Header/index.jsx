import DehazeIcon from "@mui/icons-material/Dehaze";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <>
      <div className="bg-[#feeb9d] h-15">
        <div className="flex justify-between items-center">
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
          <div className="hidden md:flex md:items-center md:gap-1">
            <SearchIcon />
            <input
              className="bg-white border-black rounded-2xl p-1"
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
    </>
  );
}