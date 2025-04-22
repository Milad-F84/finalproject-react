import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Footer() {
  return (
    <>
      <div className="bg-[#fffaf3]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-7 container-primary">
          <div className="flex flex-col gap-1 justify-center">
            <div>
              <img src="/images/logo-main.png" alt="" />
            </div>
            <div>
              <p className="max-w-[350px]">
                پسکو یک برند بین المللی هیجان انگیز است که ما پارچه های با کیفیت
                بالا ارائه می دهیم
              </p>
            </div>
            <div className="flex items-center gap-1">
              <EmailIcon />
              <p>info@mydomain.com</p>
            </div>
            <div className="flex items-center gap-1">
              <LocalPhoneIcon />
              <p>info@mydomain.com</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold mb-7">خدمات مشتری</h1>
            <div>مجموعه‌ها و تحویل</div>
            <div>بازپرداخت و بازپرداخت</div>
            <div>شرایط و ضوابط</div>
            <div>بازگشت تحویل</div>
            <div>مکان‌های فروشگاه</div>
          </div>
          <div>
          <h1 className="font-bold mb-7">پیوند سریع</h1>
            <div>خط‌مشی رازداری</div>
            <div>شرایط استفاده</div>
            <div>سؤالات متداول</div>
            <div>تماس</div>
            <div>ورود به سیستم / ثبت نام</div>
          </div>
        </div>
      </div>
    </>
  );
}
