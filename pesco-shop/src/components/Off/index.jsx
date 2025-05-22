import { useNavigate } from "react-router-dom";

export default function Off() {

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#fffaf3]">
        <div className="flex flex-col md:items-end container-primary gap-4 md:flex-row md:justify-around mt-7">
          <div className="border-2 rounded-2xl p-3 flex flex-col md:flex-row justify-between gap-2 md:mt-3">
            <div>
              <div>
                <p>تا</p>
                <p className="mr-2 font-bold text-4xl">50%</p>
              </div>
              <div>
                <h1 className="font-bold text-[#5a5858] text-xl">لباس تابستانی انحصاری کودکان و بزرگسالان</h1>
              </div>
              <div className="mt-2">
                <button className="bg-black text-white rounded-3xl p-2 cursor-pointer hover:bg-red-500 duration-200" onClick={() => navigate("/shoppingcart")}>اکنون خرید کنید</button>
              </div>
            </div>
            <div>
              <img src="/images/banner/banner-1.png" alt="" className="rounded-2xl"/>
            </div>
          </div>
          <div className="border-2 rounded-2xl p-3 flex flex-col md:flex-row justify-between gap-2 md:mt-3">
            <div>
              <div>
                <p>تا</p>
                <p className="mr-2 font-bold text-4xl">70%</p>
              </div>
              <div>
                <h1 className="font-bold text-[#5a5858] text-xl">لباس تابستانی انحصاری کودکان و بزرگسالان</h1>
              </div>
              <div className="mt-2">
                <button className="bg-black text-white rounded-3xl p-2 cursor-pointer hover:bg-red-500 duration-200" onClick={() => navigate("/shoppingcart")}>اکنون خرید کنید</button>
              </div>
            </div>
            <div>
              <img src="/images/banner/banner-2.png" alt="" className="rounded-2xl"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
