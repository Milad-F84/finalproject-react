export default function News() {
  return (
    <>
      <div className="bg-[#fffaf3] md:p-10">
        <div className="flex justify-between items-center container-primary p-8">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start  gap-3 p-5">
            <h1 className="font-bold text-3xl">خبرنامه ما</h1>
            <p className="text-center text-xl md:text-start md:max-w-[450px]">
              به‌روزرسانی هفتگی را دریافت کنید. ثبت نام کنید و تا <span className="text-red-500 font-bold underline">20% تخفیف </span>
              اولین خرید خود را دریافت کنید
            </p>
            <div className="flex flex-col gap-2 items-center md:flex-row">
              <input
                className="border-2 rounded-3xl p-4 md:w-[450px] md:relative"
                type="text"
                placeholder="آدرس ایمیل خود را بنویسید"
              />
              <button className="bg-black text-white cursor-pointer hover:bg-red-500 duration-150 rounded-3xl p-4 w-[100px]">
                اشتراک
              </button>
            </div>
          </div>
          <img className="hidden md:block md:object-contain md:rounded-3xl" src="\images\newsletter-1.png" alt="" />
        </div>
      </div>
    </>
  );
}
