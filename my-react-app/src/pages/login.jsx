import schoolImg from "../assets/school_img.png";
import logo from "../assets/logo-dark.png";
import img_hoc from "../assets/img_hoc.avif";

function Login() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${schoolImg})` }}
    >
      <div className="bg-white w-full max-w-3xl px-4 sm:px-8 md:px-10 rounded-3xl py-5 shadow-lg flex flex-col md:flex-row justify-between items-center">
        {/* Form bên trái */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-between py-5">
            <p className="text-3xl text-slate-900">Đăng nhập</p>
            <img src={logo} alt="Logo" className="h-12" />
          </div>

          <p className="pb-2">
            Số điện thoại <span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="sdt"
            id=""
            className="w-full border h-9 mb-5 rounded-md pl-3"
          />
          <p className="pb-2">
            Mật khẩu <span className="text-red-500">*</span>
          </p>
          <input
            type="password"
            className="block w-full border h-9 mb-5 pl-3 rounded-md"
          />
          <a href="#" className="block mb-2 text-yellow-400">
            Quên mật khẩu ?
          </a>
          <button className="w-full bg-yellow-400 py-3 rounded-xl">
            Đăng nhập
          </button>
          <div className="flex gap-2 items-center justify-center pt-3 pb-12">
            <p>Bạn chưa có tài khoản ?</p>
            <span className="text-blue-500">
              {" "}
              <a href="#">Đăng ký</a>
            </span>
          </div>
        </div>
        {/* Ảnh minh họa bên phải */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
          <img src={img_hoc} alt="" className="max-w-xs w-full h-auto object-contain rounded-2xl" />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Login;
