import { useNavigate } from "react-router-dom";

export default function Banner() {

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#fffaf3]">
        <div className="flex flex-col md:flex-row justify-between items-center container-primary gap-4 p-5 md:p-20">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div>
              <p className="text-red-500 font-bold text-xl">بهترین برای دسته های شما</p>
            </div>
            <div>
              <h1 className="text-3xl text-center font-bold">مجموعه انحصاری در فروشگاه آنلاین ما</h1>
            </div>
            <div>
              <p className="text-[#5a5858] md:max-w-[500px]">
                مجموعه منحصر به فرد ما را که فقط در فروشگاه آنلاین ما موجود است
                را کشف کنید. اکنون برای اقلام منحصربه‌فرد و ممتازی که در هیچ جای
                دیگری پیدا نمی‌کنید، خرید کنید.
              </p>
            </div>
            <div>
              <button className="bg-black text-white p-4 rounded-3xl cursor-pointer hover:bg-red-500 duration-200" onClick={() => navigate("/shoppingcart")}>اکنون خرید کنید</button>
            </div>
          </div>
          <div>
            <img src="/images/header-img.jpg" alt="" className="rounded-2xl"/>
          </div>
        </div>
      </div>
    </>
  );
}
