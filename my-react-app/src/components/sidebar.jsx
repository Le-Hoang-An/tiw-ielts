import user from "../assets/user-tag.svg";
import tintuc from "../assets/tintuc.svg"
import thongke from "../assets/thongke.svg"
import phanhoi from "../assets/phanhoi.svg"
import coin from "../assets/one-coin.svg"
import rollup from "../assets/rollup.svg"
import giaidau from "../assets/event.svg"
import lichhoc from "../assets/lichhoc.svg"
import thongtincanhbao from "../assets/thongtincanhbao.svg"
import danhsachlophoc from "../assets/danhsachlophoc.svg"
import luyentap from "../assets/luyentap.svg"
import thongtinhentest from "../assets/thongtinhentest.svg"
import khoahoc from "../assets/khoahocvideo.svg"
import thuvien from "../assets/thuvientructuyen.svg"
import cauhoithuonggap from "../assets/phanhoi.svg"
import bode from "../assets/bode.svg"
import danhsachkichhoat from "../assets/danhsachmakichhoat.svg"
import dsdanhgia from "../assets/finance.svg"

function Sidebar({ onTabChange, selectedTab }) {
  return (
    <div className="w-64 h-full bg-gray-100 p-4 shadow-lg overflow-y-auto">
      <p className="pb-2">Thông tin chung</p>
      <hr className="w-full " />
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "progress" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("progress"); }}
      >
        <img src={user} alt="User" className="pr-2" /> Tiến độ học tập
      </a>
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "news" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("news"); }}
      >
       <img src={tintuc} alt="" className="pr-2"/> Tin tức
      </a>
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "statistic" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("statistic"); }}
      >
      <img src={thongke} alt="" className="pr-2" />  Thống kê
      </a>
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "feedback" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("feedback"); }}
      >
      <img src={phanhoi} alt="" className="pr-2"/>  Phản hồi
      </a>
      <p className="pb-2 pt-3">Sự kiện</p>
      <hr className="w-full " />
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "attendance" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("attendance"); }}
      >
        <img src={rollup} className="pr-2 h-7" alt="" /> Điểm danh xu
      </a>
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "tournament" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("tournament"); }}
      >
        <img src={giaidau} className="pr-2" alt="" />  Giải đấu
      </a>
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "luckyspin" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("luckyspin"); }}
      >
        <img src={giaidau} className="pr-2" alt="" />  Vòng quay may mắn
      </a>
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "promotion" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("promotion"); }}
      >
        <img src={coin} className="pr-2" alt="" /> Khuyến mãi
      </a>
      <p className="pb-2 pt-3">Học tập</p>
      <hr className="w-full " />
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "schedule" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("schedule"); }}
      >
        <img src={lichhoc} className="pr-2" alt="" />  Lịch học
      </a>
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "warninginfo" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("warninginfo"); }}
      >
        <img src={thongtincanhbao} className="pr-2" alt="" />  Thông tin cảnh báo
      </a>
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "classlist" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("classlist"); }}
      >
        <img src={danhsachlophoc} className="pr-2" alt="" />  Danh sách lớp học
      </a>
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "practice" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("practice"); }}
      >
        <img src={luyentap} className="pr-2" alt="" />  Luyện tập
      </a>
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "testinfo" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("testinfo"); }}
      >
        <img src={thongtinhentest} className="pr-2" alt="" />  Thông tin hẹn test
      </a>
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "videocourse" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("videocourse"); }}
      >
        <img src={khoahoc} className="pr-2" alt="" />  Khóa học video
      </a>
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "library" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("library"); }}
      >
        <img src={thuvien} className="pr-2" alt="" />  Thư viện online
      </a>
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "faq" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("faq"); }}
      >
        <img src={cauhoithuonggap} className="pr-2" alt="" />  Câu hỏi thường gặp
      </a>
      <p className="pb-2 pt-3">Cửa hàng</p>
      <hr className="w-full " />
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "examset" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("examset"); }}
      >
        <img src={bode} className="pr-2" alt="" />  Bộ đề
      </a>
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-1 border-l-4 transition-all duration-150 ${selectedTab === "activationcodelist" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("activationcodelist"); }}
      >
        <img src={danhsachkichhoat} className="pr-2" alt="" />  Danh sách mã kích hoạt
      </a>
      <p className="pb-2 pt-3">Đánh giá</p>
      <hr className="w-full" />
      <a
        href="#"
        className={`flex items-center p-2 rounded mb-5 border-l-4 transition-all duration-150 ${selectedTab === "reviewlist" ? "bg-blue-100 text-blue-600 border-blue-500" : "text-gray-700 hover:bg-gray-200 border-transparent"}`}
        onClick={e => { e.preventDefault(); onTabChange && onTabChange("reviewlist"); }}
      >
        <img src={dsdanhgia} className="pr-2" alt="" />  Danh sách đánh giá
      </a>
    </div>
  );
}
export default Sidebar;
