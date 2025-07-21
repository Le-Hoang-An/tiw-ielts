import BackgroundLayout from "../components/BackgroundLayout";
import schoolImg from "../assets/school_img.png";
import logo from "../assets/logo-dark.png";
import { Link } from "react-router-dom";
import img_hoc from "../assets/img_hoc.avif";
import { loginclick, regclick } from "../function_js/main";

function Register() {
  return (
    <BackgroundLayout bgImage={schoolImg}>
      <div className="bg-white w-full max-w-7xl px-4 sm:px-8 md:px-10 rounded-3xl py-5 shadow-lg flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="w-full md:w-1/2">
          <div className="flex justify-between w-full pb-3">
            <p className="text-3xl font-bold">Đăng ký học</p>
            <img src={logo} alt="Logo" className="h-12" />
          </div>
          <div className="flex justify-between bg-gray-50 w-full h-14 items-center px-8 ">
            <div className="flex gap-2 items-center justify-center ">
              <p className="flex border bg-yellow-400 rounded-full w-10 h-10  items-center justify-center">
                1
              </p>
              <p>Nhập thông tin</p>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <p className="flex border bg-yellow-400 rounded-full w-10 h-10  items-center justify-center">
                2
              </p>
              <p>Nhập mã OTP</p>
            </div>
          </div>
          <div className="flex w-full justify-between gap-5" id="Gop-Flex ">
            <div id="HoTenAndSDT" className="w-full">
              <p>
                Họ và tên <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name=""
                id=""
                className="w-full border h-10 mb-5 rounded-md pl-3"
              />
              <p>
                Số điện thoại <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name=""
                id=""
                className="w-full border h-10 mb-5 rounded-md pl-3"
              />
            </div>

            <div className="w-full" id="MatKhauAndBaiTest">
              <p>
                Mật khẩu <span className="text-red-500">*</span>
              </p>
              <input
                type="password"
                name=""
                id=""
                className="w-full border h-10 mb-5 rounded-md pl-3"
              />

              <p>Bài test đầu vào</p>
              <select className="border h-10 w-full">
                <option value="">Bài kiểm tra thứ 3</option>
                <option value="">Bài kiểm tra thứ 4</option>
              </select>
            </div>
            <div></div>
          </div>
          <div className="">
            <button className="w-full bg-yellow-400 h-12 rounded-lg" onClick={regclick}>
              Đăng ký
            </button>
            <Link to="/" className="flex gap-2 items-center justify-center pt-8 pb-12">
              Bạn đã có tài khoản?{" "}
              <a href="#" className="text-blue-600 font-bold">
                ĐĂNG NHẬP
              </a>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
          <img
            src={img_hoc}
            alt=""
            className="max-w- w-full h-auto object-contain rounded-2xl"
          />
        </div>
      </div>
    </BackgroundLayout>
  );
}

export default Register;
