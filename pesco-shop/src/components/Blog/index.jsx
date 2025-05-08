import FlareIcon from "@mui/icons-material/Flare";

export default function Blog() {
  return (
    <>
      <div className="bg-bg-[#fffaf3]">
        <div className="flex flex-col gap-4 container-primary mt-7">
          <div className="flex justify-center items-center gap-1">
            <FlareIcon fontSize="small"/>
            <p className="text-center text-red-500">وبلاگ های ما</p>
            <FlareIcon fontSize="small"/>
          </div>
          <div>
            <h1 className="text-center font-bold text-2xl">
              مقالات ما را کاوش کنید
            </h1>
          </div>
          <div className="flex gap-2 items-center p-3">
            <div className="hidden md:flex flex-col justify-center max-w-[600px]">
              <img className="rounded-2xl" src="\images\blog\blog-big-1.png" alt="" />
              <h2 className="font-bold text-2xl">از کلیک تا کمد: تسلط بر هنر مد بازاریابی تجارت الکترونیک</h2>
              <p className="text-gray-500">
                به دنیای مد بازاریابی تجارت الکترونیکی می پردازد و خوانندگان را
                راهنمایی می کند که چگونه علاقه آنلاین را به فروش تبدیل کنند.
                احتمالاً استراتژی‌هایی را برای جذب مشتریان بالقوه، نمایش مؤثر
                محصولات و ایجاد یک سفر خرید آرام که کلیک‌ها را به لباس‌های
                آویزان در کمد تبدیل می‌کند، بررسی می‌کند
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:max-w-[600px]">
              <div className="flex flex-col justify-center items-center gap-2 w-full">
                <img className="rounded-2xl" src="\images\blog\blog-sm-1.png" alt="" />
                <h2 className="font-bold">
                  روندهای ضروری بازی سبک تابستانی. که می توانید آنلاین خرید کنید
                </h2>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 w-full">
                <img className="rounded-2xl" src="\images\blog\blog-sm-2.png" alt="" />
                <h2 className="font-bold">
                  نکات داخلی در مورد یافتن آنلاین جواهرات مد مقرون به صرفه
                </h2>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 w-full">
                <img className="rounded-2xl" src="\images\blog\blog-sm-3.png" alt="" />
                <h2 className="font-bold">
                  تجارت الکترونیکی مد دوستدار محیط زیست که می توانید در مورد آن
                  احساس خوبی داشته باشید
                </h2>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 w-full">
                <img className="rounded-2xl" src="\images\blog\blog-sm-4.png" alt="" />
                <h2 className="font-bold">
                  تجارت الکترونیکی مد دوستدار محیط زیست که می توانید در مورد آن
                  احساس خوبی داشته باشید
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
