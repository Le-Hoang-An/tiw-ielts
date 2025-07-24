import React from "react";
import avt from "../assets/default-avatar.png";
import mail from "../assets/mail-fill.svg";
import phone from "../assets/telephone.svg";
import lich from "../assets/schedule.svg";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Chart from "../components/piechart_diemdanh";
import logout from "../assets/logout 1.svg";
import usercheck from "../assets/user-check 1.svg";
import usercheck1 from "../assets/user-check 2.svg";
import talk from "../assets/small-talk 1.svg";
import late from "../assets/late 2.svg";
import menubook2 from "../assets/menu-book 2.svg";
import Chart1 from "../components/piechart_baitap";
import cancel from "../assets/cancel.svg";
import donghocat from "../assets/hourglass.svg";
import checked from "../assets/checked.svg";

function ProgressPage() {
  return (
    <>
      <div className="bg-white w-full pl-3">
        <div className=" pt-3">
          <button className="px-2 py-2 bg-blue-500 rounded-md mr-3">
            HN03.06 - PS758
          </button>
          <button className="px-2 py-2 bg-blue-500 rounded-md">
            HN03.01 - PS695
          </button>
          <hr className="mt-3" />
        </div>
        <div className="flex sm:pl-3 md:pl-6 md:justify-between border shadow-lg border-blue-200 rounded-md mt-3 sm:flex-col md:flex-row bg-blue-100">
          <div className="flex items-center md:mt-4 sm:mt-4 sm:mb-3">
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

          <div className="bg-customBg py-3 px-3 sm:inline-block sm:w-max md:w-auto">
            <p className="pt-2">&bull; Giới hạn buổi nghỉ 0/0</p>
            <p className="pt-2">&bull; Giới hạn đi trễ 0/0</p>
            <p className="pt-2">&bull; Giới hạn bỏ bài tập 0/0</p>
          </div>
        </div>

        <div className="flex md:flex-row sm:flex-col bg-gray-50 border-gray-200 shadow-md">
          <div className=" rounded-md border mt-5 mr-5">
            <div className="flex mt-5 pl-3">
              <img src={lich} alt="" />
              <p className="text-2xl pl-3">Điểm danh</p>
            </div>

            <div className="flex items-center">
              <div className="pl-3 mt-3 text-base">
                <div className="flex items-center">
                  <p className="h-[12px] w-[12px] bg-green-400 rounded-full"></p>
                  <p className="pl-3"> Có mặt</p>
                </div>

                <div className="flex items-center">
                  <p className="h-[12px] w-[12px] bg-red-400 rounded-full"></p>
                  <p className="pl-3">Vắng không phép</p>
                </div>

                <div className="flex items-center">
                  <p className="h-[12px] w-[12px] bg-yellow-400 rounded-full"></p>
                  <p className="pl-3">Vắng có phép</p>
                </div>

                <div className="flex items-center">
                  <p className="h-[12px] w-[12px] bg-pink-400 rounded-full"></p>
                  <p className="pl-3">Đi trễ</p>
                </div>

                <div className="flex items-center">
                  <p className="h-[12px] w-[12px] bg-orange-400 rounded-full"></p>
                  <p className="pl-3">Đi trễ hơn 20 phút</p>
                </div>
                <div className="flex items-center">
                  <p className="h-[12px] w-[12px] bg-purple-400 rounded-full"></p>
                  <p className="pl-3">Về sớm</p>
                </div>
              </div>
              <Chart></Chart>

              <div className="bg-customBg pt-3 pl-3">
                <div className="flex items-center pb-3">
                  <img
                    src={usercheck}
                    className="bg-customIcon px-1 mb-2 py-1 mr-3"
                  />
                  <div>
                    <p>Có mặt</p>
                    <p>10 buổi</p>
                  </div>
                </div>

                <div className="flex pb-3 items-center">
                  <img
                    src={usercheck1}
                    className="bg-customIcon px-1 mb-2 py-1 mr-3"
                  />
                  <div>
                    <p>Vắng không phép</p>
                    <p>2 buổi</p>
                  </div>
                </div>

                <div className="flex pb-3 items-center ">
                  <img
                    src={talk}
                    className="bg-customIcon px-2 py-2 mb-2 mr-3"
                  />
                  <div>
                    <p>Vắng có phép</p>
                    <p>1 buổi</p>
                  </div>
                </div>

                <div className="flex pb-3 items-center ">
                  <img
                    src={late}
                    className="bg-customIcon mr-3 px-2 py-2 mb-2"
                  />
                  <div>
                    <p>Đi trễ</p>
                    <p>2 buổi</p>
                  </div>
                </div>

                <div className="flex pb-3 items-center ">
                  <img
                    src={late}
                    className="bg-customIcon mr-3 px-2 py-2 mb-2"
                  />
                  <div>
                    <p>Đi trễ hơn 20 phút</p>
                    <p>1 buổi</p>
                  </div>
                </div>

                <div className="flex pb-3 items-center ">
                  <img src={logout} className="bg-customIcon mr-3 px-2 py-2" />
                  <div>
                    <p>Về sớm</p>
                    <p>4 buổi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-md border mt-5 ">
            <div className="flex mt-5 pl-3">
              <img src={menubook2} alt="" />
              <p className="text-2xl pl-3">Bài tập</p>
            </div>

            <Chart1></Chart1>

            <div className="bg-customBg">
              <div className="flex items-center">
                <img src={checked} className="bg-green-400 px-4 py-4" alt="" />
                <div className="pl-3">
                  <p>Đã làm</p>
                  <p>10</p>
                </div>

                <img
                  src={donghocat}
                  className="bg-dabo px-4 py-4 ml-4"
                  alt=""
                />
                <div className="pl-3">
                  <p>Chưa làm</p>
                  <p>2</p>
                </div>

                <img
                  src={cancel}
                  className="bg-chualam px-4 py-4 ml-4"
                  alt=""
                />
                <div className="pl-3">
                  <p>Đã bỏ</p>
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressPage;
