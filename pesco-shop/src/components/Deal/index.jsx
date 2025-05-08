import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import React, { useEffect, useState } from "react";

export default function Deal() {
    const [day, setDay] = React.useState(250);
    const [hour, setHour] = React.useState(5);
    const [minute, setMinute] = React.useState(45);
    const [seconds, setSeconds] = React.useState(10);

    React.useEffect(() => {
        if (day > 0) {
          setTimeout(() => setDay(day - 1), 86400000);
        } else {
          setSeconds(2);
        }
      });

      React.useEffect(() => {
        if (hour > 0) {
          setTimeout(() => setHour(hour - 1), 3600000);
        } else {
          setSeconds(5);
        }
      });

      React.useEffect(() => {
        if (minute > 0) {
          setTimeout(() => setMinute(minute - 1), 60000);
        } else {
          setSeconds(45);
        }
      });

    React.useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setSeconds(10);
      }
    });

  return (
    <>
      <div className="bg-[#fffaf3] mb-10">
        <div className=" container-primary border-2 rounded-3xl p-5 flex justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-3 md:justify-start md:items-start md:gap-8">
            <div className="flex items-center">
              <LocalOfferIcon />
              <p className="font-bold text-xl">معامله هفته</p>
            </div>
            <div className="text-center md:text-start">
              <p className="font-bold text-2xl md:text-3xl">
                عجله کن! پیشنهاد به پایان می رسد. دریافت
                <span className="text-red-500 font-bold underline"> تا 80٪ تخفیف</span>
              </p>
            </div>
            <div className="grid grid-rows-2 grid-cols-2 gap-4 md:flex md:justify-between md:items-center">
                <div className="flex flex-col justify-center items-center border-2 border-gray-300 rounded-[50%] p-6">
                    <span className="font-bold text-2xl">{seconds}</span>
                    <span className="text-gray-600 font-bold">ثانیه</span>
                </div>
                <div className="flex flex-col justify-center items-center border-2 border-gray-300 rounded-[50%] p-6">
                    <span className="font-bold text-2xl">{minute}</span>
                    <span className="text-gray-600 font-bold">دقیقه</span>
                </div>
                <div className="flex flex-col justify-center items-center border-2 border-gray-300 rounded-[50%] p-6">
                    <span className="font-bold text-2xl">{hour}</span>
                    <span className="text-gray-600 font-bold">ساعت</span>
                </div>
                <div className="flex flex-col justify-center items-center border-2 border-gray-300 rounded-[50%] p-6">
                    <span className="font-bold text-2xl">{day}</span>
                    <span className="text-gray-600 font-bold">روز</span>
                </div>
            </div>
            <button className="bg-black text-white cursor-pointer hover:bg-red-500 duration-200 rounded-3xl p-3">اکنون خرید کنید</button>
          </div>
          <div><img className="hidden md:block md:object-contain md:rounded-3xl" src="\images\deal-1.png" alt="" /></div>
        </div>
      </div>
    </>
  );
}
