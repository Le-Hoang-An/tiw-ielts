import React from "react";
import img_diemdanhxu from "../assets/a-student-none.png";
export default function AttendancePage() {
  return (
    <>
    <div className="bg-white">
            <img src={img_diemdanhxu} className="w-full mt-10" alt="" />
      <div className="mt-5 pb-5">
        <p className="text-center text-bold text-2xl pb-2">
          Hiện tại sự kiện điểm danh nhận xu chưa diễn ra
        </p>
        <p className="text-center">Hãy quay lại sau nhé !!!</p>
      </div>
    </div>

    </>
  );
}
