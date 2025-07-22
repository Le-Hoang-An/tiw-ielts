import React from "react";
import bg_new from "../assets/bg-new.svg";
import rank from "../assets/ranking.svg";

export default function TournamentPage() {
  return (
    <>
      <div className="bg-customBg flex justify-between items-center mt-5">
        <img src={bg_new} alt="" />
        <button className="bg-white px-3 py-3 mr-4 rounded-sm">
          Lịch sử giải đấu
        </button>
      </div>

      <div className="bg-customBg">
        <div className="mt-5  flex justify-between pt-5 items-center ml-3 mr-3">
          <h1 className="text-2xl">Bảng xếp hạng</h1>
          <input type="text" placeholder="Tìm kiếm" className="px-3 py-3"/>
        </div>
        <div className="w-full flex justify-center">
          <img src={rank} className="mt-4 " alt="" />
        </div>
        <div className="text-center mt-5 pb-2">
          <p className="text-2xl font-bold" >Chưa có bảng xếp hạng</p>
          <p >Do chưa có học viên tham gia giải đấu</p>
        </div>
      </div>
    </>
  );
}
