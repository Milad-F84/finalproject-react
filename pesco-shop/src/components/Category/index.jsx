export default function Category() {
  return (
    <>
      <div className="bg-[#fffaf3]">
        <div className="flex flex-col gap-2 p-2 container-primary">
          <div>
            <p className="text-red-500">دسته ها</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl">برترین دسته را مرور کنید</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mt-3 md:flex-row md:gap-4">
            <div className="flex flex-col items-center justify-center">
              <img src="/images/category/category-1.png" alt="" className="border-2 rounded-2xl"/>
              <button className="bg-white text-black rounded-3xl p-3 border-1 w-[100px] mt-[-30px] cursor-pointer">پیراهن</button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/images/category/category-2.png" alt="" className="border-2 rounded-2xl"/>
              <button className="bg-white text-black rounded-3xl p-3 border-1 w-[100px] mt-[-30px] cursor-pointer">پیراهن</button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/images/category/category-3.png" alt="" className="border-2 rounded-2xl"/>
              <button className="bg-white text-black rounded-3xl p-3 border-1 w-[100px] mt-[-30px] cursor-pointer">پیراهن</button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/images/category/category-4.png" alt="" className="border-2 rounded-2xl"/>
              <button className="bg-white text-black rounded-3xl p-3 border-1 w-[100px] mt-[-30px] cursor-pointer">پیراهن</button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/images/category/category-5.png" alt="" className="border-2 rounded-2xl"/>
              <button className="bg-white text-black rounded-3xl p-3 border-1 w-[100px] mt-[-30px] cursor-pointer">پیراهن</button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/images/category/category-6.png" alt="" className="border-2 rounded-2xl"/>
              <button className="bg-white text-black rounded-3xl p-3 border-1 w-[100px] mt-[-30px] cursor-pointer">پیراهن</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
