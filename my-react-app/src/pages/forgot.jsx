import BackgroundLayout from "../components/BackgroundLayout";
import schoolImg from "../assets/school_img.png";
import logo from "../assets/logo-dark.png";
import img_hoc from "../assets/img_hoc.avif";
function Forgot() {
  return (
    <BackgroundLayout bgImage={schoolImg}>
      <div className="bg-white w-full max-w-5xl px-4 sm:px-8 md:px-10 rounded-3xl py-5 shadow-lg flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-1/2">
          <div className="flex justify-end w-full ">
            <img src={logo} alt="Logo" className="h-14 mb-7" />
          </div>
          <div className="text-center pt-6 mb-8">
            <h1 className="text-3xl font-bold">Quên mật khẩu</h1>
            <p className="mt-5">
              Nhập số điện thoại của bạn và chúng tôi sẽ gửi cho bạn hướng dẫn
              để tạo mật khẩu mới
            </p>
          </div>

          <div>
            <p className="pb-5">
              Số điện thoại <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              name=""
              id=""
              className="w-full border h-10 mb-5 rounded-md pl-3"
            />
          </div>

          <button className="w-full bg-yellow-400 h-12 rounded-lg mt-7">
            Gửi yêu cầu
          </button>
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

export default Forgot;
