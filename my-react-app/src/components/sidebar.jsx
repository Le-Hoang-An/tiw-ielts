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

function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-100 p-4 shadow-lg overflow-y-auto">
      <p className="pb-2">Thông tin chung</p>
      <hr className="w-full " />
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded active:bg-blue-100 active:text-blue-600 mb-1"
      >
        <img src={user} alt="User" className="pr-2" /> Tiến độ học tập
      </a>
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
       <img src={tintuc} alt="" className="pr-2"/> Tin tức
      </a>
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
      <img src={thongke} alt="" className="pr-2" />  Thông kê
      </a>
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
      <img src={phanhoi} alt="" className="pr-2"/>  Phản hồi
      </a>
      <p className="pb-2 pt-3">Sự kiện</p>
      <hr className="w-full " />
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
       <img src={rollup} className="pr-2 h-7" alt="" /> Điểm danh xu
      </a>
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
      <img src={giaidau} className="pr-2" alt="" />  Giải đấu
      </a>
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
      <img src={giaidau} className="pr-2" alt="" />  Vòng quay may mắn
      </a>
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
       <img src={coin} className="pr-2" alt="" /> Khuyến mãi
      </a>
      <p className="pb-2 pt-3">Học tập</p>
      <hr className="w-full " />
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
      <img src={lichhoc} className="pr-2" alt="" />  Lịch học
      </a>
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
      <img src={thongtincanhbao} className="pr-2" alt="" />  Thông tin cảnh báo
      </a>
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
      <img src={danhsachlophoc} className="pr-2" alt="" />  Danh sách lớp học
      </a>
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
      <img src={luyentap} className="pr-2" alt="" />  Luyện tập
      </a>
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
      <img src={thongtinhentest} className="pr-2" alt="" />  Thông tin hẹn test
      </a>
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
      <img src={khoahoc} className="pr-2" alt="" />  Khóa học video
      </a>
            <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
      <img src={thuvien} className="pr-2" alt="" />  Thư viện online
      </a>
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
      <img src={cauhoithuonggap} className="pr-2" alt="" />  Câu hỏi thường gặp
      </a>
      <p className="pb-2 pt-3">Cửa hàng</p>
      <hr className="w-full " />
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
      <img src={bode} className="pr-2" alt="" />  Bộ đề
      </a>
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-1"
      >
      <img src={danhsachkichhoat} className="pr-2" alt="" />  Danh sách mã kích hoạt
      </a>
      <p className="pb-2 pt-3">Đánh giá</p>
      <hr className="w-full" />
      <a
        href="#"
        className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded mb-5"
      >
      <img src={dsdanhgia} className="pr-2" alt="" />  Danh sách đánh giá
      </a>
    </div>
  );
}
export default Sidebar;
