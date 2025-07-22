import React from "react";
import avt from "../assets/default-avatar.png";
import mail from "../assets/mail-fill.svg";
import phone from "../assets/telephone.svg";

function ProgressPage() {
  return (
    <>
      <div className="bg-white w-full">
        <div className=" pt-3 pl-3">
          <button className="px-2 py-2 bg-blue-500 rounded-md mr-3">
            HN03.06 - PS758
          </button>
          <button className="px-2 py-2 bg-blue-500 rounded-md">
            HN03.01 - PS695
          </button>
        </div>
        <div className="flex items-center pt-5 pl-3 justify-between">
          <div  className="flex items-center justify-center">
            <img src={avt} alt="" className="h-16" />
            <div className="">
              <div className="flex gap-2 ml-2">
                <p className="text-base font-bold">Lê Hoàng An</p>
                <p>#HV2407170008</p>
              </div>
              <div className="ml-2 gap-5 flex">
                <div className="flex gap-2">
                  <img src={mail} alt="" />
                  <p>22.95score@gmail.com</p>
                </div>

                <div className="flex gap-2">
                  <img src={phone} alt="" />
                  <p>0353854685</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-customBg mr-5">
            <p>Giới hạn buổi nghỉ 0/0</p>
            <p>Giới hạn đi trễ 0/0</p>
            <p>Giới hạn bỏ bài tập 0/0</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressPage;
