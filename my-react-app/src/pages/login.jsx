import BackgroundLayout from "../components/BackgroundLayout";
import schoolImg from "../assets/school_img.png";
import logo from "../assets/logo-dark.png";
import img_hoc from "../assets/img_hoc.avif";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const sampleAccounts = [
  { username: "user1", password: "123456" },
  { username: "user2", password: "abcdef" },
];

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const found = sampleAccounts.find(
      acc => acc.username === username && acc.password === password
    );
    if (found) {
      setError("");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      setError("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <BackgroundLayout bgImage={schoolImg}>
      <div className="bg-white w-full max-w-5xl px-4 sm:px-8 md:px-10 rounded-3xl py-5 shadow-lg flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Form bên trái */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-between py-5">
            <p className="text-3xl text-slate-900">Đăng nhập</p>
            <img src={logo} alt="Logo" className="h-12" />
          </div>

          <p className="pb-2">Tên đăng nhập <span className="text-red-500">*</span></p>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full border h-10 mb-5 rounded-md pl-3"
            placeholder="Tên đăng nhập"
          />
          <p className="pb-2">Mật khẩu <span className="text-red-500">*</span></p>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="block w-full border h-10 mb-5 pl-3 rounded-md "
            placeholder="Mật khẩu"
          />
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <Link to="/forgot" className="block mb-2 text-yellow-400">
            Quên mật khẩu ?
          </Link>
          <button className="w-full bg-yellow-400 py-3 rounded-xl" onClick={handleLogin}>
            Đăng nhập
          </button>
          <Link to="/register" className="flex gap-2 items-center justify-center pt-3 pb-12">
            <p>Bạn chưa có tài khoản ?</p>
            <span className="text-blue-500">
              {" "}
              <a href="#">Đăng ký</a>
            </span>
          </Link>
        </div>
        {/* Ảnh minh họa bên phải */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
          <img src={img_hoc} alt="" className="max-w w-full h-auto object-contain rounded-2xl" />
        </div>
      </div>
    </BackgroundLayout>
  );
}

export default Login;
