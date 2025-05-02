import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import StarIcon from "@mui/icons-material/Star";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <>
      <div className="bg-[#f9f3f0] h-auto ">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-7 container-primary p-5">
          <div className="flex flex-col gap-1 justify-center">
            <div>
              <img src="/images/logo-main.png" alt="" />
            </div>
            <div>
              <p className="max-w-[350px] text-[#5a5858]">
                پسکو یک برند بین المللی هیجان انگیز است که ما پارچه های با کیفیت
                بالا ارائه می دهیم
              </p>
            </div>
            <div className="flex items-center gap-1">
              <EmailIcon />
              <p className="text-[#5a5858]">info@mydomain.com</p>
            </div>
            <div className="flex items-center gap-1">
              <LocalPhoneIcon />
              <p className="text-[#5a5858]">info@mydomain.com</p>
            </div>
            <hr />
            <div className="flex items-center gap-1">
                <h1>ما را بیابید:</h1>
                <div className="flex gap-1">
                    <FacebookIcon className="hover:text-red-500 duration-150 cursor-pointer"/>
                    <InstagramIcon className="hover:text-red-500 duration-150 cursor-pointer"/>
                    <LinkedInIcon className="hover:text-red-500 duration-150 cursor-pointer"/>
                    <TwitterIcon className="hover:text-red-500 duration-150 cursor-pointer"/>
                </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold mb-7 text-xl">خدمات مشتری</h1>
            <div className="flex items-center gap-1">
              <StarIcon className="text-orange-300" />
              <p className="text-[#5a5858] cursor-pointer hover:text-red-500 duration-150">
                مجموعه‌ها و تحویل
              </p>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="text-orange-300"/>
              <p className="text-[#5a5858] cursor-pointer hover:text-red-500 duration-150">
                بازپرداخت و بازپرداخت
              </p>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="text-orange-300"/>
              <p className="text-[#5a5858] cursor-pointer hover:text-red-500 duration-150">
                شرایط و ضوابط
              </p>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="text-orange-300"/>
              <p className="text-[#5a5858] cursor-pointer hover:text-red-500 duration-150">
                بازگشت تحویل
              </p>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="text-orange-300"/>
              <p className="text-[#5a5858] cursor-pointer hover:text-red-500 duration-150">
                مکان‌های فروشگاه
              </p>
            </div>
          </div>
          <div>
            <h1 className="font-bold mb-7 text-xl">پیوند سریع</h1>
            <div className="flex items-center gap-1">
              <StarIcon className="text-orange-300"/>
              <p className="text-[#5a5858] cursor-pointer hover:text-red-500 duration-150">
                خط‌مشی رازداری
              </p>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="text-orange-300"/>
              <p className="text-[#5a5858] cursor-pointer hover:text-red-500 duration-150">
                شرایط استفاده
              </p>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="text-orange-300"/>
              <p className="text-[#5a5858] cursor-pointer hover:text-red-500 duration-150">
                سؤالات متداول
              </p>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="text-orange-300"/>
              <p className="text-[#5a5858] cursor-pointer hover:text-red-500 duration-150">
                تماس
              </p>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="text-orange-300"/>
              <p className="text-[#5a5858] cursor-pointer hover:text-red-500 duration-150">
                ورود به سیستم / ثبت نام
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
