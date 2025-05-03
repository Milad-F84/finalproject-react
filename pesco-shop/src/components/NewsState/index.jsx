export default function News() {
  return (
    <>
      <div className="bg-[#fffaf3]">
        <div className="flex justify-between items-center container-primary bg-white p-3">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start  gap-3 p-5">
            <h1 className="font-bold text-3xl">خبرنامه ما</h1>
            <p className="text-center text-xl md:text-start md:max-w-[450px]">
              به‌روزرسانی هفتگی را دریافت کنید. ثبت نام کنید و تا 20% تخفیف
              اولین خرید خود را دریافت کنید
            </p>
            <div className="flex flex-col gap-2 items-center md:flex-row">
              <input
                className="border-2 rounded-3xl p-4 md:w-[450px] md:relative"
                type="text"
                placeholder="آدرس ایمیل خود را بنویسید"
              />
              <button className="bg-black text-white hover:bg-red-500 duration-150 rounded-3xl p-3 md:absolute md:right-[33rem] w-fit">
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
